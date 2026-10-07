/**
 * Rejects Tailwind spacing utilities that fall outside the approved 8px scale.
 * Approved values: 0, 1, 2, 3, 4, 6, 8, 10, 12, 16, 20, 24, 32, px, auto, full.
 * Applied to: p/m (all sides), gap, gap-x/y, space-x/y.
 * Arbitrary values like p-[13px] are always rejected.
 */
const APPROVED = new Set([
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "8",
  "10",
  "12",
  "14",
  "16",
  "20",
  "24",
  "32",
  "px",
  "auto",
  "full",
]);

const PROP = "(?:p[xytrblse]?|m[xytrblse]?|gap(?:-[xy])?|space-[xy])";
// matches optional variants (dark:, md:, hover:, group-hover:, etc.), optional negative sign, then prop-value
const UTIL_RE = new RegExp(
  `(?:^|\\s)((?:[a-z0-9-]+:)*)(-?)(${PROP})-(\\[[^\\]]+\\]|[^\\s"'\`]+)`,
  "g",
);

function findViolations(text) {
  const bad = [];
  let m;
  UTIL_RE.lastIndex = 0;
  while ((m = UTIL_RE.exec(text)) !== null) {
    const full = m[0].trim();
    const value = m[4];
    if (value.startsWith("[")) {
      bad.push({ util: full, reason: "arbitrary spacing value" });
      continue;
    }
    if (!APPROVED.has(value)) {
      bad.push({ util: full, reason: `value "${value}" not on approved 8px scale` });
    }
  }
  return bad;
}

const APPROVED_LIST = "0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16, 20, 24, 32, px, auto, full";

function report(context, node, text) {
  const violations = findViolations(text);
  for (const v of violations) {
    context.report({
      node,
      message: `Disallowed spacing utility "${v.util}" (${v.reason}). Approved values: ${APPROVED_LIST}.`,
    });
  }
}

const CLASS_ATTRS = new Set(["className", "class"]);

/** @type {import('eslint').Rule.RuleModule} */
export const rule = {
  meta: {
    type: "problem",
    docs: { description: "Enforce approved Tailwind spacing scale in className strings." },
    schema: [],
    messages: {},
  },
  create(context) {
    function visitString(node, value) {
      if (typeof value !== "string" || !value) return;
      report(context, node, value);
    }
    return {
      JSXAttribute(node) {
        if (!node.name || !CLASS_ATTRS.has(node.name.name)) return;
        const v = node.value;
        if (!v) return;
        if (v.type === "Literal") {
          visitString(node, v.value);
        } else if (v.type === "JSXExpressionContainer") {
          walkExpr(v.expression, node, visitString);
        }
      },
      CallExpression(node) {
        const callee = node.callee;
        const name =
          (callee.type === "Identifier" && callee.name) ||
          (callee.type === "MemberExpression" && callee.property && callee.property.name);
        if (!name) return;
        if (!["cn", "clsx", "classnames", "twMerge", "cva"].includes(name)) return;
        for (const arg of node.arguments) walkExpr(arg, node, visitString);
      },
    };
  },
};

function walkExpr(expr, host, visitString) {
  if (!expr) return;
  switch (expr.type) {
    case "Literal":
      return visitString(host, expr.value);
    case "TemplateLiteral":
      for (const q of expr.quasis) visitString(host, q.value.cooked);
      for (const e of expr.expressions) walkExpr(e, host, visitString);
      return;
    case "ConditionalExpression":
      walkExpr(expr.consequent, host, visitString);
      walkExpr(expr.alternate, host, visitString);
      return;
    case "LogicalExpression":
    case "BinaryExpression":
      walkExpr(expr.left, host, visitString);
      walkExpr(expr.right, host, visitString);
      return;
    case "ArrayExpression":
      for (const el of expr.elements) walkExpr(el, host, visitString);
      return;
    case "ObjectExpression":
      for (const p of expr.properties) {
        if (p.type === "Property") {
          if (p.key.type === "Literal") visitString(host, p.key.value);
          else if (p.key.type === "Identifier" && !p.computed) visitString(host, p.key.name);
        }
      }
      return;
    default:
      return;
  }
}

export default { rules: { "no-unapproved-spacing": rule } };

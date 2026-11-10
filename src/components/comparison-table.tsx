/**
 * Two-column comparison as a real table on wide screens and stacked cards on
 * phones, so nothing scrolls sideways. Rows are plain text: keep every cell
 * factual and sourced.
 */
export function ComparisonTable({
  heading,
  intro,
  columns,
  rows,
  footnote,
}: {
  heading: string;
  intro?: string;
  columns: readonly [string, string];
  rows: readonly { label: string; values: readonly [string, string] }[];
  footnote?: React.ReactNode;
}) {
  return (
    <section className="border-t border-border py-12 md:py-16">
      <h2 className="max-w-3xl text-2xl font-bold tracking-tight sm:text-3xl">{heading}</h2>
      {intro && <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{intro}</p>}

      <table className="mt-8 hidden w-full border-collapse text-left text-[15px] md:table">
        <thead>
          <tr className="border-b border-border">
            <th scope="col" className="w-1/5 py-4 pr-6 font-semibold text-muted-foreground">
              <span className="sr-only">Topic</span>
            </th>
            {columns.map((column) => (
              <th key={column} scope="col" className="py-4 pr-6 text-lg font-semibold">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-b border-border align-top">
              <th scope="row" className="py-5 pr-6 font-semibold">
                {row.label}
              </th>
              {row.values.map((value, index) => (
                <td
                  key={columns[index]}
                  className="py-5 pr-6 leading-relaxed text-muted-foreground"
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <ul className="mt-8 grid gap-4 md:hidden">
        {rows.map((row) => (
          <li key={row.label} className="rounded-2xl border border-border p-5">
            <h3 className="font-semibold">{row.label}</h3>
            <dl className="mt-3 grid gap-3 text-sm leading-relaxed">
              {row.values.map((value, index) => (
                <div key={columns[index]}>
                  <dt className="font-semibold text-foreground">{columns[index]}</dt>
                  <dd className="mt-1 text-muted-foreground">{value}</dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>

      {footnote && (
        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground">{footnote}</p>
      )}
    </section>
  );
}

import React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { SITE } from "@/lib/site-config";
import type { TemplateEntry } from "./registry";

interface Props {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  /** Which form sent it: home, contact, services or newsletter. */
  source?: string;
  message?: string;
  submittedAt?: string;
}

const SOURCE_LABELS: Record<string, string> = {
  home: "Home page form",
  contact: "Contact page form",
  services: "Services page form",
  newsletter: "Blog newsletter signup",
};

const fullName = ({ firstName, lastName }: Props) =>
  [firstName, lastName].filter(Boolean).join(" ");

/** Sent to the owner (SITE.email or CONTACT_OWNER_EMAIL). Reply-To is the visitor. */
const Email = (props: Props) => {
  const { email, phone, subject, source, message, submittedAt } = props;
  const isNewsletter = source === "newsletter";
  const name = fullName(props);
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>
        {isNewsletter
          ? `Newsletter signup: ${email || "unknown address"}`
          : `New inquiry from ${name || email || "a visitor"}`}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={eyebrow}>{SITE.name.toUpperCase()} WEBSITE</Text>
          <Heading style={h1}>{isNewsletter ? "New newsletter signup" : "New inquiry"}</Heading>
          <Hr style={hr} />
          <Section>
            {source ? (
              <>
                <Text style={label}>Form</Text>
                <Text style={value}>{SOURCE_LABELS[source] ?? source}</Text>
              </>
            ) : null}
            {isNewsletter ? null : (
              <>
                <Text style={label}>Name</Text>
                <Text style={value}>{name || "—"}</Text>
              </>
            )}
            <Text style={label}>Email</Text>
            <Text style={value}>{email || "—"}</Text>
            {isNewsletter ? null : (
              <>
                <Text style={label}>Phone</Text>
                <Text style={value}>{phone || "Not given"}</Text>
              </>
            )}
            {subject ? (
              <>
                <Text style={label}>Subject</Text>
                <Text style={value}>{subject}</Text>
              </>
            ) : null}
            <Text style={label}>Message</Text>
            <Text style={{ ...value, whiteSpace: "pre-wrap" }}>{message || "—"}</Text>
            <Text style={label}>Received</Text>
            <Text style={value}>{submittedAt ? `${submittedAt} (Pakistan time)` : "—"}</Text>
          </Section>
          <Hr style={hr} />
          <Text style={footer}>
            {isNewsletter
              ? "There is no mailing list connected yet. Add this address to your email tool by hand."
              : "Reply to this email to answer the visitor directly."}
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export const template = {
  component: Email,
  subject: (data: Props) =>
    data.source === "newsletter"
      ? "New newsletter signup"
      : `New inquiry from ${fullName(data) || data.email || "the website"}`,
  displayName: "Contact form notification",
  previewData: {
    firstName: "Jane",
    lastName: "Doe",
    email: "jane@example.com",
    phone: "+1 555 0100",
    subject: "New inquiry from Jane Doe (contact)",
    source: "contact",
    message: "Hi,\n\nWe would like a quote for a new brand site.\n\nThanks,\nJane",
    submittedAt: "Saturday, August 1, 2026 at 9:15 PM",
  },
} satisfies TemplateEntry;

const main = { backgroundColor: "#ffffff", fontFamily: "Arial, Helvetica, sans-serif" };
const container = { padding: "32px 24px", maxWidth: "560px" };
const eyebrow = { fontSize: "12px", letterSpacing: "1.5px", color: "#0b74e0", margin: "0 0 8px" };
const h1 = { fontSize: "24px", color: "#0a0d1f", margin: "0 0 16px" };
const hr = { borderColor: "#e6e8ef", margin: "16px 0 24px" };
const label = {
  fontSize: "12px",
  letterSpacing: "1px",
  textTransform: "uppercase" as const,
  color: "#6b7280",
  margin: "16px 0 4px",
};
const value = { fontSize: "16px", color: "#0a0d1f", margin: "0", lineHeight: "1.5" };
const footer = { fontSize: "13px", color: "#6b7280", margin: "0" };

import React from "react";
import { Body, Container, Head, Heading, Hr, Html, Preview, Text } from "@react-email/components";
import { SITE } from "@/lib/site-config";
import type { TemplateEntry } from "./registry";

/*
 * Sent to whatever address a visitor typed into the contact form, so it is a
 * fixed acknowledgement on purpose: no name, subject or message from the form.
 * Echoing visitor text here would let anyone send our email to strangers.
 */
const Email = () => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>{`Thanks for getting in touch with ${SITE.name}.`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={eyebrow}>{SITE.name.toUpperCase()}</Text>
        <Heading style={h1}>Thanks for getting in touch</Heading>
        <Text style={p}>
          We&rsquo;ve received your message and will reply within one business day.
        </Text>
        <Text style={p}>Want to add something? Reply to this email or write to {SITE.email}.</Text>
        <Hr style={hr} />
        <Text style={footer}>
          If you didn&rsquo;t contact {SITE.name}, you can ignore this email. Someone may have typed
          your address by mistake.
        </Text>
        <Text style={footer}>
          {SITE.name} · {SITE.location} · {SITE.url.replace(/^https?:\/\//, "")}
        </Text>
      </Container>
    </Body>
  </Html>
);

export const template = {
  component: Email,
  subject: `Thanks for contacting ${SITE.name}`,
  displayName: "Contact form confirmation",
  previewData: {},
} satisfies TemplateEntry;

const main = { backgroundColor: "#ffffff", fontFamily: "Arial, Helvetica, sans-serif" };
const container = { padding: "32px 24px", maxWidth: "560px" };
const eyebrow = { fontSize: "12px", letterSpacing: "1.5px", color: "#0b74e0", margin: "0 0 8px" };
const h1 = { fontSize: "24px", color: "#0a0d1f", margin: "0 0 12px", lineHeight: "1.3" };
const p = { fontSize: "16px", color: "#0a0d1f", margin: "0 0 12px", lineHeight: "1.6" };
const hr = { borderColor: "#e6e8ef", margin: "24px 0" };
const footer = { fontSize: "13px", color: "#6b7280", margin: "0 0 8px", lineHeight: "1.5" };

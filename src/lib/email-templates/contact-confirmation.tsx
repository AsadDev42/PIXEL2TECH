import React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  name?: string
  subject?: string
  message?: string
}

const Email = ({ name, subject, message }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Thanks for reaching out to Pixel2Tech — we&rsquo;ll reply shortly.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={eyebrow}>PIXEL2TECH</Text>
        <Heading style={h1}>Thanks{name ? `, ${name}` : ''} — we got your message</Heading>
        <Text style={p}>
          Our team usually replies within one business day. Here&rsquo;s a copy of what you sent us.
        </Text>
        <Hr style={hr} />
        {subject ? <Text style={quote}>{subject}</Text> : null}
        {message ? (
          <Text style={{ ...p, whiteSpace: 'pre-wrap', color: '#4b5563' }}>{message}</Text>
        ) : null}
        <Hr style={hr} />
        <Text style={footer}>Pixel2Tech — one creative agency, not ten freelancers.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: 'We received your message — Pixel2Tech',
  displayName: 'Contact form confirmation',
  previewData: {
    name: 'Jane',
    subject: 'Website redesign',
    message: 'Hi, we would like a quote for a new brand site.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, Helvetica, sans-serif' }
const container = { padding: '32px 24px', maxWidth: '560px' }
const eyebrow = { fontSize: '12px', letterSpacing: '1.5px', color: '#2b7fff', margin: '0 0 8px' }
const h1 = { fontSize: '24px', color: '#0a0d1f', margin: '0 0 12px', lineHeight: '1.3' }
const p = { fontSize: '16px', color: '#0a0d1f', margin: '0 0 8px', lineHeight: '1.6' }
const quote = { fontSize: '16px', fontWeight: 700, color: '#0a0d1f', margin: '0 0 8px' }
const hr = { borderColor: '#e6e8ef', margin: '24px 0' }
const footer = { fontSize: '13px', color: '#6b7280', margin: '0' }

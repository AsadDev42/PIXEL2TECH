import React from 'react'
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
} from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const Email = ({ name, email, subject, message }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>{`New enquiry from ${name || 'a visitor'}`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={eyebrow}>PIXEL2TECH — CONTACT FORM</Text>
        <Heading style={h1}>New enquiry received</Heading>
        <Hr style={hr} />
        <Section>
          <Text style={label}>Name</Text>
          <Text style={value}>{name || '—'}</Text>
          <Text style={label}>Email</Text>
          <Text style={value}>{email || '—'}</Text>
          <Text style={label}>Subject</Text>
          <Text style={value}>{subject || '—'}</Text>
          <Text style={label}>Message</Text>
          <Text style={{ ...value, whiteSpace: 'pre-wrap' }}>{message || '—'}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data: Record<string, unknown>) =>
    `New contact form: ${(data.subject as string) || 'No subject'}`,
  displayName: 'Contact form notification',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    subject: 'Website redesign',
    message: 'Hi, we would like a quote for a new brand site.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, Helvetica, sans-serif' }
const container = { padding: '32px 24px', maxWidth: '560px' }
const eyebrow = { fontSize: '12px', letterSpacing: '1.5px', color: '#2b7fff', margin: '0 0 8px' }
const h1 = { fontSize: '24px', color: '#0a0d1f', margin: '0 0 16px' }
const hr = { borderColor: '#e6e8ef', margin: '16px 0 24px' }
const label = {
  fontSize: '12px',
  letterSpacing: '1px',
  textTransform: 'uppercase' as const,
  color: '#6b7280',
  margin: '16px 0 4px',
}
const value = { fontSize: '16px', color: '#0a0d1f', margin: '0' }

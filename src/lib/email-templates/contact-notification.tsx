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
  firstName?: string
  lastName?: string
  name?: string
  email?: string
  phone?: string
  subject?: string
  message?: string
  submittedAt?: string
}

const Email = ({ firstName, lastName, email, phone, subject, message, submittedAt }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>{`New enquiry from ${firstName || 'a visitor'}`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={eyebrow}>PIXEL2TECH — CONTACT FORM</Text>
        <Heading style={h1}>New contact form submission</Heading>
        <Hr style={hr} />
        <Section>
          <Text style={label}>First Name</Text>
          <Text style={value}>{firstName || '—'}</Text>
          <Text style={label}>Last Name</Text>
          <Text style={value}>{lastName || '—'}</Text>
          <Text style={label}>Email Address</Text>
          <Text style={value}>{email || '—'}</Text>
          <Text style={label}>Phone Number</Text>
          <Text style={value}>{phone || '—'}</Text>
          {subject ? (
            <>
              <Text style={label}>Subject</Text>
              <Text style={value}>{subject}</Text>
            </>
          ) : null}
          <Text style={label}>Message</Text>
          <Text style={{ ...value, whiteSpace: 'pre-wrap' }}>{message || '—'}</Text>
          <Text style={label}>Submitted</Text>
          <Text style={value}>{submittedAt || '—'}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: 'New Contact Form Submission - Pixel2Tech Website',
  displayName: 'Contact form notification',
  previewData: {
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane@example.com',
    phone: '+92 300 1234567',
    subject: 'Website redesign',
    message: 'Hi, we would like a quote for a new brand site.',
    submittedAt: 'Saturday, August 1, 2026 at 9:15 PM',
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

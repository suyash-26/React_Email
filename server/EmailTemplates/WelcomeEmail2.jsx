import React from 'react';
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Img,
  Link,
  Button,
} from '@react-email/components';

const mainStyle = {
  backgroundColor: '#f6f9fc',
  fontFamily: 'Helvetica, Arial, sans-serif',
  color: '#333',
  padding: '20px 0',
};

const cardStyle = {
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  padding: '40px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  maxWidth: '600px',
  margin: '0 auto',
};

const buttonStyle = {
  backgroundColor: '#0070f3',
  color: '#fff',
  fontSize: '16px',
  padding: '14px 24px',
  borderRadius: '6px',
  textDecoration: 'none',
  display: 'inline-block',
  marginTop: '24px',
};

export default function WelcomeEmail2({ name = 'User' }) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to MyApp, {name}!</Preview>
      <Body style={mainStyle}>
        <Container style={cardStyle}>
            <Section style={{ textAlign: 'center', marginBottom: '24px' }}>
                <Text style={{ fontSize: '32px', fontWeight: 'bold', color: '#333' }}>
                    Welcome to MyApp
                </Text>
            </Section>
          <Section style={{ textAlign: 'center' }}>
            <Img
              src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
              alt="MyApp Logo"
              width="64"
              height="64"
              style={{ marginBottom: '24px', borderRadius: '50%' }}
            />
            <Text style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>
              Welcome to <span style={{ color: '#0070f3' }}>MyApp</span>, {name}!
            </Text>
            <Text style={{ fontSize: '16px', lineHeight: '24px', marginBottom: '24px' }}>
              We’re thrilled to have you on board. Explore powerful tools and features
              designed to help you get started quickly.
            </Text>
            <Link href="www.google.com" style={buttonStyle}>
              Go to Dashboard
            </Link>
          </Section>
          <Section style={{ marginTop: '40px', fontSize: '14px', color: '#666' }}>
            <Text>
              If you have any questions, reply to this email — we're always happy to help.
            </Text>
            <Text style={{ marginTop: '16px' }}>— The MyApp Team</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

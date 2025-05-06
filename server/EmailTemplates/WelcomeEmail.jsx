import React from 'react';
import { Html, Head, Body, Container, Text } from '@react-email/components';

export default function WelcomeEmail({ name }) {
  return (
    <Html>
      <Head />
      <Body>
        <Container>
          <Text>Hello {name}, welcome to our service!</Text>
          <Text>We are glad to have you on board.</Text>
          <Text>If you have any questions, feel free to reach out.</Text>
        </Container>
      </Body>
    </Html>
  );
}

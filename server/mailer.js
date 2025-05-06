import React from 'react';
import nodemailer from 'nodemailer';
import { render } from '@react-email/components';
import WelcomeEmail from './EmailTemplates/WelcomeEmail';
import WelcomeEmail2 from './EmailTemplates/WelcomeEmail2';

export async function sendWelcomeEmail({ to, type, subject, ...props }) {
    const EmailTemplates = {
        "welcome": WelcomeEmail,
        "welcome2": WelcomeEmail2,
    }
    const Template = EmailTemplates[type] || WelcomeEmail;
    console.log(Template, "Template")
  const html = await render(<Template {...props} />);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  await transporter.sendMail({
    from: `"TestApp" <${process.env.EMAIL}>`,
    to,
    subject: subject || 'Welcome!',
    html,
  });
}

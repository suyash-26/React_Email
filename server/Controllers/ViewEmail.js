import WelcomeEmail from "../EmailTemplates/WelcomeEmail";
import WelcomeEmail2 from "../EmailTemplates/WelcomeEmail2";
import { render } from "@react-email/components";
import React from "react";

export const ViewEmail = async (req, res) => {
  const { type } = req.query;
  console.log(type, "Type");
  const EmailTemplates = {
    "welcome": WelcomeEmail,
    "welcome2": WelcomeEmail2
  };
  const Template = EmailTemplates[type] || WelcomeEmail;
  const html = await render(<Template name="Suyash" />);
  res.send(html);
};

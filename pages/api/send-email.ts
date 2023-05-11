import type { NextApiRequest, NextApiResponse } from "next";
import { render } from "@react-email/render";
import EmailTamplateBrandManager from "../../emails/EmailTamplateBrandManager";
import { sendEmail } from "../../lib/email";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await sendEmail({
    to: "safayatofficial1@gmail.com",
    subject: "Welcome to NextAPI",
    html: render(EmailTamplateBrandManager()),
  });

  return res.status(200).json({ message: "Email sent successfully" });
}
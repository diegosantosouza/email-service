import { EmailService } from "@/data/protocols/email/email-service";
import { Env } from "@/main/config/env-variables";
import * as nodemailer from "nodemailer";

export class SMPTAdapter implements EmailService {
  private readonly transporter: nodemailer.Transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: Env.smtpHost,
      port: Env.smtpPort,
      secure: Env.smtpSecure,
      auth: {
        user: Env.smtpUser,
        pass: Env.smtpPass
      }
    })
  }

  async send(payload: EmailService.Payload): Promise<void> {
    const mailPayload = {
      from: Env.emailSource,
      to: payload.to,
      subject: payload.subject,
      html: payload.body,
    }
    try {
      await this.transporter.sendMail(mailPayload)
    } catch (error) {
      console.error("Error sending email:", error)
      throw error
    }
  }
  
}
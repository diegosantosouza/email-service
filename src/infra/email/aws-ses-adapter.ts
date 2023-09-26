import { EmailService } from "@/data/protocols/email/email-service"
import { awsConfig } from "@/main/config/aws-config"
import { Env } from "@/main/config/env-variables"
import { SESClient, SendEmailCommand, SendEmailRequest } from "@aws-sdk/client-ses"

export class AWSSESAdapter implements EmailService {
  private sesClient: SESClient
  constructor() {
    this.sesClient = new SESClient({
      endpoint: awsConfig.awsEndpoint,
      credentials: {
        accessKeyId: awsConfig.accessKeyId,
        secretAccessKey: awsConfig.secretKey,
      },
      region: awsConfig.region,
    })
  }

  async send(payload: EmailService.Payload) {
    const params: SendEmailRequest = {
      Destination: {
        ToAddresses: [...payload.to],
      },
      Message: {
        Body: {
          Html: {
            Data: payload.body,
          },
        },
        Subject: {
          Data: payload.subject,
        },
      },
      Source: Env.emailSource
    }

    try {
      await this.sesClient.send(new SendEmailCommand(params))
    } catch (error) {
      console.error("Error sending email:", error)
      throw error
    }
  }
}
import { EmailStrategy } from "@/infra/email/email-strategy"
import { Env } from "@/main/config/env-variables"
import { SendMailController } from "@/presentation/controllers/email/send-mail.controller"
import { Controller } from "@/presentation/protocols/controllers"

export const makeSendMailController = (): Controller => {
  const awsSesAdapter = EmailStrategy.make(Env.emailStrategy);
  return new SendMailController(awsSesAdapter)
}

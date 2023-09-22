import { AWSSESAdapter } from "@/infra/email/aws-ses-adapter"
import { SendMailController } from "@/presentation/controllers/email/send-mail.controller"
import { Controller } from "@/presentation/protocols/controllers"

export const makeSendMailController = (): Controller => {
  const awsSesAdapter = new AWSSESAdapter()
  return new SendMailController(awsSesAdapter)
}

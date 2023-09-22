import { EmailService } from "@/data/protocols/email/email-service";
import { ok, serverError } from "@/presentation/helpers/http-response-helper";
import { Controller } from "@/presentation/protocols/controllers";
import { HttpResponse } from "@/presentation/protocols/http";

export class SendMailController implements Controller {
  constructor(private readonly emailService: EmailService) {}
  async handle(request: SendMailController.Request): Promise<HttpResponse> {
    try {
      await this.emailService.send(request.body)
      return ok()
    } catch (error) {
      return serverError(error as Error)
    }
  } 
}

export namespace SendMailController {
  export type Request = {
    body: EmailService.Payload
  }
}
import { EmailService } from "@/data/protocols/email/email-service";
import { AWSSESAdapter } from "./aws-ses-adapter";
import { SMPTAdapter } from "./smtp-service";

export class EmailStrategy {
  public static make(serviceName?: string): EmailService {
    switch (serviceName) {
      case 'SES':
        return new AWSSESAdapter()
      default:
        return new SMPTAdapter()
    }
  }
}
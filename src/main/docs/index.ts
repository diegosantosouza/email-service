import { badRequest, forbidden, notFound, serverError, unauthorized } from "@/presentation/helpers/http-response-helper";
import { healthcheckPath, sendEmailPath } from "./paths";
import { healthcheckSchema, sendEmailSchema } from "./schemas";

export const swaggerConfig = {
  openapi: '3.0.0',
  info: {
    title: 'email-service',
    description: 'email-service',
    version: '1.0.0',
  },
  servers: [
    {
      url: '/',
      description: "Base path",
    }
  ],
  tags: [
    { name: 'Healthcheck' },
    { name: 'Send-email' }
  ],
  paths: {
    '/healthcheck': healthcheckPath,
    '/send-mail': sendEmailPath
  },
  schemas: {
    healthcheck: healthcheckSchema,
    sendEmail: sendEmailSchema,
  },
  components: {
    badRequest,
    unauthorized,
    serverError,
    notFound,
    forbidden,
  }
}



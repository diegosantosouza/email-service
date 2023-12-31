import { ok } from "@/presentation/helpers/http-response-helper";
import { Controller } from "@/presentation/protocols/controllers";
import { HttpResponse } from "@/presentation/protocols/http";
import { Request } from 'express'
class HealthCheckController implements Controller {
  async handle(request: Request): Promise<HttpResponse> {
    return ok({
      status: 'OK',
      version: process.env.npm_package_version,
      host: request.ip,
    })
  } 
}

export default HealthCheckController
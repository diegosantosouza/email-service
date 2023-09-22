import HealthCheckController from "@/presentation/controllers/healtcheck/healtcheck.controller"
import { Controller } from "@/presentation/protocols/controllers"

export const makeHealthCheckController = (): Controller => {
  return new HealthCheckController()
}

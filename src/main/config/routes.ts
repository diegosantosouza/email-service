import healthcheckRouter from '../routes/healthcheck-route'
import { FastifyInstance } from 'fastify'
import sendEmailRouter from '../routes/send-email-route'

export default (app: FastifyInstance): void => {
  app.register(healthcheckRouter, { prefix: '/healthcheck' })
  app.register(sendEmailRouter, { prefix: '/send-mail' })
}

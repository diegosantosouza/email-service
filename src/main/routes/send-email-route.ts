import { FastifyInstance } from 'fastify';
import adaptRoute from '../adapters/fastify-route-adapter';
import { makeSendMailController } from '../factories/controllers/healthcheck/send-mail-controller-factory';
import { sendEmailSchema } from '../validation/send-mail.validation';

export default async function sendEmailRouter(fastify: FastifyInstance) {
  fastify.post('/', { schema: sendEmailSchema }, adaptRoute(makeSendMailController()));
}
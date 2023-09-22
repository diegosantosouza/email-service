import { FastifyInstance } from 'fastify';
import adaptRoute from '../adapters/fastify-route-adapter';
import { makeHealthCheckController } from '../factories/controllers/healthcheck/healthcheck-controller-factory';

export default async function healthcheckRouter(fastify: FastifyInstance) {
  fastify.get('/', adaptRoute(makeHealthCheckController()));
}
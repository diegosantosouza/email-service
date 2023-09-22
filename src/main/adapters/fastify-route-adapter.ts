import { Controller } from '@/presentation/protocols/controllers'
import { FastifyReply, FastifyRequest } from 'fastify'

const adaptRoute = (controller: Controller) => async (req: FastifyRequest, reply: FastifyReply) => {
  const httpResponse = await controller.handle(req)
  if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
    reply.code(httpResponse.statusCode).send(httpResponse.body)
  } else {
    reply.code(httpResponse.statusCode).send({
      error: httpResponse.body,
    })
  }
}

export default adaptRoute

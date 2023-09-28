export const sendEmailPath = {
  post: {
    tags: ['Send-email'],
    summary: 'send email',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/sendEmail'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {}
        }
      }
    }
  }
}

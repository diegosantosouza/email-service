export const sendEmailSchema = {
  body: {
    type: "object",
    properties: {
      to: {
        type: "array",
        items: {
          type: "string",
          format: "email",
        },
      },
      subject: { type: "string" },
      body: { type: "string" },
    },
    required: ["to", "subject", "body"],
  }
}
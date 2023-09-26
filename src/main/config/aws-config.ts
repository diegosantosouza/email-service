export const awsConfig = {
  secretKey: process.env['AWS_SECRET_ACCESS_KEY']!,
  accessKeyId: process.env['AWS_ACCESS_KEY_ID']!,
  mediaBucket: process.env['S3_BUCKET']!,
  region: process.env['AWS_REGION']!,
  awsEndpoint: process.env['AWS_ENDPOINT']!
}
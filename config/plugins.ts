// config/plugins.ts
import { Strapi } from '@strapi/strapi';

export default ({ env }: { env: Strapi['config']['get'] }) => ({
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 5000000, // Set file size limit in bytes
        path: 'public/uploads',
      },
    },
  },
  email: {
    config: {
      provider: 'sendgrid', 
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'foreningsguiden@studentlivet.se',
        defaultReplyTo: 'webb@karservice.se',
        testAddress: 'no-reply@studentlivet.se',
      },
    },
  },
});
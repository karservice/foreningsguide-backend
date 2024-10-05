module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:3000', 'https://foreningsguide-frontend.vercel.app/', 'https://foreningsguide.studentlivet.se'],
      methods: ['GET'],
      headers: ['Content-Type', 'Authorization'],
    },
  },
];
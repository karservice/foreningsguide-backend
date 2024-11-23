"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    upload: {
        config: {
            provider: 'local',
            providerOptions: {
                sizeLimit: 5000000,
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

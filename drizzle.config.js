import { defineConfig } from 'drizzle-kit';
export default defineConfig({
    dialect: 'postgresql',
    schema: './configs/schema.js',
    out: './drizzle',
    dbCredentials: {
        // we put  the environment variable in the .env file
        url: process.env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL,
    },
});



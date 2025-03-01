import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    schema: './utils/schema.js',
    out: './drizzle',
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_0AXyaOq6ikGV@ep-silent-heart-a8dpt7tj-pooler.eastus2.azure.neon.tech/neondb?sslmode=require',
    },
    verbose: true,
    strict: true
});
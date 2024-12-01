import {defineConfig} from 'drizzle-kit'
import {loadEnvConfig} from "@next/env";

loadEnvConfig(process.cwd())

export default defineConfig({
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.POSTGRES_URL!
    },
    migrations: {
        table: '__drizzle_migrations',
        schema: 'public'
    },
    schemaFilter: ['public', 'auth'],
    schema: './database/schemas',
    out: './database/migration'
})

import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres"

const connectionPool = new Pool({
    connectionString: process.env.POSTGRES_URL
})

export default drizzle(connectionPool)

import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

export default new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

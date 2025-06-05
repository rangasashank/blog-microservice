import express from "express";
import dotenv from "dotenv";
import blogRoutes from "./routes/blog.js";
import { createClient } from "redis";
import { startCacheConsumer } from "./utils/consumer.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());
const corsOptions = {
  origin: ["http://localhost:3000", "https://blog-microservice.vercel.app"], // Allow requests from this specific origin
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed request headers
  credentials: true, // Allow cookies and authentication headers to be sent
};
app.use(cors(corsOptions));

const port = process.env.PORT;

startCacheConsumer();

export const redisClient = createClient({
  url: process.env.REDIS_URL,
});

redisClient
  .connect()
  .then(() => console.log("Connected to redis"))
  .catch(console.error);

app.use("/api/v1", blogRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

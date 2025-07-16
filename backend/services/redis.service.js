import 'dotenv/config'; // or require('dotenv').config() if using CommonJS
import Redis from "ioredis";

const redisClient = new Redis(process.env.REDIS_URL, {
  maxRetriesPerRequest: null, // Prevent that crash
  enableOfflineQueue: false, // Optional: disable command queueing if Redis is unavailable
});

redisClient.on("connect", () => {
  console.log("Connected to Upstash Redis");
});

redisClient.on("error", (err) => {
  console.error("Redis error:", err);
});

export default redisClient;

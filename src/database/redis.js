const Redis = require("ioredis");

const redis = new Redis({
    port: 18577, // Redis port
    host: process.env.REDIS_HOST, // Redis host
    password: process.env.REDIS_PASSWORD, // Redis password
});

module.exports = { redis };
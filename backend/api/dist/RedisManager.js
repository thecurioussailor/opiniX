"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisManager = void 0;
const redis_1 = require("redis");
const crypto_1 = __importDefault(require("crypto"));
class RedisManager {
    constructor() {
        this.client = (0, redis_1.createClient)({
            url: "redis://default:@localhost:6379" // Updated for authentication
        });
        this.client.connect();
        this.publisher = (0, redis_1.createClient)();
        this.publisher.connect();
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new RedisManager();
        }
        return this.instance;
    }
    sendAndAwait(message) {
        return new Promise((resolve) => {
            const id = crypto_1.default.randomUUID.toString();
            this.client.subscribe(id, (message) => {
                this.client.unsubscribe(id);
                resolve(JSON.parse(message));
            });
            this.publisher.lPush("message", JSON.stringify({ clientId: id, message }));
        });
    }
}
exports.RedisManager = RedisManager;

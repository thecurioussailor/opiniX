"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sellOrder = exports.buyOrder = exports.getOrderbookBySymbol = exports.getOrderbook = void 0;
const RedisManager_1 = require("../RedisManager");
const types_1 = require("../types/types");
const getOrderbook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield RedisManager_1.RedisManager.getInstance().sendAndAwait({
        type: types_1.GET_ORDERBOOK,
    });
    res.json(response);
});
exports.getOrderbook = getOrderbook;
const getOrderbookBySymbol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { stockSymbol } = req.params;
    const response = yield RedisManager_1.RedisManager.getInstance().sendAndAwait({
        type: types_1.GET_ORDERBOOK_BY_SYMBOL,
        data: {
            stockSymbol
        }
    });
    res.json(response);
});
exports.getOrderbookBySymbol = getOrderbookBySymbol;
const buyOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, stockSymbol, quantity, price, stockType } = req.body;
    const response = yield RedisManager_1.RedisManager.getInstance().sendAndAwait({
        type: types_1.BUY_ORDER,
        data: {
            userId,
            stockSymbol,
            quantity,
            price,
            stockType
        }
    });
    res.json(response);
});
exports.buyOrder = buyOrder;
const sellOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, stockSymbol, quantity, price, stockType } = req.body;
    const response = yield RedisManager_1.RedisManager.getInstance().sendAndAwait({
        type: types_1.SELL_ORDER,
        data: {
            userId,
            stockSymbol,
            quantity,
            price,
            stockType
        }
    });
    res.json(response);
});
exports.sellOrder = sellOrder;

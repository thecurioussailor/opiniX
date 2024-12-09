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
exports.getStockBalanceByUserId = exports.onRampINRToUserId = exports.getINRBalancesByUserId = exports.resetAllBalances = exports.getAllStockBalances = exports.getAllINRBalances = void 0;
const RedisManager_1 = require("../RedisManager");
const types_1 = require("../types/types");
const getAllINRBalances = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield RedisManager_1.RedisManager.getInstance().sendAndAwait({
        type: types_1.GET_ALL_INR_BALANCES
    });
    res.json(response);
});
exports.getAllINRBalances = getAllINRBalances;
const getAllStockBalances = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield RedisManager_1.RedisManager.getInstance().sendAndAwait({
        type: types_1.GET_ALL_STOCK_BALANCES
    });
    res.json(response);
});
exports.getAllStockBalances = getAllStockBalances;
const resetAllBalances = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield RedisManager_1.RedisManager.getInstance().sendAndAwait({
        type: types_1.RESET_ALL_BALANCES
    });
    res.json(response);
});
exports.resetAllBalances = resetAllBalances;
const getINRBalancesByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const response = yield RedisManager_1.RedisManager.getInstance().sendAndAwait({
        type: types_1.GET_INR_BALANCE_BY_USER_ID,
        data: {
            userId
        }
    });
    res.json(response);
});
exports.getINRBalancesByUserId = getINRBalancesByUserId;
const onRampINRToUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, amount } = req.body;
    const response = yield RedisManager_1.RedisManager.getInstance().sendAndAwait({
        type: types_1.ON_RAMP_INR_TO_USER_ID,
        data: {
            userId,
            amount
        }
    });
    res.json(response);
});
exports.onRampINRToUserId = onRampINRToUserId;
const getStockBalanceByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.body;
    const response = yield RedisManager_1.RedisManager.getInstance().sendAndAwait({
        type: types_1.GET_STOCK_BALANCE_BY_USER_ID,
        data: {
            userId
        }
    });
    res.json(response);
});
exports.getStockBalanceByUserId = getStockBalanceByUserId;

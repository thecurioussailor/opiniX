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
exports.mintTrade = void 0;
const RedisManager_1 = require("../RedisManager");
const types_1 = require("../types/types");
const mintTrade = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, stockSymbol, quantity } = req.body;
    const response = yield RedisManager_1.RedisManager.getInstance().sendAndAwait({
        type: types_1.MINT_TRADE,
        data: {
            userId,
            stockSymbol,
            quantity
        }
    });
    res.json(response);
});
exports.mintTrade = mintTrade;
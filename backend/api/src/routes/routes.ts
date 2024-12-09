import { Router } from "express";
import { requestOTP, verifyOTP } from "../controllers/otpController";
import { createStockSymbol } from "../controllers/symbol";
import { buyOrder, getOrderbook, getOrderbookBySymbol, sellOrder } from "../controllers/orderbook";
import { getAllINRBalances, getAllStockBalances, getINRBalancesByUserId, getStockBalanceByUserId, onRampINRToUserId, resetAllBalances } from "../controllers/balance";
import { mintTrade } from "../controllers/mint";

const router = Router();

router.post('/otp/request-otp', requestOTP);
router.post('/otp/verify-otp', verifyOTP);
router.post('/symbol/create/:stockSymbol', createStockSymbol);
router.get('/orderbook', getOrderbook);
router.get('/balances/inr', getAllINRBalances);
router.get('/balances/stock', getAllStockBalances);
router.get('/reset', resetAllBalances);
router.get('/balance/inr/:userId', getINRBalancesByUserId);
router.post('/onramp/inr', onRampINRToUserId);
router.get('/balance/stock/:userId', getStockBalanceByUserId);
router.post('/order/buy', buyOrder);
router.post('/order/sell', sellOrder);
router.get('/orderbook/:stockSymbol', getOrderbookBySymbol);
router.post('/trade/mint', mintTrade);
export default router;
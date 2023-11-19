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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramApi = void 0;
const axios_1 = __importDefault(require("axios"));
const baseUrl = "https://api.telegram.org/bot";
class TelegramApi {
    constructor(botToken) {
        if (!botToken || botToken.trim() === "")
            throw new Error("You must fill bot-token");
        this.axios = axios_1.default.create({
            headers: {
                "Content-Type": "application/json",
            },
        });
        this.baseUrl = baseUrl + botToken;
    }
    sendMessage(body) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const { baseUrl } = this;
            const url = `${baseUrl}/sendMessage`;
            try {
                yield this.axios.post(url, Object.assign({ parse_mode: "MarkdownV2" }, body));
            }
            catch (e) {
                console.error(JSON.stringify(e.response.data));
                throw new Error((_a = e.response.data) !== null && _a !== void 0 ? _a : e.request);
            }
        });
    }
}
exports.TelegramApi = TelegramApi;

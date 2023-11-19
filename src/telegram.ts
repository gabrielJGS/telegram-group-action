import axios, { AxiosError, AxiosInstance } from "axios";
const baseUrl = "https://api.telegram.org/bot";

export type SendMessageParams = {
  chat_id: number;
  message_thread_id?: number;
  text: string;
  parse_mode?: string;
};

export class TelegramApi {
  constructor(botToken: string) {
    if (!botToken || botToken.trim() === "")
      throw new Error("You must fill bot-token");
    this.axios = axios.create({
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.baseUrl = baseUrl + botToken;
  }

  private baseUrl: string;
  private axios: AxiosInstance;

  async sendMessage(body: SendMessageParams) {
    const { baseUrl } = this;
    const url = `${baseUrl}/sendMessage`;
    try {
      await this.axios.post(url, {
        parse_mode: "MarkdownV2",
        ...body,
      });
    } catch (e: AxiosError | any) {
      console.error(JSON.stringify(e.response.data));
      throw new Error(e.response.data ?? e.request);
    }
  }
}

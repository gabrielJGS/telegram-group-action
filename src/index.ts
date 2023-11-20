import * as core from "@actions/core";
import { Context } from './@types/Context'
import { context } from '@actions/github';
import { SendMessageParams, TelegramApi } from "./telegram";

async function run(): Promise<void> {
  const ct: unknown = context; // Assign context as unknown
  const ctx: Context = ct as Context;
  try {
    const botToken: string = core.getInput("bot-token");
    const chatId: number = +core.getInput("chat-id");
    const messageThread: number | null = +core.getInput("message_thread_id");
    const text: string = core.getInput("text");
    const message = `${text}
    <b>on:</b> <a href='${ctx.payload.repository.html_url}'>${ctx.payload.repository.full_name}</a>
    <b>by:</b> <a href='${ctx.payload.sender.html_url}'>${ctx.payload.sender.login}</a>
    <b>${ctx.eventName}:</b> ${ctx.ref}
    <a href='${ctx.payload.head_commit.url}'>${ctx.payload.head_commit.message}</a>`;

    if (!botToken || botToken.trim() === "" || !chatId) {
      throw new Error(
        "bot-token and chat-id are required in github project secrets",
      );
    }

    const tel = new TelegramApi(botToken);
    const telBody: SendMessageParams = { chat_id: chatId, text: message };
    if (messageThread) telBody.message_thread_id = messageThread;
    await tel.sendMessage(telBody);
  } catch (error) {
    core.setFailed(error as Error);
  }
}

run();

import * as core from "@actions/core";
import { context } from '@actions/github';
import { SendMessageParams, TelegramApi } from "./telegram";

async function run(): Promise<void> {
  try {
    const botToken: string = core.getInput("bot-token");
    const chatId: number = +core.getInput("chat-id");
    const messageThread: number | null = +core.getInput("message_thread_id");
    const text: string = core.getInput("text");
    const message = `${text}
    <b>on:</b> ${context.repo.repo} <b>by:</b>${context.actor}
    <b>${context.eventName}:</b> ${context.ref}
    <a href='${context.payload.head_commit.url}'>${context.payload.head_commit.message}</a>`
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

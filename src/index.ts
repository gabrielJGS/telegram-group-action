import * as core from "@actions/core";
import { context } from '@actions/github';
import { SendMessageParams, TelegramApi } from "./telegram";

async function run(): Promise<void> {
  try {
    const botToken: string = core.getInput("bot-token");
    const chatId: number = +core.getInput("chat-id");
    const messageThread: number | null = +core.getInput("message_thread_id");
    const text: string = core.getInput("text");
    core.info(JSON.stringify(context.action));
    core.info(JSON.stringify(context.actor));
    core.info(JSON.stringify(context.eventName));
    core.info(JSON.stringify(context.issue));
    core.info(JSON.stringify(context.job));
    core.info(JSON.stringify(context.ref));
    core.info(JSON.stringify(context.repo));
    const message = `${text}\n
    ${context.repo.repo}`
    if (!botToken || botToken.trim() === "" || !chatId) {
      throw new Error(
        "bot-token and chat-id are required in github project secrets",
      );
    }

    const tel = new TelegramApi(botToken);
    const telBody: SendMessageParams = { chat_id: chatId, text: tel.escapeTelegramSpecialChars(text) };
    if (messageThread) telBody.message_thread_id = messageThread;
    await tel.sendMessage(telBody);
  } catch (error) {
    core.setFailed(error as Error);
  }
}

run();

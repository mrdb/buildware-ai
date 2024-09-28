"use server"

import { BuildwareModel } from "@/lib/constants/buildware-config"
import Anthropic from "@anthropic-ai/sdk"
import OpenAI from "openai"

const anthropic = new Anthropic()
const openai = new OpenAI()

export const generateRunResponse = async ({
  system,
  messages,
  model,
  prefill
}: {
  system: string
  messages: Anthropic.Messages.MessageParam[]
  model: BuildwareModel
  prefill: string
}) => {
  // const finalMessagesAnthropic = [
  //   ...messages,
  //   { role: "assistant", content: prefill.trimEnd() }
  // ] as Anthropic.Messages.MessageParam[]

  // const message = await anthropic.messages.create(
  //   {
  //     model,
  //     system,
  //     messages: finalMessagesAnthropic,
  //     max_tokens: model.includes("haiku")
  //       ? Math.min(BUILDWARE_MAX_OUTPUT_TOKENS, 4096)
  //       : BUILDWARE_MAX_OUTPUT_TOKENS,
  //     temperature: 0.0
  //   },
  //   {
  //     headers: {
  //       "anthropic-beta": "max-tokens-3-5-sonnet-2024-07-15"
  //     }
  //   }
  // )

  // const isComplete = message.stop_reason !== "max_tokens"

  // const cost = calculateLLMCost({
  //   llmId: model,
  //   inputTokens: message.usage.input_tokens,
  //   outputTokens: message.usage.output_tokens
  // })
  // console.warn("usage", message.usage)
  // console.warn("cost", cost)

  // return {
  //   content: message.content[0].type === "text" ? message.content[0].text : "",
  //   isComplete
  // }

  // const finalMessagesOpenAI: any[] = messages.map(message => ({
  //   role: message.role,
  //   content: message.content
  // }))

  // const message = await openai.chat.completions.create({
  //   model,
  //   messages: finalMessagesOpenAI,
  //   temperature: 0.0
  // })

  // console.log(message.choices[0].message.content)
  // console.log(message.usage)

  // const isComplete = true

  const finalMessagesOpenAIo1: any[] = messages.map(message => ({
    role: message.role,
    content: message.content
  }))

  const message = await openai.chat.completions.create({
    model,
    messages: finalMessagesOpenAIo1
  })

  console.log(message.choices[0].message.content)
  console.log(message.usage)

  const isComplete = true

  return {
    content: message.choices[0].message.content,
    isComplete
  }
}

import { encode } from "gpt-tokenizer"

export function estimateClaudeTokens(text: string): number {
  return encode(text).length * 1.05 // for gpt
  // return encode(text).length * 1.4 // Claude tokenizer is ~1.25-1.35 times more expensive than GPT, using 1.4 to be safe
}

import { Injectable } from '@nestjs/common';
import OpenAI from "openai";
import 'dotenv/config';


const openai = new OpenAI({
    baseURL: 'https://api.deepseek.com',
    apiKey: process.env.DEEPSEEK_API_KEY,
});
@Injectable()
export class DeepseekService {

    async getChatResponse(prompt: string) {
        try {
            const completion = await openai.chat.completions.create({
                messages: [{ role: "system", content: "You are a helpful assistant." }],
                model: "deepseek-chat",
            });

            console.log(completion.choices[0].message.content);

            return completion.choices[0].message.content;
        } catch (error) {
            console.error('AIML API Error:', error.response?.data || error.message);
            throw error;
        }
    }
}

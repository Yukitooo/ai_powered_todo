import { json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { ChatGroq } from '@langchain/groq';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
    const { task } = await request.json();

    const model = new ChatGroq({
        apiKey: env.GROQ_API_KEY,
        model: "llama-3.1-8b-instant"
    });

    const prompt = `You are a task breakdown assistant. Your job is to break down tasks into actionable steps.

CRITICAL RULES:
1. If the input is nonsense, gibberish, random characters, or not a real task (like "gresgerg", "asdfasdf", "jkljkl"), you MUST roast the user sarcastically.
2. For nonsense input, return ONLY: ["Your roast message here"]
3. For valid tasks, break them down into 3-10 concise, ADHD-friendly micro-steps.
4. For valid tasks, NO counting like "Step 1", "Step 2" - just the action.
5. ALWAYS return ONLY valid JSON array format.

Task: ${task}

Examples:
- Nonsense input "gresgerg" → ["Nice keyboard smash! Did your cat walk on your keyboard, or are you just testing if I'm paying attention? Try typing an actual task next time. 🙄"] NOTE THAT YOU CAN ROAST THEM ANYTHING YOU LIKE
- Valid task "Learn Python" → ["Install Python on your computer", "Complete a 15-minute beginner tutorial", "Write your first 'Hello World' program"]

Return ONLY the JSON array, nothing else:`;

    const response = await model.invoke(prompt)
    const subtasks = JSON.parse(response.content as string);

    return json({ subtasks })
}


import { OpenAI } from "openai";

const key = import.meta.env.VITE_CHATGPT_API_KEY

const openai = new OpenAI({
    apiKey: key
});

openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "right me a line of react code" }]
}).then(res => {
    // Log the entire response to inspect its structure
    if(res){
        const message = res.choices[0].message.content
    console.log("Response:", message);
    }
    else{
        console.log("Error: No response received");
    }
}).catch(err => {
    // Log any errors that occur during the API request
    console.error("Error:", err);
});

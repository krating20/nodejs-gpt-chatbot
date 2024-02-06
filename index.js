import openai from './config/open-ai.js'
import readlineSync from 'readline-sync';
import colors from 'colors';
async function main() {
    /*
    const chatCompletion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages:[
            { role: 'user', content:'What is the capital of Massachusetts?'}
        ]
    });

    console.log(chatCompletion.choices[0].message.content);
    */
   console.log(colors.bold.green('welcome to Kratings Chatbot'));
   while (true){
    const userInput = readlineSync.question(colors.yellow('You: '))

    try {
        //call the API with user input
        const completion =await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{"role": "user", "content": userInput}],
        })
        //get  completion text
        const completionText = completion.choices[0].message.content
        if(userInput.toLowerCase() ==='exit'){
            console.log(colors.green('Bot: ')+ completionText);
            return;
        }
        console.log(colors.green('Bot: ')+ completionText);
    } catch (error) {
        console.error(colors.red(error));
    }
   }
}

main();
const {Configuration, OpenAIApi} = require("openai");
const configuration = new Configuration({
    organization: 'ORG_KEY_HERE',
    apiKey: 'API_KEY_HERE',
});
const openai = new OpenAIApi(configuration);

generateIdeas = async (keyWords) => {
    let result;
    if (keyWords !== null) {
        result = await openai.createCompletion({
            model: "text-davinci-003",
            max_tokens: 500,
            temperature: 0.4,
            prompt: `List 5 story ideas with these key words: ${keyWords}. without the title of the story`,
        });
    } else {
        result = await openai.createCompletion({
            model: "text-davinci-003",
            max_tokens: 500,
            temperature: 0.4,
            prompt: 'List 5 creative story ideas',
        });
    }
    const listOfOptions = [];
    const splitBySpace = result.data.choices[0].text.substring(2).split('\n')
    for (let index in splitBySpace) {
        const word = splitBySpace[index];
        if (word === '') continue;
        listOfOptions.push(word.substring(word.indexOf(" ") + 1));
    }
    return listOfOptions;
}

generateImages = async (idea) => {
    const result = await openai.createImage({
        prompt: `${idea} in a cartoonish style`,
        n: 3,
        size: "1024x1024",
    });
    const returnArr = [];
    for (let index in result.data.data) {
        returnArr.push(result.data.data[index].url);
    }
    return returnArr;
}

generateScript = async (idea) => {
    const result = await openai.createCompletion({
        model: "text-davinci-003",
        max_tokens: 500,
        temperature: 0.4,
        prompt: `Create a short story with the given plot: ${idea}`,
    });
    return result.data.choices[0].text.substring(2);
}

expandScript = async (idea, oldScript) => {
    const result = await openai.createCompletion({
        model: "text-davinci-003",
        max_tokens: 500,
        temperature: 0.4,
        prompt: `Given this story idea: ${idea} and this script ${oldScript}, expand upon the script`,
    });
    return result.data.choices[0].text.substring(2);
}

generateTitle = async (idea) => {
    const result = await openai.createCompletion({
        model: "text-davinci-003",
        max_tokens: 500,
        temperature: 0.4,
        prompt: `Given this story idea: ${idea} create a title for this story without the quotation marks`,
    });
    return result.data.choices[0].text.substring(2);
}





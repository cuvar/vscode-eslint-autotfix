
let text = "hello world";
logger(text);

function logger(output, type = "log") {
    if(type === "error") {
        console.error(output);
    } else if(type === "warn") {
        console.warn(output);
    } else if(type === "info") {
        console.log(output)
    }
    
    throw new Error('Invalid type');
}
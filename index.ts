#! /usr/bin/env node
//importing inquirer
import inquirer from "inquirer";

// taking input and storing it in variable answer 
const answers : {
    sentence : string
} = await inquirer.prompt
(
    [
        {
            type : "input",
            name : "sentence",
            message : "Enter a sentence:",
        }
    ]
)

// removing whitespaces
// spliting tha sentance inti words and storing them in arry
const words = answers.sentence.trim().split(" ")


//printing tha array of words 
console.log(words)


//printing tha length of tha array of words 
console.log(`Total Words count =${words.length}`)
/* PROBLEMS ONE */

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]
/* We want to iterate over the array of dog names and see if they are present in dog_string */
const findWords = (dog_string, dog_names) => {
    for (let names of dog_names){
        if (dog_string.includes(names)) {
            console.log(`Matched ${names}`)
        } else {
            console.log("No Match")
        }
    }
}
findWords(dog_string, dog_names)


/* PROBLEMS TWO */
/* We want to iterate over the array and replace all even indices with "even index" By setting i = 0, we start from the first word in the array and increment by two and replace them with "even index" */
const replaceEvens = (arr) => {
    let i = 0
    while(i < arr.length) {
        arr[i] = "even index"
        i += 2
    }
    console.log(arr)
}

replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"])



/* CODEWARS PROBLEMS */

/* Remove Exclamation Marks */

/* For a given string, I want to replace the exclamation mark with an empty quote to remove the exclamation mark */
const removeEx = (my_string) => {
    console.log(my_string.replace("!", ""))
}

removeEx("Hello World!")


/* Multiply the two given parameters */
/* I want to set variable "Product" as the result of two paramters multiplied */
const multiply = (a,b) => {
    let product = Number(a) * Number(b)
    console.log(product)
}

multiply('4',3)

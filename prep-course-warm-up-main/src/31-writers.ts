export {};

/**
 * Loop over the array and for each alive writer print out the following:
 * "Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."
 */

const writers = [
  {
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false
  },
  {
    firstName: "bell",
    lastName: "hooks",
    occupation: "writer",
    age: 64,
    alive: true
  }
];


type writerProps = {
  firstName: string,
  lastName: string,
  occupation: string,
  age: number,
  alive: boolean
};

function textCreatorLoop(input: writerProps[]) : string{
  let text = ""
  for(let i = 0; i < input.length;i++) {
    text += "Hi, my name is " + input[i].firstName + " " + input[i].lastName + ". I am " + input[i].age + " years old, and work as a " + input[i].occupation + ".\n"
  }
  return text
}

console.log(textCreatorLoop(writers))
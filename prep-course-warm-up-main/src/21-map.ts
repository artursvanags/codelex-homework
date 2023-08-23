export {};

function tidyUpString(str: string): string {
  return str
    .trim()
    .toLowerCase()
    .replace("/", "");
}

// You are allowed to edit this function
function capitalise(str: string[]): string[] {
  let names: string[] = []
  // Clean up the string
  for (let i = 0; i < str.length; i++) {
    const name = tidyUpString(str[i])
    const upperCase = name.charAt(0).toUpperCase() + name.slice(1);
    names.push(upperCase)
  }
  return names;
}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
let mentorsTidy = capitalise(mentors); // You are allowed to edit this line

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]

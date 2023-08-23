export {};

const library = [
  {
    title: "Bill Gates",
    author: "The Road Ahead",
    isRead: true
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    isRead: true
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    isRead: false
  }
];

type libraryProps = {
  title: string
  author:string
  isRead: boolean
}

const showStatus = (input: libraryProps[]) => {
  let text = ""
  for(let i = 0; i < input.length;i++) {
    if (input[i].isRead == true) {
      text +=  "Already read '" + input[i].author + "' by " + input[i].title + ".\n"
    } else {
      text +=  "You still need to read '" + input[i].title + "' by " + input[i].author + ".\n"
    }
 }
 return console.log(text);
};

showStatus(library);

/*
  Expected output:

  Already read 'Bill Gates' by The Road Ahead.
  Already read 'Steve Jobs' by Walter Isaacson.
  You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.

*/
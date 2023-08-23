export {};

function onlyTheAces(arr:string[]):string[] {
    let names: string[] = [];
    let figure: string = "Ace"
    for (let i = 0; i < arr.length; i++) {
        if ( arr[i].toLowerCase() === figure.toLowerCase()) {  // added toLowerCase to even out the equation, e.g. make it easier to equal it.
            names.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
        }
    }
    return names;
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']

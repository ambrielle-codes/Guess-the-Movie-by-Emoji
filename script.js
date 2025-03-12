movies = [
    {
        name: "The Lion King",
        creator: "Disney",
        emojis: "👑🦁🌴"
    },

    {
        name: "Moana",
        creator: "Disney",
        emojis: "👧🏽🌋⛵"
    },

    {
        name: "Zootopia",
        creator: "Disney",
        emojis: "🦊🐰🚓"
    },

    {
        name: "Toy Story",
        creator: "Disney",
        emojis: "🤠🐖👽"
    },

    {
        name: "Aladdin",
        creator: "Disney",
        emojis: "🧞👦🏽🐒"
    },

    {
        name: "Peter Pan",
        creator: "Disney",
        emojis: "🧚‍♀️🐊🏝️"
    },

    {
        name: "Tangled",
        creator: "Disney",
        emojis: "🏰🦎💇‍♀️"
    },

    {
        name: "Cinderella",
        creator: "Disney",
        emojis: "👠🧹👑"
    },

    {
        name: "Frozen",
        creator: "Disney",
        emojis: "❄️🦌☃️"
    },

    {
        name: "Ratatoullie",
        creator: "Disney",
        emojis: "🐀👨‍🍳🥐"
    },

    {
        name: "Tarzan",
        creator: "Disney",
        emojis: "👨🏽🦍🌴"
    },

    {
        name: "The Jungle Book",
        creator: "Disney",
        emojis: "🐅👦🏽🐍"
    },

    {
        name: "The Lady and the Tramp",
        creator: "Disney",
        emojis: "💞🐕🍼"
    },

    {
        name: "The Fox and the Hound",
        creator: "Disney",
        emojis: "🦊🐶🦉"
    },

    {
        name: "Mulan",
        creator: "Disney",
        emojis: "👧🏻🐱‍👤🐲"
    },

    {
        name: "The Little Mermaid",
        creator: "Disney",
        emojis: "🔱👩🏻‍🦰🧜‍♀️"
    },

    {
        name: "Elemental",
        creator: "Disney",
        emojis: "🔥💗💧"
    },

    {
        name: "Pinocchio",
        creator: "Disney",
        emojis: "👦🏻🤥🦗"
    },

    {
        name: "The Good Dinosaur",
        creator: "Disney",
        emojis: "🦕🦖👦🏽"
    },

    {
        name: "Big Hero 6",
        creator: "Disney",
        emojis: "🗼🦹🏼‍♂️👦🏻"
    },

    {
        name: "Wall-E",
        creator: "Disney",
        emojis: "💞🤖🌱"
    },

    {
        name: "Chicken Little",
        creator: "Disney",
        emojis: "🐥⚾🚀"
    },

    {
        name: "Up",
        creator: "Disney",
        emojis: "👨🏻‍🦳👦🏻🎈"
    },

    {
        name: "The Emperor's New Groove",
        creator: "Disney",
        emojis: "🦙👑👦🏻"
    },

    {
        name: "Lilo and Stitch",
        creator: "Disney",
        emojis: "👧🏻👽🌺"
    },
    
    {
        name: "Luca",
        creator: "Disney",
        emojis: "🧜‍♂️🍝🛵"
    },

    {
        name: "Encanto",
        creator: "Disney",
        emojis: "🏘️🕯️👩🏽"
    },

    {
        name: "Dumbo",
        creator: "Disney",
        emojis: "🐘🐭🎪"
    },

    {
        name: "Fantasia",
        creator: "Disney",
        emojis: "🧹🐳🔮"
    },

    {
        name: "Hercules",
        creator: "Disney",
        emojis: "⚡🐐💪"
    },

    {
        name: "Coco",
        creator: "Disney",
        emojis: "🎸👵💀"
    }
    
]


let chosenIndex = 0;
let chosenMovie = "";
let optionIndexes = [];
let usedMovies = [];

// returns a random number from 0 to the length of the movies array minus 1
function getRandom(){
    return Math.floor(Math.random() * movies.length);
}


// compares the answer option the user chooses with the correct answer, and checks if they are the same
// returns feedback on whether user is correct or incorrect, and what the correct answer is
function evaluateGuess(answer){
    const outputText = document.getElementById('outputText');

    document.getElementById('nextButton').style.display = "block";
    document.getElementById('optionsContainer').style.display = 'none';
 
    let html = '';
        if (Number(answer) === chosenIndex){
            html = 'Correct!'
        } else {
            html = 'Incorrect.'
        }

    html += ` The movie is ${chosenMovie.name} by ${chosenMovie.creator}.`;

    usedMovies.push(chosenIndex);
    if (usedMovies.length === movies.length){
        html += "<br><br> <p style='color:rgb(222, 30, 183); text-shadow: 2px 2px rgb(84, 0, 84)'> You have guessed all of the current movies! Play again or come back later to see more added. </p>"
        document.getElementById('nextButton').style.display = "none";
    }

    outputText.style.display = "block";
    outputText.innerHTML = html;

}

// picks a random movie from the movies array for the user to guess 
// and creates list of correct movie answer and three other random movies to serve as incorrect answer options
// then calls renderOptions with list of four movies to create buttons
function generateOptions(){
    const outputText = document.getElementById('outputText');

    document.getElementById('nextButton').style.display = "none";
    document.getElementById('optionsContainer').style.display = 'grid';

    outputText.innerHTML = "";
    outputText.style.display = "none";


    optionIndexes = [];

    chosenIndex = getRandom();
    while (usedMovies.includes(chosenIndex)){
        chosenIndex = getRandom();
    }
    chosenMovie = movies[chosenIndex];
    console.log(chosenIndex);

    for (let i = 1; i <= 4; i++) {
        let movieIndex = getRandom();
        while (movieIndex === chosenIndex || optionIndexes.includes(movieIndex)){
            movieIndex = getRandom();
        }
        optionIndexes.push(movieIndex);
    }
    optionIndexes[Math.floor(Math.random() * 4)] = chosenIndex;
    renderOptions(optionIndexes);
    
}

// creates a button for each answer option in the list of movies provided and puts them in a grid container
// displays the chosen movie's emojis for a hint for the user
function renderOptions(optionIndexes){
    const optionsContainer = document.getElementById('optionsContainer');
    emojiOutput = document.getElementById('emojiOutput');

    emojiOutput.innerHTML = chosenMovie.emojis;


    let html = '';
    optionIndexes.forEach((optionIndex, index) => {
        html += `
        <button class="options" id="option${index}" onclick="evaluateGuess(${optionIndex})">${movies[optionIndex].name}</button>`
    });


    optionsContainer.innerHTML = html;

}

generateOptions();

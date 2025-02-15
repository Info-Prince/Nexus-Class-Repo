// ? Create Question Bank:
// const questionBank = [
//     {
//         question : "Who has the most centuries in international cricket?",
//         options : ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"],
//         correct_answer : "Sachin Tendulkar"
//     },
//     {},
//     {},
//     {},

//     // this way question Bank can be created. USE CHATGPT
// ]

const questionBank = [
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], correct_answer: "Paris" },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Venus", "Mars", "Jupiter"], correct_answer: "Mars" },
    { question: "What is the square root of 144?", options: ["10", "12", "14", "16"], correct_answer: "12" },
    { question: "Which element has the chemical symbol 'O'?", options: ["Oxygen", "Osmium", "Gold", "Oganesson"], correct_answer: "Oxygen" },
    { question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"], correct_answer: "William Shakespeare" },
    { question: "Which is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], correct_answer: "Pacific" },
    { question: "What is the smallest prime number?", options: ["0", "1", "2", "3"], correct_answer: "2" },
    { question: "How many continents are there on Earth?", options: ["5", "6", "7", "8"], correct_answer: "7" },
    { question: "What is the boiling point of water in Celsius?", options: ["50°C", "75°C", "100°C", "125°C"], correct_answer: "100°C" },
    { question: "Which gas do plants primarily use in photosynthesis?", options: ["Nitrogen", "Carbon Dioxide", "Oxygen", "Hydrogen"], correct_answer: "Carbon Dioxide" },
    { question: "What is the capital of Japan?", options: ["Beijing", "Seoul", "Tokyo", "Bangkok"], correct_answer: "Tokyo" },
    { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"], correct_answer: "Leonardo da Vinci" },
    { question: "Which planet is the largest in the Solar System?", options: ["Earth", "Mars", "Jupiter", "Saturn"], correct_answer: "Jupiter" },
    { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Fe", "Hg"], correct_answer: "Au" },
    { question: "Which country hosted the 2020 Summer Olympics?", options: ["USA", "Japan", "Brazil", "China"], correct_answer: "Japan" },
    { question: "What is the largest mammal on Earth?", options: ["Elephant", "Blue Whale", "Giraffe", "Shark"], correct_answer: "Blue Whale" },
    { question: "How many degrees are there in a circle?", options: ["180", "360", "90", "270"], correct_answer: "360" },
    { question: "Who discovered gravity?", options: ["Albert Einstein", "Galileo Galilei", "Isaac Newton", "Niels Bohr"], correct_answer: "Isaac Newton" },
    { question: "Which is the smallest country in the world by area?", options: ["Vatican City", "Monaco", "Nauru", "San Marino"], correct_answer: "Vatican City" },
    { question: "What is the primary language spoken in Brazil?", options: ["Spanish", "English", "Portuguese", "French"], correct_answer: "Portuguese" }
  ];
  


//?  Create bundle of 5 diff diff random question

function RandomQuestion () {
    // create 5 question using set
    const data = new Set();

    while(data.size != 4) {
        const index = Math.floor(Math.random()*questionBank.length);
        data.add(questionBank[index]);
    }

    return [...data];
}

// const problem = RandomQuestion();
// console.log(problem);


// ? Now create dynamic html form page content and append into form

const problem = RandomQuestion();
const form = document.getElementById('form');
console.log(problem);
const original_answer = {};


problem.forEach((data, index) => {
    // create div
    const div_element = document.createElement('div');
    div_element.setAttribute('class','question-wrapper')

    //! create para with all attribute
    const para = document.createElement('p');
    para.setAttribute('id','para');
    para.innerHTML = `${index+1}. ${data['question']}`
    //append para into div
    div_element.appendChild(para);


    //! create input with 4 options and label
    data['options'].forEach((optionNumber) => {
        //create input with all it's attributes
        const input = document.createElement('input');
        input.type = "radio";
        input.name = `q${index+1}`;
        input.value = optionNumber;
        
        //create label
        const label = document.createElement('label');
        //now append input into label
        label.appendChild(input);
        // now append textNode into label
        label.appendChild(document.createTextNode(optionNumber))
        // now append label into div
        div_element.appendChild(label);
    })


    //! after creation of actual div append it into form
    form.appendChild(div_element);
    //! add correct answer into answer object
    original_answer[`q${index+1}`] = data['correct_answer'];

})

//! create submit button 
const button = document.createElement('button');
button.innerHTML = 'Submit';
button.setAttribute('id', 'btn')
//append button into form
form.appendChild(button)



// Add functionality to check result
form.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.log(original_answer);
    

    const data = new FormData(form);
    let result = 0;

    for(let [key, value] of data.entries()) {
        // console.log(value, original_answer[key]);
        // console.log(original_answer[key]);
        if(value === original_answer[key]) // original_answer[key] means uske correspondence jo value rakha hai ushe compare hoga
        {
            result++;
        }
        
    }

    //show result on the screen
    const resultPara = document.querySelector('.resultPara');    
    resultPara.innerHTML = `${result} question correct Out of ${problem.length}`;

    form.reset();
})
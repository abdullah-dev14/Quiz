let allQuestion = [
    {
        question: "HTML Stand for?",
        option: [
            { answer: "Hypertext Makeup Language", iscorrect: false },
            { answer: "Hypertext Make Language", iscorrect: false },
            { answer: "Hypertext Markup Language", iscorrect: true }
        ]
    },
    {
        question: "UI Stand for?",
        option: [
            { answer: "User Interface", iscorrect: true },
            { answer: "User Enetrface", iscorrect: false },
            { answer: "User Interfacial", iscorrect: false }
        ]
    },
    {
        question: "UX Stand for?",
        option: [
            { answer: "User Experience", iscorrect: true },
            { answer: "User Xperience", iscorrect: false },
            { answer: "User Experian", iscorrect: false }
        ]
    },
    {
        question: "CSS Stand for?",
        option: [
            { answer: "Cascading Style Sheet", iscorrect: true },
            { answer: "Caesar Stab Style", iscorrect: false },
            { answer: "Cool Stylish Saloon", iscorrect: false }
        ]
    }
];

let index = 0;

function displayQuestion() {
    document.getElementById("displayques").innerHTML = allQuestion[index].question;

    let btn = "";
    allQuestion[index].option.forEach((opt) => {
        btn += `<button class="btn btn-outline-warning text-dark">${opt.answer}</button>`;
    });

    document.getElementById("btn").innerHTML = btn;
}

function next() {
    if (index < allQuestion.length - 1) {
        index++;
        displayQuestion();
    }
}

function back() {
    if (index > 0) {
        index--;
        displayQuestion();
    }
}

// Initially display the first question
displayQuestion();

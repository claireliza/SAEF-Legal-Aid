const reviewSurveyArray = [
    {
        question: "How much of this survey were you able to complete based on your previous knowledge of Family Law?",
        answers: ["100%", "75%", "50%", "25%", "0%"],
    },
    {
        question: "How helpful were the “hover” tools for defining words you may have not known?",
        answers: ["Very Helpful", "Somewhat Helpful", "Not Very Helpful"],
    },
    {
        question: "How likely are you to reccomend this website? 1: not likely at all ; 5: very likely",
        answers: ["1", "2", "3", "4", "5"],
    },
    {
        question: "Did you find the relevant referral you needed to help you resolve the legal matter?",
        answers: ["Yes", "No"],
    },
    {
        question: "On a scale of 1-5 (1: none 5: very much) How much has your knowledge of family law increased from completing the survey?",
        answers: ["1", "2", "3", "4", "5"],
    }
];

function toggleThankYou(array, position) {
    const thankYou = document.getElementById("thank_you");
    if (position === array.length) {
        document.getElementById("question").style.display = "none";
        document.getElementById("buttons").style.display = "none";
        thankYou.style.display = "initial";
        thankYou.firstElementChild.style.display = "initial";
    } else {
        thankYou.style.display = "none";
        for (const t of thankYou.children) {
            t.style.display = "none";
        }
        document.getElementById("question").style.display = "intial";
        document.getElementById("buttons").style.display = "initial";
    }
}

function setupBackButton(array, position) {
    const backButtonArea = document.getElementById("back");
    const backButton = document.getElementById("back_button");
    const newBackButton = document.createElement("input");
    newBackButton.setAttribute("type", "submit");
    newBackButton.setAttribute("value", "Back");
    newBackButton.setAttribute("id", "back_button");

    if (position === 0) {
        newBackButton.addEventListener("click", function () {
            window.location.assign("survey.html");
        });
    }
    else {
        newBackButton.addEventListener("click", function () {
            setup(array, position - 1);
        });
    }
    backButtonArea.replaceChild(newBackButton, backButton);
}

function setupProgressBar(array, position) {
    const progressBar = document.getElementById("progress_bar");
    const questionsDone = position;
    const questionsLeft = reviewSurveyArray.length - questionsDone;
    progressBar.setAttribute("max", `${questionsLeft + questionsDone}`);
    progressBar.setAttribute("value", `${questionsDone}`);
    // SOURCE: https://stackoverflow.com/questions/18269286/shorthand-for-if-else-statement
    progressBar.innerHTML = `${(questionsLeft < 2) ?
        `${(questionsLeft === 1) ?
            "Just one question"
            : "No questions"}`
        : `At most ${questionsLeft} questions`} left.`;
}

function replaceButtons(array, position) {
    // Remove old buttons
    const buttonArea = document.getElementById("buttons");
    // SOURCE: https://www.geeksforgeeks.org/remove-all-the-child-elements-of-a-dom-node-in-javascript/
    let b = buttonArea.firstElementChild;
    while (b) {
        buttonArea.removeChild(b);
        b = buttonArea.firstChild;
    }

    // Create new buttons
    for (a of array[position].answers) {
        const button = document.createElement("input");
        button.setAttribute("type", "submit");
        button.setAttribute("value", a);
        button.addEventListener("click", function () {
            setup(array, position + 1);
        }
        );

        // Insert new button
        buttonArea.appendChild(button);
    }
}

function setup(array, position) {
    // Decide whether it's the end of the survey
    toggleThankYou(array, position)

    // Set up back button
    setupBackButton(array, position);

    // Update progress bar
    setupProgressBar(array, position);

    // Change question
    const q = document.getElementById("question");
    q.innerHTML = array[position].question;

    // Remove old buttons and create new buttons
    replaceButtons(array, position);
}

setup(reviewSurveyArray, 0);
// SOURCE: https://stackoverflow.com/questions/12036966/generic-tree-implementation-in-javascript

function Option() {
    this.text = "";
    this.question = "";
    this.answers = [];
    this.resources = [];
    this.lastOption = null;

    this.setLastOption = function (option) {
        this.lastOption = option;
    };

    this.getLastOption = function () {
        return this.lastOption;
    };

    this.addAnswer = function (option) {
        option.setLastOption(this);
        this.answers[this.answers.length] = option;
    };

    this.getAnswers = function () {
        return this.answers;
    };

    this.removeAnswers = function () {
        this.answers = [];
    };

    this.getResources = function () {
        return this.resources;
    };
}

const surveyArray = [
    {
        text: "Begin Survey",
        question: "What do you need help with?",
        answers: [
            {
                text: "Child Support",
                question: "What action would you like to take for child support?",
                answers: [
                    {
                        text: "Obtain",
                        question: "Are you the child's custodial parent?",
                        answers: [
                            {
                                text: "Yes",
                                question: "Is the child under 18 or currently a highschool student?",
                                answers: [
                                    {
                                        text: "Yes",
                                        question: "Do you know who the child's other parent is?",
                                        answers: [
                                            {
                                                text: "Yes",
                                                question: "Has the other parent's legal parentage been established?",
                                                answers: [
                                                    {
                                                        text: "Yes",
                                                        question: "How was other parent's legal parentage established?",
                                                        answers: [
                                                            {
                                                                text: "Marriage",
                                                                question: "Which of the following options best describes your current relationship with the child's other parent?",
                                                                answers: [
                                                                    {
                                                                        text: "Married",
                                                                        question: "",
                                                                        answers: [],
                                                                    },
                                                                    {
                                                                        text: "Legally Separated",
                                                                        question: "",
                                                                        answers: [],
                                                                    },
                                                                    {
                                                                        text: "Divorced",
                                                                        question: "Was a child support order entered into your (marital) settlement agreement?",
                                                                        answers: [
                                                                            {
                                                                                text: "Yes",
                                                                                question: "Does the child's other legal parent live in the same state as you?",
                                                                                answers: [
                                                                                    {
                                                                                        text: "Yes",
                                                                                        question: "",
                                                                                        answers: [],
                                                                                        resources: ["Healthcare & Family Services", "Chicago Legal Clinic"],
                                                                                    },
                                                                                    {
                                                                                        text: "No",
                                                                                        question: "",
                                                                                        answers: [],
                                                                                        resources: ["Healthcare & Family Services", "Chicago Legal Clinic"],
                                                                                    },
                                                                                ],
                                                                            },
                                                                            {
                                                                                text: "No",
                                                                                question: "Does the child's other legal parent live in the same state as you?",
                                                                                answers: [
                                                                                    {
                                                                                        text: "Yes",
                                                                                        question: "",
                                                                                        answers: [],
                                                                                        resources: ["Healthcare & Family Services", "Chicago Legal Clinic"],
                                                                                    },
                                                                                    {
                                                                                        text: "No",
                                                                                        question: "",
                                                                                        answers: [],
                                                                                        resources: ["Healthcare & Family Services", "Chicago Legal Clinic"],
                                                                                    },
                                                                                ],
                                                                            },
                                                                        ],
                                                                    },
                                                                    {
                                                                        text: "Civil Union",
                                                                        question: "",
                                                                        answers: [],
                                                                    },
                                                                ],
                                                            },
                                                            {
                                                                text: "VAP",
                                                                question: "Does the child's other legal parent live in the same state as you?",
                                                                answers: [
                                                                    {
                                                                        text: "Yes",
                                                                        question: "",
                                                                        answers: [],
                                                                        resources: ["Healthcare & Family Services", "Chicago Legal Clinic"],
                                                                    },
                                                                    {
                                                                        text: "No",
                                                                        question: "",
                                                                        answers: [],
                                                                        resources: ["Healthcare & Family Services", "Chicago Legal Clinic"],
                                                                    },
                                                                ],
                                                            },
                                                            {
                                                                text: "Not Sure",
                                                                question: "Does the child's other legal parent live in the same state as you?",
                                                                answers: [
                                                                    {
                                                                        text: "Yes",
                                                                        question: "",
                                                                        answers: [],
                                                                        resources: ["Healthcare & Family Services", "Chicago Legal Clinic"],
                                                                    },
                                                                    {
                                                                        text: "No",
                                                                        question: "",
                                                                        answers: [],
                                                                        resources: ["Healthcare & Family Services", "Chicago Legal Clinic"],
                                                                    },
                                                                ],
                                                            },
                                                            {
                                                                text: "Other",
                                                                question: "Does the child's other legal parent live in the same state as you?",
                                                                answers: [
                                                                    {
                                                                        text: "Yes",
                                                                        question: "",
                                                                        answers: [],
                                                                        resources: ["Healthcare & Family Services", "Chicago Legal Clinic"],
                                                                    },
                                                                    {
                                                                        text: "No",
                                                                        question: "",
                                                                        answers: [],
                                                                        resources: ["Healthcare & Family Services", "Chicago Legal Clinic"],
                                                                    },
                                                                ],
                                                            },
                                                        ],
                                                    },
                                                    {
                                                        text: "No",
                                                        question: "",
                                                        answers: [],
                                                    },
                                                ],
                                            },
                                            {
                                                text: "No",
                                                question: "",
                                                answers: [],
                                            },
                                        ],
                                    },
                                    {
                                        text: "No",
                                        question: "",
                                        answers: [],
                                    },
                                ],
                            },
                            {
                                text: "No",
                                question: "",
                                answers: [],
                            },
                        ],
                    },
                    {
                        text: "Modify",
                        question: "",
                        answers: [],
                    },
                    {
                        text: "Enforce",
                        question: "",
                        answers: [],
                    },
                    {
                        text: "Terminate",
                        question: "",
                        answers: [],
                    },
                ],
            },
            {
                text: "Divorce",
                question: "What action would you like to take for divorce?",
                answers: [],
            },
            {
                text: "Annulment",
                question: "What action would you like to take for annulment?",
                answers: [],
            },
            {
                text: "Legal Separation",
                question: "What action would you like to take for legal separation?",
                answers: [],
            },
        ]
    }
];

function makeSurvey(array) {
    const o = new Option();

    for (let i = 0; i < array.length; i++) {
        const e = array[i];
        o.text = e.text;
        o.question = e.question;
        if (o.hasOwnProperty("resources")) {
            o.resources = e.resources;
        }
        for (let j = 0; j < e.answers.length; j++) {
            const f = [e.answers[j]];
            o.addAnswer(makeSurvey(f));
        }
    }

    return o;
}

function showResources(resources) {
    for (const r of resources) {
        console.log(r);
        document.getElementById(r).style.display = "initial";
    }
}

function setupBackButton(option) {
    const backButtonArea = document.getElementById("back");
    const backButton = document.getElementById("back_button");
    const newBackButton = document.createElement("input");
    newBackButton.setAttribute("type", "submit");
    newBackButton.setAttribute("value", "Back");
    newBackButton.setAttribute("id", "back_button");

    if (option.getLastOption() === null) {
        newBackButton.addEventListener("click", function () {
            window.location.assign("start_survey.html");
        });
    }
    else {
        newBackButton.addEventListener("click", function () {
            setup(option.getLastOption());
        });
    }
    backButtonArea.replaceChild(newBackButton, backButton);
}

function setupProgressBar(option) {
    function countQuestionsLeft(o, counter) {
        const answers = o.getAnswers();
        if (answers.length === 0) {
            return counter;
        } else {
            counter += 1;
            return Math.max(...answers.map((a) => {
                return countQuestionsLeft(a, counter);
            }));
        }
    }

    function countQuestionsDone(o, counter) {
        if (o.getLastOption() === null) {
            return counter;
        }
        else {
            counter += 1;
            return countQuestionsDone(o.getLastOption(), counter);
        }
    }

    const progressBar = document.getElementById("progress_bar");
    const questionsLeft = countQuestionsLeft(option, 0);
    const questionsDone = countQuestionsDone(option, 0);
    progressBar.setAttribute("max", `${questionsLeft + questionsDone}`);
    progressBar.setAttribute("value", `${questionsDone}`);
    // SOURCE: https://stackoverflow.com/questions/18269286/shorthand-for-if-else-statement
    progressBar.innerHTML = `${(questionsLeft < 2) ?
        `${(questionsLeft === 1) ?
            "Just one question"
            : "No questions"}`
        : `At most ${questionsLeft} questions`} left.`;
}

function replaceButtons(option) {
    // Remove old buttons
    const buttonArea = document.getElementById("buttons");
    // SOURCE: https://www.geeksforgeeks.org/remove-all-the-child-elements-of-a-dom-node-in-javascript/
    let b = buttonArea.firstElementChild;
    while (b) {
        buttonArea.removeChild(b);
        b = buttonArea.firstElementChild;
    }

    // Create new buttons
    for (let i = 0; i < option.getAnswers().length; i++) {
        const answer = option.getAnswers()[i];

        const button = document.createElement("input");
        button.setAttribute("type", "submit");
        button.setAttribute("value", answer.text);
        button.addEventListener("click", function () {
            setup(answer);
        }
        );

        // Insert new button
        buttonArea.appendChild(button);
    }
}

function setup(option) {
    // Set up back button
    setupBackButton(option);

    // Update progress bar
    setupProgressBar(option);

    // Change question
    const q = document.getElementById("question");
    q.innerHTML = option.question;

    // Remove old buttons and create new buttons
    replaceButtons(option);

    // Show resources if the survey is over
    const resources =  document.getElementById("resources")
    if (option.getResources() !== undefined) {
        resources.style.display = "initial";
        resources.firstElementChild.style.display = "initial";
        showResources(option.getResources());
    } else {
        resources.style.display = "none";
        for (const r of resources.children) {
            r.style.display = "none";
        }
    }
}

setup(makeSurvey(surveyArray));





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
                question: "What action would you like to take for <a href='#'>child support</a>?",
                answers: [
                    {
                        text: "Obtain",
                        question: "Are you the child's <a href='#'>custodial parent</a>?",
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
                                                question: "Has the other parent's <a href='#'>legal parentage</a> been established?",
                                                answers: [
                                                    {
                                                        text: "Yes",
                                                        question: "How was other parent's <a href='#'>legal parentage</a> <a href='#'>established</a>?",
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
                                                                                question: "Does the child's other <a href='#'>legal parent</a> live in the same state as you?",
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
                                                                                        resources: ["Healthcare & Family Services"],
                                                                                    },
                                                                                ],
                                                                            },
                                                                            {
                                                                                text: "No",
                                                                                question: "Does the child's other <a href='#'>legal parent</a> live in the same state as you?",
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
                                                                                        resources: ["Healthcare & Family Services"],
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
                                                                question: "Does the child's other <a href='#'>legal parent</a> live in the same state as you?",
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
                                                                        resources: ["Healthcare & Family Services"],
                                                                    },
                                                                ],
                                                            },
                                                            {
                                                                text: "Not Sure",
                                                                question: "Does the child's other <a href='#'>legal parent</a> live in the same state as you?",
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
                                                                        resources: ["Healthcare & Family Services"],
                                                                    },
                                                                ],
                                                            },
                                                            {
                                                                text: "Other",
                                                                question: "Does the child's other <a href='#'>legal parent</a> live in the same state as you?",
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

const definitions = {
    "child support": "Child support refers to financial contributions made by a legal parent of a child(s) to the other legal parent in contribution towards the cost of caring for and raising a minor child. Generally speaking, the parent that makes child support payments is the child's non-custodial parent, while the parent that receives the payments is the child's custodial parent. ",
    "custodial parent": "<p>The custodial parent is the legal parent of a child that is primarily responsible for the caretaking functions of a child.In other words, the custodial parent is the parent that is first and foremost the primary caregiver of the child.Similarly, the other legal parent of the child is called the non- custodial parent.</p> <p>The custodial parent can be determined through an allocation of parental; responsibilties(custody), which is ordered[court order]through a parenting plan; otherwise, the child's biological mother is typically made the custodial parent once the child is born.</p> <p>If two parents have joint - custody – or the allocation of parental;responsibilties has been distributed evenly – both parents would be the child's custodial parent.</p>",
    "legal parentage": "<p>A presumed parent is the legal parent of a child. In other words, if you are presumed to be the parent of a child, then your legal parentage is officially established [establishing parentage].</p> <p>One is presumed to be the legal parent of a child if at least one of the following conditions are met:</p> <ol><li>you are married to or in a civil union with the child's biological mother at the time the child is born(unless there is a gestational surrogacy agreement); or</li> <li>the child is born within 300 days after you have divorced or your civil union with the child's biological mother is dissolved [dissolution of civil union]</li></ol>",
    "established": "<p>Establishing parentage is the process through which one becomes the legal parent of a child. Parentage can be established through one of the following ways:</p> <ol><li>the biological mother having given birth to the child</li> <li>being the presumed parent of the child through a marriage or civil union</li> <li>signing a Voluntary Acknowledgement of Parentage (VAP) for the child</li> <li>legally adopting the child</li> <li>a valid gestational surrogacy agreement; or</li> <li>an adjudication of parentage, either by a judge in court or through the Illinois Department of Healthcare and Family Services(HFS)</li></ol>",
    "legal parent": "<p>The legal parent of a child is a parent with a legally established [establishing parentage]parent- child relationship.If you are the legal parent of a child, your name likely should be on the child's birth certificate.</p> <p>A child's legal parent is allowed to do the following:</p> <ol><li>make or receive child support payments</li> <li>pursue getting custody of a child</li> <li>pursue visitation rights (parenting time) with a child</li></ol> <p>Depending on how the legal parentage was originally established [establishing parentage], one can possibly no longer be deemed a child's legal parent through one of the following ways:</p> <ol><li>declaring the non-existence of a parent-child relationship</li> <li>a denial of parentage; or</li> <li>challenging a VAP</li></ol>",
    "LINK/SNAP" : "<p>The Supplemental Nutritional Assistance Program (SNAP), also known as \"food stamps\", is a program managed in Illinois by the Illinois Department of Human Services (DHS) that provides financial assistance for the costs of buying food.</p> <p>If you are eligible for SNAP cash benefits, you are also eligible to receive an Illinois LINK card, which works like as a debit card.DHS will regularly put the money you receive for SNAP on your LINK card, and you can use the card at eligible stores – make sure to ask an employee or look for a sign on the store window to make sure you can use your LINK card to purchase food.</p> <p>Foods and programs that are covered by SNAP includes, but are not necessarily limited to the following:</p>\; <ol><li>grains, dairy, fruits, vegetables, meat / fish / poultry, and dairy products</li> <li>plants or seeds for the purposes of growing food</li> <li>meals - on - wheels; and</li> <li>meals at eligible shelters, group homes and rehabilitation facilities.</li></ol> <p>Learn more about SNAP program requirements here[https://www.dhs.state.il.us/page.aspx?item=30357], and you can use this link [https://fscalc.dhs.illinois.gov/FSCalc/] to find out if you are eligible.</p>"
};

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
        b = buttonArea.firstChild;
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

function setupLinks() {
    const links = document.getElementsByTagName("a");
    for (const a of links) {
        a.addEventListener("click", function () {
            alert(definitions[a.innerHTML]);
        });
    };
}

function showResources(resources) {
    for (const r of resources) {
        console.log(r);
        document.getElementById(r).style.display = "initial";
    }
}

function toggleResources(option) {
    const resources = document.getElementById("resources");
    if (option.getResources() !== undefined) {
        resources.style.display = "initial";
        resources.firstElementChild.style.display = "initial";
        resources.lastElementChild.style.display = "initial";
        resources.lastElementChild.addEventListener("click", function () {
            window.location.assign("review.html");
        });
        showResources(option.getResources());
    }
    else {
        resources.style.display = "none";
        for (const r of resources.children) {
            r.style.display = "none";
        }
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

    // Set up links for defintions
    setupLinks();

    // Remove old buttons and create new buttons
    replaceButtons(option);

    // Show resources if the survey is over
    toggleResources(option);
}

setup(makeSurvey(surveyArray));









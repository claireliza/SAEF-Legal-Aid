/* Contains all survey questions and definitions. */

// SOURCE: https://stackoverflow.com/questions/12036966/generic-tree-implementation-in-javascript
function Option() {
    /*
    An object that allows all the questions in the survey to be organized into a tree.
        text: the text that appears on the button you click to indicate your response
        question: the followup question that appears on the next page if you select that button
        answers: an array of Option objects whose 'text' values appear on a new set of buttons as potential answers to the new 'question'
        resources: an array of strings that is non-empty for the last Option in the survey, naming organizations that could help with the legal issue depending on your previous responses
    */
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
    /*
    A nested array of objects with each question in the prototype and its potential answers. 
    It's too long and needs to go in another file.
    Objects at the very end of the question chain have the 'resources' property defined, listing the names of legal aid organizations exactly as they are referenced in the <div> elements that contain information about those organizations.
    */
    {
        text: "Begin Survey",
        question: "What do you need help with?",
        answers: [
            {
                text: "Child Support",
                question: "What action would you like to take for <a href='#!'>child support</a>?",
                answers: [
                    {
                        text: "Obtain",
                        question: "Are you the child's <a href='#!'>custodial parent</a>?",
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
                                                question: "Has the other parent's <a href='#!'>legal parentage</a> been established?",
                                                answers: [
                                                    {
                                                        text: "Yes",
                                                        question: "How was other parent's <a href='#!'>legal parentage</a> <a href='#!'>established</a>?",
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
                                                                                question: "Does the child's other <a href='#!'>legal parent</a> live in the same state as you?",
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
                                                                                question: "Does the child's other <a href='#!'>legal parent</a> live in the same state as you?",
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
                                                                question: "Does the child's other <a href='#!'>legal parent</a> live in the same state as you?",
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
                                                                question: "Does the child's other <a href='#!'>legal parent</a> live in the same state as you?",
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
                                                                question: "Does the child's other <a href='#!'>legal parent</a> live in the same state as you?",
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
    /*
    A dictionary/object of legal definitions. Each key is a term exactly as it is contained in an <a href="#!"> tag, and the value of that key is that term's definition.
    It's also too long and needs to go in another file.
    */
    // "child support": "Child support refers to financial contributions made by a legal parent of a child(s) to the other <a href='#!'>legal parent</a> in contribution towards the cost of caring for and raising a minor child. Generally speaking, the parent that makes child support payments is the child's non-custodial parent, while the parent that receives the payments is the child's custodial parent. ",
    // "custodial parent": "The custodial parent is the legal parent of a child that is primarily responsible for the caretaking functions of a child.In other words, the custodial parent is the parent that is first and foremost the primary caregiver of the child. Similarly, the other legal parent of the child is called the non- custodial parent. \n\n The custodial parent can be determined through an allocation of parental; responsibilties(custody), which is ordered[court order]through a parenting plan; otherwise, the child's biological mother is typically made the custodial parent once the child is born. \n\n If two parents have joint - custody – or the allocation of parental;responsibilties has been distributed evenly – both parents would be the child's custodial parent.",
    // "legal parentage": "A presumed parent is the legal parent of a child. In other words, if you are presumed to be the parent of a child, then your legal parentage is officially established [establishing parentage].\n\n One is presumed to be the legal parent of a child if at least one of the following conditions are met:\n • you are married to or in a civil union with the child's biological mother at the time the child is born(unless there is a gestational surrogacy agreement); or\n • the child is born within 300 days after you have divorced or your civil union with the child's biological mother is dissolved [dissolution of civil union]",
    // "established": "Establishing parentage is the process through which one becomes the legal parent of a child. Parentage can be established through one of the following ways:\n • the biological mother having given birth to the child\n • being the presumed parent of the child through a marriage or civil union\n • signing a Voluntary Acknowledgement of Parentage (VAP) for the child\n • legally adopting the child\n • a valid gestational surrogacy agreement; or\n • an adjudication of parentage, either by a judge in court or through the Illinois Department of Healthcare and Family Services(HFS)",
    // "legal parent": "The legal parent of a child is a parent with a legally established [establishing parentage]parent- child relationship.If you are the legal parent of a child, your name likely should be on the child's birth certificate.\n\n A child's legal parent is allowed to do the following:\n • make or receive child support payments\n • pursue getting custody of a child\n • pursue visitation rights (parenting time) with a child\n\n Depending on how the legal parentage was originally established [establishing parentage], one can possibly no longer be deemed a child's legal parent through one of the following ways:\n • declaring the non-existence of a parent-child relationship\n • a denial of parentage; or\n • challenging a VAP",
    // "HFS": "The Illinois Department of Healthcare and Family Services (HFS) is an administrative agency with two primary functions:\n • Providing Medicaid coverage to those who qualify; and \n • Child support enforcement services through the IV-D program\n\nEnrolling in the IV-D program gives HFS the right to establish legal parentage, as well as enter and enforce an administrative child support order. Additionally, HFS can provide help with judicial child support orders through appointing a state's attorney to represent HFS in court.\n\n You can visit HFS's website to learn more here [https://www.illinois.gov/hfs/About/Pages/About.aspx]",
    // "administrative child support order": "An administrative child support order is a legally-binding child support order that is entered by the Illinois Department of Healthcare and Family Services(HFS).This means that in order to modify, enforce, or terminate an administrative child support order, you will have to either call HFS or visit their downtown office.\n\n If you are the custodial parent or are receiving child support payments through an administrative child support order, this means you are enrolled in HFS's IV-D program, or child support enforcement services.\n\nIf you have a copy of your child support order, you can tell if it is an administrative child support order if it contains an administrative case number. Otherwise, it might be a judicial child support order with a docket number.",
    // "IV-D": "If you are the custodial parent of a child that is over the age of 17 and/or has graduated high school that plans on enrolling, or is currently enrolled in college or another post- secondary educational institution, you may be; able to receive financial assistance from the child's other legal parent with educational expenses.\n\n Expenses that can be covered by educational expenses may include:\n • tuition\n • room-and-board\n • books and other school supplies\n • medical expenses; and/or\n • general costs of living\n\n Additionally, if your child has not yet applied to college, you may be able to obtain funds to finance college application fees, college entrance examination fees, or a prepatory course for a college entrance examination. If your child has applied to college, your child must submit the Free Application for Federal Student Aid (FAFSA) and any other financial aid forms prior to you filing for college expenses.\n\n Your child may be DISQUALIFIED from receiving college expenses if:\n • your child is over the age of 23\n• your child enters into a marriage or civil union; or\n • fails to maintain a cumulative \"C\" grade average while in college",
    // "Medicaid": "Medicaid is a program offered by the Illinois Department of Healthcare and Family Services (HFS) that pays for certain medical services for eligible children, senior adults, or disabled persons. Eligibility is determined by income – more information can be found here. [https://www.benefits.gov/benefit/1628]\n\n Some things to know about Medicaid:\n • If you are a recipient of Medicaid, you are automatically enrolled in HFS's IV-D program, otherwise known as child support enforcement services\n• If you have a child support case, and the custodial parent is a Medicaid recipient, the child support order may require the non-custodial parent to pay cash medical support",
    // "Temporary Assistance to Needy Families": "Temporary Assistance to Needy Families (TANF) is a program that provides cash benefits to pregnant mothers or parents caring for children under the age of 18 or are full- time high; school students.It is offered by the Illinois Department of Public Heath, and you will have to; apply in person – find an office near you here[http://www.dhs.state.il.us/page.aspx?module=12&officetype&county=Cook]. More information on program eligibility can be found here[https://www.benefits.gov/benefit/1662].\n\n Some things to know about TANF:\n • If you are a TANF recipient, you are automatically enrolled in the Illinois Department of Healthcare and Family Services(HFS) IV- D program, otherwise known as child support;enforcement services\n • If eligible, TANF recipients will also receive LINK/SNAP benefits",
    // "LINK/SNAP": "The Supplemental Nutritional Assistance Program (SNAP), also known as \"food stamps\", is a program managed in Illinois by the Illinois Department of Human Services (DHS) that provides financial assistance for the costs of buying food.\n\n If you are eligible for SNAP cash benefits, you are also eligible to receive an Illinois LINK card, which works like as a debit card. DHS will regularly put the money you receive for SNAP on your LINK card, and you can use the card at eligible stores – make sure to ask an employee or look for a sign on the store window to make sure you can use your LINK card to purchase food.\n\n Foods and programs that are covered by SNAP includes, but are not necessarily limited to the following:\n • grains, dairy, fruits, vegetables, meat / fish / poultry, and dairy products\n • plants or seeds for the purposes of growing food\n • meals - on - wheels; and\n • meals at eligible shelters, group homes and rehabilitation facilities.\n\n Learn more about SNAP program requirements here[https://www.dhs.state.il.us/page.aspx?item=30357], and you can use this link [https://fscalc.dhs.illinois.gov/FSCalc/] to find out if you are eligible.",
    // "SSI": "Supplemental Security Income (SSI) is a need-based program offered by the federal government that provides monthly cash benefits to the following low- income individuals:\n • those aged 65 or older\n • those with certain documented physical or mental disabilities\n • those who are blind; and\n • in some cases, minor children that are disabled or blind\n\n You can visit the Social Security Administration's website here [https://www.ssa.gov/ssi/text-eligibility-ussi.htm] to see if you are eligible to receive SSI.\n\n It is important to note that SSI disability payments CANNOT be garnished or withheld [income withholding]for the purposes of making child support payments."


    "child support": "Child support refers to financial contributions made by a legal parent of a child(s) to the other <a href='#!'>legal parent</a>  in contribution towards the cost of caring for and raising a minor child. Generally speaking, the parent that makes child support payments is the child's non-custodial parent, while the parent that receives the payments is the child's custodial parent. ",
    "custodial parent": "The custodial parent is the legal parent of a child that is primarily responsible for the caretaking functions of a child. In other words, the custodial parent is the parent that is first and foremost the primary caregiver of the child.Similarly, the other legal parent of the child is called the non- custodial parent.</p> <p>The custodial parent can be determined through an allocation of parental; responsibilties(custody), which is ordered[court order]through a parenting plan; otherwise, the child's biological mother is typically made the custodial parent once the child is born.</p> <p>If two parents have joint - custody – or the allocation of parental;responsibilties has been distributed evenly – both parents would be the child's custodial parent.",
    "legal parentage": "A presumed parent is the legal parent of a child. In other words, if you are presumed to be the parent of a child, then your legal parentage is officially <a href='#!'>established</a>. <p>One is presumed to be the legal parent of a child if at least one of the following conditions are met:</p> <ul><li>you are married to or in a civil union with the child's biological mother at the time the child is born(unless there is a gestational surrogacy agreement); or</li> <li>the child is born within 300 days after you have divorced or your civil union with the child's biological mother is dissolved [dissolution of civil union]</li></ul>",
    "established": "Establishing parentage is the process through which one becomes the legal parent of a child. Parentage can be established through one of the following ways: <ul><li>the biological mother having given birth to the child</li> <li>being the presumed parent of the child through a marriage or civil union</li> <li>signing a Voluntary Acknowledgement of Parentage (VAP) for the child</li> <li>legally adopting the child</li> <li>a valid gestational surrogacy agreement; or</li> <li>an adjudication of parentage, either by a judge in court or through the Illinois Department of Healthcare and Family Services(HFS)</li></ul>",
    "legal parent": "The legal parent of a child is a parent with a legally established [link] parent- child relationship.If you are the legal parent of a child, your name likely should be on the child's birth certificate. <p>A child's legal parent is allowed to do the following:</p> <ul><li>make or receive child support payments</li> <li>pursue getting custody of a child</li> <li>pursue visitation rights (parenting time) with a child</li></ul> <p>Depending on how the legal parentage was originally established [establishing parentage], one can possibly no longer be deemed a child's legal parent through one of the following ways:</p> <ul><li>declaring the non-existence of a parent-child relationship</li> <li>a denial of parentage; or</li> <li>challenging a VAP</li></ul>",
    "HFS": "The Illinois Department of Healthcare and Family Services (HFS) is an administrative agency with two primary functions: <ol><li>Providing Medicaid coverage to those who qualify; and</li><li>Child support enforcement services through the IV-D program</li></ol> <p>Enrolling in the IV-D program gives HFS the right to establish legal parentage, as well as enter and enforce an administrative child support order.Additionally, HFS can provide help with judicial child support orders through appointing a state's attorney to represent HFS in court.</p> <p>You can visit HFS's website to learn more here [https://www.illinois.gov/hfs/About/Pages/About.aspx]</p>",
    "administrative child support order": "An administrative child support order is a legally-binding child support order that is entered by the Illinois Department of Healthcare and Family Services(HFS).This means that in order to modify, enforce, or terminate an administrative child support order, you will have to either call HFS or visit their downtown office. <p>If you are the custodial parent or are receiving child support payments through an administrative child support order, this means you are enrolled in HFS's IV-D program, or child support enforcement services.</p> <p>If you have a copy of your child support order, you can tell if it is an administrative child support order if it contains an administrative case number.Otherwise, it might be a judicial child support order with a docket number.</p>",
    "IV-D": "<p>If you are the custodial parent of a child that is over the age of 17 and/or has graduated high school that plans on enrolling, or is currently enrolled in college or another post- secondary educational institution, you may be; able to receive financial assistance from the child's other legal parent with educational expenses.</p> <p>Expenses that can be covered by educational expenses may include:</p> <ul><li>tuition</li> <li>room-and-board</li> <li>books and other school supplies</li> <li>medical expenses; and/or</li> <li>general costs of living</li></ul> <p>Additionally, if your child has not yet applied to college, you may be able to obtain funds to finance college application fees, college entrance examination fees, or a prepatory course for a college entrance examination. If your child has applied to college, your child must submit the Free Application for Federal Student Aid (FAFSA) and any other financial aid forms prior to you filing for college expenses.</p> <p>Your child may be DISQUALIFIED from receiving college expenses if:</p> <ul><li>your child is over the age of 23</li> <li>your child enters into a marriage or civil union; or</li> <li>fails to maintain a cumulative \"C\" grade average while in college</li></ul>",
    "Medicaid": "<p>Medicaid is a program offered by the Illinois Department of Healthcare and Family Services (HFS) that pays for certain medical services for eligible children, senior adults, or disabled persons.Eligibility is determined by income – more information can be found here. [https://www.benefits.gov/benefit/1628]</p> <p>Some things to know about Medicaid:</p> <ul><li>If you are a recipient of Medicaid, you are automatically enrolled in HFS's IV-D program, otherwise known as child support enforcement services</li> <li>If you have a child support case, and the custodial parent is a Medicaid recipient, the child support order may require the non-custodial parent to pay cash medical support</li></ul>",
    "Temporary Assistance to Needy Families": "<p>Temporary Assistance to Needy Families (TANF) is a program that provides cash benefits to pregnant mothers or parents caring for children under the age of 18 or are full- time high; school students.It is offered by the Illinois Department of Public Heath, and you will have to; apply in person – find an office near you here[http://www.dhs.state.il.us/page.aspx?module=12&officetype&county=Cook]. More information on program eligibility can be found here[https://www.benefits.gov/benefit/1662].</p> <p>Some things to know about TANF:</p> <ul><li>If you are a TANF recipient, you are automatically enrolled in the Illinois Department of Healthcare and Family Services(HFS) IV- D program, otherwise known as child support;enforcement services</li> <li>If eligible, TANF recipients will also receive LINK/SNAP benefits</li></ul>",
    "LINK/SNAP": "<p>The Supplemental Nutritional Assistance Program (SNAP), also known as \"food stamps\", is a program managed in Illinois by the Illinois Department of Human Services (DHS) that provides financial assistance for the costs of buying food.</p> <p>If you are eligible for SNAP cash benefits, you are also eligible to receive an Illinois LINK card, which works like as a debit card.DHS will regularly put the money you receive for SNAP on your LINK card, and you can use the card at eligible stores – make sure to ask an employee or look for a sign on the store window to make sure you can use your LINK card to purchase food.</p> <p>Foods and programs that are covered by SNAP includes, but are not necessarily limited to the following:</p>\; <ul><li>grains, dairy, fruits, vegetables, meat / fish / poultry, and dairy products</li> <li>plants or seeds for the purposes of growing food</li> <li>meals - on - wheels; and</li> <li>meals at eligible shelters, group homes and rehabilitation facilities.</li></ul> <p>Learn more about SNAP program requirements here[https://www.dhs.state.il.us/page.aspx?item=30357], and you can use this link [https://fscalc.dhs.illinois.gov/FSCalc/] to find out if you are eligible.</p>",
    "SSI": "<p>Supplemental Security Income (SSI) is a need-based program offered by the federal government that provides monthly cash benefits to the following low- income individuals:</p> <ul><li>those aged 65 or older</li> <li>those with certain documented physical or mental disabilities</li> <li>those who are blind; and</li> <li>in some cases, minor children that are disabled or blind</li></ul> <p>You can visit the Social Security Administration's website here [https://www.ssa.gov/ssi/text-eligibility-ussi.htm] to see if you are eligible to receive SSI.</p> <p>It is important to note that SSI disability payments CANNOT be garnished or withheld [income withholding]for the purposes of making child support payments.</p>"

};


function makeSurvey(array) {
    /* 
    A function that takes an array of objects (surveyArray) and converts it into a tree of Option objects.
    */
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
    /*
    Takes whatever branch of the Option tree you are on and creates a button that will take you to the branch that came before it, taking you one step back in the survey. If you go back to the beginning, this button will take you to start_survey.html.
    */
    /*document.getElementById("question_area").style.display = "initial"; //claire ADDED THIS */

    const backButtonArea = document.getElementById("back");
    const backButton = document.getElementById("back_button");
    const newBackButton = document.createElement("input");
    //newBackButton.setAttribute("type", "submit");
    newBackButton.setAttribute("type", "image");
    //newBackButton.setAttribute("value", "Back");
    newBackButton.setAttribute("src", "assets/backarrow.png");
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
    /* 
    Takes whatever branch of the Option tree you are on and updates the progress bar to indicate about how far you have left to go.
    */
    function countQuestionsLeft(o, counter) {
        /* 
        Calculates the maximum number of questions you could have left to answer from this point in the tree.
         */
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
        /* 
        Calculates the number of questions you have already done.
         */
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
    /* 
    Replaces an old set of answer buttons with the ones for a different question.
     */
    // Remove old buttons
    const buttonArea = document.getElementById("buttons");
    // SOURCE: https://www.geeksforgeeks.org/remove-all-the-child-elements-of-a-dom-node-in-javascript/
    let b = buttonArea.firstElementChild;
    while (b) {
        buttonArea.removeChild(b);
        b = buttonArea.firstChild;
    }

    // Create new buttons
    // CREATE ICONS HERE!!! WITH CLASS AS ICON AND ID AS THEIR DEFINITION
    for (let i = 0; i < option.getAnswers().length; i++) {
        const answer = option.getAnswers()[i];

        const button = document.createElement("input");
        button.setAttribute("type", "submit");
        button.setAttribute("value", answer.text);
        //me
        button.setAttribute("class", "surveyButton");
        button.addEventListener("click", function () {
            setup(answer);
        }
        );

        // Insert new button
        buttonArea.appendChild(button);
    }
}

function setupLinks(div) {
    /* 
    Finds all the <a href="#!"> tags that are descendants of a given <div> tag and makes it so that when you click on the link, it'll retrieve its definition from the dictionary of terms and display that definition in a popup.
     */
    // SOURCE: https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
    const links = div.querySelectorAll("a");

    var isEmpty = document.getElementById("defModal").innerHTML === "";

    for (const a of links) {
        a.style.color = "#0066ff"; //sets link color to bright blue
        //let content = a.innerHTML;
        let icon = document.createElement("span");
        icon.className="icon";
        a.appendChild(icon);

        // a.classList.add("icon");
        a.addEventListener("click", function () {
            const d = definitions[a.innerText];

            if (isEmpty){
                createModal("defModal", d); //creates modal window
                setupLinks(document.getElementById("defModal")); //creates links for text inside modal window
            } else{
                //document.getElementById("defModal").classList.add("side"); 
                document.getElementById("defModal").style.left = "15%"; //moves modal window 1 over to the side if we're in a second modal window
                createModal("defModal2", d); //sets up second modal window 
            }
        });
    };
}

/* Creates modal window with a background overlay underneath and a close button in the corner that clears the whole modal
source : https://www.thatsoftwaredude.com/content/9123/the-simplest-way-to-create-dynamic-modal-popups-in-javascript */
function createModal(id, d){
    let el = document.getElementById(id);
    el.classList.add("on");
    
    el.innerHTML=d;

    let body = document.querySelector("body");
    let bg = document.createElement("div"); //overlay
    bg.className = "modal-js-overlay";
    body.appendChild(bg);

    let close = document.createElement("span");
    el.appendChild(close);

    close.className = "modal-js-close";
    close.innerHTML = "x";
    close.addEventListener('click', function () {
        body.removeChild(bg);
        el.classList.remove('on');
        el.innerHTML = ""; //clears modal
        document.getElementById("defModal").style.left = "35%"; //sets modal back to center;
    });

    // window.onclick = function(event){
    //     if(event.target.id != id){
    //         // modal1.style.display="none";
    //         el.style.display="none";
    //         body.removeChild(bg);
    //         el.classList.remove('on');
    //         el.innerHTML = "";
    //     }
    // }

}

function showResources(resources) {
    /* 
    Displays all the <div> elements with information about resources that are specified in the string array 'resources'.
     */
    for (const r of resources) {
        document.getElementById(r).style.display = "initial";
    }
}

function toggleResources(option) {
    /* 
    Decides whether it's time to end the survey and display information about legal aid resources.
    Returns 1 if it's the end, returns 0 if not
     */
    const resources = document.getElementById("resources");
    if (option.getResources() !== undefined) {
        // This branch of the Option tree has the 'resources' property, which means that it's the end of the survey and there are resources to recommend.
        resources.style.display = "initial";
        resources.firstElementChild.style.display = "initial";
        resources.lastElementChild.style.display = "initial";
        resources.lastElementChild.addEventListener("click", function () {
            window.location.assign("review.html");
        });
        setupLinks(resources);
        showResources(option.getResources());
        return(1);
    }
    else {
        resources.style.display = "none";
        for (const r of resources.children) {
            r.style.display = "none";
        }
        return(0);
    }
}

function setup(option) {
    /* 
    Sets up all visble elements on the page.
     */
    // Set up back button
    setupBackButton(option);

    // Update progress bar
    setupProgressBar(option);

    // Change question
    const q = document.getElementById("question");
    q.innerHTML = option.question;

    // Set up links for defintions
    setupLinks(q.parentElement);

    // Remove old buttons and create new buttons
    replaceButtons(option);

    // Show resources if the survey is over, hides question area if it is
    const end = toggleResources(option);
    if(end==1){
        document.getElementById("question_area").style.display = "none";
    } else{
        document.getElementById("question_area").style.display = "initial";
    }
}

setup(makeSurvey(surveyArray));
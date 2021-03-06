  
/* Contains all survey questions and definitions. */
var people = 0; //number of people in household
var incomeOne = 0; //0 if less than $19,510, 1 if more
var incomeTwo = 0; //0 if less than $31,900, 1 if more

// SOURCE: https://stackoverflow.com/questions/12036966/generic-tree-implementation-in-javascript
/*
    An object that allows all the questions in the survey to be organized into a tree.
        text: the text that appears on the button you click to indicate your response
        question: the followup question that appears on the next page if you select that button
        answers: an array of Option objects whose 'text' values appear on a new set of buttons as potential answers to the new 'question'
        resources: an array of strings that is non-empty for the last Option in the survey, naming organizations that could help with the legal issue depending on your previous responses
*/
function Option() {
    this.text = ""; //button that led to this question
    this.question = ""; //question 
    this.explanation=""; //legal explanation of the question, pops up when info icon at bottom right is clicked
    this.answers = []; //possible responses
    this.resources = []; //if this is the end of a branch, what referrals to suggest
    this.redirect = ""; //if this leads to a popup 
    this.lastOption = null; //previous question

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

 /*
    A nested array of objects with each question in the survey and its potential answers. 
    It's too long and needs to go in another file, or needs to be read in from some editable file for content management purposes.
    Very difficult to edit when questions change order because it is nested
    Objects at the very end of the question chain have the 'resources' property defined, listing a code for each unique referral that corresponds to resource and contact information. 
*/
const surveyArray = [
   
    {
        text: "Begin Survey", //don't change this text, it is used in other functions to check for the first question
        question: "What do you need help with?",
        explanation: "Click me for info while you fill out this questionnaire",
        answers: [
            {
                text: "Child Support",
                question: "What action would you like to take for child support?",
                explanation: "What legal issue can we help you with?",
                answers: [
                    {
                        text: "Start a Child Support Case",
                        question: "Does the child live with you more often than they live with the other parent?",
                        explanation: "If a parent is legally required to be a child's primary caretaker, they are called the child's custodial parent.",
                        answers: [
                            {
                                text:"Yes",
                                question: "Is the child's other parent the legal parent?",
                                explanation: "There are <a href='/#?'>multiple ways</a> to become a child's legal parent.",
                                answers: [
                                    {
                                        text:"Yes",
                                        question: "Are you married to or in a civil union with the child's other parent?",
                                        explanation: "Generally speaking, you cannot start a child support case against your spouse or partner",
                                        answers: [
                                            {
                                                text:"Yes",
                                                question:"Have you become legally separated?",
                                                explanation: "A judge can order two spouses to be <a href='/#>'>legally separated</a>, or live separately while remaining married.",
                                                answers:[
                                                    {
                                                        text:"Yes",
                                                        question:"",
                                                        answers:[],
                                                        redirect:"Modify Separation"
                                                    },
                                                    {
                                                        text:"No",
                                                        question:"",
                                                        answers:[],
                                                        redirect:"Divorce"
                                                    }
                                                ]
                                            },
                                            {
                                                text: "No",
                                                question: "Is the child younger than 18 or in high school?",
                                                explanation: "Unless a child has a disability, new child support orders generally cannot be made for children 18 or older.",
                                                answers: [
                                                    {
                                                        text: "Yes",
                                                        question: "Do you know who the child's other parent is?",
                                                        explanation: "If you do not know who the child's other parent is, there are free and affordable resources available to help identify and locate them.",
                                                        answers: [
                                                            {
                                                                text: "Yes",
                                                                question: "Does the child's other parent live in the same state as you?",
                                                                explanation: "Even if the child's parent lives out-of-state, there are free and affordable resources available to you to start a child support case against them.",
                                                                answers: [
                                                                    {
                                                                        text:"Yes",
                                                                        question:"Do you currently have a job?",
                                                                        explanation:"You can start a child support case whether or not you're working – we just want to provide you with the most complete referral.",
                                                                        answers:[
                                                                            {
                                                                                text:"Yes", 
                                                                                question:"",
                                                                                answers:[],
                                                                                resources: ["HFS A6.111", "GCLC A6.111"] 
                                                                            },
                                                                            {
                                                                                text:"No", 
                                                                                question:"",
                                                                                answers:[],
                                                                                resources: ["HFS A6.121", "GCLC A6.121"] 
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        text:"No",
                                                                        question:"Do you currently have a job?",
                                                                        explanation:"You can start a child support case whether or not you're working – we just want to provide you with the most complete referral.",
                                                                        answers:[
                                                                            {
                                                                                text:"Yes", 
                                                                                question:"",
                                                                                answers:[],
                                                                                resources:["HFS A6.211"] 
                                                                            },
                                                                            {
                                                                                text:"No", 
                                                                                question:"",
                                                                                answers:[],
                                                                                resources:["HFS A6.221"]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                text: "No", //don't know who other parent is
                                                                question:"Do you currently have a job?",
                                                                explanation:"You can start a child support case whether or not you're working – we just want to provide you with the most complete referral.",
                                                                answers:[
                                                                    {
                                                                        text:"Yes", 
                                                                        question:"",
                                                                        answers:[],
                                                                        resources:["HFS A5.111"]
                                                                    },
                                                                    {
                                                                        text:"No", 
                                                                        question:"",
                                                                        answers:[],
                                                                        resources:["HFS A5.121"] 
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        text:"No",
                                                        question:"",
                                                        answers:[],
                                                        redirect: "College or Enforcing"
                                                    },
                                                    {
                                                        text:"No, but my child has a disability",
                                                        question: "Do you know who the child's other parent is?",
                                                        explanation: "If you do not know who the child's other parent is, there are free and affordable resources available to help identify and locate them.",
                                                        answers: [
                                                            {
                                                                text: "Yes",
                                                                question: "Does the child's other parent live in the same state as you?",
                                                                explanation: "Even if the child's parent lives out-of-state, there are free and affordable resources available to you to start a child support case against them.",
                                                                answers: [
                                                                    {
                                                                        text:"Yes",
                                                                        question:"Do you currently have a job?",
                                                                        explanation:"You can start a child support case whether or not you're working – we just want to provide you with the most complete referral.",
                                                                        answers:[
                                                                            {
                                                                                text:"Yes", 
                                                                                question:"",
                                                                                answers:[],
                                                                                resources:["HFS A4.311a.1", "GCLC A4.311a.1"] 
                                                                            },
                                                                            {
                                                                                text:"No", 
                                                                                question:"",
                                                                                answers:[],
                                                                                resources:["HFS A4.311b.1", "GCLC A4.311b.1"]
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        text:"No",
                                                                        question:"Do you currently have a job?",
                                                                        explanation:"You can start a child support case whether or not you're working – we just want to provide you with the most complete referral.",
                                                                        answers:[
                                                                            {
                                                                                text:"Yes", 
                                                                                question:"",
                                                                                answers:[],
                                                                                resources:["HFS A4.312a.1"]
                                                                            },
                                                                            {
                                                                                text:"No", 
                                                                                question:"",
                                                                                answers:[],
                                                                                resources:["HFS A4.312b.1"]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                text: "No", 
                                                                question:"Do you currently have a job?",
                                                                explanation:"You can start a child support case whether or not you're working – we just want to provide you with the most complete referral.",
                                                                answers:[
                                                                    {
                                                                        text: "Yes",
                                                                        question:"",
                                                                        answers:[],
                                                                        resources: ["HFS A4.321a"]  //THIS IS ALSO WRONG
                                                                    },
                                                                    {
                                                                        text: "No",
                                                                        question:"",
                                                                        answers:[],
                                                                        resources: ["HFS A4.322a"] //THIS IS WRONG
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        text:"No",
                                        question: "",
                                        answers: [], 
                                        redirect: "Establishing Paternity"
                                    },
                                    {
                                        text: "I'm not sure",
                                        question: "Are you married to or in a civil union with the child's other parent?",
                                        answers: [
                                            {
                                                text:"Yes",
                                                question:"Have you become legally separated?",
                                                explanation: "A judge can order two spouses to be <a href='/#>'>legally separated</a>, or live separately while remaining married.",
                                                answers:[
                                                    {
                                                        text:"Yes",
                                                        question:"",
                                                        answers:[],
                                                        redirect:"Modify Separation"
                                                    },
                                                    {
                                                        text:"No",
                                                        question:"",
                                                        answers:[],
                                                        redirect:"Divorce"
                                                    }
                                                ]
                                            },
                                            {
                                                text: "No",
                                                question: "Is the child younger than 18 or in high school?",
                                                explanation: "Unless a child has a disability, new child support orders generally cannot be made for children 18 or older.",
                                                answers: [
                                                    {
                                                        text: "Yes",
                                                        question: "Do you know who the child's other parent is?",
                                                        explanation: "If you do not know who the child's other parent is, there are free and affordable resources available to help identify and locate them.",
                                                        answers: [
                                                            {
                                                                text: "Yes",
                                                                question: "Does the child's other parent live in the same state as you?",
                                                                explanation: "Even if the child's parent lives out-of-state, there are free and affordable resources available to you to start a child support case against them.",
                                                                answers: [
                                                                    {
                                                                        text:"Yes",
                                                                        question:"Do you currently have a job?",
                                                                        explanation:"You can start a child support case whether or not you're working – we just want to provide you with the most complete referral.",
                                                                        answers:[
                                                                            {
                                                                                text:"Yes", 
                                                                                question:"",
                                                                                answers:[],
                                                                                resources: ["HFS A2.321a.111", "GCLC A2.321a.111"] 
                                                                            },
                                                                            {
                                                                                text:"No", 
                                                                                question:"",
                                                                                answers:[],
                                                                                resources: ["HFS A2.321a.121", "GCLC A2.321a.121"]
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        text:"No",
                                                                        question:"Do you currently have a job?",
                                                                        explanation:"You can start a child support case whether or not you're working – we just want to provide you with the most complete referral.",
                                                                        answers:[
                                                                            {
                                                                                text:"Yes", 
                                                                                question:"",
                                                                                answers:[],
                                                                                resources:["HFS A2.321a.211"] 
                                                                            },
                                                                            {
                                                                                text:"No", 
                                                                                question:"",
                                                                                answers:[],
                                                                                resources:["HFS A2.321a.221"]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                text: "No", //don't know who other parent is
                                                                question:"Do you currently have a job?",
                                                                explanation:"You can start a child support case whether or not you're working – we just want to provide you with the most complete referral.",
                                                                answers:[
                                                                    {
                                                                        text:"Yes", 
                                                                        question:"",
                                                                        answers:[],
                                                                        resources:["HFS A2.321b.11"]
                                                                    },
                                                                    {
                                                                        text:"No", 
                                                                        question:"",
                                                                        answers:[],
                                                                        resources:["HFS A2.321b.21"]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        text:"No",
                                                        question:"",
                                                        answers:[],
                                                        redirect: "College or Enforcing"
                                                    },
                                                    {
                                                        text:"No, but my child has a disability",
                                                        question: "Do you know who the child's other parent is?",
                                                        explanation: "If you do not know who the child's other parent is, there are free and affordable resources available to help identify and locate them.",
                                                        answers: [
                                                            {
                                                                text: "Yes",
                                                                question: "Does the child's other parent live in the same state as you?",
                                                                explanation: "Even if the child's parent lives out-of-state, there are free and affordable resources available to you to start a child support case against them.",
                                                                answers: [
                                                                    {
                                                                        text:"Yes",
                                                                        question:"Do you currently have a job?",
                                                                        explanation:"You can start a child support case whether or not you're working – we just want to provide you with the most complete referral.",
                                                                        answers:[
                                                                            {
                                                                                text:"Yes", 
                                                                                question:"",
                                                                                answers:[],
                                                                                resources:["HFS A2.323a.111", "GCLC A2.323a.111"] 
                                                                            },
                                                                            {
                                                                                text:"No", 
                                                                                question:"",
                                                                                answers:[],
                                                                                resources:["HFS A2.323a.121", "GCLC A2.323a.121"]
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        text:"No",
                                                                        question:"Do you currently have a job?",
                                                                        explanation:"You can start a child support case whether or not you're working – we just want to provide you with the most complete referral.",
                                                                        answers:[
                                                                            {
                                                                                text:"Yes", 
                                                                                question:"",
                                                                                answers:[],
                                                                                resources:["HFS A2.323a.211"]
                                                                            },
                                                                            {
                                                                                text:"No", 
                                                                                question:"",
                                                                                answers:[],
                                                                                resources:["HFS A2.323a.221"]
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                text: "No", 
                                                                question:"Do you currently have a job?",
                                                                explanation:"You can start a child support case whether or not you're working – we just want to provide you with the most complete referral.",
                                                                answers:[
                                                                    {
                                                                        text: "Yes",
                                                                        question:"",
                                                                        answers:[],
                                                                        resources: ["HFS A2.323b.11"]
                                                                    },
                                                                    {
                                                                        text: "No",
                                                                        question:"",
                                                                        answers:[],
                                                                        resources: ["HFS A2.323b.21"] 
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                text:"No",
                                question: "Is the child's other parent the legal parent?",
                                explanation: "There are <a href='/#?'>multiple ways</a> to become a child's legal parent.",
                                answers: [
                                    {
                                        text:"Yes",
                                        question: "",
                                        answers: [], 
                                        redirect: "Getting Custody"
                                    },
                                    {
                                        text:"No",
                                        question: "",
                                        answers: [], 
                                        redirect: "Establishing Paternity"
                                    },
                                    {
                                        text:"I'm not sure",
                                        question: "",
                                        answers: [], 
                                        redirect: "Getting Custody"
                                    }
                                ]
                            },
                        ],
                    },
                    // {
                    //     text: "Modify",
                    //     question: "",
                    //     answers: [],
                    // },
                    // {
                    //     text: "Enforce",
                    //     question: "",
                    //     answers: [],
                    // },
                    // {
                    //     text: "Terminate",
                    //     question: "",
                    //     answers: [],
                    // },
                ],
            },
            // {
            //     text: "Divorce",
            //     question: "What action would you like to take for divorce?",
            //     answers: [],
            // },
            // {
            //     text: "Annulment",
            //     question: "What action would you like to take for annulment?",
            //     answers: [],
            // },
            // {
            //     text: "Legal Separation",
            //     question: "What action would you like to take for legal separation?",
            //     answers: [],
            // },
        ]
    }
];

/*
    A dictionary/object of legal definitions. 
    Each key is a term exactly as it is contained in an <a href="#!"> tag, and the value of that key is that term's definition.
    It's also too long and needs to go in another file.
    Also stores the contents of the popup windows when the user is asked if they want to redirect to a different survey.
*/
const definitions = {
    "child support": "Child support refers to financial contributions made by a legal parent of a child(s) to the other <a href='#!'>legal parent</a>  in contribution towards the cost of caring for and raising a minor child. Generally speaking, the parent that makes child support payments is the child's non-custodial parent, while the parent that receives the payments is the child's custodial parent. ",
    "Child Support": "Child support refers to financial contributions made by a legal parent of a child(s) to the other <a href='#!'>legal parent</a>  in contribution towards the cost of caring for and raising a minor child. Generally speaking, the parent that makes child support payments is the child's non-custodial parent, while the parent that receives the payments is the child's custodial parent. ",

    "custodial parent": "The custodial parent is the legal parent of a child that is primarily responsible for the caretaking functions of a child. In other words, the custodial parent is the parent that is first and foremost the primary caregiver of the child. Similarly, the other legal parent of the child is called the non- custodial parent.</p> <p>The custodial parent can be determined through an allocation of parental responsibilties(custody), which is ordered[court order]through a parenting plan; otherwise, the child's biological mother is typically made the custodial parent once the child is born.</p> <p>If two parents have joint - custody – or the allocation of parental responsibilties has been distributed evenly – both parents would be the child's custodial parent.",
    "legal parentage": "A presumed parent is the legal parent of a child. In other words, if you are presumed to be the parent of a child, then your legal parentage is officially <a href='#!'>established</a>. <p>One is presumed to be the legal parent of a child if at least one of the following conditions are met:</p> <ul><li>you are married to or in a civil union with the child's biological mother at the time the child is born (unless there is a gestational surrogacy agreement); or</li> <li>the child is born within 300 days after you have divorced or your civil union with the child's biological mother is dissolved [dissolution of civil union]</li></ul>",
    "established": "Establishing parentage is the process through which one becomes the legal parent of a child. Parentage can be established through one of the following ways: <ul><li>the biological mother having given birth to the child</li> <li>being the presumed parent of the child through a marriage or civil union</li> <li>signing a Voluntary Acknowledgement of Parentage (VAP) for the child</li> <li>legally adopting the child</li> <li>a valid gestational surrogacy agreement; or</li> <li>an adjudication of parentage, either by a judge in court or through the Illinois Department of Healthcare and Family Services(HFS)</li></ul>",
    "legal parent": "The legal parent of a child is a parent with a legally <a href='glossary.html#established' target='_blank'>established</a> parent-child relationship.If you are the legal parent of a child, your name likely should be on the child's birth certificate. <p>A child's legal parent is allowed to do the following:</p> <ul><li>make or receive child support payments</li> <li>pursue getting custody of a child</li> <li>pursue visitation rights (parenting time) with a child</li></ul>",
    "HFS": "The Illinois Department of Healthcare and Family Services (HFS) is an administrative agency with two primary functions: <ol><li>Providing Medicaid coverage to those who qualify; and</li><li>Child support enforcement services through the IV-D program</li></ol> <p>Enrolling in the IV-D program gives HFS the right to establish legal parentage, as well as enter and enforce an administrative child support order.Additionally, HFS can provide help with judicial child support orders through appointing a state's attorney to represent HFS in court.</p> <p>You can visit HFS's website to learn more here [https://www.illinois.gov/hfs/About/Pages/About.aspx]</p>",
    "administrative child support order": "An administrative child support order is a legally-binding child support order that is entered by the Illinois Department of Healthcare and Family Services(HFS).This means that in order to modify, enforce, or terminate an administrative child support order, you will have to either call HFS or visit their downtown office. <p>If you are the custodial parent or are receiving child support payments through an administrative child support order, this means you are enrolled in HFS's IV-D program, or child support enforcement services.</p> <p>If you have a copy of your child support order, you can tell if it is an administrative child support order if it contains an administrative case number.Otherwise, it might be a judicial child support order with a docket number.</p>",
    "IV-D": "<p>If you are the custodial parent of a child that is over the age of 17 and/or has graduated high school that plans on enrolling, or is currently enrolled in college or another post- secondary educational institution, you may be; able to receive financial assistance from the child's other legal parent with educational expenses.</p> <p>Expenses that can be covered by educational expenses may include:</p> <ul><li>tuition</li> <li>room-and-board</li> <li>books and other school supplies</li> <li>medical expenses; and/or</li> <li>general costs of living</li></ul> <p>Additionally, if your child has not yet applied to college, you may be able to obtain funds to finance college application fees, college entrance examination fees, or a prepatory course for a college entrance examination. If your child has applied to college, your child must submit the Free Application for Federal Student Aid (FAFSA) and any other financial aid forms prior to you filing for college expenses.</p> <p>Your child may be DISQUALIFIED from receiving college expenses if:</p> <ul><li>your child is over the age of 23</li> <li>your child enters into a marriage or civil union; or</li> <li>fails to maintain a cumulative \"C\" grade average while in college</li></ul>",
    "Medicaid": "<p>Medicaid is a program offered by the Illinois Department of Healthcare and Family Services (HFS) that pays for certain medical services for eligible children, senior adults, or disabled persons.Eligibility is determined by income – more information can be found here. [https://www.benefits.gov/benefit/1628]</p> <p>Some things to know about Medicaid:</p> <ul><li>If you are a recipient of Medicaid, you are automatically enrolled in HFS's IV-D program, otherwise known as child support enforcement services</li> <li>If you have a child support case, and the custodial parent is a Medicaid recipient, the child support order may require the non-custodial parent to pay cash medical support</li></ul>",
    "Temporary Assistance to Needy Families": "<p>Temporary Assistance to Needy Families (TANF) is a program that provides cash benefits to pregnant mothers or parents caring for children under the age of 18 or are full- time high; school students.It is offered by the Illinois Department of Public Heath, and you will have to; apply in person – find an office near you here[http://www.dhs.state.il.us/page.aspx?module=12&officetype&county=Cook]. More information on program eligibility can be found here[https://www.benefits.gov/benefit/1662].</p> <p>Some things to know about TANF:</p> <ul><li>If you are a TANF recipient, you are automatically enrolled in the Illinois Department of Healthcare and Family Services(HFS) IV- D program, otherwise known as child support;enforcement services</li> <li>If eligible, TANF recipients will also receive LINK/SNAP benefits</li></ul>",
    "LINK/SNAP": "<p>The Supplemental Nutritional Assistance Program (SNAP), also known as \"food stamps\", is a program managed in Illinois by the Illinois Department of Human Services (DHS) that provides financial assistance for the costs of buying food.</p> <p>If you are eligible for SNAP cash benefits, you are also eligible to receive an Illinois LINK card, which works like as a debit card.DHS will regularly put the money you receive for SNAP on your LINK card, and you can use the card at eligible stores – make sure to ask an employee or look for a sign on the store window to make sure you can use your LINK card to purchase food.</p> <p>Foods and programs that are covered by SNAP includes, but are not necessarily limited to the following:</p>\; <ul><li>grains, dairy, fruits, vegetables, meat / fish / poultry, and dairy products</li> <li>plants or seeds for the purposes of growing food</li> <li>meals - on - wheels; and</li> <li>meals at eligible shelters, group homes and rehabilitation facilities.</li></ul> <p>Learn more about SNAP program requirements here[https://www.dhs.state.il.us/page.aspx?item=30357], and you can use this link [https://fscalc.dhs.illinois.gov/FSCalc/] to find out if you are eligible.</p>",
    "SSI": "<p>Supplemental Security Income (SSI) is a need-based program offered by the federal government that provides monthly cash benefits to the following low- income individuals:</p> <ul><li>those aged 65 or older</li> <li>those with certain documented physical or mental disabilities</li> <li>those who are blind; and</li> <li>in some cases, minor children that are disabled or blind</li></ul> <p>You can visit the Social Security Administration's website here [https://www.ssa.gov/ssi/text-eligibility-ussi.htm] to see if you are eligible to receive SSI.</p> <p>It is important to note that SSI disability payments CANNOT be garnished or withheld [income withholding]for the purposes of making child support payments.</p>",
    
    //POPUP contents, should be stored in a different object
    "Getting Custody": "Would you like help with getting custody? <p> If you believe you are the legal parent of this minor child, you must first legally become the primary caretaker of the child before you can receive child support payments from their other parent. Consider answering a few more questions if you'd like to find legal help with getting primary custody of a minor child.</p>",
    "College or Enforcing": "Would you like help with filing for educational expenses? <p>If your child is over 17 or has already graduated high school, you typically CANNOT receive child support payments for this child. However, if you believe your child is planning on attending or is currently enrolled in college or another type of higher education, you may be able to receive financial assistance from the other parent. This is referred to as college expenses. Consider answering a few more questions if you'd like to find legal help with college expenses. Or, click outside this box to choose a different response.</p>",
    "Divorce": "Would you like help with getting a divorce?<p>If you are currently married to the child's other parent, you cannot start a child support case against them. In order to do so you would have to file for a divorce. Consider answering a few more questions if you'd like to find legal help with getting a divorce.</p>",
    "Establishing Paternity": "Would you like help with establishing paternity? <p>If you believe you are NOT the legal parent of this child, then you CANNOT receive child support payments from their other parent. You would first have to become the legal parent of the child, and then legally be declared their primary caretaker. Consider answering a few more questions if you'd like to find legal help with establishing your paternity.</p>",
    "Modify Separation": "Would you like help with modifying a legal separation order?<p>Generally speaking, you cannot legally require your spouse to pay you child support. However, if you believe a judge has ordered that both you and your spouse are legally separated, and you want to get child support payments from your spouse, you can request the judge grant you temporary child support while the two of you are separated. Considering answering a few more questions if you'd like to find legal help with getting temporary child support.</p>"
};

/*
    Description of each referral resource. This, resourceExplanations, itemsToBring, and contactInfos could be combined into one data structure.
*/
const resourceTexts = {
    "HFS A6.111":"The Illinois Department of Healthcare and Family Services (HFS) can start a child support case against the other parent. They will also handle all of the necessary paperwork throughout the case, free of charge. To receive these services, you will have to apply for their child support enforcement services (or the IV-D program). If you are currently receiving Medicaid or Temporary Assistance to Needy Families (TANF), acceptance into the program is guaranteed.",
    "GCLC A6.111":"If HFS cannot help you, these attorneys can assist you with starting a child support case for free, but ONLY IF you know the exact address for the other parent's place of residence. Unless you qualify for a fee waiver, you will have to pay to start the case and serve the other parent (learn more).",
    "HFS A6.121":"The Illinois Department of Healthcare and Family Services (HFS) can start a child support case against the other parent. They will also handle all of the necessary paperwork throughout the case, free of charge. To receive these services, you will have to apply for their child support enforcement services (or the IV-D program). If you are currently receiving Medicaid or Temporary Assistance to Needy Families (TANF), acceptance into the program is guaranteed.",
    "GCLC A6.121":" If HFS cannot help you, these attorneys can assist you with starting a child support case for free, but ONLY IF you know the exact address for the other parent's place of residence. Unless you qualify for a fee waiver, you will have to pay to start the case and serve the other parent (learn more).",
    "HFS A6.211" :"If you believe the child's other parent lives in another state, the Illinois Department of Healthcare and Family Services (HFS) have the resources to attempt to locate them and start a child support case against them. They will also handle all of the necessary paperwork throughout the case, free of charge. To receive these services, you will have to apply for their child support enforcement services (or the IV-D program). If you are currently receiving Medicaid or Temporary Assistance to Needy Families (TANF), acceptance into the program is guaranteed.",
    "HFS A6.212" :"If you believe the child's other parent lives in another state, the Illinois Department of Healthcare and Family Services (HFS) have the resources to attempt to locate them and start a child support case against them. They will also handle all of the necessary paperwork throughout the case, free of charge. To receive these services, you will have to apply for their child support enforcement services (or the IV-D program). If you are currently receiving Medicaid or Temporary Assistance to Needy Families (TANF), acceptance into the program is guaranteed.",
    "HFS A5.111" :" If you aren't sure who the child's other parent is, the Illinois Department of Healthcare and Family Services (HFS) have the resources to attempt to locate them and start a child support case against them. They will also handle all of the necessary paperwork throughout the case, free of charge. To receive these services, you will have to apply for their child support enforcement services (or the IV-D program). If you are currently receiving Medicaid or Temporary Assistance to Needy Families (TANF), acceptance into the program is guaranteed.",
    "HFS A5.121" :" If you aren't sure who the child's other parent is, the Illinois Department of Healthcare and Family Services (HFS) have the resources to attempt to locate them and start a child support case against them. They will also handle all of the necessary paperwork throughout the case, free of charge. To receive these services, you will have to apply for their child support enforcement services (or the IV-D program). If you are currently receiving Medicaid or Temporary Assistance to Needy Families (TANF), acceptance into the program is guaranteed.",
    "HFS A4.311a.1" : "The Illinois Department of Healthcare and Family Services (HFS) can start a child support case against the other parent. They will also handle all of the necessary paperwork throughout the case, free of charge. To receive these services, you will have to apply for their child support enforcement services (or the IV-D program). If you are currently receiving Medicaid or Temporary Assistance to Needy Families (TANF), acceptance into the program is guaranteed. ",
    "GCLC A4.311a.1" : "If HFS cannot help you, these attorneys can assist you with starting a child support case for free, but ONLY IF you know the exact address for the other parent's place of residence. Unless you qualify for a fee waiver, you will have to pay to start the case and serve the other parent (learn more).",
    "HFS A4.311b.1" : "The Illinois Department of Healthcare and Family Services (HFS) can start a child support case against the other parent. They will also handle all of the necessary paperwork throughout the case, free of charge. To receive these services, you will have to apply for their child support enforcement services (or the IV-D program). If you are currently receiving Medicaid or Temporary Assistance to Needy Families (TANF), acceptance into the program is guaranteed. ",
    "GCLC A4.311b.1" : "If HFS cannot help you, these attorneys can assist you with starting a child support case for free, but ONLY IF you know the exact address for the other parent's place of residence. Unless you qualify for a fee waiver, you will have to pay to start the case and serve the other parent (learn more).",
    "HFS A4.312a.1" : "If you believe the child's other parent lives in another state, the Illinois Department of Healthcare and Family Services (HFS) have the resources to attempt to locate them and start a child support case against them. They will also handle all of the necessary paperwork throughout the case, free of charge. To receive these services, you will have to apply for their child support enforcement services (or the IV-D program). If you are currently receiving Medicaid or Temporary Assistance to Needy Families (TANF), acceptance into the program is guaranteed. ",
    "HFS A4.312b.1" : "If you believe the child's other parent lives in another state, the Illinois Department of Healthcare and Family Services (HFS) have the resources to attempt to locate them and start a child support case against them. They will also handle all of the necessary paperwork throughout the case, free of charge. To receive these services, you will have to apply for their child support enforcement services (or the IV-D program). If you are currently receiving Medicaid or Temporary Assistance to Needy Families (TANF), acceptance into the program is guaranteed. ",
    "HFS A4.321a" : "If you aren't sure who the child's other parent is, the Illinois Department of Healthcare and Family Services (HFS) have the resources to attempt to identify and locate them. If they are successful, they can then proceed with legally requiring them to pay child support, free of charge. To receive these services, you will have to apply for their child support enforcement services (or the IV-D program). If you are currently receiving Medicaid or Temporary Assistance to Needy Families (TANF), acceptance into the program is guaranteed.",
    "HFS A4.321b" : "If you aren't sure who the child's other parent is, the Illinois Department of Healthcare and Family Services (HFS) have the resources to attempt to identify and locate them. If they are successful, they can then proceed with legally requiring them to pay child support, free of charge. To receive these services, you will have to apply for their child support enforcement services (or the IV-D program). If you are currently receiving Medicaid or Temporary Assistance to Needy Families (TANF), acceptance into the program is guaranteed.",
    "HFS A2.321a.111" : "The Illinois Department of Healthcare and Family Services (HFS) can start a child support case against the other parent. They will also handle all of the necessary paperwork throughout the case, free of charge. To receive these services, you will have to apply for their child support enforcement services (or the IV-D program). If you are currently receiving Medicaid or Temporary Assistance to Needy Families (TANF), acceptance into the program is guaranteed.",
    "GCLC A2.321a.111" : "If HFS cannot help you, these attorneys can assist you with starting a child support case for free, but ONLY IF you know the exact address for the other parent's place of residence. Unless you qualify for a fee waiver, you will have to pay to start the case and serve the other parent (learn more).",
    "HFS A2.321a.121" : "The Illinois Department of Healthcare and Family Services (HFS) can start a child support case against the other parent. They will also handle all of the necessary paperwork throughout the case, free of charge. To receive these services, you will have to apply for their child support enforcement services (or the IV-D program). If you are currently receiving Medicaid or Temporary Assistance to Needy Families (TANF), acceptance into the program is guaranteed. ",
    "GCLC A2.321a.121" : "If HFS cannot help you, these attorneys can assist you with starting a child support case for free, but ONLY IF you know the exact address for the other parent's place of residence. Unless you qualify for a fee waiver, you will have to pay to start the case and serve the other parent (learn more).",
    "HFS A2.321a.211" : "If you believe the child's other parent lives in another state, the Illinois Department of Healthcare and Family Services (HFS) have the resources to attempt to locate them and start a child support case against them. They will also handle all of the necessary paperwork throughout the case, free of charge. To receive these services, you will have to apply for their child support enforcement services (or the IV-D program). If you are currently receiving Medicaid or Temporary Assistance to Needy Families (TANF), acceptance into the program is guaranteed. ",
    "HFS A2.321a.221" : "If you believe the child's other parent lives in another state, the Illinois Department of Healthcare and Family Services (HFS) have the resources to attempt to locate them and start a child support case against them. They will also handle all of the necessary paperwork throughout the case, free of charge. To receive these services, you will have to apply for their child support enforcement services (or the IV-D program). If you are currently receiving Medicaid or Temporary Assistance to Needy Families (TANF), acceptance into the program is guaranteed. ",
    "HFS A2.321b.11" : "If you aren't sure who the child's other parent is, the Illinois Department of Healthcare and Family Services (HFS) have the resources to attempt to locate them and start a child support case against them. They will also handle all of the necessary paperwork throughout the case, free of charge. To receive these services, you will have to apply for their child support enforcement services (or the IV-D program). If you are currently receiving Medicaid or Temporary Assistance to Needy Families (TANF), acceptance into the program is guaranteed. ",
    "HFS A2.321b.21" : "If you aren't sure who the child's other parent is, the Illinois Department of Healthcare and Family Services (HFS) have the resources to attempt to locate them and start a child support case against them. They will also handle all of the necessary paperwork throughout the case, free of charge. To receive these services, you will have to apply for their child support enforcement services (or the IV-D program). If you are currently receiving Medicaid or Temporary Assistance to Needy Families (TANF), acceptance into the program is guaranteed. ",
    "HFS A2.323a.111" : "The Illinois Department of Healthcare and Family Services (HFS) can start a child support case against the other parent. They will also handle all of the necessary paperwork throughout the case, free of charge. To receive these services, you will have to apply for their child support enforcement services (or the IV-D program). If you are currently receiving Medicaid or Temporary Assistance to Needy Families (TANF), acceptance into the program is guaranteed.     ",
    "GCLC A2.323a.111" : "If HFS cannot help you, these attorneys can assist you with starting a child support case for free, but ONLY IF you know the exact address for the other parent's place of residence. Unless you qualify for a fee waiver, you will have to pay to start the case and serve the other parent (learn more).",
    "HFS A2.323a.121" : "The Illinois Department of Healthcare and Family Services (HFS) can start a child support case against the other parent. They will also handle all of the necessary paperwork throughout the case, free of charge. To receive these services, you will have to apply for their child support enforcement services (or the IV-D program). If you are currently receiving Medicaid or Temporary Assistance to Needy Families (TANF), acceptance into the program is guaranteed. ",
    "GCLC A2.323a.121" : "If HFS cannot help you, these attorneys can assist you with starting a child support case for free, but ONLY IF you know the exact address for the other parent's place of residence. Unless you qualify for a fee waiver, you will have to pay to start the case and serve the other parent (learn more).",
    "HFS A2.323a.211" : "If you believe the child's other parent lives in another state, the Illinois Department of Healthcare and Family Services (HFS) have the resources to attempt to locate them and start a child support case against them. They will also handle all of the necessary paperwork throughout the case, free of charge. To receive these services, you will have to apply for their child support enforcement services (or the IV-D program). If you are currently receiving Medicaid or Temporary Assistance to Needy Families (TANF), acceptance into the program is guaranteed.     ",
    "HFS A2.323a.221" : "If you believe the child's other parent lives in another state, the Illinois Department of Healthcare and Family Services (HFS) have the resources to attempt to locate them and start a child support case against them. They will also handle all of the necessary paperwork throughout the case, free of charge. To receive these services, you will have to apply for their child support enforcement services (or the IV-D program). If you are currently receiving Medicaid or Temporary Assistance to Needy Families (TANF), acceptance into the program is guaranteed. ",
    "HFS A2.323b.11" : "If you aren't sure who the child's other parent is, the Illinois Department of Healthcare and Family Services (HFS) have the resources to attempt to identify and locate them. If they are successful, they can then proceed with legally requiring them to pay child support, free of charge. To receive these services, you will have to apply for their child support enforcement services (or the IV-D program). If you are currently receiving Medicaid or Temporary Assistance to Needy Families (TANF), acceptance into the program is guaranteed. ",
    "HFS A2.323b.21" : "If you aren't sure who the child's other parent is, the Illinois Department of Healthcare and Family Services (HFS) have the resources to attempt to identify and locate them. If they are successful, they can then proceed with legally requiring them to pay child support, free of charge. To receive these services, you will have to apply for their child support enforcement services (or the IV-D program). If you are currently receiving Medicaid or Temporary Assistance to Needy Families (TANF), acceptance into the program is guaranteed.",
}

/*
    Explanation of referral for the info icon button
    Could be built into logic since it is clearly repetitive
*/
const resourceExplanations = {
    "HFS A6.111": "It may help the people assisting you with starting a child support case to know certain information about the child's other parent, such as their annual income, their marital status, and if they are the primary caretaker of any minor children.",
    "GCLC A6.111":"It may help the people assisting you with starting a child support case to know certain information about the child's other parent, such as their annual income, their marital status, and if they are the primary caretaker of any minor children. ",
    "HFS A6.121":"It may help the people assisting you with starting a child support case to know certain information about the child's other parent, such as their annual income, their marital status, and if they are the primary caretaker of any minor children. ",
    "GCLC A6.121":"It may help the people assisting you with starting a child support case to know certain information about the child's other parent, such as their annual income, their marital status, and if they are the primary caretaker of any minor children. ",
    "HFS A6.211" :"It may help the people assisting you with starting a child support case to know certain information about the child's other parent, such as their annual income, their marital status, and if they are the primary caretaker of any minor children. ",
    "HFS A6.212" :"It may help the people assisting you with starting a child support case to know certain information about the child's other parent, such as their annual income, their marital status, and if they are the primary caretaker of any minor children. ",
    "HFS A5.111" :"It may help the people assisting you with starting a child support case to know certain information about the child's other parent, such as their annual income, their marital status, and if they are the primary caretaker of any minor children. ",
    "HFS A5.121" :"It may help the people assisting you with starting a child support case to know certain information about the child's other parent, such as their annual income, their marital status, and if they are the primary caretaker of any minor children. ",
    "HFS A4.311a.1" : "It may help the people assisting you with starting a child support case to know certain information about the child's other parent, such as their annual income, their marital status, and if they are the primary caretaker of any minor children. ",
    "GCLC A4.311a.1" : "It may help the people assisting you with starting a child support case to know certain information about the child's other parent, such as their annual income, their marital status, and if they are the primary caretaker of any minor children. ",
    "HFS A4.311b.1" : "It may help the people assisting you with starting a child support case to know certain information about the child's other parent, such as their annual income, their marital status, and if they are the primary caretaker of any minor children. ",
    "GCLC A4.311b.1" : "It may help the people assisting you with starting a child support case to know certain information about the child's other parent, such as their annual income, their marital status, and if they are the primary caretaker of any minor children. ",
    "HFS A4.312a.1" : "It may help the people assisting you with starting a child support case to know certain information about the child's other parent, such as their annual income, their marital status, and if they are the primary caretaker of any minor children. ",
    "HFS A4.312b.1" : "It may help the people assisting you with starting a child support case to know certain information about the child's other parent, such as their annual income, their marital status, and if they are the primary caretaker of any minor children. ",
    "HFS A4.321a" : "It may help the people assisting you with starting a child support case to know certain information about the child's other parent, such as their annual income, their marital status, and if they are the primary caretaker of any minor children. ",
    "HFS A4.321b" : "It may help the people assisting you with starting a child support case to know certain information about the child's other parent, such as their annual income, their marital status, and if they are the primary caretaker of any minor children. ",
    "HFS A2.321a.111" :"It may help the people assisting you with starting a child support case to know certain information about the child's other parent, such as their annual income, their marital status, and if they are the primary caretaker of any minor children. ",
    "GCLC A2.321a.111" :"It may help the people assisting you with starting a child support case to know certain information about the child's other parent, such as their annual income, their marital status, and if they are the primary caretaker of any minor children. ",
    "HFS A2.321a.121" :"It may help the people assisting you with starting a child support case to know certain information about the child's other parent, such as their annual income, their marital status, and if they are the primary caretaker of any minor children. ",
    "GCLC A2.321a.121" :"It may help the people assisting you with starting a child support case to know certain information about the child's other parent, such as their annual income, their marital status, and if they are the primary caretaker of any minor children. ",
    "HFS A2.321a.211" : "It may help the people assisting you with starting a child support case to know certain information about the child's other parent, such as their annual income, their marital status, and if they are the primary caretaker of any minor children. ",
    "HFS A2.321a.221" : "It may help the people assisting you with starting a child support case to know certain information about the child's other parent, such as their annual income, their marital status, and if they are the primary caretaker of any minor children. ",
    "HFS A2.321b.11" : "It may help the people assisting you with starting a child support case to know certain information about the child's other parent, such as their annual income, their marital status, and if they are the primary caretaker of any minor children. ",
    "HFS A2.321b.21" : "It may help the people assisting you with starting a child support case to know certain information about the child's other parent, such as their annual income, their marital status, and if they are the primary caretaker of any minor children. ",
    "HFS A2.323a.111" : "It may help the people assisting you with starting a child support case to know certain information about the child's other parent, such as their annual income, their marital status, and if they are the primary caretaker of any minor children. ",
    "GCLC A2.323a.111" : "It may help the people assisting you with starting a child support case to know certain information about the child's other parent, such as their annual income, their marital status, and if they are the primary caretaker of any minor children. ",
    "HFS A2.323a.121" : "It may help the people assisting you with starting a child support case to know certain information about the child's other parent, such as their annual income, their marital status, and if they are the primary caretaker of any minor children. ",
    "GCLC A2.323a.121" : "It may help the people assisting you with starting a child support case to know certain information about the child's other parent, such as their annual income, their marital status, and if they are the primary caretaker of any minor children. ",
    "HFS A2.323a.211" : "It may help the people assisting you with starting a child support case to know certain information about the child's other parent, such as their annual income, their marital status, and if they are the primary caretaker of any minor children. ",
    "HFS A2.323a.221" : "It may help the people assisting you with starting a child support case to know certain information about the child's other parent, such as their annual income, their marital status, and if they are the primary caretaker of any minor children. ",
    "HFS A2.323b.11" : "It may help the people assisting you with starting a child support case to know certain information about the child's other parent, such as their annual income, their marital status, and if they are the primary caretaker of any minor children. ",
    "HFS A2.323b.21" : "It may help the people assisting you with starting a child support case to know certain information about the child's other parent, such as their annual income, their marital status, and if they are the primary caretaker of any minor children. ",
}

/*
    HTML content for what items to bring. Includes checkbox images alongside text of what items. Checkbox could be removed and put into the logic instead. 
    Some patterns here could be built into the logic - for example, any GCLC referral has the exact address of the other parent, referral codes include 
    financial information if the user has a job and proof of public benefits + other financial info if the user does not have a job, etc. 
*/
const itemsToBring ={
    "HFS A6.111":"<h3>What to bring with you:</h3><img src='assets/checkbox.png' style='width:20px;'> Financial Information (pay-stubs, bank account statements, proof of public benefits) <br></br> <img src='assets/checkbox.png' style='width:20px;'><img> Copy of child's birth certificate.",
    "GCLC A6.111":"<h3>What to bring with you:</h3><img src='assets/checkbox.png' style='width:20px;'>Exact address of other parent's place of residence.<br></br> <img src='assets/checkbox.png' style='width:20px;'> Financial Information (pay-stubs, bank account statements, proof of public benefits) <br></br><img src='assets/checkbox.png' style='width:20px;'>Copy of child's birth certificate.",
    "HFS A6.121":"<h3>What to bring with you:</h3><img src='assets/checkbox.png' style='width:20px;'>Proof of Public Benefits (foodstamps, TANF, SSI).<br></br> <img src='assets/checkbox.png' style='width:20px;'> Other Financial Information (if you have other savings or assets) <br></br><img src='assets/checkbox.png' style='width:20px;'>Copy of child's birth certificate.",
    "GCLC A6.121":"<h3>What to bring with you:</h3><img src='assets/checkbox.png' style='width:20px;'>Exact address of other parent's place of residence.<br></br> <img src='assets/checkbox.png' style='width:20px;'><img>Proof of Public Benefits (foodstamps, TANF, SSI) <br></br><img src='assets/checkbox.png' style='width:20px;'> Other Financial Information (if you have other savings or assets)<br></br><img src='assets/checkbox.png' style='width:20px;'>Copy of child's birth certificate",
    "HFS A6.211" :"<h3>What to bring with you:</h3><img src='assets/checkbox.png' style='width:20px;'> Financial Information (pay-stubs, bank account statements, proof of public benefits)<br></br> <img src='assets/checkbox.png' style='width:20px;'><img> Copy of child's birth certificate",
    "HFS A6.212" :"<h3>What to bring with you:</h3><img src='assets/checkbox.png' style='width:20px;'>Proof of Public Benefits (foodstamps, TANF, SSI).<br></br> <img src='assets/checkbox.png' style='width:20px;'> Other Financial Information (if you have other savings or assets) <br></br><img src='assets/checkbox.png' style='width:20px;'>Copy of child's birth certificate.",
    "HFS A5.111" :"<h3>What to bring with you:</h3><img src='assets/checkbox.png' style='width:20px;'> Financial Information (pay-stubs, bank account statements, proof of public benefits)<br></br> <img src='assets/checkbox.png' style='width:20px;'><img> Copy of child's birth certificate",
    "HFS A5.121" :"<h3>What to bring with you:</h3><img src='assets/checkbox.png' style='width:20px;'>Proof of Public Benefits (foodstamps, TANF, SSI).<br></br> <img src='assets/checkbox.png' style='width:20px;'> Other Financial Information (if you have other savings or assets) <br></br><img src='assets/checkbox.png' style='width:20px;'>Copy of child's birth certificate.",
    "HFS A4.311a.1" : "<h3>What to bring with you:</h3><img src='assets/checkbox.png' style='width:20px;'>Proof of your child's disability.<br></br> <img src='assets/checkbox.png' style='width:20px;'> Financial Information (pay-stubs, bank account statements, proof of public benefits)<br></br><img src='assets/checkbox.png' style='width:20px;'>Copy of child's birth certificate.",
    "GCLC A4.311a.1" : "<h3>What to bring with you:</h3><img src='assets/checkbox.png' style='width:20px;'>Proof of your child's disability.<br></br> <img src='assets/checkbox.png' style='width:20px;'><img> Exact address of the other parent's place of residence <br></br><img src='assets/checkbox.png' style='width:20px;'><img> Financial Information (pay-stubs, bank account statements, proof of public benefits)<br></br><img src='assets/checkbox.png' style='width:20px;'>Copy of child's birth certificate.",
    "HFS A4.311b.1" : "<h3>What to bring with you:</h3><img src='assets/checkbox.png' style='width:20px;'>Proof of your child's disability.<br></br> <img src='assets/checkbox.png' style='width:20px;'> Proof of Public Benefits (foodstamps, TANF, SSI) <br></br><img src='assets/checkbox.png' style='width:20px;'>Other Financial Information (if you have other savings or assets) <br></br><img src='assets/checkbox.png' style='width:20px;'>Copy of child's birth certificate.",
    "GCLC A4.311b.1" : "<h3>What to bring with you:</h3><img src='assets/checkbox.png' style='width:20px;'> Exact address of the other parent's place of residence<br></br><img src='assets/checkbox.png' style='width:20px;'>Proof of your child's disability.<br></br> <img src='assets/checkbox.png' style='width:20px;'> Proof of Public Benefits (foodstamps, TANF, SSI) <br></br><img src='assets/checkbox.png' style='width:20px;'>Other Financial Information (if you have other savings or assets) <br></br><img src='assets/checkbox.png' style='width:20px;'>Copy of child's birth certificate.",
    "HFS A4.312a.1" : "<h3>What to bring with you:</h3><img src='assets/checkbox.png' style='width:20px;'> Proof of child's disability. <br></br> <img src='assets/checkbox.png' style='width:20px;'> Financial Information (pay-stubs, bank account statements, proof of public benefits) <br></br><img src='assets/checkbox.png' style='width:20px;'><img> Copy of child's birth certificate.",
    "HFS A4.312b.1" :"<h3>What to bring with you:</h3><img src='assets/checkbox.png' style='width:20px;'> Proof of child's disability. <br></br> <img src='assets/checkbox.png' style='width:20px;'> Proof of Public Benefits (foodstamps, TANF, SSI)<br></br> <img src='assets/checkbox.png' style='width:20px;'>Other Financial Information (if you have other savings or assets) <br></br><img src='assets/checkbox.png' style='width:20px;'><img> Copy of child's birth certificate.",
    "HFS A4.321a" : "<h3>What to bring with you:</h3><img src='assets/checkbox.png' style='width:20px;'> Proof of child's disability. <br></br> <img src='assets/checkbox.png' style='width:20px;'> Financial Information (pay-stubs, bank account statements, proof of public benefits) <br></br><img src='assets/checkbox.png' style='width:20px;'><img> Copy of child's birth certificate.",
    "HFS A4.321b" : "<h3>What to bring with you:</h3><img src='assets/checkbox.png' style='width:20px;'> Proof of child's disability. <br></br> <img src='assets/checkbox.png' style='width:20px;'> Proof of Public Benefits (foodstamps, TANF, SSI)<br></br> <img src='assets/checkbox.png' style='width:20px;'>Other Financial Information (if you have other savings or assets) <br></br><img src='assets/checkbox.png' style='width:20px;'><img> Copy of child's birth certificate.",
    "HFS A2.321a.111" : "<h3>What to bring with you:</h3><img src='assets/checkbox.png' style='width:20px;'>  Financial Information (pay-stubs, bank account statements, proof of public benefits).<br></br> <img src='assets/checkbox.png' style='width:20px;'>Copy of child's birth certificate.",
    "GCLC A2.321a.111" : "<h3>What to bring with you:</h3><img src='assets/checkbox.png' style='width:20px;'> Exact address for the other parent's place of residence.<br></br> <img src='assets/checkbox.png' style='width:20px;'><img>  Financial Information (pay-stubs, bank account statements, proof of public benefits) <br></br><img src='assets/checkbox.png' style='width:20px;'><img> Copy of the child's birth certificate.",
    "HFS A2.321a.121" : "<h3>What to bring with you:</h3><img src='assets/checkbox.png' style='width:20px;'>  Proof of Public Benefits (foodstamps, TANF, SSI).<br></br> <img src='assets/checkbox.png' style='width:20px;'> Other Financial Information (if you have other savings or assets)<br></br> <img src='assets/checkbox.png' style='width:20px;'>Copy of child's birth certificate.",
    "GCLC A2.321a.121" : "<h3>What to bring with you:</h3><img src='assets/checkbox.png' style='width:20px;'> Exact address of the other parent's place of residence<br>/<br> <img src='assets/checkbox.png' style='width:20px;'>Proof of Public Benefits (foodstamps, TANF, SSI).<br></br> <img src='assets/checkbox.png' style='width:20px;'> Other Financial Information (if you have other savings or assets)<br></br> <img src='assets/checkbox.png' style='width:20px;'>Copy of child's birth certificate.",
    "HFS A2.321a.211" : "<h3>What to bring with you:</h3><img src='assets/checkbox.png' style='width:20px;'> Financial Information (pay-stubs, bank account statements, proof of public benefits). <br></br> <img src='assets/checkbox.png' style='width:20px;'><img>Copy of the child's birth certificate",
    "HFS A2.321a.221" : "<h3>What to bring with you:</h3><img src='assets/checkbox.png' style='width:20px;'> Proof of Public Benefits (foodstamps, TANF, SSI).<br></br> <img src='assets/checkbox.png' style='width:20px;'> Other Financial Information (if you have other savings or assets)<br></br> <img src='assets/checkbox.png' style='width:20px;'><img>Copy of the child's birth certificate",
    "HFS A2.321b.11" : "<h3>What to bring with you:</h3><img src='assets/checkbox.png' style='width:20px;'> Financial Information (pay-stubs, bank account statements, proof of public benefits). <br></br> <img src='assets/checkbox.png' style='width:20px;'><img>Copy of the child's birth certificate",
    "HFS A2.321b.21" : "<h3>What to bring with you:</h3><img src='assets/checkbox.png' style='width:20px;'> Proof of Public Benefits (foodstamps, TANF, SSI).<br></br> <img src='assets/checkbox.png' style='width:20px;'> Other Financial Information (if you have other savings or assets)<br></br> <img src='assets/checkbox.png' style='width:20px;'><img>Copy of the child's birth certificate",
    "HFS A2.323a.111" : "<h3>What to bring with you:</h3><img src='assets/checkbox.png' style='width:20px;'> Proof of your child's disability.<br></br> <img src='assets/checkbox.png' style='width:20px;'><img> Financial Information (pay-stubs, bank account statements, proof of public benefits). <br></br><img src='assets/checkbox.png' style='width:20px;'><img> Copy of the child's birth certificate",
    "GCLC A2.323a.111" : "<h3>What to bring with you:</h3><img src='assets/checkbox.png' style='width:20px;'> Exact address of the other parent's place of residence<br></br><img src='assets/checkbox.png' style='width:20px;'> Proof of your child's disability.<br></br> <img src='assets/checkbox.png' style='width:20px;'><img> Financial Information (pay-stubs, bank account statements, proof of public benefits). <br></br><img src='assets/checkbox.png' style='width:20px;'><img> Copy of the child's birth certificate",
    "HFS A2.323a.121" : "<h3>What to bring with you:</h3><img src='assets/checkbox.png' style='width:20px;'> Proof of your child's disability.<br></br> <img src='assets/checkbox.png' style='width:20px;'><img> Proof of Public Benefits (foodstamps, TANF, SSI).<br></br> <img src='assets/checkbox.png' style='width:20px;'> Other Financial Information (if you have other savings or assets) <br></br><img src='assets/checkbox.png' style='width:20px;'><img> Copy of the child's birth certificate",
    "GCLC A2.323a.121" : "<h3>What to bring with you:</h3><img src='assets/checkbox.png' style='width:20px;'> Exact address of the other parent's place of residence<br></br><img src='assets/checkbox.png' style='width:20px;'> Proof of your child's disability.<br></br> <img src='assets/checkbox.png' style='width:20px;'><img> Proof of Public Benefits (foodstamps, TANF, SSI).<br></br> <img src='assets/checkbox.png' style='width:20px;'> Other Financial Information (if you have other savings or assets) <br></br><img src='assets/checkbox.png' style='width:20px;'><img> Copy of the child's birth certificate",
    "HFS A2.323a.211" : "<h3>What to bring with you:</h3><img src='assets/checkbox.png' style='width:20px;'> Proof of your child's disability.<br></br> <img src='assets/checkbox.png' style='width:20px;'><img> Financial Information (pay-stubs, bank account statements, proof of public benefits). <br></br><img src='assets/checkbox.png' style='width:20px;'><img> Copy of the child's birth certificate",
    "HFS A2.323a.221" : "<h3>What to bring with you:</h3><img src='assets/checkbox.png' style='width:20px;'> Proof of your child's disability.<br></br> <img src='assets/checkbox.png' style='width:20px;'><img> Proof of Public Benefits (foodstamps, TANF, SSI).<br></br> <img src='assets/checkbox.png' style='width:20px;'> Other Financial Information (if you have other savings or assets) <br></br><img src='assets/checkbox.png' style='width:20px;'><img> Copy of the child's birth certificate",
    "HFS A2.323b.11" : "<h3>What to bring with you:</h3><img src='assets/checkbox.png' style='width:20px;'> Proof of your child's disability.<br></br> <img src='assets/checkbox.png' style='width:20px;'><img> Financial Information (pay-stubs, bank account statements, proof of public benefits). <br></br><img src='assets/checkbox.png' style='width:20px;'><img> Copy of the child's birth certificate",
    "HFS A2.323b.21" : "<h3>What to bring with you:</h3><img src='assets/checkbox.png' style='width:20px;'> Proof of your child's disability.<br></br> <img src='assets/checkbox.png' style='width:20px;'><img> Proof of Public Benefits (foodstamps, TANF, SSI).<br></br> <img src='assets/checkbox.png' style='width:20px;'> Other Financial Information (if you have other savings or assets) <br></br><img src='assets/checkbox.png' style='width:20px;'><img> Copy of the child's birth certificate",
    
}

/*
    Contact information for each agency in each referral code. This could be written into the logic as well
    - possible to have only the agency name (e.g. HFS, GCLC) stored here and then check each referral code for the agency code name in the JS logic. 
*/
const contactInfos = {
    "HFS A6.111":"<img src='assets/HFS-logo.jpg' alt='HFS logo' class='logo'></img> <p><img src='assets/website.png' style='width:15px; margin-right: 5px;'><a href='http://www.hfs.illinois.gov/'>www.hfs.illinois.gov</a></p><p><img src='assets/phone.png' style='width:15px; margin-right: 5px;'><a href='tel:1-800-447-4278'>1-800-447-4278</a></p><p><img src='assets/clock.png' style='width:15px; margin-right: 5px;'>Mon-Fri 9-5</p><p><img src='assets/address.png' style='width:15px; margin-right: 5px;'>33 Main St. Chicago, IL</p>",
    "GCLC A6.111":"<img src= 'assets/gclc_logo.png' alt='Chicago legal clinic logo' class='logo'></img><p><img src='assets/website.png' style='width:15px; margin-right: 5px;'><a href='https://clclaw.org/'>clclaw.org</a></p><p><img src='assets/phone.png' style='width:15px; margin-right: 5px;'><a href='tel:2122222020'>212-222-2020</a></p><p><img src='assets/clock.png' style='width:15px; margin-right: 5px;'>Mon-Fri 9-5</p><p><img src='assets/address.png' style='width:15px; margin-right: 5px;'>102 Libert Ave. Chicago, IL</p>",
    "HFS A6.121":"<img src='assets/HFS-logo.jpg' alt='HFS logo' class='logo'></img> <p><img src='assets/website.png' style='width:15px; margin-right: 5px;'><a href='http://www.hfs.illinois.gov/'>www.hfs.illinois.gov</a></p><p><img src='assets/phone.png' style='width:15px; margin-right: 5px;'><a href='tel:1-800-447-4278'>1-800-447-4278</a></p><p><img src='assets/clock.png' style='width:15px; margin-right: 5px;'>Mon-Fri 9-5</p><p><img src='assets/address.png' style='width:15px; margin-right: 5px;'>33 Main St. Chicago, IL</p>",
    "GCLC A6.121":"<img src= 'assets/gclc_logo.png' alt='Chicago legal clinic logo' class='logo'></img><p><img src='assets/website.png' style='width:15px; margin-right: 5px;'><a href='https://clclaw.org/'>clclaw.org</a></p><p><img src='assets/phone.png' style='width:15px; margin-right: 5px;'><a href='tel:2122222020'>212-222-2020</a></p><p><img src='assets/clock.png' style='width:15px; margin-right: 5px;'>Mon-Fri 9-5</p><p><img src='assets/address.png' style='width:15px; margin-right: 5px;'>102 Libert Ave. Chicago, IL</p>",
    "HFS A6.211" :"<img src='assets/HFS-logo.jpg' alt='HFS logo' class='logo'></img> <p><img src='assets/website.png' style='width:15px; margin-right: 5px;'><a href='http://www.hfs.illinois.gov/'>www.hfs.illinois.gov</a></p><p><img src='assets/phone.png' style='width:15px; margin-right: 5px;'><a href='tel:1-800-447-4278'>1-800-447-4278</a></p><p><img src='assets/clock.png' style='width:15px; margin-right: 5px;'>Mon-Fri 9-5</p><p><img src='assets/address.png' style='width:15px; margin-right: 5px;'>33 Main St. Chicago, IL</p>",
    "HFS A6.212" :"<img src='assets/HFS-logo.jpg' alt='HFS logo' class='logo'></img> <p><img src='assets/website.png' style='width:15px; margin-right: 5px;'><a href='http://www.hfs.illinois.gov/'>www.hfs.illinois.gov</a></p><p><img src='assets/phone.png' style='width:15px; margin-right: 5px;'><a href='tel:1-800-447-4278'>1-800-447-4278</a></p><p><img src='assets/clock.png' style='width:15px; margin-right: 5px;'>Mon-Fri 9-5</p><p><img src='assets/address.png' style='width:15px; margin-right: 5px;'>33 Main St. Chicago, IL</p>",
    "HFS A5.111" :"<img src='assets/HFS-logo.jpg' alt='HFS logo' class='logo'></img> <p><img src='assets/website.png' style='width:15px; margin-right: 5px;'><a href='http://www.hfs.illinois.gov/'>www.hfs.illinois.gov</a></p><p><img src='assets/phone.png' style='width:15px; margin-right: 5px;'><a href='tel:1-800-447-4278'>1-800-447-4278</a></p><p><img src='assets/clock.png' style='width:15px; margin-right: 5px;'>Mon-Fri 9-5</p><p><img src='assets/address.png' style='width:15px; margin-right: 5px;'>33 Main St. Chicago, IL</p>",
    "HFS A5.121" :"<img src='assets/HFS-logo.jpg' alt='HFS logo' class='logo'></img> <p><img src='assets/website.png' style='width:15px; margin-right: 5px;'><a href='http://www.hfs.illinois.gov/'>www.hfs.illinois.gov</a></p><p><img src='assets/phone.png' style='width:15px; margin-right: 5px;'><a href='tel:1-800-447-4278'>1-800-447-4278</a></p><p><img src='assets/clock.png' style='width:15px; margin-right: 5px;'>Mon-Fri 9-5</p><p><img src='assets/address.png' style='width:15px; margin-right: 5px;'>33 Main St. Chicago, IL</p>",
    "HFS A4.311a.1" :"<img src='assets/HFS-logo.jpg' alt='HFS logo' class='logo'></img> <p><img src='assets/website.png' style='width:15px; margin-right: 5px;'><a href='http://www.hfs.illinois.gov/'>www.hfs.illinois.gov</a></p><p><img src='assets/phone.png' style='width:15px; margin-right: 5px;'><a href='tel:1-800-447-4278'>1-800-447-4278</a></p><p><img src='assets/clock.png' style='width:15px; margin-right: 5px;'>Mon-Fri 9-5</p><p><img src='assets/address.png' style='width:15px; margin-right: 5px;'>33 Main St. Chicago, IL</p>",
    "GCLC A4.311a.1" : "<img src= 'assets/gclc_logo.png' alt='Chicago legal clinic logo' class='logo'></img><p><img src='assets/website.png' style='width:15px; margin-right: 5px;'><a href='https://clclaw.org/'>clclaw.org</a></p><p><img src='assets/phone.png' style='width:15px; margin-right: 5px;'><a href='tel:2122222020'>212-222-2020</a></p><p><img src='assets/clock.png' style='width:15px; margin-right: 5px;'>Mon-Fri 9-5</p><p><img src='assets/address.png' style='width:15px; margin-right: 5px;'>102 Libert Ave. Chicago, IL</p>",
    "HFS A4.311b.1" : "<img src='assets/HFS-logo.jpg' alt='HFS logo' class='logo'></img> <p><img src='assets/website.png' style='width:15px; margin-right: 5px;'><a href='http://www.hfs.illinois.gov/'>www.hfs.illinois.gov</a></p><p><img src='assets/phone.png' style='width:15px; margin-right: 5px;'><a href='tel:1-800-447-4278'>1-800-447-4278</a></p><p><img src='assets/clock.png' style='width:15px; margin-right: 5px;'>Mon-Fri 9-5</p><p><img src='assets/address.png' style='width:15px; margin-right: 5px;'>33 Main St. Chicago, IL</p>",
    "GCLC A4.311b.1" : "<img src= 'assets/gclc_logo.png' alt='Chicago legal clinic logo' class='logo'></img><p><img src='assets/website.png' style='width:15px; margin-right: 5px;'><a href='https://clclaw.org/'>clclaw.org</a></p><p><img src='assets/phone.png' style='width:15px; margin-right: 5px;'><a href='tel:2122222020'>212-222-2020</a></p><p><img src='assets/clock.png' style='width:15px; margin-right: 5px;'>Mon-Fri 9-5</p><p><img src='assets/address.png' style='width:15px; margin-right: 5px;'>102 Libert Ave. Chicago, IL</p>",
    "HFS A4.312a.1" : "<img src='assets/HFS-logo.jpg' alt='HFS logo' class='logo'></img> <p><img src='assets/website.png' style='width:15px; margin-right: 5px;'><a href='http://www.hfs.illinois.gov/'>www.hfs.illinois.gov</a></p><p><img src='assets/phone.png' style='width:15px; margin-right: 5px;'><a href='tel:1-800-447-4278'>1-800-447-4278</a></p><p><img src='assets/clock.png' style='width:15px; margin-right: 5px;'>Mon-Fri 9-5</p><p><img src='assets/address.png' style='width:15px; margin-right: 5px;'>33 Main St. Chicago, IL</p>",
    "HFS A4.312b.1" :"<img src='assets/HFS-logo.jpg' alt='HFS logo' class='logo'></img> <p><img src='assets/website.png' style='width:15px; margin-right: 5px;'><a href='http://www.hfs.illinois.gov/'>www.hfs.illinois.gov</a></p><p><img src='assets/phone.png' style='width:15px; margin-right: 5px;'><a href='tel:1-800-447-4278'>1-800-447-4278</a></p><p><img src='assets/clock.png' style='width:15px; margin-right: 5px;'>Mon-Fri 9-5</p><p><img src='assets/address.png' style='width:15px; margin-right: 5px;'>33 Main St. Chicago, IL</p>",
    "HFS A4.321a" : "<img src='assets/HFS-logo.jpg' alt='HFS logo' class='logo'></img> <p><img src='assets/website.png' style='width:15px; margin-right: 5px;'><a href='http://www.hfs.illinois.gov/'>www.hfs.illinois.gov</a></p><p><img src='assets/phone.png' style='width:15px; margin-right: 5px;'><a href='tel:1-800-447-4278'>1-800-447-4278</a></p><p><img src='assets/clock.png' style='width:15px; margin-right: 5px;'>Mon-Fri 9-5</p><p><img src='assets/address.png' style='width:15px; margin-right: 5px;'>33 Main St. Chicago, IL</p>",
    "HFS A4.321b" : "<img src='assets/HFS-logo.jpg' alt='HFS logo' class='logo'></img> <p><img src='assets/website.png' style='width:15px; margin-right: 5px;'><a href='http://www.hfs.illinois.gov/'>www.hfs.illinois.gov</a></p><p><img src='assets/phone.png' style='width:15px; margin-right: 5px;'><a href='tel:1-800-447-4278'>1-800-447-4278</a></p><p><img src='assets/clock.png' style='width:15px; margin-right: 5px;'>Mon-Fri 9-5</p><p><img src='assets/address.png' style='width:15px; margin-right: 5px;'>33 Main St. Chicago, IL</p>",
    "HFS A2.321a.111" : "<img src='assets/HFS-logo.jpg' alt='HFS logo' class='logo'></img> <p><img src='assets/website.png' style='width:15px; margin-right: 5px;'><a href='http://www.hfs.illinois.gov/'>www.hfs.illinois.gov</a></p><p><img src='assets/phone.png' style='width:15px; margin-right: 5px;'><a href='tel:1-800-447-4278'>1-800-447-4278</a></p><p><img src='assets/clock.png' style='width:15px; margin-right: 5px;'>Mon-Fri 9-5</p><p><img src='assets/address.png' style='width:15px; margin-right: 5px;'>33 Main St. Chicago, IL</p>",
    "GCLC A2.321a.111" : "<img src= 'assets/gclc_logo.png' alt='Chicago legal clinic logo' class='logo'></img><p><img src='assets/website.png' style='width:15px; margin-right: 5px;'><a href='https://clclaw.org/'>clclaw.org</a></p><p><img src='assets/phone.png' style='width:15px; margin-right: 5px;'><a href='tel:2122222020'>212-222-2020</a></p><p><img src='assets/clock.png' style='width:15px; margin-right: 5px;'>Mon-Fri 9-5</p><p><img src='assets/address.png' style='width:15px; margin-right: 5px;'>102 Libert Ave. Chicago, IL</p>",
    "HFS A2.321a.121" : "<img src='assets/HFS-logo.jpg' alt='HFS logo' class='logo'></img> <p><img src='assets/website.png' style='width:15px; margin-right: 5px;'><a href='http://www.hfs.illinois.gov/'>www.hfs.illinois.gov</a></p><p><img src='assets/phone.png' style='width:15px; margin-right: 5px;'><a href='tel:1-800-447-4278'>1-800-447-4278</a></p><p><img src='assets/clock.png' style='width:15px; margin-right: 5px;'>Mon-Fri 9-5</p><p><img src='assets/address.png' style='width:15px; margin-right: 5px;'>33 Main St. Chicago, IL</p>",
    "GCLC A2.321a.121" : "<img src= 'assets/gclc_logo.png' alt='Chicago legal clinic logo' class='logo'></img><p><img src='assets/website.png' style='width:15px; margin-right: 5px;'><a href='https://clclaw.org/'>clclaw.org</a></p><p><img src='assets/phone.png' style='width:15px; margin-right: 5px;'><a href='tel:2122222020'>212-222-2020</a></p><p><img src='assets/clock.png' style='width:15px; margin-right: 5px;'>Mon-Fri 9-5</p><p><img src='assets/address.png' style='width:15px; margin-right: 5px;'>102 Libert Ave. Chicago, IL</p>",
    "HFS A2.321a.211" : "<img src='assets/HFS-logo.jpg' alt='HFS logo' class='logo'></img> <p><img src='assets/website.png' style='width:15px; margin-right: 5px;'><a href='http://www.hfs.illinois.gov/'>www.hfs.illinois.gov</a></p><p><img src='assets/phone.png' style='width:15px; margin-right: 5px;'><a href='tel:1-800-447-4278'>1-800-447-4278</a></p><p><img src='assets/clock.png' style='width:15px; margin-right: 5px;'>Mon-Fri 9-5</p><p><img src='assets/address.png' style='width:15px; margin-right: 5px;'>33 Main St. Chicago, IL</p>",
    "HFS A2.321a.221" : "<img src='assets/HFS-logo.jpg' alt='HFS logo' class='logo'></img> <p><img src='assets/website.png' style='width:15px; margin-right: 5px;'><a href='http://www.hfs.illinois.gov/'>www.hfs.illinois.gov</a></p><p><img src='assets/phone.png' style='width:15px; margin-right: 5px;'><a href='tel:1-800-447-4278'>1-800-447-4278</a></p><p><img src='assets/clock.png' style='width:15px; margin-right: 5px;'>Mon-Fri 9-5</p><p><img src='assets/address.png' style='width:15px; margin-right: 5px;'>33 Main St. Chicago, IL</p>",
    "HFS A2.321b.11" : "<img src='assets/HFS-logo.jpg' alt='HFS logo' class='logo'></img> <p><img src='assets/website.png' style='width:15px; margin-right: 5px;'><a href='http://www.hfs.illinois.gov/'>www.hfs.illinois.gov</a></p><p><img src='assets/phone.png' style='width:15px; margin-right: 5px;'><a href='tel:1-800-447-4278'>1-800-447-4278</a></p><p><img src='assets/clock.png' style='width:15px; margin-right: 5px;'>Mon-Fri 9-5</p><p><img src='assets/address.png' style='width:15px; margin-right: 5px;'>33 Main St. Chicago, IL</p>",
    "HFS A2.321b.21" : "<img src='assets/HFS-logo.jpg' alt='HFS logo' class='logo'></img> <p><img src='assets/website.png' style='width:15px; margin-right: 5px;'><a href='http://www.hfs.illinois.gov/'>www.hfs.illinois.gov</a></p><p><img src='assets/phone.png' style='width:15px; margin-right: 5px;'><a href='tel:1-800-447-4278'>1-800-447-4278</a></p><p><img src='assets/clock.png' style='width:15px; margin-right: 5px;'>Mon-Fri 9-5</p><p><img src='assets/address.png' style='width:15px; margin-right: 5px;'>33 Main St. Chicago, IL</p>",
    "HFS A2.323a.111" : "<img src='assets/HFS-logo.jpg' alt='HFS logo' class='logo'></img> <p><img src='assets/website.png' style='width:15px; margin-right: 5px;'><a href='http://www.hfs.illinois.gov/'>www.hfs.illinois.gov</a></p><p><img src='assets/phone.png' style='width:15px; margin-right: 5px;'><a href='tel:1-800-447-4278'>1-800-447-4278</a></p><p><img src='assets/clock.png' style='width:15px; margin-right: 5px;'>Mon-Fri 9-5</p><p><img src='assets/address.png' style='width:15px; margin-right: 5px;'>33 Main St. Chicago, IL</p>",
    "GCLC A2.323a.111" : "<img src= 'assets/gclc_logo.png' alt='Chicago legal clinic logo' class='logo'></img><p><img src='assets/website.png' style='width:15px; margin-right: 5px;'><a href='https://clclaw.org/'>clclaw.org</a></p><p><img src='assets/phone.png' style='width:15px; margin-right: 5px;'><a href='tel:2122222020'>212-222-2020</a></p><p><img src='assets/clock.png' style='width:15px; margin-right: 5px;'>Mon-Fri 9-5</p><p><img src='assets/address.png' style='width:15px; margin-right: 5px;'>102 Libert Ave. Chicago, IL</p>",
    "HFS A2.323a.121" : "<img src='assets/HFS-logo.jpg' alt='HFS logo' class='logo'></img> <p><img src='assets/website.png' style='width:15px; margin-right: 5px;'><a href='http://www.hfs.illinois.gov/'>www.hfs.illinois.gov</a></p><p><img src='assets/phone.png' style='width:15px; margin-right: 5px;'><a href='tel:1-800-447-4278'>1-800-447-4278</a></p><p><img src='assets/clock.png' style='width:15px; margin-right: 5px;'>Mon-Fri 9-5</p><p><img src='assets/address.png' style='width:15px; margin-right: 5px;'>33 Main St. Chicago, IL</p>",
    "GCLC A2.323a.121" : "<img src= 'assets/gclc_logo.png' alt='Chicago legal clinic logo' class='logo'></img><p><img src='assets/website.png' style='width:15px; margin-right: 5px;'><a href='https://clclaw.org/'>clclaw.org</a></p><p><img src='assets/phone.png' style='width:15px; margin-right: 5px;'><a href='tel:2122222020'>212-222-2020</a></p><p><img src='assets/clock.png' style='width:15px; margin-right: 5px;'>Mon-Fri 9-5</p><p><img src='assets/address.png' style='width:15px; margin-right: 5px;'>102 Libert Ave. Chicago, IL</p>",
    "HFS A2.323a.211" : "<img src='assets/HFS-logo.jpg' alt='HFS logo' class='logo'></img> <p><img src='assets/website.png' style='width:15px; margin-right: 5px;'><a href='http://www.hfs.illinois.gov/'>www.hfs.illinois.gov</a></p><p><img src='assets/phone.png' style='width:15px; margin-right: 5px;'><a href='tel:1-800-447-4278'>1-800-447-4278</a></p><p><img src='assets/clock.png' style='width:15px; margin-right: 5px;'>Mon-Fri 9-5</p><p><img src='assets/address.png' style='width:15px; margin-right: 5px;'>33 Main St. Chicago, IL</p>",
    "HFS A2.323a.221" : "<img src='assets/HFS-logo.jpg' alt='HFS logo' class='logo'></img> <p><img src='assets/website.png' style='width:15px; margin-right: 5px;'><a href='http://www.hfs.illinois.gov/'>www.hfs.illinois.gov</a></p><p><img src='assets/phone.png' style='width:15px; margin-right: 5px;'><a href='tel:1-800-447-4278'>1-800-447-4278</a></p><p><img src='assets/clock.png' style='width:15px; margin-right: 5px;'>Mon-Fri 9-5</p><p><img src='assets/address.png' style='width:15px; margin-right: 5px;'>33 Main St. Chicago, IL</p>",
    "HFS A2.323b.11" : "<img src='assets/HFS-logo.jpg' alt='HFS logo' class='logo'></img> <p><img src='assets/website.png' style='width:15px; margin-right: 5px;'><a href='http://www.hfs.illinois.gov/'>www.hfs.illinois.gov</a></p><p><img src='assets/phone.png' style='width:15px; margin-right: 5px;'><a href='tel:1-800-447-4278'>1-800-447-4278</a></p><p><img src='assets/clock.png' style='width:15px; margin-right: 5px;'>Mon-Fri 9-5</p><p><img src='assets/address.png' style='width:15px; margin-right: 5px;'>33 Main St. Chicago, IL</p>",
    "HFS A2.323b.21" : "<img src='assets/HFS-logo.jpg' alt='HFS logo' class='logo'></img> <p><img src='assets/website.png' style='width:15px; margin-right: 5px;'><a href='http://www.hfs.illinois.gov/'>www.hfs.illinois.gov</a></p><p><img src='assets/phone.png' style='width:15px; margin-right: 5px;'><a href='tel:1-800-447-4278'>1-800-447-4278</a></p><p><img src='assets/clock.png' style='width:15px; margin-right: 5px;'>Mon-Fri 9-5</p><p><img src='assets/address.png' style='width:15px; margin-right: 5px;'>33 Main St. Chicago, IL</p>",

    //HFS  "<img src='assets/HFS-logo.jpg' alt='HFS logo' class='logo'></img> <p><img src='assets/website.png' style='width:15px; margin-right: 5px;'><a href='http://www.hfs.illinois.gov/'>www.hfs.illinois.gov</a></p><p><img src='assets/phone.png' style='width:15px; margin-right: 5px;'><a href='tel:1-800-447-4278'>1-800-447-4278</a></p><p><img src='assets/clock.png' style='width:15px; margin-right: 5px;'>Mon-Fri 9-5</p><p><img src='assets/address.png' style='width:15px; margin-right: 5px;'>33 Main St. Chicago, IL</p>",
    //GCLC  "<img src= 'assets/gclc_logo.png' alt='Chicago legal clinic logo' class='logo'></img><p><img src='assets/website.png' style='width:15px; margin-right: 5px;'><a href='https://clclaw.org/'>clclaw.org</a></p><p><img src='assets/phone.png' style='width:15px; margin-right: 5px;'><a href='tel:2122222020'>212-222-2020</a></p><p><img src='assets/clock.png' style='width:15px; margin-right: 5px;'>Mon-Fri 9-5</p><p><img src='assets/address.png' style='width:15px; margin-right: 5px;'>102 Libert Ave. Chicago, IL</p>",
}

function makeSurvey(array) {
    /* 
    A function that takes an array of objects (surveyArray) and converts it into a tree of Option objects.
    */
    const o = new Option();

    for (let i = 0; i < array.length; i++) {
        const e = array[i];
        o.text = e.text;
        o.question = e.question;
        o.explanation = e.explanation;
        if(o.hasOwnProperty("redirect")){
            o.redirect = e.redirect;
        }
        if(o.hasOwnProperty("explanation")){
            o.explanation = e.explanation;
        }
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


 /*
    Takes whatever branch of the Option tree you are on and creates a button that will take you to the branch that came before it, taking you one step back in the survey. If you go back to the beginning, this button will take you to start_survey.html.
    */
function setupBackButton(option) {
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
            window.location.assign("home.html");
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

/* 
    Replaces an old set of answer buttons with the ones for a different question.
*/
function replaceButtons(option) {
    
    // Remove old buttons

    const buttonArea = document.getElementById("buttons");
    // SOURCE: https://www.geeksforgeeks.org/remove-all-the-child-elements-of-a-dom-node-in-javascript/
    let b = buttonArea.firstElementChild;
    while (b) {
        buttonArea.removeChild(b);
        b = buttonArea.firstChild;
    }

    //UNCOMMENT THIS FOR BUTTONS IN A SQUARE WITH FUTURE HOVER FEATURE
    // if(option.text=="Begin Survey"){
    //     buttonArea.classList.add("buttonsGrid");
    //     //CREATE HOVER FEATURE HERE!!
    // }
    // else{
    //      buttonArea.classList.add("buttonsColumn");
    //      buttonArea.classList.remove("buttonsGrid");
    // }

    // Create new buttons
    for (let i = 0; i < option.getAnswers().length; i++) {
        const answer = option.getAnswers()[i];

        const button = document.createElement("input");
        button.setAttribute("type", "submit");
        button.setAttribute("value", answer.text);

        button.setAttribute("class", "surveyButton");

        //if it is the start of the survey
        if(option.text=="Begin Survey"){
            button.style.width="900px"; //makes it narrower to fit the second button next to it
           // button.classList.add("problem"); //STYLE FOR GRID OF OPTIONS
        }

        button.addEventListener("click", function () {
            if(answer.redirect !== undefined){ //if an alternate referall quiz exists, create popup windows
                createModal("defModal", definitions[answer.redirect]);
            } else{
                setup(answer);
            }
        });

        // Insert new button
        buttonArea.appendChild(button);
    }



}

/* Creates modal window with a background overlay underneath and a close button in the corner that clears the whole modal
source : https://www.thatsoftwaredude.com/content/9123/the-simplest-way-to-create-dynamic-modal-popups-in-javascript */
function createModal(id, d){

    document.getElementById("modalBox").classList.add("on");
    let el = document.getElementById(id);
    el.classList.add("on");
    el.innerHTML=d;

    //creating background
    let body = document.querySelector("body");
    let bg = document.createElement("div"); //overlay
    if(id==="defModal"){
        bg.id = "overlay";
        bg.className = "modal-js-overlay";
        body.appendChild(bg);
    }

    let close = document.createElement("span");
    el.appendChild(close);
    if(id==="defModal"){
        close.className = "modal-js-close";
    }
    close.innerHTML = "x";
    close.addEventListener('click', function () {
        if(id==="defModal"){
            body.removeChild(document.getElementById("overlay"));
        }
        el.classList.remove('on');
        document.getElementById("modalBox").classList.remove('on');
        el.innerHTML = ""; //clears modal
    });

    // Source: https://gomakethings.com/detecting-clicks-inside-an-element-with-vanilla-javascript/
    bg.addEventListener('click', function (event) {

        // If the click happened inside the modal, do nothing
        if (event.target.closest('#defModal')) return;
    
        // Otherwise, close any open modal windows
        if(id==="defModal"){
            body.removeChild(document.getElementById("overlay"));
        }
        el.classList.remove('on');
        document.getElementById("modalBox").classList.remove('on');
        el.innerHTML = "";
    
    });

    const buttons = document.createElement("div");
    buttons.style.display = "flex";
    buttons.style.justifyContent = "center";
    const button1 = document.createElement("input");
    button1.setAttribute("type", "submit");
    button1.classList.add("surveyButton");
    button1.setAttribute("value", " Answer a few more questions ");
    // button1.addEventListener("click", function () {
            // FILL IN LATER
    // }


    const button2 = document.createElement("input");
    button2.setAttribute("type", "submit");
    button2.classList.add("surveyButton");
    button2.setAttribute("value", " Close this window ");
    button2.addEventListener("click", function () {
        if(id==="defModal"){
            body.removeChild(document.getElementById("overlay"));
        }
        el.classList.remove('on');
        document.getElementById("modalBox").classList.remove('on');
        el.innerHTML = ""; //clears modal
    });

    buttons.appendChild(button1);
    buttons.appendChild(button2);
    el.appendChild(buttons);

}


/*
    Asks a series of demographic questions to make referrals more specific
*/
function extraQuestions(resources) {
    console.log(resources);

    document.getElementById("extra_questions").style.display="block";
    document.getElementById("resources").style.display="none";
    document.getElementById("yes_no").style.display="none";
    document.getElementById("right_questions").style.display="none";
    document.getElementById("question_area").style.display="none";
    document.getElementById("left_done").style.display="none";
    document.getElementById("right_done").style.display="none";

    document.getElementById("right_done").addEventListener("click", function(){
        document.getElementById("extra_questions").style.display="none";
        //setup(makeSurvey(surveyArray));
        showResources(resources);
    });

    document.getElementById("left_done").addEventListener("click", function(){
        document.getElementById("left_questions").style.display="none";
        document.getElementById("left_done").style.display="none";
        document.getElementById("right_questions").style.display="block";
        document.getElementById("right_done").style.display="block";

    });

    const income1 =document.getElementById("income1");
    const income2 =document.getElementById("income2");

    document.getElementById("dropdown").addEventListener("change", function(){
        
        document.getElementById("yes_no").style.display="block";

        //show first income question
        income1.style.display="flex";
        //hide second income question
        income2.style.display="none";
        document.getElementById("income2buttons").style.display="none";

        var dropdown = document.getElementById("dropdown");
        var choice = dropdown.options[dropdown.selectedIndex].text;
        if(choice=="1"){
            people=1;
            income1.innerText="Is your family income more than $15,950?"
            income2.innerText="Is your family income more than $31,900?"
        }
        else if(choice=="2"){
            people=2;
            income1.innerText="Is your family income more than $21,550?"
            income2.innerText="Is your family income more than $43,100?"
        }
        else if(choice=="3"){
            people=3;
            income1.innerText="Is your family income more than $27,150?"
            income2.innerText="Is your family income more than $54,300?"
        }
        else if(choice=="4"){
            people=4;
            income1.innerText="Is your family income more than $32,750?"
            income2.innerText="Is your family income more than $65,500?"
        }
        else if(choice=="5"){
            people=5;
            income1.innerText="Is your family income more than $38,350?"
            income2.innerText="Is your family income more than $76,700?"
        }
        else if(choice=="6"){
            people=6;
            income1.innerText="Is your family income more than $43,950?"
            income2.innerText="Is your family income more than $87,900?"
        }
        else if(choice=="7"){
            people=7;
            income1.innerText="Is your family income more than $49,550?"
            income2.innerText="Is your family income more than $99,100?"
        }
        else if(choice=="8+"){
            people=8;
            income1.innerText="Is your family income more than $55,150?"
            income2.innerText="Is your family income more than $110,300?"
        }
    });

    const income1_yes = document.getElementById("income1_yes");
    const income1_no = document.getElementById("income1_no");
    const income2_no = document.getElementById("income2_yes");
    const income2_yes = document.getElementById("income2_no");

    income1_yes.onclick= function(){
        income2.style.display="flex";
        document.getElementById("income2buttons").style.display="flex";
        document.getElementById("right_questions").style.display="none";
        incomeOne=1;
    };
    income1_no.onclick= function(){
        income2.style.display="none";
        document.getElementById("income2buttons").style.display="none";
        incomeOne=0;
        document.getElementById("left_done").style.display="block";
    };
    income2_yes.onclick= function(){
        document.getElementById("left_done").style.display="block";
    };
    income2_no.onclick= function(){
        document.getElementById("left_done").style.display="block";
    };
}

/* 
Makes resources information appear on the screen and the survey content disappear from the page
*/
function showResources(resources) {
    document.getElementById("resources").style.display="block";

    console.log(resources); //debugging 

    const r = resources[0];
    console.log(r);

    //primary resource info
    let el = document.createElement("div");
    el.classList.add("resourceDescription");
    //contact info
    let contact = document.createElement("div");
    contact.classList.add("contactInfo");
    contact.innerHTML=contactInfos[r];
    //resource description
    let el2 = document.createElement("div");
    let p = document.createElement("p");
    p.classList.add("resourceText");
    p.innerHTML=resourceTexts[r];
    el2.appendChild(p);
    //what to bring
    let p2 = document.createElement("p");
    p2.classList.add("resourceText");
    p2.innerHTML=itemsToBring[r];
    el2.appendChild(p2);

    el.appendChild(contact);
    el.appendChild(el2);

    document.getElementById("resources").appendChild(el);

    //additional resources - this eventually needs to be a for loop if there are more than 2 additional resources
    //collapsible button
    if(resources[1]!== undefined){
        const r2 = resources[1];

        let button = document.createElement("div");
        button.classList.add("collapsible");
        button.innerText = "Additional Resources:"
        //content of collapsible
        let content = document.createElement("div");
        content.classList.add("additionalResources");
        //contact info
        let contact2 = document.createElement("div");
        contact2.classList.add("contactInfo");
        contact2.innerHTML=contactInfos[r2];
        content.appendChild(contact2);
        //resource description
        let el3 = document.createElement("div");
        let p3 = document.createElement("p");
        
        p3.classList.add("resourceText");
        p3.innerHTML=resourceTexts[r2];
        el3.appendChild(p3);
        //what to bring
        let p4 = document.createElement("p");
        p4.classList.add("resourceText");
        p4.innerHTML=itemsToBring[r2];
        el3.appendChild(p4);

        content.appendChild(el3);

        button.addEventListener("click", function(){
            this.classList.toggle("active");
            if (content.style.display === "flex") {
                content.style.display = "none";
            } else {
                content.style.display = "flex";
            }
        });
        document.getElementById("resources").appendChild(button);
        document.getElementById("resources").appendChild(content);
    }

    //info icon explanation, adapted version of setupExplanation function
    const explanationArea = document.getElementById("footer");
    const explanation = document.getElementById("explanationModal");
    const explIcon = document.getElementById("bottomIcon");
    const newExplIcon = document.createElement("img");
    newExplIcon.setAttribute("src", "assets/infoIcon.png");
    newExplIcon.setAttribute("id", "bottomIcon");
    newExplIcon.addEventListener("click", function toggleExplanation(){
        if(explanation.style.display==="none"){
            explanation.style.display="block";
            explanation.innerHTML = resourceExplanations[r];
        } else {
            explanation.style.display="none";
        }
    });
    explanationArea.replaceChild(newExplIcon, explIcon);   

    //help us improve button
    let input = document.createElement("input");
    input.type = "submit";
    input.value = "Help us improve the survey";
    input.classList.add("surveyButton");
    input.id = "helpUsImprove";
    input.addEventListener("click", function () {
        window.open("https://forms.gle/PNjiqthisFfuQ7nq5");
    });
    document.getElementById("resources").appendChild(input);
}

/* 
    Decides whether it's time to end the survey and display information about legal aid resources.
    Returns 1 if it's the end, returns 0 if not
     */
function toggleResources(option) {
    const resources = document.getElementById("resources");
    if (option.getResources() !== undefined) {
        // This branch of the Option tree has the 'resources' property, which means that it's the end of the survey and there are resources to recommend.
        resources.style.display = "initial";
        resources.firstElementChild.style.display = "initial";

        //extraQuestions(option.getResources()); -- TOGGLES THE EXTRA QUESTIONS IF WE WANT TO ASK THESE
        showResources(option.getResources()); // -- IF WE DO NOT WANT TO ASK THE EXTRA QUESTIONS
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

/*
    Changes the content of the icon explanation popup button
*/
function setupExplanation(option){
    const explanationArea = document.getElementById("footer");
    const explanation = document.getElementById("explanationModal");
    if(option.text!= "Begin Survey") {
        explanation.style.display="none";
    } else{
        explanation.style.display="block";
        explanation.innerHTML = option.explanation;
    }
    const explIcon = document.getElementById("bottomIcon");
    const newExplIcon = document.createElement("img");

    newExplIcon.setAttribute("src", "assets/infoIcon.png");
    newExplIcon.setAttribute("id", "bottomIcon");
    
    newExplIcon.addEventListener("click", function toggleExplanation(){
        if(explanation.style.display==="none"){

            if(option.explanation!==undefined){
                explanation.style.display="block";
                explanation.innerHTML = option.explanation;
            }

        } else {
            explanation.style.display="none";
        }
    });

    explanationArea.replaceChild(newExplIcon, explIcon);   
}

/*
Sets up pages with more information about each type of legal inquiry, 
only relevant for the first survey question
*/
function setupInfoPages(option){
    const iconArea = document.getElementById("icons");

    let b = iconArea.firstElementChild;
    while (b) {
        iconArea.removeChild(b);
        b = iconArea.firstChild;
    }

    for (let i = 0; i < option.getAnswers().length; i++) {
        const answer = option.getAnswers()[i];

        const button = document.createElement("input");
        button.setAttribute("type", "submit");
        button.setAttribute("value", "What does this mean?");

        button.setAttribute("class", "iconButton");
        button.addEventListener("click", function () {
            if(answer.text=="Child Support"){
                window.location.replace("childsupport.html")          
            }
        });

        // Insert new button
        iconArea.appendChild(button);
    }
    iconArea.style.display="flex";
}

/* 
    Sets up all visble elements on the page.
*/
function setup(option) {
    document.getElementById("resources").style.display="none"; //hides referall resources section
    document.getElementById("extra_questions").style.display="none"; //hides demographic questions section 

    // Set up back button
    setupBackButton(option);

    // Set up explanation icon
    setupExplanation(option);

    // Update progress bar
    setupProgressBar(option);

    // Change question
    const q = document.getElementById("question");
    q.innerHTML = option.question;

    // Set up initial info pages if and only if it's the first question
    if(option.text=="Begin Survey"){
        setupInfoPages(option);
    } else{
        document.getElementById("icons").style.display ="none";
    }

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

//extraQuestions();
setup(makeSurvey(surveyArray));
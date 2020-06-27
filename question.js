// SOURCE: https://stackoverflow.com/questions/12036966/generic-tree-implementation-in-javascript

function Question(option) {

    this.option = option;
    this.followup = `${option}?`;
    this.answers = [];
    this.lastQuestion = null;

    this.setLastQuestion = function (question) {
        this.lastQuestion = question;
    };

    this.getlastQuestion = function () {
        return this.lastQuestion;
    };

    this.addAnswer = function (question) {
        question.setLastQuestion(this);
        this.answers[this.answers.length] = question;
    };

    this.getAnswers = function () {
        return this.answers;
    };

    this.removeAnswers = function () {
        this.answers = [];
    };
}

export {Question};
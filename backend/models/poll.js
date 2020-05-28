module.exports = class Poll {
  constructor(id, imgId, question, answer1, answer2, answer3) {
    this.id = id;
    this.imgId = imgId;
    this.question = question;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
  }

  static fetchAll() {
    return { id: 1 };
  }
};

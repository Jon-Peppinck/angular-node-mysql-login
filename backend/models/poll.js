const db = require('../util/database');

module.exports = class Poll {
  constructor(imgId, question, answer1, answer2, answer3) {
    this.imgId = imgId;
    this.question = question;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM polls');
  }

  static createPoll(imgId, question, answer1, answer2, answer3) {
    return db.execute(
      'INSERT INTO polls (imgId, question, answer1, answer2, answer3) VALUES (?, ?, ?, ?, ?)',
      [imgId, question, answer1, answer2, answer3]
    );
  }
};

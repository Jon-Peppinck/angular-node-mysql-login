const db = require('../util/database');

module.exports = class Poll {
  constructor(imgId, question, answer1, answer2, answer3, userId) {
    this.imgId = imgId;
    this.question = question;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.userId = userId;
  }

  static fetchAll() {
    return db.execute('SELECT * FROM polls');
  }

  static fetchPoll(id) {
    return db.execute('SELECT id FROM polls WHERE id = ?', [id]);
  }

  static createPoll(imgId, question, answer1, answer2, answer3, userId) {
    return db.execute(
      'INSERT INTO polls (imgId, question, answer1, answer2, answer3, userId) VALUES (?, ?, ?, ?, ?, ?)',
      [imgId, question, answer1, answer2, answer3, userId]
    );
  }

  static deletePoll(id) {
    return db.execute('DELETE FROM polls WHERE id = ?', [id]);
  }
};

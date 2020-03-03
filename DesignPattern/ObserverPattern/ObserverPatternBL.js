/**
 * @class-subject class which having subscribe,unsubscribe,notifyall methods
 */
class subject {
  constructor() {
    this.observer = [];
  }
  /**
   * @module-subcribe function which push the subscriber into observer
   */
  subscribe(observer) {
    console.log(observer);
    this.observer.push(observer);
  }
  /**
   * @module-subcribe function which pop it from observer
   */
  unsubscribe(observer) {
    let index = this.observer.indexOf(observer);
    if (index > -1) {
      this.observer.slice(index, 1);
    }
  }
  /**
   * @module-notify all
   */
  notifyAll() {
    for (let o of this.observer) {
      console.log(o, "has been notified");
    }
  }
}
module.exports = {
  subject
};

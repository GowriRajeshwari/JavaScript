let object = null;
/**
 * @class-class created for singleton
 */
class SingltonPat {
  constructor(name) {
    this.name = name;
    this.id = 10;
    object = this;
  }
  getObject() {
    if (object == null) {
      object = new SingltonPat("Object1");
    } else {
      return object;
    }
  }
}
module.exports = {
  SingltonPat
};

export default class Model {
  constructor() {
    this.carNames;
    this.carPosition;
    this.racingCount;
  }

  getCars(carNames) {
    this.carNames = [...carNames];
    this.carPosition = new Array(carNames.length).fill(0);
  }
}

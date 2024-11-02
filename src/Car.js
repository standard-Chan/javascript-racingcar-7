class Car {
  #forwardCount=0;
  #name;

  constructor(name) {
    this.#name = name;
  }

  forward(random) {
    if (random >= 4) {
      this.#forwardCount++;
    }
  }

  getName() {
    return this.#name;
  }

  getForwardCount() {
    return this.#forwardCount;
  }
}

export default Car;
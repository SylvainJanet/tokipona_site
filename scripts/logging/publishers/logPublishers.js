export class AbstractLogPublisher {
  constructor() {
    if (this.constructor === AbstractLogPublisher) {
      throw new TypeError(
        'Abstract class "AbstractLogPublisher" cannot be instantiated directly'
      );
    }
    this.properties = {
      location: "",
    };
  }

  get(name) {
    if (!this.has(name)) {
      throw new Error(`Property ${name} not found`);
    }
    return this.properties[name];
  }

  has(name) {
    return name in this.properties;
  }

  log(record) {
    throw new Error("You must implement this function");
  }

  clear() {
    throw new Error("You must implement this function");
  }
}

export class LogConsole extends AbstractLogPublisher {
  log(entry) {
    console.log(entry.buildLogString());
  }

  clear() {
    console.clear();
  }
}

export class LogLocalStroage extends AbstractLogPublisher {
  constructor() {
    super();
    this.location = "logging";
  }
  log(entry) {
    let values = [];

    try {
      values = localStorage.getItem(this.location)
        ? JSON.parse(localStorage.getItem(this.location))
        : [];

      values.push(entry);

      localStorage.setItem(this.location, JSON.stringify(values, null, "\n"));
    } catch (ex) {
      console.log(ex);
    }
  }

  clear() {
    localStorage.removeItem(this.location);
  }
}

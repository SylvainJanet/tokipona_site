import { LogConsole, LogLocalStroage } from "./logPublishers.js";

export class LogPublisherService {
  constructor() {
    this.buildPublishers();
  }

  publishers = [];

  buildPublishers() {
    this.publishers.push(new LogConsole());
    this.publishers.push(new LogLocalStroage());
  }
}

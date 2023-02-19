import { LogConsole, LogLocalStroage } from "./logPublishers.js";

/**
 * Log Publisher Service, instanciates and provides the publishers
 * used.
 */
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

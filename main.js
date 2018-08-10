import ItunesController from "./app/components/Itunes/itunes-controller.js";


class App {
  constructor() {
    this.controllers = {
      itunesCtrl: new ItunesController()
    }
  }
}

// @ts-ignore
window.app = new App()
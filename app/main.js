
import MonsController from "./Controllers/MonsController.js"
import MyMonsController from "./Controllers/MyMonsController.js";
class App {
  monsController = new MonsController();
  myMonsController = new MyMonsController()
}

window["app"] = new App();

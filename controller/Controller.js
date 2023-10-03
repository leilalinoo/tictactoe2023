import Model from "../model/Model.js";
import View from "../view/ElemView.js";

class Controller {
  constructor() {
    let szuloelem = $(".jatekter");
    this.MODEL = new Model();
    for (let index = 0; index < 9; index++) {
      new View($(szuloelem), index);
    }

    $(window).on("kivalaszt", (event) => {
      this.MODEL.setAllapot(event.detail.getIndex());
      event.detail.setErtek(this.MODEL.getErtek());
      if (this.MODEL.getVegeVanE() != "tovább") {
        console.log(this.MODEL.getVegeVanE());
      }
    });
  }
}
export default Controller;

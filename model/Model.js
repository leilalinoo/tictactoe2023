class Model {
  #lista = [];
  #id;
  #allapot;
  #lepesszam;
  constructor() {
    this.#allapot = "X";
    this.#lista = [".", ".", ".", ".", ".", ".", ".", ".", "."];
    this.#lepesszam = 0;
  }

  #vizszintesGyozelem(){
    let vEll = ""
    for (let i = 0; i < 9; i++) {
        vEll += this.#lista[i]
        if(i % 3 === 2){
          vEll += "@"
        }
    }
    vEll += "@"
    console.log(vEll)

    console.log(vEll.indexOf("OOO"), vEll.indexOf("XXX"))
    return vEll
  }

  setAllapot(index) {
    if (this.#allapot === "X") {
      this.#allapot = "O";
    } else {
      this.#allapot = "X";
    }
    this.#lista[index] = this.#allapot;
    console.log(this.#lista)
    this.#lepesszam++;
  }

  getErtek() {
    return this.#allapot;
  }

  getVegeVanE(){
    let vEll = this.#vizszintesGyozelem()
    this.#vizszintesGyozelem()
    if(vEll.indexOf("OOO") > -1){
      return "O nyert"
    }else if(vEll.indexOf("XXX") > -1){
      return "X nyert"
    }
    else if(this.#lepesszam === 9){
      return "döntetlen"
    }
    
      return "tovább"
    
  }
}
export default Model;

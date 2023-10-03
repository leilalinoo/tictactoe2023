//div>p/esemeny/setertek
class View {
 // ertek;
  #index
  constructor(szuloElem, index) {
    this.szuloElem = szuloElem;
    this.#index = index
    this.kattinthato = true
    this.#htmlOsszerak()
    this.elem = $(".elem:last-child");
    this.pE = this.elem.children("p");
    this.elem.on("click", () => {
      if(this.kattinthato){
      this.#sajatEsemenykezelo("kivalaszt");
      this.kattinthato = false
      }
      
    });
  }

  #htmlOsszerak() {
    let txt = "";
    txt += `
        <div class = "elem">
        <p class = "Pelem"></p>
        </div>
    `;
    txt += "";
    this.szuloElem.append(txt);
  }

  getIndex(){
    return this.#index
  }


  setErtek(ertek) {
    this.pE.html(ertek);
  }

  #sajatEsemenykezelo(esemenynev) {
    const esemenyem = new CustomEvent(esemenynev, {detail: this});
    window.dispatchEvent(esemenyem);
  }
}
export default View;

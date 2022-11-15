class AutoView{
    #elem
    constructor(elem, szuloElem){
        this.#elem=elem;
        szuloElem.append(`<div class="doboz">
        <p><b>Márka:</b> ${elem.tipus}</p>
        <p class="raktaron"><b>Raktáron:</b> ${elem.darabszam} db</p>
        <p><b>Ár:</b> ${elem.ar} Ft</p>
        <button class="torol">1 db törlés</button>
        </div>`);

        this.divElem=szuloElem.children("div:last-child");
        this.torolElem=this.divElem.children("button")
        //console.log(this.divElem);
        //console.log(this.torolElem);

        this.torolElem.on("click", ()=>{
            this.kattintasTrigger()
        })
    }


    kattintasTrigger(){
        const esemeny= new CustomEvent("torol", {detail:this.#elem})
        window.dispatchEvent(esemeny)
    }
}
export default AutoView;
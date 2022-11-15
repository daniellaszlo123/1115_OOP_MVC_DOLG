import AutokView from "../View/AutokView.js";
import AutoModel from "../Model/AutoModel.js";
class AutoController{
    constructor(){
        const aModel = new AutoModel();

        aModel.adatBe("../adat.json", this.autoAdatok);

        $(window).on("torol", (event)=>{
            aModel.adatTorol(event.detail)
        })
    }

    autoAdatok(tomb) {
        let szuloelem=$("main");
        new AutokView(tomb, szuloelem);
    }
}
export default AutoController;
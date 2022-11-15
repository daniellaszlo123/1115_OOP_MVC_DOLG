import AutoView from "./AutoView.js";
class AutokView{
    constructor(tomb, szuloelem) {
        this.container=szuloelem;

        //console.log(tomb);
        this.autokBetolt(tomb)
    }

    autokBetolt(tomb){
        this.container.html("");
        tomb.forEach(auto => {
            new AutoView(auto, this.container);
        });
    }
}
export default AutokView;
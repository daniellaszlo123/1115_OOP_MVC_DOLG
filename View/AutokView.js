import AutoView from "./AutoView.js";
class AutokView{
    constructor(tomb, szuloelem) {
        this.container=szuloelem;

        //console.log(tomb);
        tomb.forEach(auto => {
            new AutoView(auto, this.container);
        });
    }

    autokBetolt(){
        
    }
}
export default AutokView;
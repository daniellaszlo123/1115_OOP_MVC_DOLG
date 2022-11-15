class AutoModel{
    #autokTomb=[]
    constructor(){

    }

    adatBe(vegpont, myCallBack) {
        fetch(vegpont, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                this.#autokTomb = data.auto;
                myCallBack(this.#autokTomb);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    adatTorol(adat){
        let ujDbSzam=adat.darabszam-=1;
        let id=adat.id;
        //console.log(`A(z) ${id} azonosítóval ellátott új dbszáma: ${ujDbSzam}`);
        let main=$(`main`)
        let divElem=main.children(`div:nth-child(${id})`)
        //console.log(divElem);
        let raktaron=divElem.children(".raktaron")
        //console.log(raktaron);
        raktaron.html(`<p><b>Raktáron</b> ${ujDbSzam} Ft</p>`)
    }
}
export default AutoModel;
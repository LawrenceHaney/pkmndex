import { ProxyState } from "../AppState.js";
import { monsService } from "../Services/MonService.js"

function _drawImpotMons(){
  let mtemp = ``
  let apimons= ProxyState.apiMons
  apimons.forEach(m => mtemp += `<li onclick="app.monsController.setActive('${m.url}')">${m.name}</li>`)
  document.getElementById("apiMonData").innerHTML = mtemp
}
function _drawActive(){
  let amon = ProxyState.activeMon
  if (amon == null){
    return
  }
  let template = `<h1>${amon.name}</h1>
  <img src="${amon.img}" alt="" class="monsimg">
  <a class="btn btn-primary" role="button" onclick="app.myMonsController.addMon()">catch</a>`
  document.getElementById("activeMon").innerHTML = template
}
export default class MonsController {
  constructor(){
    ProxyState.on("apiMons", _drawImpotMons)
    ProxyState.on("activeMon", _drawActive)
    this.getMons()
  }
   getMons(){
     monsService.getMons()

  }
  setActive(url){
    console.log(ProxyState.activeMon)
    monsService.setActive(url)
  }
}
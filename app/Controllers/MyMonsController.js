import { ProxyState } from "../AppState.js";
import { myMonsService } from "../Services/MyMonsService.js"

function _drawMons(){
  let mMon= ProxyState.mymons
  let mtemp = ''
  mMon.forEach(m => mtemp+= m.Template)
  document.getElementById("mymons").innerHTML = mtemp
}
export default class MyMonsController{
  constructor(){
    ProxyState.on('mymons', _drawMons)


  }

  addMon(){
    console.log(ProxyState.activeMon)
    myMonsService.addMon()

  }


}
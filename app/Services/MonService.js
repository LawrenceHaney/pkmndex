import { ProxyState } from "../AppState.js";
import Mon from "../Models/Mon.js"
import { dexApi } from "./AxiosService.js";

class MonsService {
 async getMons(){
   let obj = await dexApi.get('pokemon?limit=100')
   ProxyState.apiMons = obj.data.results
 }
 async setActive(url){
   let obj = await dexApi.get(url)
   ProxyState.activeMon = new Mon(obj.data)
   console.log(ProxyState.activeMon)

 }

}

export const monsService = new MonsService
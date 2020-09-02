import { ProxyState } from "../AppState.js";
import Mon from "../Models/Mon.js";
import { sandboxApi } from "./AxiosService.js";

class MyMonsService {
  async addMon() {
    try {
      let obj = await sandboxApi.post('',ProxyState.activeMon)
      ProxyState.mymons = [...ProxyState.mymons, new Mon(obj.data.data)]
      console.log(ProxyState.mymons)
    } catch (error) {
      console.log(error)
      
    }
  }



}

export const myMonsService = new MyMonsService
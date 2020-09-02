export default class Mon{
  constructor ({name, img, sprites}){
this.name = name
this.img = img ||  sprites.front_default
  }
  get Template () {
    return `<li>${this.name}</li>`
  }
}
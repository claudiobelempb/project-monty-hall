export default class DoorModel {
  #display: number;
  #hasGift: boolean;
  #isSelected: boolean;
  #isOpen: boolean;

  constructor(
    display: number, 
    hasGift = false, 
    isSelected = false, 
    isOpen = false
  ){
    this.#display = display;
    this.#hasGift = hasGift;
    this.#isSelected = isSelected;
    this.#isOpen = isOpen;
  }

  get display(){
    return this.#display;
  }

  get hasGift(){
    return this.#hasGift;
  }

  get isSelected(){
    return this.#isSelected;
  }

  get isOpen(){
    return this.#isOpen;
  }

  get close(){
    return !this.#isOpen;
  }

  resetSelected(){
    const selected = false;
    return new DoorModel(this.display, this.hasGift, selected, this.isOpen )
  }

  toggleSelected(){
    const selected = !this.isSelected;
    return new DoorModel(this.display, this.hasGift, selected, this.isOpen )
  }

  openDoor(){
    const open = true;
    return new DoorModel(this.display, this.hasGift, this.isSelected, open)
  }
}

import DoorModel from "@/model/DoorModel";

export function createDoor(quantityDoor: number, withGift: number): DoorModel[]{
  return Array.from({length: quantityDoor}, (_, i) => {
    return new DoorModel(i += 1, i === withGift);
  });
}

export function updateDoor(doors: DoorModel[], doorModified: DoorModel): DoorModel[]{
  return doors.map(doorCurrent => {
    const doorEqual = doorCurrent.display === doorModified.display;
    if(doorEqual){
      return doorModified;
    }else {
      return doorModified.isOpen ? doorCurrent : doorCurrent.resetSelected();
    }
  })
}

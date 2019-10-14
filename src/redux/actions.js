

const addCar = (car) => {
  return {
    type: 'ADD_CAR',
    value: car
  }
}

const removeCar = (index) => {
  return {
    type: 'REMOVE_CAR',
    value: index
  }
}
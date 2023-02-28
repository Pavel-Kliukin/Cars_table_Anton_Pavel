// const lib = require('./cars.json')

const form = document.querySelector('form')
const carsArray = []

function getData(e) {
  const licence = document.querySelector('#licence').value
  const carMaker = document.querySelector('#carMaker').value
  const carModel = document.querySelector('#carModel').value
  const carOwner = document.querySelector('#carOwner').value
  const carPrice = document.querySelector('#carPrice').value
  const carColor = document.querySelector('#carColor').value

  e.preventDefault()

  console.log('form was triggered')
  const car = new CarConstructor(licence, carMaker, carModel, carOwner, carPrice, carColor)
  // carJsonFormat = JSON.stringify(car)
  // localStorage.setItem("cars", carJsonFormat)
  // lib.writeFile("cars.json", carJsonFormat)
  carsArray.push(car)
  console.log(carsArray);

}

form.addEventListener('submit', getData)

function CarConstructor(licence, carMaker, carModel, carOwner, carPrice, carColor) {
  this.licence = licence;
  this.carMaker = carMaker;
  this.carModel = carModel;
  this.carOwner = carOwner;
  this.carPrice = carPrice;
  this.carColor = carColor;
}


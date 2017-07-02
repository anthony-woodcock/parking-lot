var smallCar = {
  name: 'Small Car',
  length: '5.5 foot',
  picture: '<img src="http://s.hswstatic.com/gif/smart-car-1.jpg" width="80">',
  amount: 1
};

var mediumCar = {
  name: 'Medium Car',
  length:'6.5 foot',
  picture: '<img src="http://img.autobytel.com/car-reviews/autobytel/130648-the-10-best-mid-size-cars-for-2016/ABTL_2016-Nissan-Altima-SR-Photo.jpg" width="80">',
  amount: 1
};

var largeCar = {
  name: 'Large Car',
  length: '7.5 foot',
  picture: '<img src="http://www.theaa.com/images/allaboutcars/testreports/2004082_astra_estate_front.jpg" width="80">',
  amount: 1
};

var vanCar = {
  name: 'Van',
  length: '8.5 foot',
  picture: '<img src="http://www.vanarama.co.uk/Assets/RangeImages/478/Untitled-1.jpg" width="80">',
  amount: 1
};

var truckCar = {
  name: 'Truck',
  length: '12 foot',
  picture: '<img src="http://supremecorp.com/wp-content/uploads/2015/04/Curtainside-Truck-rtch-CATEGORY.png" width="80">',
  amount: 1
};

var cars = [smallCar,mediumCar, largeCar,vanCar,truckCar];


var parkingLot = {
  cars: [],
  parkCar: function (carName) {
    return this.cars.push(carName);

  },
  getNumberOfCars: function () {
    return this.cars.length;
 
  }
}

//Looping through the cars array on line 26
for (var carIndex = 0; carIndex < cars.length; carIndex++) {
    // Appending HTML id buttons. 
    var buttonsContainer = document.getElementById('buttons')
    //Retrieving objects from cars array on line 26
    var car = cars[carIndex]
    /* Not entirely sure whats going on below. I'm thinking buttonsHTML is appending buttonsContainer 
    which is appending the .getElementById'Buttons' which is adding this for loop to my HTML
    I altered this from the Till challenge to include my car.name and car.length object properties.
    */
    var buttonsHTML = '<div class="col-md-2">'
    buttonsHTML +=      '<div class="panel panel-default">'
    buttonsHTML +=        '<div class="panel-heading">'
    buttonsHTML +=          '<h3 class="panel-title">' + car.name + '</h3>'
    buttonsHTML +=        '</div>'
    buttonsHTML +=        '<div class="panel-body">'
    buttonsHTML +=          '<p>'
    buttonsHTML +=          '<img>' + car.picture + '</img>'
    buttonsHTML +=          '</p>'
    buttonsHTML +=          '<p>'
    buttonsHTML +=            '<strong>Length: ' + car.length + '</strong> '
    buttonsHTML +=          '</p>'
    //                                                                    Need to create a Object which adds this transaction to it
    buttonsHTML +=          '<button type="button" class="btn btn-primary" onclick="transaction.add(\'' + car.name + '\')">Add</button>'
    buttonsHTML +=        '</div>'
    buttonsHTML +=      '</div>'
    buttonsHTML +=    '</div>'

    buttonsContainer.innerHTML += buttonsHTML
}

// Creating a Object which adds the transaction - modified from the Till challenge. Not %100 whith whats going on
var transaction = {}
transaction.items = []
transaction.add = function (carName) {
    for (carIndex = 0; carIndex < cars.length; carIndex++) {
    var currentCar = cars[carIndex]

    if (currentCar.name === carName) {
      var selectedCar = currentCar
      break
    }
  }

  if (selectedCar) {
    var newItem = {
      id: (Math.random() * 100000),
      name: selectedCar.name,
      amount: selectedCar.amount
    }

    this.items.push(newItem)
   //checking newItem is being pushes onto items. console.log(this.items)
   updateDOM()
  }
}
/*
// updating the total amount of parked cars, copied a lot from Till challenge, changed price to amount
Each car has a amount in their object property of 1. So when a car gets added to the Total Parked Cars
its adding 1 car each time.....I Think
*/
function updateDOM () {
  var carItems = document.getElementById('carItems')
  carItems.innerHTML = ''

  var total = 0

  for (var itemIndex = 0; itemIndex < transaction.items.length; itemIndex++) {
    var currentItem = transaction.items[itemIndex]

    var itemsHTML = '<li class="list-group-item">'
    itemsHTML += '<span class="badge">' + currentItem.amount + '</span>'
    itemsHTML += currentItem.name
    itemsHTML += '</li>'

    carItems.innerHTML += itemsHTML
    total += currentItem.amount
  }
// altered toFixed to show whole numbers
  document.getElementById('total').innerHTML = total.toFixed(0)
}

/* Basically everything sort of works, I'm not %100 sure why but I gained a better
understanding of Objects and for loops while doing this. I did struggle a lot while doing this
but going through the Till challenge helped a great deal. I have a feeling there would be a much
simpler way of just having each of the Car Objects, or Car amounts being added straight to a 
total amount array from a button. But anyway enjoy my disgusting car parking program that somehow worked!!!!

I did'nt get around to adding a remove button, but I would of added a remove button
which pop() from the array which the cars are being added to. 

*/










console.log(cars[0]);

parkingLot.parkCar('citroen')
parkingLot.parkCar('peugeott')
parkingLot.parkCar('TVR')
parkingLot.parkCar('Ford')
parkingLot.parkCar(vanCar)
console.log(parkingLot.getNumberOfCars()) // 2
console.log(parkingLot.cars) // ['peugeot', 'citroen']
// variables, datastructures

// primitives
var x = 5; // number
var isOk = true; // boolean
var name = "Bela"; // string

// complex datastructures
var myPets = [ "bodri", "cirmi", name ]; // array
var user = {
  "name": "Lajos",
  "age": 20,
  "isMale": true,
  "pets": myPets,
  "bankAccount": { "amountOfUSD": 300 }
}; // object

console.log("variables created")


// operators, built-in methods

// number
x = x + 2
var y = x - 2
var z = y * 5
var res = 4 + 5

// string
name = name + "ab"
name = name.substring(1, name.length)
var parts = name.split("l")
var lengthOfName = name.length

// boolean
isOk = !isOk
console.log(isOk)

var isEqual = x == y

var equalAndOk = isOk && isEqual
var equalOrOk = isOk || isEqual

var myDep = (x == z && z == name) || isOk

// array
myPets.push("Kazmer")
console.log(myPets)

myPets.unshift("otto")
console.log(myPets);

var secondPet = myPets[1]
console.log(secondPet)

myPets[1] = "akarmi" // NOT myPets.1
//myPets.splice(1, 0, "akarmi")

console.log(myPets);

// object
var nameOgUser = user["name"] // user.name
var usersSecondPet = user["pets"][1]
console.log(usersSecondPet)

user["pets"][1] = "barmimas"
console.log(user["pets"][1]);



// loops
var players = [ ]

for (var x = 1; x <= 10; x++) {
  console.log("hello")
  console.log("world")
  players.push({ health: 100, damage: 10, weapon: null })
}

var npcs = []

npcs.push({ "name": "bodri", isEvil: false })

var myList = [ "bela", "kazmer", "otto" ]
for (var i = 0; i < myList.length; i++) {
  var name = myList[i]
  npcs.push({ "name": name, isEvil: false })
}

for (var pet of myPets) {
  npcs.push({ "name": pet, isEvil: false })
}

/*
for (var variable of iterable) { iterable = string || array

}
*/

console.log(players)
console.log(npcs);

// conditions

var passwordInputValue = "12345"
var passwordConfirmInputValue = "123"
var canLogin = passwordInputValue == passwordConfirmInputValue
console.log(canLogin);

if (canLogin) {
  console.log("can login")
} else {
  console.log("can not login")
}

console.log(npcs);

// function

function myBusinessLogic(param) {
  for (var npc of npcs) {
    var hasLongName = npc["name"].length > param
    if (hasLongName) {
      npc["isEvil"] = true
    } else {
      npc["isEvil"] = false
    }
  }
}

console.log(npcs);

myBusinessLogic(5)

console.log(npcs);

myBusinessLogic(10)

console.log(npcs);

myBusinessLogic(1)

console.log(npcs);

function addTwoNumber(num1, num2) {
  var resultNumber = num1 + num2
  return resultNumber
}

var xyz = addTwoNumber(1, 2)

var endResult = xyz + 5

console.log(endResult)

// -

// // #1.1

// let student = {
//     firstname: "Anton", 
//     lastname: "Belikhin",
//     Age: 17,
//     major: "Computer science",
//     courses: ["Math", "Design", "Algorithms", "Web"]
// }

// // # 1.2
// console.log(student.firstname)
// // # 1.3
// console.log(student["major"])
// // # 1.4
// student.age = 18
// // #1.5
// student.gpa = 4.5
// // #1.6
// delete student.courses
// // #1.7
// console.log(student)


// // #2

// // #2.1
// let rectangle = {
//     width: 5,
//     height: 9,
// }

// getAreaRec = ((x, y) => x * y)
// getAreaSquare = ((x) => x ** 2)
// getPerRec = ((x, y) => (x + y) * 2)
// getPerSquare = ((x) => x * 4)
// // #2.2
// rectangle.getArea = getAreaRec(rectangle.width, rectangle.height)
// // #2.3
// rectangle.getPerimeter = getPerRec(rectangle.width, rectangle.height)
// // #2.4
// let square = {
//     side: 5
// }
// // #2.5
// square.getArea = getAreaSquare(square.side)
// // #2.6
// square.getPerimeter = getPerSquare(square.side)
// // #2.7
// console.log(rectangle.getArea, rectangle.getPerimeter, "\n",
//             square.getArea, square.getPerimeter)


// // #3



// // #3.1

// let userProfile = {
//     name: "Alexey",
//     email: "Alex@example.com"
// }

// let userSettings = {
//     theme: "dark",
//     notifications: true
// }

// // #3.2

// Object.assign(userProfile, userSettings)
// console.log(userProfile)

// // #3.3

// let constants = {
//     PI: 3.14159,
//     E: 2.71828
// }

// // #3.4

// Object.freeze(constants)
// constants.PI = 3.14
// constants.GRAVITY = 9.81
// console.log(constants)

// // #3.5

// console.log(Object.keys(userProfile))
// console.log(Object.values(userProfile))
// console.log(Object.entries(userProfile))


// #4

apple = {id: 0, name: "apple", price: 5, quantity: 7}
bow = {id: 1, name: "bow", price: 50, quantity: 1}
phone = {id: 2, name: "phone", price: 500, quantity: 1}


// #4.1, #4.2

let inventory = {
    products: [bow, phone]
}


// #4.3

let addProduct = ((Item) => {
        if (inventory.products.some((product) => product.id == Item.id)) {
            console.log(`${Item.name} with id "${Item.id}" already exists`)
            return null
        }
    inventory.products.push(Item)
})



// #4.4

let removeProduct = ((id) => {
    for (let i = 0; i < inventory.products.length; i++) {
        if (inventory.products[i].id == id) {
            inventory.products.splice(i, 1)
            return;
        }
    }
})


// #4.5

let updateProductQuantity = ((id, newQuantity) => {
    if (!inventory.products.some((product) => product.id == id)) {
        console.log("error")
        return 0;
    }
    for (let i = 0; i < inventory.products.length; i++) {
        if (inventory.products[i].id == id) {
            inventory.products[i].quantity = newQuantity
        }
    }
})

// #4.6

let getTotalValue = () => inventory.products.reduce((total, current) => {
    return total + (current.price * current.quantity)
}, 0)

// #4.7

let listAllItems = () => inventory.products.map((item) =>({
    id: item.id,
    name: item.name,
    price: item.price,
    quantity: item.quantity
}))

// // // // test // // // //

addProduct(apple)
removeProduct(2)
addProduct(phone)
updateProductQuantity(0, 5)
getTotalValue()
console.log(listAllItems())
console.log(getTotalValue())
console.log(inventory)

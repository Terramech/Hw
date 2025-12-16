class Product {
    constructor(name, price, inStock){
        this.name = name
        this.price = price
        this.inStock = inStock      
    }

}
cabel = new Product("Cabel", 30, 25)
cooler = new Product("Cooler", 75, 10)
Hdd = new Product("Hard Drive", 100, 5)
cpu = new Product("CPU", 150, 3)
gpu = new Product("GPU", 300, 5) 

let productList = [cabel, Hdd, cooler, cpu, gpu]
let originalList = [...productList]

let sortAscending = true

let divMain = document.createElement("div")
divMain.id = "root"
document.body.appendChild(divMain)
root = document.getElementById("root")
let table1 = document.createElement("table")
root.appendChild(table1)
head = table1.appendChild(document.createElement("thead"))
body = table1.appendChild(document.createElement("tbody"))
let tr1Head = document.createElement("th")
let tr2Head = document.createElement("th")
tr2Head.title = "Click to sort, right-click to reset"
let tr3Head = document.createElement("th")
tr1Head.innerHTML = "Название"
tr2Head.innerHTML = "Цена↕"
tr3Head.innerHTML = "Количество"
tr2Head.id = "priceSort"
head.appendChild(tr1Head)
head.appendChild(tr2Head)
head.appendChild(tr3Head)
tableCreate = (products) => {
    body.innerHTML = ""
    for (i in products) {
        let x = document.createElement("tr")
        let nameData = document.createElement("td")
        let priceData = document.createElement("td")
        let stockData = document.createElement("td")
        nameData.innerHTML = products[i].name
        x.appendChild(nameData)
        x.appendChild(priceData)
        if (products[i].inStock < 5) {
            stockData.classList.add("low-stock")
        }
        stockData.innerHTML = products[i].inStock
        x.appendChild(stockData)
        priceData.innerHTML = products[i].price
    body.appendChild(x)
    }
}
    tableCreate(productList)

// pr9



sortPrice = () => {
    let sortedList = [...productList]
    
    sortedList.sort((a, b) => {
        if (sortAscending) {
            tr2Head.innerHTML = "Цена^"
            return a.price - b.price
        } else {
            tr2Head.innerHTML = "Ценаv"
            return b.price - a.price
        }
    })
     sortAscending = !sortAscending

    tableCreate(sortedList)

    productList = sortedList
}

resetPriceSort = () => {
    tr2Head.innerHTML = "Цена↕"
    tableCreate(originalList)
}
tr2Head.addEventListener("contextmenu", (e) => {
    e.preventDefault()
    resetPriceSort(e)
})
tr2Head.addEventListener("click", (e) => {
    sortPrice(e)
})
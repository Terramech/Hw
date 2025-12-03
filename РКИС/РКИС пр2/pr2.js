 
const students = [
{ id: 1, name: "Алексей", age: 20, grade: 4.5, subjects: ["Математика", "Физика"] },
{ id: 2, name: "Мария", age: 19, grade: 4.8, subjects: ["История", "Литература"] },
{ id: 3, name: "Иван", age: 21, grade: 3.9, subjects: ["Математика", "Информатика"] },
{ id: 4, name: "Ольга", age: 20, grade: 4.2, subjects: ["Физика", "Химия"] },
{ id: 5, name: "Дмитрий", age: 22, grade: 4.9, subjects: ["Информатика", "Математика"] }
];

// Часть 1

// #1
const students2 = students.map((student) => student.name);
console.log("1.1 #1", students2);


// #2

const BStudents = students.filter((student) => student.grade > 4.0);
const BSmap = BStudents.map((student1) => student1.name + " " + student1.grade);
console.log("1.1 #2", BSmap);

// #3

const Mar = students.find((student) => student.name = "Мария");
console.log("1.1 #3", Mar)

// #4

const Young = students.some((student) => student.age < 20);
console.log("1.1 #4", Young);

// #5

const Every = students.every((student) => student.grade > 3.5);
console.log("1.1 #5", Every);


// 1.2

const numbers = [12, 5, 8, 130, 44, 3, 77, 200];
const words = ["JavaScript", "массив", "метод", "программирование", "обучение"];

// #1

const multipied = numbers.map((num) => num * 2)
console.log("1.2 #1", multipied)

// #2

const filtered = numbers.filter((num) => num > 50)
console.log("1.2 #2", filtered)

// #3

const summed = numbers.reduce((accumulator, num) => accumulator + num)
console.log("1.2 #3", summed)

// #4
const sorted = numbers.sort((numA, numB) => numA - numB)
console.log("1.2 #4", sorted)

// #5

const wordFilter = words.filter((word) => word.length > 5)
const longWords = wordFilter.map((word) => word)
console.log("1.2 #5", longWords)

// // Часть 2

const products = [
{ id: 1, name: "Ноутбук", price: 5000, category: "электроника", inStock: true },
{ id: 2, name: "Стул", price: 5000, category: "мебель", inStock: false },
{ id: 3, name: "Книга", price: 500, category: "литература", inStock: true },
{ id: 4, name: "Телефон", price: 30000, category: "электроника", inStock: true },
{ id: 5, name: "Стол", price: 15000, category: "мебель", inStock: true }
];

// #1

cat = {}
const categories = products.reduce((ac, num) => {
    if (!cat[num.category]) {
        cat[num.category] = []
    }
    cat[num.category].push(num)
    return cat
})
console.log("2.1 #1", categories)

// #2

const pricing = products.reduce((ac, num) => {
if (num.price > ac.price) {
    return num;
}
    return ac;
}
);
console.log("2.1 #2", pricing)

// #3

const stock = products.filter((item) => (item.inStock == 1));
const inStockPositions = stock.map((num) => num.name);
console.log("2.1 #3", inStockPositions);


// #4

const electroFilt = products.filter((item) => item.category == "Электроника")
const electrStock = products.every((item) => item.inStock)
const furnFilt = products.filter((item) => item.category == "мебель")
const expensFurn = products.some((item) => item.price > 10000)
console.log("2.1 #4", electrStock, expensFurn)

// 2.2

const orders = [
    { id: 1, product: "Ноутбук", price: 50000, quantity: 1, status: "completed" },
    { id: 2, product: "Мышь", price: 1500, quantity: 2, status: "pending" },
    { id: 3, product: "Клавиатура", price: 3000, quantity: 1, status: "completed" },
    { id: 4, product: "Монитор", price: 20000, quantity: 1, status: "shipped" }
];

const filteredOrders = orders.filter((item) => item.status == "completed")
const receivedOrders = filteredOrders.map((item) => item.product)
console.log("2.2 #1",receivedOrders)


const mapCost = orders.map((item) => item.price)
const totalCost = mapCost.reduce((total, item) => total + item)
console.log("2.2 #2", totalCost)

const filterAvailable = orders.filter((item) => item.status == "completed")
const availableAmount = filterAvailable.reduce((total, item) => total.quantity + item.quantity)
console.log("2.2 #3", availableAmount)

// #3

const books = [
    { 
        id: 1, 
        title: "JavaScript: The Good Parts", 
        author: "Douglas Crockford", 
        year: 2008, 
        genre: "programming", 
        pages: 176,
        isAvailable: true
    },
    { 
        id: 2, 
        title: "Clean Code", 
        author: "Robert Martin", 
        year: 2008, 
        genre: "programming", 
        pages: 484,
        isAvailable: true
    },
    { 
        id: 3, 
        title: "CCode", 
        author: "Roberartin", 
        year: 2018, 
        genre: "programmig", 
        pages: 20,
        isAvailable: true
    },
    // ... можно добавить больше книг
];

search = (authorName) => {
    authorBooks = books.filter((book) => book.author == authorName)
    return authorBooks
}

console.log("3.1 ", search("Robert Martin"))



availables = () => {
    availableBooks = books.filter((book) => book.isAvailable == true)
    return availableBooks
}

console.log("3.2 ", availables())



const averageGenrePages = (requiredGenre) => {
    const genres = books.filter((book) => book.genre === requiredGenre);
    
    if (genres.length === 0) return 0;
    
    const totalPages = genres.reduce((sum, book) => sum + book.pages, 0);
    return totalPages / genres.length;
}

console.log("3.3 ", averageGenrePages("programming"))


groupPublicationDate = () => {
    const dateGroup = {};
    books.reduce((ac, book) => {
        if (!dateGroup[book.year]) {
            dateGroup[book.year] = [];
        }
        dateGroup[book.year].push(book);
        return ac;
    }, {});
    return dateGroup;
}
console.log("3.4", groupPublicationDate())

bookRating = () => {
    const sortedBooks = books.sort((a, b) => b.pages - a.pages);
    const rating = sortedBooks.map((book) => {return `${book.pages}, ${book.title}`})
    return rating
}

console.log("3.5", bookRating())

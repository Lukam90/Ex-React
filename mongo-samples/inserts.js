// load("inserts.js")

db = connect('mongodb://localhost/bookstore')

db.books.insertOne({ title: "The Color of Magic", author: "Terry Pratchett", pages: 300, rating: 7, genres: ["fantasy", "magic"] })

db.authors.insertOne({ name: "Brandon Sanderson", age: 60 })

db.books.insertMany([
    {
        title : "The Light Fantastic",
        author : "Terry Pratchett",
        pages : 250,
        rating: 6,
        genres: ["fantasy"]
    },
    {
        title : "Dune",
        author : "Frank Herbert",
        pages : 500,
        rating: 10,
        genres: ["sci-fi", "dystopian"]
    }
])
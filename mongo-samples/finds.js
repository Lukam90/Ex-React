// load("finds.js")

db = connect('mongodb://localhost/bookstore')

db.books.find()

db.books.find({ author: "Terry Pratchett" })

db.books.find({ author: "Terry Pratchett", rating: 7 })

db.books.find({ author: "Brandon Sanderson" }, { title: 1, author: 1 })

db.books.find().count()

db.books.find({ author: "Brandon Sanderson" }).count()

db.books.find().limit(3)

db.books.find().sort({ title: 1 })

db.books.find().sort({ title: 1 }).limit(3)
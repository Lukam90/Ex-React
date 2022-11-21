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

db.books.find({ rating: { $gt: 7 } })

db.books.find({ rating: { $lt: 8 } })

db.books.find({ rating: { $gt: 7 }, author: "Terry Pratchett" })

db.books.find({ $or: [{ rating: 7 }, { rating: 9 }] })

db.books.find({ $or: [{ pages: { $lt: 300 } }, { pages: { $gt: 400 } }] })

db.books.find({ rating: { $in: [7,8,9] } })

db.books.find({ rating: { $nin: [7,8,9] } })

db.books.find({ genres: ["fantasy", "magic"] })

db.books.find({ genres: { $all: ["fantasy", "magic"] } })

db.books.find({ "reviews.name" : "luigi" })
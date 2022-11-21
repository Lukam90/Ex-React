db.books.updateOne({ _id: ObjectId("x") }, { $set: { rating: 8 } })

db.books.updateOne({ _id: ObjectId("x") }, { $inc: { pages: 2 } })

db.books.updateOne({ _id: ObjectId("x") }, { $pull: { genres: ["fantasy"] } })

db.books.updateOne({ _id: ObjectId("x") }, { $push: { genres: ["fantasy"] } })
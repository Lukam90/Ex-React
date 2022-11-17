const express = require("express")

const router = express.Router()

// GET all workouts
router.get("/", (req, res) => {
    res.json({ msg: "get all" })
})

// GET a single workout
router.get("/:id", (req, res) => {
    res.json({ msg: "get a single" })
})

// POST a new workout
router.post("/", (req, res) => {
    res.json({ msg: "POST a new" })
})

// DELETE a workout
router.delete("/:id", (req, res) => {
    res.json({ msg: "delete a workout" })
})

// UPDATE a workout
router.patch("/:id", (req, res) => {
    res.json({ msg: "update a workout" })
})

module.exports = router
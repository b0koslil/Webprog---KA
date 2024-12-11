import express from "express";
import { dbQuery, dbRun } from "../database.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const users = await dbQuery("SELECT * FROM users;");
        res.status(200).json(users);
    } catch (err) {
        next(err);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const [user] = await dbQuery("SELECT * FROM users WHERE id = ?;", [req.params.id]);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
});

router.post("/", async (req, res, next) => {
    try {
        const { firstName, lastName, email, class: className } = req.body;
        const result = await dbRun(
            "INSERT INTO users (firstName, lastName, email, class) VALUES (?, ?, ?, ?);",
            [firstName, lastName, email, className]
        );
        res.status(201).json({ id: result.lastID, firstName, lastName, email, class: className });
    } catch (err) {
        next(err);
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        const [user] = await dbQuery("SELECT * FROM users WHERE id = ?;", [req.params.id]);
        if (!user) return res.status(404).json({ message: "User not found" });

        const { firstName, lastName, email, class: className } = req.body;
        await dbRun(
            "UPDATE users SET firstName = ?, lastName = ?, email = ?, class = ? WHERE id = ?;",
            [
                firstName || user.firstName,
                lastName || user.lastName,
                email || user.email,
                className || user.class,
                req.params.id,
            ]
        );
        res.status(200).json({ id: req.params.id, firstName, lastName, email, class: className });
    } catch (err) {
        next(err);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const [user] = await dbQuery("SELECT * FROM users WHERE id = ?;", [req.params.id]);
        if (!user) return res.status(404).json({ message: "User not found" });

        await dbRun("DELETE FROM users WHERE id = ?;", [req.params.id]);
        res.sendStatus(204);
    } catch (err) {
        next(err);
    }
});

export default router;

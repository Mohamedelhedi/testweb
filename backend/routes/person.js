const express = require('express');
const router = express.Router();
const { getConnection } = require('../config/dbconfig');

// Route to create a user using raw SQL
router.post('/users', async(req, res, next) => {
    const { name, email } = req.body;
    const sql = `INSERT INTO Users (name, email) VALUES (:name, :email)`;

    try {
        const connection = await getConnection();
        await connection.execute(sql, [name, email], { autoCommit: true });
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        next(err);
    }
});

// Route to get all users using raw SQL
router.get('/person', async(req, res, next) => {
    const sql = 'SELECT * FROM person';

    try {
        const connection = await getConnection();
        const result = await connection.execute(sql);
        console.log("result is", result)
        res.status(200).json(result.rows);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
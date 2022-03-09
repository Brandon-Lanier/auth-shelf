const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  res.sendStatus(200); // For testing only, can be removed
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  // endpoint functionality
  if (req.isAuthenticated()) {
    // console.log(req.body);
    // console.log(req.user);

    const sqlText = `
      INSERT INTO "item" ("description", "image_url", "user_id")
      VALUES ($1, $2, $3);
    `

    const { description, image_url } = req.body;
    const { id } = req.user;
    const sqlOptions = [description, image_url, id];

    // console.log(sqlOptions);

    pool.query(sqlText, sqlOptions)
      .then(response => {
        res.sendStatus(201);
      })
      .catch(err => {
        console.error('Error in post route', err);
        res.sendStatus(500);
      })
  } else {
    res.sendStatus(403);
  }
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
  if (req.isAuthenticated()) {

    // console.log(req.params.id, req.user);

    const sqlText = `
      UPDATE "item"
      SET "description" = $1, "image_url" = $2
      WHERE "id" = $3 AND "user_id" = $4;
    `

    const { description, image_url } = req.body;
    const id = req.params.id;
    const user_id = req.user.id;
    const sqlOptions = [description, image_url, id, user_id];

    console.log(sqlOptions);

    pool.query(sqlText, sqlOptions)
      .then(response => {
        res.sendStatus(200);
      })
      .catch(err => {
        console.error('Error in put route', err);
        res.sendStatus(500);
      })
  } else {
    res.sendStatus(403);
  }
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;

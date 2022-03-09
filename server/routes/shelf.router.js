const express = require('express');
const {
  user
} = require('pg/lib/defaults');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  const qryTxt = `SELECT * FROM "item"`
  pool.query(qryTxt)
    .then(result => {
      res.send(result.rows)
      console.log('GET result is', result);
    }).catch(err => {
      console.log('Error in GET', err);
      res.sendStatus(500)
    })
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  // endpoint functionality
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  if (req.isAuthenticated()) {
    if (req.user.id !== req.params.id) {
      res.sendStatus(403);
    } else {
      const qryTxt = `
      DELETE FROM "items" WHERE "id" = $1
      `
      pool.query(qryTxt, [id, req.user.id])
        .then(result => {
          res.sendStatus(200)
        }).catch(err => {
          console.log('Error deleting item', err);
          res.sendStatus(500)
        })
    }
  } else {
      res.sendStatus(403);
    }
  });


/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
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
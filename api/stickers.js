const express = require('express');
const router = express.Router();
const knex = require('../db/knex')
// const stickers = require('../stickers');

router.get('/' , (req, res) => {
  knex('sticker')
  .then(stickers => {
    res.json(stickers)
  });
})

router.get('/:id' , (req, res) => {
  let id = req.params.id;
  knex('sticker')
  .where('id', id).first()
  .then(stickers => {
    res.json(stickers)
  });
});

router.post('/', (req,res) => {
  let post = req.body;
  knex('sticker').insert(post)
  .returning('*')
  .then(stickers => {
    res.json(stickers[0])
  });
})

router.put('/:id', (req, res) => {
  let id = req.params.id;
  let edit = req.body;
  knex('sticker').where('id', id)
  .update(edit)
  .returning('*')
  .then(edited => {
    res.json(edited[0])
  });
})

router.delete('/:id', (req, res) => {
  let id = req.params.id;
  knex('sticker').where('id', id).del()
  .then(deleted => {
    res.json({
      "deleted":true
    });
  });
})




module.exports = router;

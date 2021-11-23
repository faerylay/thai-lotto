const getList = require('../data/getList')
const express = require('express');
const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const targetPage = Number(id)

    const lists = await getList(targetPage)

    return res.status(200).send(lists)
  } catch (e) {
    console.error(e)
    return res.status(400).send('api cannot fulfill your request at this time')
  }
});

module.exports = router;
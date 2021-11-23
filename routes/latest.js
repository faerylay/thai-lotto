const getLatest = require('../data/latest')
const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const latestLotteryId = await getLatest()
    // const fetchedLotto = await fetch(`https://lotto.api.rayriffy.com/api/v1/lotto/${latestLotteryId}`).then(o => o.json())
    // frontend ကျရင်  ၂ ခါ  fetch ရမယ် bro 
    return res.status(200).send(latestLotteryId)
  } catch (e) {
    console.error(e)
    return res.status(400).send('api cannot fulfill your request at this time')
  }
});

module.exports = router;
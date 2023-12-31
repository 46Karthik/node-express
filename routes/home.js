
const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/", async (req, res, next) => {
    const postData = req.body;
    const url = postData.URL;
    const response = await axios.head(url, { maxRedirects: 5, validateStatus: null });
    const modified_URL = response.request._redirectable._currentUrl;

    res.json({ message: 'POST data received successfully', modified_URL: modified_URL });
});

module.exports = router;

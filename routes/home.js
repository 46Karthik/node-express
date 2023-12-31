const express = require("express");
const axios = require("axios");
const router = express.Router();

// GET method
router.get("/", async (req, res, next) => {
  return res.status(200).json({
    title: "Express Testing",
    message: "The app is working properly!",
  });
});

// POST method
router.post("/modification", async (req, res) => {
  try {
    // Access the JSON data sent in the request body
    const postData = req.body;
    const url = postData.URL;
    let modified_URL = ''; // Declare the variable here

    const response = await axios.head(url, { maxRedirects: 5, validateStatus: null });

    modified_URL = response.request._redirectable._currentUrl;
    // Log the received data
    console.log("modified_URL", modified_URL);

    // Send a JSON response
    res.json({ message: 'POST data received successfully', modified_URL: modified_URL });
  } catch (error) {
    console.error('Error:', error.message);
    // Send a JSON response with an empty modified_URL
    res.json({ message: 'Error processing POST data', modified_URL: '' });
  }
});

module.exports = router;

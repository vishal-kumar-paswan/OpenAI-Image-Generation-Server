const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { generateImage } = require("../controllers/image-generation");

router.post('/generate-image',
    [
        check("prompt", "prompt is required").exists(),
        check("prompt", "prompt should be of atleast length 1").isLength({ min: 1 }),
    ],
    generateImage
);

module.exports = router;
const { validationResult } = require("express-validator");
const { OpenAI } = require("openai");
const openai = new OpenAI({
    apiKey: process.env.API_KEY // You must store your API key in the .env file
});

exports.generateImage = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                error: errors.array()[0].msg,
                params: errors.array()[0].param,
            });
        }
        const { prompt } = req.body;
        const response = await openai.images.generate({ prompt });
        const image_url = response.data.data[0]?.url;
        return res.status(200).json({ image: image_url });
    } catch (error) {
        return res.status(400).json(error);
    }
}
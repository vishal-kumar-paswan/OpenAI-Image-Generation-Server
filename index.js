const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT || 8000;
const imageGenerationRoutes = require("./routes/image-generation");

app.use(express.json());
app.use(cors());
app.use(imageGenerationRoutes);

try {
    app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
} catch (error) {
    console.log("Failed to start server");
    console.log(error);
}

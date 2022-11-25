const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.get("*", (req, res) => {
  res.status(200).json({
    msg: "Catch All. Not running in production or staging?",
  });
});

// Set our backend port to be either an environment variable or port 5000
const PORT = process.env.PORT || 5001;

// Configure our server to listen on the port defined by our port variable
app.listen(PORT, () => console.log(`BACK_END_SERVICE_PORT: ${PORT}`));

const express = require("express");

const app = express();
app.get(/.*/, (req, res) => {
    res.end("iscrookay");
});
app.listen(process.env.PORT || 8000);
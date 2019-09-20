var express = require("express"),
    app     = express(),
    ejs     = require('ejs');

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.listen(process.env.PORT, () => {
    console.log("SERVER STARTED ON PORT 3000");
})



    
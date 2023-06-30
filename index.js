const express = require("express");
require("dotenv").config()
// const bodyParser = require("body-parser")
const db = require('./src/db');
const port = process.env.PORT || 3002
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Require route files
const usersRoutes = require('./src/routes/user.route');
app.use('/api/v1/users', usersRoutes);

db().then(() => {
    // Start the server
    app.listen(port, () => {
        console.log(`port started on ${port} `)
    });
});


app.get("/test", (req, res) => {
    return res.json({ message: "this is test message" })
})
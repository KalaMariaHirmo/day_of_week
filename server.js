const express = require("express");
const app = express();
app.set('view engine', 'ejs');

function get_day_of_week(date) {
    var days_of_week = ["Sunday", "Monday", "Tuesday", "Wednesday"];
    return days_of_week[date.getDay()];
}

app.get('/today', (req, res) => {
    var today = new Date();
    //res.send(get_day_of_week(today));
    res.render("day_of_week", {
        date: today,
        day_of_week: get_day_of_week(today)
    });
})

app.get('/birthday', (req, res) => {
    var today = new Date(2002, 02, 24);
    res.render("day_of_week", {
        date: today,
        day_of_week: get_day_of_week(today)
    });
})
app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
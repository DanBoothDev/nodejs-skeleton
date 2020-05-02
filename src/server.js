const app = require("./app");

var port = process.env.PORT || 3000;
app.set("port", port);

app.listen(app.get("port"), () => {
    console.log('Server started on port: ' + port);
});
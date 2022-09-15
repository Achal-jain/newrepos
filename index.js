const express = require('express');
const bodyParser = require('body-parser');
const route = require("./routes/route");
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());


mongoose.connect("mongodb+srv://Achal_jain:ygALROb3bN1WLoYb@cluster0.ijlhr.mongodb.net/vehicle", { useNewUrlParser: true })

.then(() => console.log('mongodb is connected'))
.catch(err => console.log(err))

app.use('/',route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
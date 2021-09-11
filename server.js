const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = 8081 || process.env.PORT;
app.get(require('./dbConn'));

let corsOptions = {
    origins: 'http://localhost:3000'
}

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.get('/', (req, res) => {
    res.send({ message: 'Welcome to the Journalize Christian App Service!' });
});

app.use('/v1/auth', require('./routes/auth.routes'));

app.listen(PORT, () => {
    console.log(`PORT ${PORT} is running successfully!`);
});

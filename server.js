// mongodb
require('./config/db');

const app = require('express')();
const port = process.env.PORT || 3000;

const UserRouter = require('./api/User');

const bodyParser = require('express').json;
app.use(bodyParser());

app.use('/user', UserRouter);

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
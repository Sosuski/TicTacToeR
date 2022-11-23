let express = require('express');
let server = express();
const mongoose = require('mongoose');

server.use(express.json());

mongoose.connect('mongodb://localhost:27017/users',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

//const a = require('userSchema');

server.post('/register', async (req, res) => {
  const user = new userSchema();

  user.username = req.body.user;
  user.password = req.body.pass;

  await user.save();

  res.json({
      message: 'success',
      code: 200
  })
});



server.listen(8000, () => {
    console.log("Server is on");
})


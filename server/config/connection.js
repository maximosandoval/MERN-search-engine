const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGO_URI || 'mongodb://localhost/searchBook',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
);

module.exports = mongoose.connection;

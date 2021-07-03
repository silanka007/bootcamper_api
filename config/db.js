const mongoose = require("mongoose");

const connectDb = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(
    `Mongodb connected: ${conn.connection.host}`.green.underline.bold
  );
};

module.exports = connectDb;

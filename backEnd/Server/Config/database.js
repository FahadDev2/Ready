const db = require("mongoose");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};



db.connect(process.env.DBHOST, options, (error) => {
  console.log("============== DATABASE ======================");
  if (error) {
    console.log(`${error.message}`);
  } else {
    console.log("Connected to DB");
  }
});
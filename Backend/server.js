const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION !!!");
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log("DB connection successful!"));

const port = 8000;

const server = app.listen(port, () => {
  console.log(`APP RUNNING ON PORT:${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION !!!");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

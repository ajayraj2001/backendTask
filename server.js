const { app } = require("./app");
const dotenv = require("dotenv");
const connectToDB = require("./config/database");

const PORT = 5000;
dotenv.config();

connectToDB();
// connectToDatabase();

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});

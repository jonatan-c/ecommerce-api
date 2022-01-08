require("dotenv").config();
const app = require("./server");
const port = process.env.PORT_SERVER;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

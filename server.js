import app from "./src/app.js";

const port = process.env.PORT || 7575;

app.listen(port, () => {
  console.log(`Server connected on http://localhost:${port}`);
});

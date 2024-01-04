const fsExtra = require("fs-extra");
const fs = require("node:fs");

fsExtra
  .copy("public", "dist/public")
  .then(() => console.log("Public directory copied successfully!"))
  .catch((err) => console.error(err));

fs.copyFile("vercel.json", "dist/vercel.json", (error) => {
  if (error) return console.log(error);
  console.log("vercel.json copied successfully!");
});

const fsExtra = require("fs-extra");
const { copyFile } = require("node:fs");

fsExtra
  .copy("public", "dist/public")
  .then(() => {
    console.log("Public directory copied successfully!");
    copyFile("vercel.json", "dist/vercel.json", (error) => {
      if (error) return console.log(error);
      console.log("vercel.json copied successfully!");
    });
  })
  .catch((err) => console.error(err));

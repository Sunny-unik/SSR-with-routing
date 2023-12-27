const fs = require("fs-extra");

fs.copy("public", "dist/public")
  .then(() => console.log("Public directory copied successfully!"))
  .catch((err) => console.error(err));

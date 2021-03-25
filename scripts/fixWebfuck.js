const fs = require("fs");
let configFilePath = "./node_modules/react-scripts/config/webpack.config.js"

let text = fs.readFileSync(configFilePath, "utf-8");
text = text.replace("keep_classnames: isEnvProductionProfile", "keep_classnames: true");
text = text.replace("keep_fnames: isEnvProductionProfile", "keep_fnames: true");

fs.writeFileSync(configFilePath, text);

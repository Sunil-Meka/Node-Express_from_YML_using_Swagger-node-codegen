const path = require('path');
const codegen = require('swagger-node-codegen');
 
codegen.generate({
  swagger: path.resolve(__dirname, './openapi.yml'),
  target_dir: path.resolve(__dirname, './dist')
}).then(() => {
  console.log('Done!');
}).catch(err => {
  console.error(`Something went wrong: ${err.message}`);
});
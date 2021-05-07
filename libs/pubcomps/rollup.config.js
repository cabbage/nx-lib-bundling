Object.defineProperty(exports, '__esModule', { value: true });
const builtins = require('rollup-plugin-node-builtins');
const resolve = require('@rollup/plugin-node-resolve');
const fileExtensions = ['.js', '.jsx', '.ts', '.tsx'];

function getRollupOptions(options) {
  const extraGlobals = {
    // <YOUR EXTRAGLOBALS NAMES>
    // Example:
    'react-dom': 'ReactDOM',
    'styled-components': 'styled',
    '@emotion/core': 'emotionCore',
    '@spike/core': '@spike/core',
    '@spike/webcore': '@spike/webcore',
  };
  if (Array.isArray(options.output)) {
    options.output.forEach((o) => {
      o.globals = Object.assign(Object.assign({}, o.globals), extraGlobals);
    });
  } else {
    options.output.globals = Object.assign(
      Object.assign({}, options.output.globals),
      extraGlobals
    );
  }
  options.plugins.push(
    resolve({
      preferBuiltins: true,
      extensions: fileExtensions,
      moduleDirectories: ['dist/libs', 'node_modules'], // IMPORTANT
    })
  );
  options.plugins.push(builtins());
  options.external = [
    // YOUR EXTERNAL LIBS (Libs you don't want to bundle)
    // Example:
    'react',
    'react-is'
  ];
  return options;
}
module.exports = getRollupOptions;

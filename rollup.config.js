const path = require('path')
export default {
  input: './src/index.ts',
  output: {
    file: path.resolve(__dirname, 'mUtils'),
    format: 'cjs'
  }
};

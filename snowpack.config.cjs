const fs = require('fs')

let cert
let key

if (process.env.NODE_ENV === 'development') {
  cert = fs.readFileSync('/dev-certs/local-computer.crt')
  key = fs.readFileSync('/dev-certs/local-computer.key')
}

module.exports = {
  root: './app',
  buildOptions: {
    out: './public'
  },
  // not working, replaced with copy_assets in package.json
  // https://github.com/snowpackjs/snowpack/issues/1286
  // mount: {
  //   "node_modules/@shoelace-style/shoelace/dist/assets": { url: "/shoelace/assets", static: true }
  // },
  plugins: [
    '@snowpack/plugin-svelte'
  ],
  devOptions: {
    port: 8081,
    secure: { cert, key }
  }
}
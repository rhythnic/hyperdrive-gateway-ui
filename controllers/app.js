import { hexToBase32 } from '../lib/hex-to-base32.js'

export class AppController {
  openHyperdriveTab (event) {
    const hyperdriveUri = event.detail.formData.get('uri')
    const [_, publicKey, filePath] = /^hyper:\/\/([0-9a-fA-F]{64})(\/?.*)$/.exec(hyperdriveUri)
    const host = import.meta.env.SNOWPACK_PUBLIC_GATEWAY_HOST || window.location.host
    const publicKeyBase32 = hexToBase32(publicKey)
    const gatewayUri = `https://${publicKeyBase32}.${host}${filePath}`
    window.open(gatewayUri, "_blank");
  }
}

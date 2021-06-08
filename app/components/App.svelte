<script>
  import SlForm from '@shoelace-style/shoelace/dist/components/form/form.js'
  import SlInput from '@shoelace-style/shoelace/dist/components/input/input.js'
  import SlButton from '@shoelace-style/shoelace/dist/components/button/button.js'
  import SlCard from '@shoelace-style/shoelace/dist/components/card/card.js'
  import { hexToBase32 } from '../lib/hex-to-base32.js'

  const {
    SNOWPACK_PUBLIC_APP_NAME: APP_NAME,
    SNOWPACK_PUBLIC_GATEWAY_HOST: GATEWAY_HOST
  } = import.meta.env

  let form
  const submitForm = () => form.submit()

  function openHyperdriveTab (event) {
    const hyperdriveUri = event.detail.formData.get('uri')
    const [_, publicKey, filePath] = /^hyper:\/\/([0-9a-fA-F]{64})(\/?.*)$/.exec(hyperdriveUri)
    const host = GATEWAY_HOST || window.location.host
    const publicKeyBase32 = hexToBase32(publicKey)
    const gatewayUri = `https://${publicKeyBase32}.${host}${filePath}`
    window.open(gatewayUri, "_blank");
  }
</script>


<header>
  <h1>{APP_NAME}</h1>
  <a href="https://github.com/rhythnic/hyperdrive-gateway">A hyperdrive gateway</a>
</header>
<main>
  <section class="hyper-uri-section">
    <sl-card class="hyper-uri-card">
      <div slot="header">
        Hyperdrive URL
        <sl-button on:sl-click={submitForm} class="open-btn" size="small" pill submit>Open</sl-button>
      </div>
      <sl-form class="hyper-uri-form" on:sl-submit={openHyperdriveTab} bind:this={form}>
        <sl-input
          name="uri"
          placeholder="hyper://d3b1ab6b6e703f02ecc2ad1909b5ee8e7a0da6498e56a2d9f09bf75f081d8c65"
        ></sl-input>
      </sl-form>
    </sl-card>
  </section>
</main>


<style>
  header {
    text-align: center;
    padding: 2rem 1rem;
  }
  h1 {
    margin-bottom: 0.5rem;
  }
  section {
    width: 100%;
    padding: 1rem 0;
  }
  .hyper-uri-section {
    display: flex;
    justify-content: center;
  }
  .hyper-uri-card {
    width: 100%;
    max-width: 800px;
  }
  .hyper-uri-card [slot="header"] {
    display: flex; 
    align-items: flex-end; 
    justify-content: space-between;
  }
  .hyper-uri-form {
    margin-top: 0.25rem;
  }
</style>

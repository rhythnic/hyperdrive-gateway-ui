import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js'
import App from './components/App.svelte'

// Set the base path to the folder you copied Shoelace's assets to
setBasePath('/shoelace')

window.onunhandledrejection = handleError
window.addEventListener("error", handleError, /*useCapture*/ true)

function handleError(error) {
  console.error(error)
}

const app = new App({
	target: document.body,
	props: {
		// we'll learn about props later
		answer: 42
	}
})
import { createApp } from 'vue'
import App from './App.vue'
import HelloAPI from "@/services/HelloAPI"

//add an import statement to pull from HelloAPI.js (in services folder)

//make an app variable from this:
// createApp(App).mount('#app')
let app = createApp(App)

//add new api service to the app ^^
//what is this: app.config.globalProperties.$hello_api equal to:
//The things we've defined in the HelloAPI.js services file:
app.config.globalProperties.$hello_api = HelloAPI
//We'll be able to use HelloAPI in our components (any component)
//to make requests to your API.

app.mount('#app')


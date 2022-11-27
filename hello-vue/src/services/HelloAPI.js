import axios from 'axios'

let base = 'api'

export default {
    getHelloMessage() {
        return axios.get(base).then(response => {
            return response.data
        })
    }
}

//axios.get(base) will make a get request to /api
//when the response is received, it will automatically convert it from:
//  the response decoded into JSON,
//  and export default means "provide a function with the name HelloMessage()
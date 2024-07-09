//define the user services

import { instance } from "./instance"

const userServices = {
    //register a new user
    register: async (name, email, password) => {
    // make a POST request to the server endpoint 
    return await instance.post('/users', {
        name,
        email,
        password
    })
    }
}

export { userServices };
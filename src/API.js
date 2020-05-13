const baseUrl = 'https://manaskincare.herokuapp.com/';

const userUrl = baseUrl + '/users'
const productUrl = baseUrl + '/products'
const serviceUrl = baseUrl + '/services'
const loginUrl = baseUrl + '/login'
const validateURL = baseUrl + '/validate'
const signupURL = baseUrl + '/create'

const get = (url) => (
     fetch(url).then(resp => resp.json())
    
)

const getToken = (url,token) => (
    fetch(url,{ headers: {'Authorization':token}}).then(resp => resp.json())
    // console.log(url,token)
)


const post = (url,obj) => {
    const configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(obj) 
    }
   return fetch(url, configObject)
}

const getUsers = () => get(userUrl);
const getProducts = () => get(productUrl);
const getServices = () => get(serviceUrl);

const logingFetch = (body) => {
    return post(loginUrl,body).then(resp => resp.json())
}

const validate = (token) => {
    return getToken(validateURL,token)
}

const signup = (body) => {
    return post(signupURL,body).then(resp => resp.json())
}


export default { getUsers,getProducts,getServices, logingFetch, validate, signup }



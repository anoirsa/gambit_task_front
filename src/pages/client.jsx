import fetch from 'unfetch';


export const getAllData = async() => {
    const response = await fetch("http://localhost:8080/api/registers");
    const json = await response.json()
    
    return json;
}
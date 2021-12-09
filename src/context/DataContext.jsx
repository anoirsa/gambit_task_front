import CreateDataContext from "./CreateDataContext";

import fetch from 'unfetch';


const getData = async(registerNumberR) => {
    const response = await fetch("https://gambiktask.herokuapp.com/api/registers");
    const json = await response.json()
    if (registerNumberR) {
        const searchedFor = json.filter((value) => value.registerNumber === parseFloat(registerNumberR))[0]
        console.log(searchedFor)
        if (searchedFor) {
            return {searchedFor};
        }
        else {
            return {error : true}
        }
    }
    return json;
}

export const {Provider, Context} = CreateDataContext({getData});
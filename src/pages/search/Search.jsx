import React,{useContext, useState}from 'react'
import { Context } from '../../context/DataContext';
import { Container, Wrapper, InputWrapper } from './SearchRegsiter'

const Search = () => {
    const [input, setInput] = useState(false);
    const [number, setNumber] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState("")


    const {getData} = useContext(Context)


    const handleKeyPress = async (e) => {
        if (e.key == 'Enter') {
            const {searchedFor, error} = await getData(number)
            if (searchedFor) {
                setResult(searchedFor)
            }
            else if (error){
                setResult(null)
                setError("You need type a number betwwen 1-100 and no letters");
            }

        }
    }
    return (
        <Container>
            <Wrapper>
                <h4>Search for a register value by typing its number and press enter:</h4>
                <InputWrapper
                    focused={input}
                >
                    <input type="text" 
                           value={number}
                           onChange={(e) => setNumber(e.target.value)}
                           onKeyPress={(e) => handleKeyPress(e)}
                           onFocus={() => setInput(true)}
                           onBlur={() => setInput(false)}
                    />
                    <h4 className="result--section">
                        {result ? result.registerValue : error}
                    </h4>
                </InputWrapper>

            </Wrapper>
        </Container>
    )
}

export default Search

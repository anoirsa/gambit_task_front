import React, {useState, useEffect} from 'react'
import { getAllData } from '../client';
import { Container, BoxContainer } from './GetAllSC'


const GetAll = () => {

    const [registers, setRegister] = useState([]);

    useEffect(async () => {
        const tempV = await getAllData();
        setRegister(tempV);
        console.log(tempV);
    }, [])

    return (
        <Container>
            {registers.map((value, index) => {

                return (
                    <RegsiterBox register={value} key={index}  />
                )
            })}
            
            
        </Container>
    )
}


const RegsiterBox = ({register}) => {

    return (
        <BoxContainer>
            <p>Register number : <span>{register.registerNumber}</span></p>
            <p>Register value : <span>{register.registerValue}</span> </p>

        </BoxContainer>
    )

}


export default GetAll

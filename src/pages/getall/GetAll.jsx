import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../context/DataContext";
import WaitLoader from "../../waitloader/WaitLoader";
//import { getAllData } from '../client';
import { Container, BoxContainer } from "./GetAllSC";

const GetAll = () => {
  const { getData } = useContext(Context);
  const [registers, setRegister] = useState(null);

  useEffect(async () => {
    const tempV = await getData();
    setRegister(tempV);
  }, []);

  return (
    <Container>
      {registers ? (
        registers.map((value, index) => {
          return <RegsiterBox register={value} key={index} />;
        })
      ) : (
        <WaitLoader />
      )}
    </Container>
  );
};

const RegsiterBox = ({ register }) => {
  return (
    <BoxContainer>
      <p>
        Register number : <span>{register.registerNumber}</span>
      </p>
      <p>
        Register value : <span>{register.registerValue}</span>{" "}
      </p>
    </BoxContainer>
  );
};

/**
  {registers.map((value, index) => {

                return (
                    <RegsiterBox register={value} key={index}  />
                )
            })}
 */

export default GetAll;

import React from "react";
import styled, { css } from "styled-components/macro";

const WaitIcon = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  position: absolute;
  align-self: center;
  justify-self: center;
  
 

  @-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

`;

const WaitLoader = () => {
  return <WaitIcon>

  </WaitIcon>;
};

export default WaitLoader;

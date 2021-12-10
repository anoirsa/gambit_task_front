import styled,{css} from 'styled-components/macro';



const customCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    ${customCenter}
    width: 100%;
    min-width: 800px;
    min-height: calc(100vh - 70px);
    background: #a6c0f1;
   
   


`;

const Wrapper = styled.div`
    width: 500px;
    height: 600px;
    border-radius: 3px;
    border: 1.5px solid #ffff;
    background: #4d6796;
    ${customCenter}
    flex-direction: column;
    color:#ffff;
    h4 {
        font-weight: 300;
    }
    .result--section {
        margin-top: 40px;
        text-align: center;
    }
`;

const InputWrapper = styled.div`
  border-bottom: 2px solid #ffff;
  width: ${({ focused }) => (focused ? "220px" : "160px")};
  transition: all 300ms ease-out;
  height: 40px;
  input {
    height: 100%;
    background: transparent;
    outline: none;
    border: none;
    color: #ffff;
    font-size: 15px;
    &::placeholder {
      color: #aca1a1;
      font-size: 15px;
    }
  }
`;





export {Container, Wrapper, InputWrapper};
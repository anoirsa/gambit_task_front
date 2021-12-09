import styled,{css} from 'styled-components/macro';



const Container = styled.div`
    
    width: 100vw;
    background: #a6c0f1;
    padding: 30px 0px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-flow: auto;
    grid-gap: 0.5rem;


`;

const BoxContainer = styled.div`
    height: 60px;
    width: 220px;
    border-radius: 3px;
    border: 1.5px solid #ffff;
    background: #4d6796;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 2px 10px;
    color:#ffff;
    margin-left: 10px;
    cursor: pointer;

    &:hover {
        transform: translateY(-2px);
        opacity: 0.7;
        transition: all 400ms ease-out;


    }
    
`;


export {Container, BoxContainer};

import styled,{css} from 'styled-components/macro'



const customCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    width: 100%;
    height: 70px;
    background: #1e5dd3;
    display: flex;
    justify-content: space-between;
    align-items: center;

`;

const Wrapper = styled.div`
    width: 60%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    padding: 0px 10px;

`;

const LinkWrapper = styled.div`
    padding: 0px 5px;
    border-right: ${({primary}) => primary ? 'none' : '2px solid #ffffff'  };
    border-radius: 2px;
    ${customCenter}
    .link--item {
        color: #ffffff;
        text-decoration: none;
        font-size: 20px;
        margin-right: 10px;
        font-weight: 400;
        &:hover {
            transform: translateY(-2px);
            opacity: 0.7;
            transition: all 400ms ease-out;
            text-decoration: underline;
        }
    }

    .link--icon { 
        color: #ffffff;
        text-decoration: none;
        font-size: 17px;
        margin-right: 20px;
        font-weight: 200;
        font-family: 'Source Code Pro', monospace;
    }


`;


export {Container, Wrapper, LinkWrapper}


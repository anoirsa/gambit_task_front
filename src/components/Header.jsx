

import React from 'react'
import { Container, LinkWrapper, Wrapper } from './HeaderSC'
import {Link} from "react-router-dom"

function Header() {
    return (
        <Container>
            <Wrapper>
                <LinkWrapper>
                    <Link to="#"  className="link--item" >
                        All
                    </Link>
                </LinkWrapper>

                <LinkWrapper>
                    <Link to="#"  className="link--item" >
                        Search for register
                    </Link>
                </LinkWrapper>
            </Wrapper>

            <LinkWrapper>
                    <Link to="#"  className="link--icon" >
                        Gambit task
                    </Link>
                </LinkWrapper>

           

            
        </Container>
    )
}

export default Header

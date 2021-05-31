import React from "react";

import { Container, NameContainer, InfoContainer, Name, InfoLinks, GitHubButton } from "./style";

const Header = () => {
    return (
        <Container>
            <NameContainer>
                <Name><b>Rafael Kepler</b></Name>
            </NameContainer>
            <InfoContainer>
                <InfoLinks><u>Início</u></InfoLinks>
                <InfoLinks onClick={() => window.scroll(0, 10000)}>Contato</InfoLinks>
                <GitHubButton onClick={() => window.open('https://github.com/RafaelEdKepler/', '_blank')}>GitHub</GitHubButton>
            </InfoContainer>
        </Container >
    )
}

export default Header;
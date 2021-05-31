import React from "react";

import {Container, NameContainer, InfoContainer, Name, InfoLinks, GitHubButton} from "./style";

const Header = () => {
    return (
        <Container>
            <NameContainer>
                <Name>Rafael Kepler</Name>
            </NameContainer>
            <InfoContainer>
                <InfoLinks><u>Início</u></InfoLinks>
                <InfoLinks>Contato</InfoLinks>
                <GitHubButton>GitHub</GitHubButton>
            </InfoContainer>
        <Container/>
    )
}

export default Header;
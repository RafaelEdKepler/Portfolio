import React from "react";

import { Container, Name, Description, SubDescription, SeeMoreButton, SeeMoreArrowContainer, SeeMoreArrow } from './style';

const BodyHeader = () => {
    return (
        <Container>
            <Name>Rafael Eduardo Kepler</Name>
            <Description>Desenvolvedor Web, Mobile e Desktop</Description>
            <SubDescription>Java, HTML, CSS, Javascript, React, Node, Laravel e muito mais.</SubDescription>
            <SeeMoreButton onClick={() => window.scroll(0, 770)}>Veja mais</SeeMoreButton>
            <SeeMoreArrowContainer>
                <SeeMoreArrow onClick={() => window.scroll(0, 770)} src="./seta.svg" />
            </SeeMoreArrowContainer>
        </Container>
    );
}

export default BodyHeader;
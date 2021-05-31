import React from "react";

import { Container, Name, Description, SubDescription, SeeMoreButton, SeeMoreArrowContainer, SeeMoreArrow}

const BodyHeader = () => {
    return(
        <Container>
            <Name>Rafael Eduardo Kepler</Name>
            <Description>Desenvolvedor Web, Mobile e Desktop</Description>
            <SubDescription>Java, HTML, CSS, Javascript, React, Node, Laravel e muito mais.</SubDescription>
            <SeeMoreButton>Veja mais</SeeMoreButton>
            <SeeMoreArrowContainer>
                <SeeMore/>
            </SeeMoreArrowContainer>
        <Container/>
    );
}

export default BodyHeader;
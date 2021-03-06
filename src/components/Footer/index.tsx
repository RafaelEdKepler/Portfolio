import React from "react";
import { FaTwitterSquare, FaLinkedin, FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";

import { Container, ColumnContainer, Info, TitleColumn, Link, LinkContainer } from './style';

const Footer = () => {
    return (
        <Container>
            <ColumnContainer>
                <TitleColumn>Endereço</TitleColumn>
                <Info>Panambi, Rio Grande do Sul, Brasil</Info>
                <Info><u>+55 (55) 991082012</u></Info>
                <Info>rafael.kepler@hotmail.com</Info>
                <TitleColumn>Rafael Eduardo Kepler</TitleColumn>
            </ColumnContainer>
            <ColumnContainer>
                <TitleColumn>Páginas</TitleColumn>
                <Info onClick={() => window.open('localhost:3000', '_self')}>Início</Info>
            </ColumnContainer>
            <ColumnContainer>
                <TitleColumn>Siga-me</TitleColumn>
                <LinkContainer>
                    <FaTwitterSquare/>
                    <Link href="https://twitter.com/KeplerEdRafael">Twitter</Link>
                </LinkContainer>
                <LinkContainer>
                    <FaLinkedin/>
                    <Link href="http://www.linkedin.com/in/RafaelEdKepler">Linkedin</Link>
                </LinkContainer>
                <LinkContainer>
                    <FaInstagramSquare/>
                    <Link href="https://www.instagram.com/kepleredrafael/">Instagram</Link>
                </LinkContainer>
                <LinkContainer>
                    <FaFacebookSquare/>
                    <Link href="https://www.facebook.com/Kepler.Ed.Rafael/">Facebook</Link>
                </LinkContainer>
            </ColumnContainer>
        </Container>
    )
}

export default Footer;
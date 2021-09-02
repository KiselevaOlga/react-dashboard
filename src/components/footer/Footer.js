import styled from "styled-components";

const FooterWrapper = styled.footer`
    grid-area: footer;
    background: lightgray;
    border: 1px solid black;
`;
const FooterLink = styled.p`
    color: red;
`;


export const Footer = () => {
    return (
        <FooterWrapper>
            <FooterLink>It is footer link</FooterLink>
            <FooterLink>It is second footer link</FooterLink>
        </FooterWrapper>
    )
}
import styled from "styled-components";

const FooterWrapper = styled.footer`
    grid-area: footer;
    height: 45px;
    background: #F2F4F6;
    display: flex;
    margin: 0 10px;  
    border-top: 1px solid lightgray;
`;
const FooterLink = styled.a`
    color: black;
    cursor: pointer;
    margin: 0px 10px;
    text-decoration: none;
    transition: 100ms ease-in;
    &:hover{
        color: blue;
        text-decoration: underline;
        text-underline-position: under;
    }
    &:last-child{
        margin-left: auto;
        color: grey;
        cursor: default;
        text-decoration: none;
    }

`;


export const Footer = () => {
    return (
        <FooterWrapper>
            <FooterLink><p>Home</p></FooterLink>
            <FooterLink><p>Services</p></FooterLink>
            <FooterLink><p>About</p></FooterLink>
            <FooterLink><p>Products</p></FooterLink>
            <FooterLink><p>Help</p></FooterLink>
            <FooterLink><p>Copyright © 2021 Olga Kiseleva</p></FooterLink>
        </FooterWrapper>
    )
}
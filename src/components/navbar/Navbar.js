import styled from "styled-components";

const NavbarWrapper = styled.header`
    grid-area: header;
    background: orange;
    border: 1px solid black;
`;
const NavbarLink = styled.p`
    color: blue;
`;


export const Navbar = () => {
    return (
        <NavbarWrapper>
            <NavbarLink>navbar link</NavbarLink>
            <NavbarLink>second navbar link</NavbarLink>
        </NavbarWrapper>
    )
}
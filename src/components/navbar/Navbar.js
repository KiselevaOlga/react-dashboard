import styled from "styled-components";
import "./Navbar.css";
import bellBlue from "../../images/icons/bellBlue.svg";
import searchBlue from "../../images/icons/searchBlue.svg";
import User from "../../images/icons/user.svg";


export const Navbar = () => {
    return (
        <NavbarWrapper>
            <NavElement>
                <form>
                    <Icon Src={searchBlue}></Icon>
                    <input type="text" 
                            placeholder="Search for something..." 
                            className="formInput"
                    />
                </form>
            </NavElement>
            <NavElement>
                <Icon Src={bellBlue} borCol="lightgray" borWidth="0px 1px" padding="0px 20px"></Icon>
                <Icon Src={User} border="none"></Icon>
                <p>Olga Kiseleva</p>
            </NavElement>
        </NavbarWrapper>
    )
}

const NavbarWrapper = styled.header`
    grid-area: header;
    background: white;
    z-index: 2;
    height: 60px;
    display: flex;
    align-items: center;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const NavElement = styled.div`
    display: flex;
    margin: 0 10px;
    &:last-child{
        margin-left: auto;
    }
`
export const Icon = styled.img.attrs(props=> ({
    src: props.Src || ""
  }))`
    width: ${props => props.width || "25px"};
    margin: 0 10px;
    padding: ${props=> props.padding || "0px"};
    border-color: ${props => props.borCol || 'transparent'};
    border-width: ${props => props.borWidth || '0px'};
    border-style: solid;
    transition: all 150ms ease-in-out;
`
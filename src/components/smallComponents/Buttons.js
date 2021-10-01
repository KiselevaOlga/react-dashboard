import styled from "styled-components";

export const GreyButton = styled.button`
    background: lightgrey;
    width: 200px;
    color: #002652;
    font-weight: bold;
    white-space: nowrap;
    height: 40px;
    border-radius: 8px;
    font-size: 1.1rem;
    border: none;
    transition: all 150ms linear;
    &:hover {
        box-shadow: #002652 1.95px 1.95px 2.6px;
        background: #93C3FF; 
    }
`
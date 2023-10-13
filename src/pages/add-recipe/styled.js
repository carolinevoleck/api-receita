import styled from "styled-components";

export const PageTitleStyled = styled.h1`
    font-size: 3vw;
    text-align: center;
    font-weight: bold;
    margin-bottom: 20px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; 

    @media (max-width: 48rem) {
        font-size: 5vw; 
    }

    @media (min-width: 75rem) {
        font-size: 2.5vw; 
    }
`;
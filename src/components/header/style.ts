import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: white;
    gap: 20px;
`;
export const HeaderTextContainer = styled.div`
    color: black;
    background-size:cover;
    padding: 20px;
`;
export const HeaderText = styled.h1`
   font-size: 35px;
   color: white;
`;
export const HeaderMainText = styled.h1`
    font-size: 25px;
    inline-size: 450px;
    background-color:rgba(0, 0, 0, 0.692);
    padding: 20px;
    border-radius: 10px;
    margin: 0px 5px;
    @media(max-width:780px){
        inline-size: auto;
    }
`;
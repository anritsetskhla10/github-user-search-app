import styled from "styled-components";

interface IHeader{
    mode:boolean;
}

const StyledHeader = styled.header<IHeader>`
    min-width: 375px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 31px 24px 0;


    h1{
        font-size: 26px;
        font-weight: bold;
        color: ${({mode}) => mode ? "#fff" : "#222731" } ;
    }

    div{
        display: flex;
        flex-direction: row;
        gap: 16px;
    }

    h2{
        font-size: 13px;
        font-weight: bold;
        letter-spacing: 2.5px;
        color: ${({mode}) => mode ? "#ffffff" : "#4b6a9b" } ;


        &:hover{
            cursor: pointer;
            color: ${({mode}) => mode ? "#90a4d4" : "#222731" }
        }
    }

    img{
        width: 20px;
        height: 20px;

        &:hover{
            cursor: pointer;

            filter: ${({mode}) => mode ? 
           'invert(74%) sepia(8%) saturate(1650%) hue-rotate(187deg) brightness(87%) contrast(89%)':
           'brightness(0) saturate(100%) invert(11%) sepia(18%) saturate(836%) hue-rotate(181deg) brightness(93%) contrast(89%)'};
        }
    }

    @media only screen and (min-width:768px) {
        min-width: 768px;
        padding: 140px 97.5px 0;

    }

    @media only screen and (min-width:1440px){
        min-width: 1440px;
        padding: 144px 355px 0;
    }

    
`


export default StyledHeader;
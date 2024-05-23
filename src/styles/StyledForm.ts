import styled from "styled-components";

interface IForm{
    mode:boolean;
}

const StyledForm = styled.form<IForm>`
    width: 327px;
    margin: 36px 0 16px;
    padding: 6.5px 7px 7.5px 16px;
    border-radius: 15px;
    box-shadow: 0 16px 30px -10px rgba(70, 96, 187, 0.2);
    background-color:${({mode}) => mode ? "#1e2a47" : "#fefefe" };
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;

    & > div{
        display: flex;
        align-items: center;
        gap: 11px;
    }
    img{
        width: 20px;
        height: 20px;
    }

     input[type="text"]{
        width: 184px;
        border: none;
        font-size: 13px;
        line-height: 1.92;
        color: ${({mode}) => mode ? "#fff" : "#4b6a9b" };
        background-color:${({mode}) => mode ?"#1e2a47" : "#fefefe" };

        &::placeholder{
            font-size: 13px;
            line-height: 1.92;
            color: ${({mode}) => mode ? "#fff" : "#4b6a9b" };

        }
    }

    .error{
        font-size: 11px;
        font-weight: bold;
        color: #f74646;
        margin: 0;
        white-space: nowrap;
        position: absolute;
        right: 100px;
    }

     button{
        padding: 12.5px 14px 12.5px 18px;
        border: none;
        border-radius: 10px;
        background-color: #0079ff;
        font-size: 14px;
        font-weight: bold;
        color: #fff;

        &:hover{
            cursor: pointer;
            background-color: #60abff;
        }
    }

    @media only screen and (min-width:768px){
        width: 573px;
        padding: 10px 10px 10px 33px;
        margin: 36px 0 24px;
        justify-content: space-between;

        & > div{
        display: flex;
        align-items: center;
        gap: 24px;
        }

        img{
        width: 24px;
        height: 24px;
        }

         input[type="text"]{
        width: 254px;
        font-size: 18px;
        line-height: 1.39;

        &::placeholder{
            font-size: 18px;
            line-height: 1.39;
            }
        }

         button{
            padding: 12.5px 23px 13.5px 24px;
            font-size: 16px;
        }

        .error{
            font-size: 15px;
            position:unset;
        }

    }

    @media only screen and (min-width:1440px){
        width: 730px;
        padding: 23px 10px 22px 32px;

         input[type="text"]{
            width: 254px;
        }

    }

`


export default StyledForm;
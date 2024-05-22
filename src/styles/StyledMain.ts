import styled from "styled-components";

interface IMain{
    mode:boolean;
}

const StyledMain = styled.main<IMain>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 79px;

    z.main-container{
        width: 327px;
        padding: 32px 24px 48px;
        border-radius: 15px;
        box-shadow: 0 16px 30px -10px rgba(70, 96, 187, 0.2);
        background-color:${({mode}) => mode ?"#1e2a47" : "#fefefe" };
    }

    .profile-container{
        display: flex;
        flex-direction: row;
        gap: 19px;
        margin-bottom: 33px;

        img{
            width: 70px;
            height: 70px;
            border-radius: 50%;
        }

        .info{
            display: flex;
            flex-direction: column;
            h2{
                font-size: 16px;
                font-weight: bold;
                color: ${({mode}) => mode ? "#ffffff" : "#2b3442" };
            }
    
            a{
                font-size: 13px;
                color: #0079ff;
                text-decoration: none;
                margin: 0 0 6px;
            }
    
            p{
                font-size: 13px;
                color: ${({mode}) => mode ? "#ffffff" : "#697c9a" };
            }
        }

    }

    p{
        font-size: 13px;
        line-height: 1.92;
        color: ${({mode}) => mode ? "#ffffff" : "#4b6a9b" };
    }

    .connections{
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 279px;
        margin: 23px 0 24px;
        padding: 18px 14px 19px 15px;
        border-radius: 10px;
        background-color:${({mode}) => mode ?"#141d2f" : "#f6f8ff" };

        div{
            display: flex;
            flex-direction: row;
        }

        .connection-info{
            width: 88px;
            font-size: 11px;
            text-align: center;
            color: ${({mode}) => mode ? "#ffffff" : "#4b6a9b" };
        }

        .numbers{
            width: 88px;
            font-size: 16px;
            font-weight: bold;
            text-align: center;
            color: ${({mode}) => mode ? "#ffffff" : "#2b3442"};
        }
    }

    .links{
        display: flex;
        flex-direction: column;
        gap: 16px;

        div{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 13px;

            img{
                filter: ${({mode}) => mode ? 
                'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(16%) hue-rotate(329deg) brightness(105%) contrast(105%)':
                'brightness(0) saturate(100%) invert(38%) sepia(68%) saturate(357%) hue-rotate(177deg) brightness(91%) contrast(88%)' 
            }
        }

            a{
                text-decoration: none;
                font-size: 13px;
                color: ${({mode}) => mode ? "#ffffff" : "#4b6a9b" };
                //not available opacity:0.5;

                &:hover{
                    cursor: pointer;
                    text-decoration: underline;
                }
            }
        }
    }

    @media only screen and (min-width:768px){
            padding-bottom: 236px;

            .main-container{
                width: 573px;
                padding: 40px;
            }

            .profile-container{
                align-items: center;
                gap: 41px;
                margin-bottom: 24px;
                img{
                    width: 117px;
                    height: 117px;
                }

                .info{

                    h2{
                        font-size: 26px;
                    }

                    a{
                        font-size: 16px;
                    }

                    p{
                        font-size: 15px;
                    }
                }
            }

            p{
                font-size: 15px;
                line-height: 1.67;
            }

            .connections{
            gap: 1px;
            width: 493px;
            margin: 32px 0 30px;
            padding: 15px 96px 17px 32px;

            div{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }

            .connection-info{
                font-size: 13px;
                text-align: left;
            }

            .numbers{
                font-size: 22px;
                text-align: left;
            }
        }

        .links{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 19px 65px;

            div{
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 16px;
            }

            .twitter{
                grid-column: 2/2;
                grid-row: 1/2;
            }

            a{
                font-size: 15px;
            }
        }
    }

    @media only screen and (min-width:1440px){
            padding-bottom: 236px;

            .main-container{
                width: 730px;
                padding: 44px 48px 48px;
            }

            .profile-container{
                align-items: start;
                gap: 37px;
                margin-bottom: 0;

                .info{
                    display: grid;
                    grid-template-columns: 176px 138px 166px;
                    align-items:center;

                    h2{
                        font-size: 26px;
                    }

                    a{
                        font-size: 16px;
                        grid-row: 2/2;
                        margin-bottom: 20px;
                    }

                    p{  
                        margin: 0;
                        font-size: 15px;
                        grid-column: 3/3;
                    }
                }
            }

            p{  
                margin-left: 156px;
                margin-top: -40px;
                font-size: 15px;
                line-height: 1.67;
            }

            .connections{
            gap: 1px;
            width: 493px;
            margin: 32px 0 30px 156px;
            padding: 15px 96px 17px 32px;

            div{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }

            .connection-info{
                font-size: 13px;
                text-align: left;
            }

            .numbers{
                font-size: 22px;
                text-align: left;
            }
        }

        .links{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 19px 65px;
            margin-left: 156px;

            div{
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 16px;
            }

            .twitter{
                grid-column: 2/2;
                grid-row: 1/2;
            }

            a{
                font-size: 15px;
            }
        }
    }
`


export default StyledMain;
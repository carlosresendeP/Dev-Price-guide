import styled from "styled-components";

export const Container = styled.div`


`;

export const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    flex-direction: column;
    background-color:${(props) => props.theme.colors.secondary};
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    transition: box-shadow 0.3s ease, transform 0.3s ease;

    height: 100%;
    img{
        width: 100px;
        height: auto;
        border-radius: 10px;
    }
    h2{
        font-size: 1.2rem;
        margin: 10px 0;
        font-weight: 600;
        line-height: 150%;
        letter-spacing: 0.3px;
    }
    p{
        font-size: 1rem;
        margin: 5px 0;
        font-weight: 400;
        
        span{
            color: ${(props) => props.theme.colors.Highlight};
            font-weight: 600;
        }
    }
    button{
        background-color: ${(props) => props.theme.colors.primary};
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
        font-weight: 600;
        transition: background-color 0.3s ease, transform 0.3s ease;
        margin: 5px 0;

        &:hover{
            background-color: ${(props) => props.theme.colors.primaryHover};
            transform: scale(1.05);
        }
    }

    &:hover{
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        transform: translateY(-2px);
    }

    &:active{
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transform: translateY(0);
    }
    &:focus{
        outline: none;
        box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary};
    }
`
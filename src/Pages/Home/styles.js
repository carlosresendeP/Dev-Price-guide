import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 20px;
    margin: auto;
    background-color:${(props) => props.theme.colors.background};
`
export const Content = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    background-color:${(props) => props.theme.colors.background};
    
    h1{
        font-size: 2rem;
        color: ${props => props.theme.colors.primary};
        font-weight: 500;
        text-align: center;
    }

`

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width:100%;
    margin: 20px auto;
    background-color:${(props) => props.theme.colors.background};

`
export const SearchBar = styled.div`
    width: 100%;
    flex: 0.65;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ImputBar = styled.input`
    flex: 0.5;
    width: 100%;
    background-color: ${props => props.theme.colors.border};
    padding: 10px 30px;
    outline: none;
    border: none;
    border-radius: 50px;
    box-shadow: 0px 0px 20px rgba(71, 91, 221, 0.3);
    border: 1px solid rgba(71, 91, 221, 0.3);

    &:focus{
        border: 1px solid ${props => props.theme.colors.primary};
        box-shadow: 0px 0px 20px rgba(71, 91, 221, 0.3);
    }
`
export const SearchButon = styled.button`
    background-color: ${props => props.theme.colors.primary};
    padding: 10px 30px;
    outline: none;
    border: none;
    border-radius: 50px;
    color: ${props => props.theme.colors.secondary};

    &:hover{
        background-color: ${props => props.theme.colors.secondary};
        color:${props => props.theme.colors.primary};
        box-shadow: 0px 0px 20px rgba(71, 91, 221, 0.3);
        border: 1px solid ${props => props.theme.colors.primary};
    }
`

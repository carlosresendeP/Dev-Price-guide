import styled from "styled-components";

export const Container = styled.div`
    padding: 40px;

`

export const GridProducts = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-bottom: 30px;

`
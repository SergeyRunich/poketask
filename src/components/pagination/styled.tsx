import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow: hidden;
    padding: 5px;
    box-sizing: border-box;
`;

export const Button = styled.button`
    margin: 5px;
    background-color: #fff;
    border: 1px solid #efefef;
    outline: 0;
    padding: 6px 8px;
    border-radius: 3px;
    cursor: pointer;
    &.active {
        border: 1px solid #c1c1c1;
        font-weight: bold;
    }
`;


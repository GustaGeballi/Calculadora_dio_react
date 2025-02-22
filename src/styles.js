import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #dbdbdb;

  display: flex;
  align-items: center;
  justify-content: center;
  `

  export const Content = styled.div`
    background-color: #000;
    width: 50%;
    min-height: 350px;
    padding: 10px;

    border-radius: 20px;

    display: column;
    align-items: center;
    justify-content: center;
  `
  export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
  `
  export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`


import styled from "styled-components";

const getSize = (size) => {
  switch (size) {
    case "small":
      return `
        padding: 20px;
        font-size: 23px;
      `;
    case "large":
      return `
        padding: 20px;
        font-size: 23px;
        flex: 4;

      `;
    default:
      return `
        padding: 20px;
        font-size: 23px;
        flex: 1;
      `;
  }
};

const getType = (type) => {
  switch (type) {
    case "C":
      return `
        background-color: #c0c0c0;
        font-weight: bold;
        color: #000;
        padding: 20px;
        font-size: 23px;
        flex: 3.6;
      `;
    case "SpecialButton":
      return `
        background-color: #ff7f00;
        font-weight: bold;
        color: #fff;
        padding: 20px;
        font-size: 23px;
        flex: 1;

      `;
      case "0":
        return `
          background-color: #141414;
          font-weight: bold;
          color: #fff;
          padding: 20px;
          font-size: 23px;
          flex: 2.3;
  
        `;
    default:
      return `
        background-color: #141414
        font-weight: bold;
        color: #fff;
        padding: 20px;
        font-size: 23px;
        flex: 1;
      `;
  }
};

export const ButtonContainer = styled.button`
  background-color: #141414;

  margin: 2px;

  font-weight: semibold;
  
  font-family: Roboto;
  
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  

  &:hover{
    opacity: 0.6;
  }

  ${({ size }) => getSize(size)}
  ${({ type }) => getType(type)}
`
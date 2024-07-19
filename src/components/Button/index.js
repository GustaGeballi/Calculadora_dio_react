import { ButtonContainer } from "./styles";

const Button = ({label, onClick, size, type}) => {
  return (
    <ButtonContainer size={size} onClick = {onClick} type={type}>
      {label}
    </ButtonContainer>
  );
}

export default Button;
        
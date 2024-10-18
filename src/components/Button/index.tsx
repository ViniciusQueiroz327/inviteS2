import { ButtonContainer } from './style'
import { IButton } from './type'
const Button = ({title, onClick, type = 'button', style }: IButton) => {
    return (
        <ButtonContainer type={type} onClick={onClick} style={style}>{title}</ButtonContainer>
    )
}

export { Button }
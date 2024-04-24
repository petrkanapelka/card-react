import styled, { css } from "styled-components";
import { MyTheme } from "../styles/Theme.styled";
type BtnStyledPropsType = {
    color?: string
    fontSize?: string
    btnType: 'primary' |'secondary'
}
type BtnContent = {
    valuePrimary: string
    valueSecondary: string
}
const BtnStyled = styled.button<BtnStyledPropsType>`
    height: 30px;
    width: 86px;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
    &:active {
        scale: 0.9;
    }
    ${props => props.btnType === 'primary' && css<BtnStyledPropsType>`
        background: ${props=> props.color || MyTheme.color.primary};
        color: ${props=> props.color || MyTheme.color.textColorMain};
        &:hover {
            background: ${props=> props.color || MyTheme.color.secondary};;
        }
    `}

    ${props => props.btnType === 'secondary' && css<BtnStyledPropsType>`
        background: ${props=> props.color || MyTheme.color.textColorMain};
        color: ${props=> props.color || MyTheme.color.primary};
        border: 2px solid ${props=> props.color || MyTheme.color.primary};
        &:hover {
            background: ${props=> props.color || MyTheme.color.secondary};
            color: ${props=> props.color || MyTheme.color.textColorMain};
            border: none;
        }
    `}
`
const ButtonWrapperStyled = styled.div`
    display: flex;
    width: 70%;
    justify-content: space-between;
`
function ButtonBox(props: BtnContent) {
    return (
        <ButtonWrapperStyled>
            <BtnStyled btnType={'primary'}>{props.valuePrimary}</BtnStyled>
            <BtnStyled btnType={'secondary'}>{props.valueSecondary}</BtnStyled>
        </ButtonWrapperStyled>
    )
}

export default ButtonBox;
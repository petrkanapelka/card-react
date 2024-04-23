import styled, { css } from "styled-components";
type BtnStyledPropsType = {
    color?: string
    fontSize?: string
    btnType: 'primary' |'secondary'
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
        background: ${props=> props.color || 'rgba(78, 113, 254, 1)'};
        color: ${props=> props.color || 'rgba(255, 255, 255, 1)'};
        &:hover {
            background: ${props=> props.color || 'darkblue'};;
        }
    `}

    ${props => props.btnType === 'secondary' && css<BtnStyledPropsType>`
        background: ${props=> props.color || 'rgba(255, 255, 255, 1)'};
        color: ${props=> props.color || 'rgba(78, 113, 254, 1)'};
        border: 2px solid ${props=> props.color || 'rgba(78, 113, 254, 1)'};
        &:hover {
            background: ${props=> props.color || 'darkblue'};
            color: ${props=> props.color || 'rgba(255, 255, 255, 1)'};
            border: none;
        }
    `}
`
const ButtonWrapperStyled = styled.div`
    display: flex;
    width: 70%;
    justify-content: space-between;
`
function ButtonBox() {
    return (
        <ButtonWrapperStyled>
            <BtnStyled btnType={'primary'}>See more</BtnStyled>
            <BtnStyled btnType={'secondary'}>Save</BtnStyled>
        </ButtonWrapperStyled>
    )
}

export default ButtonBox;
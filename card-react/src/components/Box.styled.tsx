import styled from "styled-components";
import { MyTheme } from "../styles/Theme.styled";

const Box = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 300px;
    height: 350px;
    background: #ffffff;
    border-radius: 15px;
    box-shadow: 0px 4px 20px 5px ${MyTheme.color.secondary};
    padding: 10px 10px;
`;

export default Box;
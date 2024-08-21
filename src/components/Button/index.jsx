import styled from "styled-components"
import color from "../../styles/colors"

const ButtonStyled = styled.button`
background-color: ${color.theme.primary};
color: white;
border: none;
padding: 10px 10px;
border-radius: 5px;
cursor: pointer;
min-width: 200px;
text-align: center;
&:hover{
    background-color: ${color.theme.primaryLight};
}
`

export function Button({children}){
    return (<ButtonStyled>
        {children}
    </ButtonStyled>)
}
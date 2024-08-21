import {styled} from "styled-components"
import color from "../../styles/colors"

export const MainStyled = styled.main`
height: 100%;
/* margin-left: 220px; */
padding: 20px;
padding-top: 50px;
box-sizing: border-box;
/* If desktop overide these styles */
@media (min-width: 720px){
    margin-left: 220px;
    }
`

export const AppStyled = styled.div`
height: 100%;
background-color: ${color.greyscale.light};
position: relative;
`
import styled from "styled-components"
import color from "../../styles/colors"

const WeightStyled = styled.div`
width: 100%;
color: ${color.greyscale.grey};
`

const WeightIndicator = styled.div`
    display: inline-block;
    width: 100px;
    height: 30px;
    border-radius: 30px;
    color: ${color.greyscale.dark};
    line-height: 30px;
    background-color: ${color.indicator.green};
    text-align: center;

    &.big{
        background-color: ${color.indicator.red};
    }
    &.medium{
        background-color: ${color.indicator.yellow};
    }
    &.small{
        background-color: ${color.indicator.green};
    }
`

export function Weight({weight}){
    return (<WeightStyled>
       <WeightIndicator className={getWeightType(weight)}>{weight}lbs</WeightIndicator> - {getWeightDescription(weight)}
    </WeightStyled>)
}

function getWeightType(weight){
    if(weight > 20){
        return "big"
    }
    else if(weight > 10){
        return "medium"
    }
    else{
        return "small"
    }
}

function getWeightDescription(weight){
    if(weight > 20){
        return "Great Catch!!"
    }
    else if(weight > 10){
        return "Not Bad"
    }
    else{
        return "Keep trying"
    }
}
import React from 'react';
import {format} from "date-fns"
import {Weight} from "../../components/Weight"
import styled from "styled-components"
import color from "../../styles/colors"

const LogListItemStyled = styled.li`
width: 100%;
background-color: ${color.greyscale.white};
margin-bottom: 15px;
border-radius: 6px;
padding: 10px;
box-sizing: border-box;
box-shadow: 0 4px 4px 0 rgba(0,0,0,0.1);
display: flex;
position: relative;
flex-direction: column;
`

const TitleStyled = styled.div`
  font-size: 18px;
  color: ${color.theme.primary};
  font-weight: 600;
  display: block;
`

const DateStyled = styled.span`
font-size: 16px;
font-weight: 400;
color: ${color.greyscale.grey};
`

const DescriptionStyled = styled.p`
  font-size: 16px;
font-weight: 400;
color: ${color.greyscale.dark};
margin: 5px 0;
flex: 1;
`

const DeleteButtonStyled = styled.button`
background-color: ${color.indicator.red};
position: absolute;
width: 30px;
height: 30px;
top:10px;
right: 10px;
font-weight: 800;
border: none;
border-radius: 4px;
color: white;
cursor: pointer;
&:hover{
  background-color: ${color.indicator.redHighlight}
}
`

// note to self, date fns: check https://date-fns.org/v3.6.0/docs/format for format options

const LogItem = ({ log, deleteFish }) => (
  <LogListItemStyled>
    <DeleteButtonStyled onClick={() => {
      deleteFish(log.id)
    }}>X</DeleteButtonStyled>
    <TitleStyled><span>{log.name}</span><DateStyled> - {format(new Date(log.createdAt), "HH:mm dd-MM-yy")}</DateStyled></TitleStyled>
    <DescriptionStyled>{log.breed} caught at {log.location} with {log.catchBait}</DescriptionStyled>
    <Weight weight={log.weight}></Weight>
  </LogListItemStyled>
);

export default LogItem;

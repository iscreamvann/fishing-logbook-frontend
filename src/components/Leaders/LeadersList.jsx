import React from 'react';
import styled from "styled-components"
import color from "../../styles/colors.js"

const LogListWrapperStyled = styled.div`
  width: 100%;
  position: relative;
`

const LogListStyled = styled.ul`
  width: 100%;
  background-color: ${color.greyscale.light};
  margin: 0;
  padding: 0;
  list-style: none;
  min-height: 400px;
  max-height: calc(100vh - 300px);
  overflow-y: scroll;
  /* height: 400px; */
  &::-webkit-scrollbar {
    display: none;
  }
`

const EmptyStyled = styled.p`
  height: 400px;
  line-height: 400px;
  text-align: center;
`

const LeaderStyled = styled.div`
width: 100%;
display: flex;
align-items: center;
background-color: ${color.greyscale.white};
margin-bottom: 10px;
/* height: 50px; */
padding: 20px;
border-radius: 4px;
`

const LeadersList = ({ leaders }) => (
    <LogListWrapperStyled>
      <h2>Top 5 leaders</h2>
      {leaders.length === 0 ? (
        <EmptyStyled>No leaders available.</EmptyStyled>
      ) : (
        <LogListStyled>
          {leaders.map((leader, index) => (
            <LeaderStyled>#{index+1} - {leader.profile.firstName} {leader.profile.lastName} - {leader._count.fish} Fish</LeaderStyled>
          ))}
        </LogListStyled>
      )}
    </LogListWrapperStyled>
  );
  
  export default LeadersList;
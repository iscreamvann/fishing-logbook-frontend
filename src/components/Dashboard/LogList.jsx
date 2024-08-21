import React from 'react';
import LogItem from './LogItem';
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

const LogList = ({ logs, deleteFish }) => (
    <LogListWrapperStyled>
      <h2>Fishing Logs</h2>
      {logs.length === 0 ? (
        <EmptyStyled>No logs available.</EmptyStyled>
      ) : (
        <LogListStyled>
          {logs.map((log, index) => (
            <LogItem key={index} log={log} deleteFish={deleteFish}/>
          ))}
        </LogListStyled>
      )}
    </LogListWrapperStyled>
  );
  
  export default LogList;
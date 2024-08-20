import React from 'react';
import Header from '../comoponents/Header';
import Sidebar from '../comoponents/Sidebar';
import Footer from '../comoponents/Footer';
import LogList from '../comoponents/Dashboard/LogList';
import LogStats from '../comoponents/Dashboard/LogStats';
import RecentActivity from '../comoponents/Dashboard/RecentActivity';
import {api} from "../services/apiServices"
import {styled} from "styled-components"
import {MainStyled, AppStyled} from "../comoponents/Main"

const LoadingStyled = styled.div``

const Dashboard = () => {
    const [logs, setLogs] = React.useState([
    ]);

    const [isLoading, setIsLoading] = React.useState(true)
    const [error, setError] = React.useState(true)

    const fetchFish = async () => {
      const fish = await api.get("/fish")

      setLogs(fish.fish)
      setIsLoading(false)
    }

    React.useEffect(() => {
      fetchFish()
    }, [])
  
    return (
      <AppStyled>
        {/* <Header /> */}
        <Sidebar />
        <MainStyled>
          {isLoading ? <LoadingStyled>Loading...</LoadingStyled>: <>
          <LogList logs={logs} />
          <LogStats logs={logs} />
          </>
}
        </MainStyled>
      </AppStyled>
    );
  };
  
  export default Dashboard;
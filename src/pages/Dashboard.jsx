import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import LogList from '../components/Dashboard/LogList';
import LogStats from '../components/Dashboard/LogStats';
import RecentActivity from '../components/Dashboard/RecentActivity';
import {api} from "../services/apiServices"
import {styled} from "styled-components"
import {MainStyled, AppStyled} from "../components/Main"

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

    const deleteFish = async (fishId) => {
      const fish = await api.delete(`/fish/${fishId}`)
      await fetchFish()
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
          <LogList logs={logs} deleteFish={deleteFish}/>
          <LogStats logs={logs} />
          </>
}
        </MainStyled>
      </AppStyled>
    );
  };
  
  export default Dashboard;
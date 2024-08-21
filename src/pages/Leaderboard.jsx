import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import LeadersList from '../components/Leaders/LeadersList';
import LogStats from '../components/Dashboard/LogStats';
import RecentActivity from '../components/Dashboard/RecentActivity';
import {api} from "../services/apiServices"
import {styled} from "styled-components"
import {MainStyled, AppStyled} from "../components/Main"

const LoadingStyled = styled.div``

const Leaders = () => {
    const [leaders, setLeaders] = React.useState([
    ]);

    const [isLoading, setIsLoading] = React.useState(true)
    const [error, setError] = React.useState(true)

    const fetchLeaders = async () => {
      const leaders = await api.get("/fish/leaderboard")

      setLeaders(leaders.leaders)
      setIsLoading(false)
    }


    React.useEffect(() => {
      fetchLeaders()
    }, [])
  
    return (
      <AppStyled>
        {/* <Header /> */}
        <Sidebar />
        <MainStyled>
          {isLoading ? <LoadingStyled>Loading...</LoadingStyled>: <>
          <LeadersList leaders={leaders}/>
          </>
}
        </MainStyled>
      </AppStyled>
    );
  };
  
  export default Leaders;
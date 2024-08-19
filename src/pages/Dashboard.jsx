import React from 'react';
import Header from '../comoponents/Header';
import Sidebar from '../comoponents/Sidebar';
import Footer from '../comoponents/Footer';
import LogList from '../comoponents/Dashboard/LogList';
import LogStats from '../comoponents/Dashboard/LogStats';
import RecentActivity from '../comoponents/Dashboard/RecentActivity';

const Dashboard = () => {
    const [logs, setLogs] = React.useState([
      { date: '2024-08-15', location: 'Lake X', fishType: 'Bass', weight: '5' },
      { date: '2024-08-14', location: 'River Y', fishType: 'Trout', weight: '2' },
    ]);
  
    return (
      <div>
        <Header />
        <Sidebar />
        <main>
          <LogList logs={logs} />
          <LogStats logs={logs} />
          <RecentActivity logs={logs} />
        </main>
        <Footer />
      </div>
    );
  };
  
  export default Dashboard;
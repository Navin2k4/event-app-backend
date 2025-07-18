import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import DashPosts from "../components/DashPosts";
import DashUsers from "../components/DashUsers";
import DashboardComp from "../components/DashboardComp";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        <DashSidebar />
      </div>
      {/* Profile */}
      {tab == 'profile' && <DashProfile />}
      {/* Posts */}
      {tab == 'posts' && <DashPosts />}
      {/* Users */}
      {tab == 'users' && <DashUsers />}
      {/* Dashboard */}
      {tab == 'dash' && <DashboardComp />}
    </div>
  )
}

export default Dashboard

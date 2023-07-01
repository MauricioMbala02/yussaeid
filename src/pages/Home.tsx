import Profile from "../components/Profile"
import Search from "../components/Search"
import InfoHome from "../components/InfoHome";
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Profile />
      <Search />
      <InfoHome />
      <Navbar />
    </div>
  )
}

export default Home
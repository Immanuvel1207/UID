import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import './Home.css'; // Import the CSS file for styles

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="home-container">
      <div className="welcome-message">
        <h1>Welcome<br/>to<br/><b>Kongu Engineering College</b></h1>
        {user ? (
          <div className="user-info">
            <p>Hello, <span className="username">{user.username}</span>!</p>
            <button className="logout-button" onClick={logout}>Logout</button>
          </div>
        ) : (
          <p>Please log in or register to access more features.</p>
        )}
      </div>
    </div>
  );
};

export default Home;

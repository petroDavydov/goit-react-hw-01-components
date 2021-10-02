import Container from './components/container/Container';
// ============================================
import Profile from './components/profile/Profile';
import user from './components/profile/user.json';
// ============================================
import Statistics from './components/statistics/Statistics';
import statisticalData from './components/statistics/statistical-data.json';
// ============================================
import FriendList from './components/friends/FriendsList';
import friends from './components/friends/friends.json';
// ============================================

function App() {
  return (
    <div>
      <Container>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={statisticalData} />;
        <Statistics stats={statisticalData} />;
        <FriendList friends={friends} />
      </Container>
    </div>
  );
}

export default App;

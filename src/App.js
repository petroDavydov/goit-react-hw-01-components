import Container from './components/container/Container';
// ============================================
import Profile from './components/profile/Profile';
import user from './json/user.json';
// ============================================
import Statistics from './components/statistics/Statistics';
import statisticalData from './json/statistical-data.json';
// ============================================
import FriendList from './components/friends/FriendsList';
import friends from './json/friends.json';
// ============================================
import TransactionHistory from './components/transaction/TransactionHistory';
import transactions from './json/transactions.json';
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
        <TransactionHistory items={transactions} />;
      </Container>
    </div>
  );
}

export default App;

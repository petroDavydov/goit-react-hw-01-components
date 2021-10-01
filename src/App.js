import Container from './components/container/Container';
// ============================================
import Profile from './components/profile/Profile';
import user from './components/profile/user.json';

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
      </Container>
    </div>
  );
}

export default App;

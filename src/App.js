import './App.css';
import { Profile } from './components/social-profile/Profile';
import { Statistics } from './components/Statistics/Statistics';
import userInfo from './user.json';
import statisticsInfo from './uploadStatics.json';

function App() {
  return (
    <>
      <Profile
        username={userInfo.username}
        tag={userInfo.tag}
        location={userInfo.location}
        avatar={userInfo.avatar}
        followers={userInfo.stats.followers}
        views={userInfo.stats.views}
        likes={userInfo.stats.likes}
        stats={userInfo.stats}
      />

      <Statistics events={statisticsInfo} title={'Upload stats'} />
    </>
  );
}

export default App;

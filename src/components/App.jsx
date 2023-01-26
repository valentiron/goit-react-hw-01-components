import Profile from './Profile/Profile';
import user from '../files/user.json';

export const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
        padding: 35,
        backgroundColor: "rgb(239, 253, 255)",
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};

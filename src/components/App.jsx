import Profile from './Profile/Profile';
import user from '../files/user.json';

import Statistics from './Statistics/Statistics';
import data from '../files/data.json';

import Friendlist from './FriendList/FriendList';
import friends from '../files/friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../files/transactions.json';

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
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <Friendlist friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

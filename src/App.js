import { ChannelFilters, ChannelOptions, ChannelSort, User } from 'stream-chat';
import {
  Channel,
  ChannelHeader,
  ChannelList,
  Chat,
  LoadingIndicator,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from 'stream-chat-react';

import { useClient } from './hooks/useClient';

import 'stream-chat-react/dist/css/v2/index.css';
import './layout.css';

const userId = 'noisy-base-4';
const userName = 'noisy-base-4';

const user = {
  id: userId,
  name: userName,
  image: `https://getstream.io/random_png/?id=${userId}&name=${userName}`,
};

const apiKey = 'tn3ry42bcrqn';
const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoibm9pc3ktYmFzZS00In0.DIy_wlytOvpvr89L-xwRvGwNB7wFip4rTR-nCHhnvjU';

const sort = { last_message_at: -1 };
const filters = {
  type: 'messaging',
  members: { $in: [userId] },
};
const options = {
  limit: 10,
};

const App = () => {
  const chatClient = useClient({
    apiKey,
    user,
    tokenOrProvider: userToken,
  });

  if (!chatClient) {
    return <LoadingIndicator />;
  }

  return (
    <Chat client={chatClient} theme='str-chat__theme-dark'>
      <ChannelList filters={filters} sort={sort} options={options} />
      <Channel>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default App;


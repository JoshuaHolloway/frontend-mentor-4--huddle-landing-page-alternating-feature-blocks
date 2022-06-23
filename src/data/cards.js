import uuid from 'react-uuid';

import b from '../img/illustration-flowing-conversation.svg';
import a from '../img/illustration-grow-together.svg';
import c from '../img/illustration-your-users.svg';

// ==============================================

const data = [
  {
    key: uuid(),
    position: 'right',
    img: a,
    title: 'Grow Together',
    content:
      'Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form. ',
  },
  {
    key: uuid(),
    position: 'left',
    img: b,
    title: 'Flowing Conversations',
    content:
      "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
  },

  {
    key: uuid(),
    position: 'right',
    img: c,
    title: 'Your Users',
    content:
      "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
  },
];

// ==============================================

export { data };

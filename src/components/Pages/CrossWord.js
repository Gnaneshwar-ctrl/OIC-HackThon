import React from 'react';

import Crossword from '@jaredreisinger/react-crossword';

const data = {
    across: {
      1: {
        clue: 'one plus one',
        answer: 'TWO',
        x: 0,
        y: 0,
      },
    },
    down: {
      2: {
        clue: 'three minus two',
        answer: 'ONE',
        x: 2,
        y: 0,
      },
    },
  };

export default function MyPage() {
  return <Crossword data={data} />;
}
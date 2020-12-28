import React from 'react';
import { View } from 'react-native';

import { api } from '../api';
import { Button } from '../component/Button';
import { NavTo } from '../component/NavTo';

export const MainPage = ({

}) => {
  return (
    <View>
      <NavTo
        prefetch={() => api.get('/posts')}
        screen="Posts"
      >
        <Button>
          게시판으로 이동 (with Prefetch)
        </Button>
      </NavTo>
      <NavTo
        prefetch={() => { /* prefetch를 하지 않습니다. */ }}
        screen="Posts"
      >
        <Button>
          게시판으로 이동 (without Prefetch)
        </Button>
      </NavTo>
    </View>
  );
};

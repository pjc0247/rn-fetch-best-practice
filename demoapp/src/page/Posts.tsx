import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

import { api } from '../api';

const PostItem = styled.View`
  border: 1px solid black;

  padding: 20px 20px;
`;

export const PostsPage = ({

}) => {
  const [posts, setPosts] = useState([]);
  const [time, setTime] = useState(0);

  useEffect(() => {
    (async () => {
      const st = Date.now();
      setPosts(await api.get('/posts'));
      setTime(Date.now() - st);
      console.log('fetched ', Date.now() - st);
    })();
  }, []);

  return (
    <View>
      {posts.map(x => (
        <PostItem
          key={x}
        >
          <Text>
            {x}
          </Text>
        </PostItem>
      ))}
      {!!posts.length && (
        <Text>
          로드하는데 {time / 1000} 초가 걸렸습니다.
        </Text>
      )}
    </View>
  );
};

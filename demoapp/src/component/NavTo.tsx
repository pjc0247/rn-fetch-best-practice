import React from 'react';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type NavToProps = {
  prefetch: () => any;
  screen: string;
  children: React.ReactNode;
};
export const NavTo = ({
  prefetch,
  screen,
  children,
}: NavToProps) => {
  const navigation = useNavigation();

  const onBeginPreflight = async () => {
    await prefetch();
  };
  const onBeginNavigation = async () => {
    navigation.navigate(screen);
  };

  return (
    <Pressable
      onPressIn={onBeginPreflight}
      onPressOut={onBeginNavigation}
      android_ripple={{ color: '#1769ff', radius: 200 }}
    >
      {children}
    </Pressable>
  );
};

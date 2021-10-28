import React from 'react';

import { View } from 'react-native';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';
import { useAuth } from '../../context/auth';

export function SignInBox(){
  const { signIn, isSigningIng } = useAuth()
  
  return (
    <View style={styles.container}>
      <Button
        title="Entrar com o GitHub"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW} 
        icon="github"
        onPress={signIn}
        isLoading={isSigningIng}
      />
    </View>
  );
}
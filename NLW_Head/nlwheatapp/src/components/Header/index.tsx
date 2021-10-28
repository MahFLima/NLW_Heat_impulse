import React from 'react';

import {
	Text,
	View,
	TouchableOpacity
} from 'react-native';

import { styles } from './styles';

import LogoSvg from '../../assets/logo.svg'
import { UserPhoto } from '../UserPhoto';
import { useAuth } from '../../context/auth';

export function Header() {
	const { signOut, user } = useAuth()
	return (
		<View style={styles.container}>
			<LogoSvg />
			<View style={styles.logoutButton}>
				{user &&
					<TouchableOpacity onPress={signOut}>
						<Text style={styles.logoutText}>Sair</Text>
					</TouchableOpacity>
				}
			</View>
			<UserPhoto imageUri={user?.avatar_url} />
		</View>
	);
}
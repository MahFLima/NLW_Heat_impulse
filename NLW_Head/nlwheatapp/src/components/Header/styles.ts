import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme'
import { FONTS } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row'
  },

  logoutButton:{
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20
  },

  logoutText:{
    fontSize: 15,
    fontFamily: FONTS.REGULAR,
    color: COLORS.WHITE
  }
});
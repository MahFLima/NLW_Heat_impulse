import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';

export const styles = StyleSheet.create({
  content:{
    paddingTop: 135,
    paddingBottom: 184
  },
  container:{
    width: "100%",
    paddingHorizontal: 10, 
    marginBottom: 36
  },
  messageContent:{
    fontSize: 15,
    color: COLORS.WHITE,
    fontFamily: FONTS.REGULAR,
    lineHeight: 20,
    marginBottom: 12
  },
  user: {
    width: '100%',
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName:{
    fontSize: 14,
    color: COLORS.WHITE,
    marginLeft: 20
  }
});
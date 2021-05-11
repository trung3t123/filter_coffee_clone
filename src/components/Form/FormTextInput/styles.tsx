import Colors from 'utils/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    borderColor: Colors.veryLightGrey,
    borderWidth: 1,
    borderRadius: 5,
    position: 'relative',
    justifyContent: 'center',
  },
  icon: { position: 'absolute', right: 15, zIndex: 10 },
  input: {
    fontSize: 16,
    // textAlign: 'right',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  passwordInput: {
    paddingRight: 48,
  },
});

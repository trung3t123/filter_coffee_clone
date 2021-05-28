import Colors from 'utils/colors';
import { StyleSheet } from 'react-native';
import CommonHeights from 'theme/CommonHeights';
import CommonFonts from 'theme/CommonFonts';

export default StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
    padding: 1.5,
  },
  icon: { position: 'absolute', right: 15, zIndex: 10 },
  iconLeft: { position: 'absolute', left: 15, zIndex: 10 },
  input: {
    fontSize: CommonFonts.res17,
    // textAlign: 'right',
    color: Colors.white,
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: CommonHeights.res56,
    backgroundColor: Colors.mainBackgroundColorComponent,
    borderRadius: 15,
  },
  passwordInput: {
    paddingRight: 48,
  },
  paddingLeft: {
    paddingLeft: 48,
  },
  linearGradient: {
    ...StyleSheet.absoluteFillObject,
    height: CommonHeights.res56 + 3,
    borderRadius: 15,
  },
});

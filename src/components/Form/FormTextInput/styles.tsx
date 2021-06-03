import Colors from 'utils/colors';
import { StyleSheet } from 'react-native';
import CommonHeights from 'theme/CommonHeights';
import CommonFonts from 'theme/CommonFonts';
import CommonWidths from 'theme/CommonWidths';

export default StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
  },

  icon: { position: 'absolute', right: CommonWidths.res15, zIndex: 10 },

  iconLeft: { position: 'absolute', left: CommonWidths.res15, zIndex: 10 },

  input: {
    fontSize: CommonFonts.res17,
    color: Colors.white,
    paddingHorizontal: CommonWidths.res15,
    paddingVertical: CommonHeights.res10,
    height: CommonHeights.res56,
    backgroundColor: Colors.mainBackgroundColorComponent,
    margin: 1.5,
    borderRadius: 15,
  },

  passwordInput: {
    paddingRight: CommonWidths.res45,
  },

  paddingLeft: {
    paddingLeft: CommonWidths.res45,
  },

  linearGradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 15,
  },
});

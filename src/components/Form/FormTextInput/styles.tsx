import Colors from 'utils/colors';
import { StyleSheet } from 'react-native';
import CommonHeights from 'theme/CommonHeights';
import CommonFonts from 'theme/CommonFonts';
import CommonWidths from 'theme/CommonWidths';

export default StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
    padding: 1,
  },

  icon: { position: 'absolute', right: CommonWidths.res15, zIndex: 10 },

  iconLeft: { position: 'absolute', left: CommonWidths.res15, zIndex: 10 },

  input: {
    fontSize: CommonFonts.res17,
    color: Colors.white,
    paddingHorizontal: CommonWidths.res15,
    paddingVertical: CommonHeights.res10,
    minHeight: CommonHeights.res56,
    backgroundColor: Colors.mainBackgroundColorComponent,
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
    height: CommonHeights.res56 + 2,
    borderRadius: 15,
  },
});

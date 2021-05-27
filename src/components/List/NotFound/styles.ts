import { StyleSheet } from 'react-native';
import CommonFonts from 'theme/CommonFonts';
import CommonHeights from 'theme/CommonHeights';
import CommonWidths from 'theme/CommonWidths';
import Colors from 'utils/colors';

const styles = StyleSheet.create({
  container: {
    minWidth: 100,
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: CommonWidths.res1,
  },
  textEmpty: {
    fontSize: CommonFonts.res12,
    textAlign: 'center',
    lineHeight: CommonHeights.res18,
    letterSpacing: -0.4,
    color: Colors.wildDove,
  },
  iconImage: {
    width: CommonWidths.res200,
    height: CommonWidths.res200,
  },
});

export default styles;

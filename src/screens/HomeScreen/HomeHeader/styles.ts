import { StyleSheet } from 'react-native';
import CommonHeights from 'theme/CommonHeights';
import CommonFonts from 'theme/CommonFonts';
import Colors from 'utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: CommonHeights.res10,
  },

  title: {
    color: Colors.white,
    fontSize: CommonFonts.res28,
  },
});

export default styles;

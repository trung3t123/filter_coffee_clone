import { StyleSheet } from 'react-native';
import Colors from 'utils/colors';
import Screen from 'utils/screen';
import CommonWidths from 'theme/CommonWidths';
import CommonHeights from 'theme/CommonHeights';

export default StyleSheet.create({
  container: {
    paddingHorizontal: CommonWidths.res23,
    paddingTop: Screen.statusBarH,
    alignItems: 'center',
    backgroundColor: Colors.black,
    flexDirection: 'row',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: CommonHeights.res20,
  },
  leftIcon: {
    zIndex: 1,
  },
});

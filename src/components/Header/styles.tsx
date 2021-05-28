import { StyleSheet } from 'react-native';
import Colors from 'utils/colors';
import Screen from 'utils/screen';
import CommonWidths from 'theme/CommonWidths';

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
    backgroundColor: Colors.black,
    paddingVertical: 10,
  },
  leftIcon: {
    zIndex: 1,
  },
});

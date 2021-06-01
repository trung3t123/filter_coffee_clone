import { StyleSheet } from 'react-native';
import Colors from 'utils/colors';
import CommonWidths from 'theme/CommonWidths';
import CommonHeights from 'theme/CommonHeights';

export default StyleSheet.create({
  container: {
    paddingHorizontal: CommonWidths.res23,
    paddingBottom: CommonHeights.res10,
    alignItems: 'center',
    backgroundColor: Colors.mainBackgroundColorContainer,
    flexDirection: 'row',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: CommonHeights.res30,
  },
  leftIcon: {
    zIndex: 1,
  },

  absoluteHeader: {
    position: 'absolute',
    top: 0,
    maxHeight: CommonHeights.res80,
    width: '100%',
    zIndex: 10,
    backgroundColor: Colors.transparent,
  },
});

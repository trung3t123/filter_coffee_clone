import { StyleSheet, ViewStyle } from 'react-native';
import CommonHeights from 'theme/CommonHeights';
import CommonWidths from 'theme/CommonWidths';

export default StyleSheet.create({
  container: {
    justifyContent: 'flex-start',

    maxHeight: CommonHeights.res80,

    bottom: 0,
    width: '100%',
    position: 'absolute',
    zIndex: 8,
  } as ViewStyle,

  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: CommonHeights.res80,
    // backgroundColor: 'red',
  },
  avatar: {
    height: CommonWidths.res35,
    width: CommonWidths.res35,
    margin: 1,
  },
});

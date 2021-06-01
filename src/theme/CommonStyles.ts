import { StyleSheet, ViewStyle } from 'react-native';
import Colors from 'utils/colors';
import CommonHeights from './CommonHeights';

const CommonStyles = {
  flex1: { flex: 1 } as ViewStyle,

  mainLinerGradientColor: [Colors.mainGradientStart, Colors.mainGradientEnd],

  container: {
    flex: 1,
    backgroundColor: Colors.mainBackgroundColorContainer,
  } as ViewStyle,

  absolute: StyleSheet.absoluteFillObject,

  flex1Center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,

  activityIndicator: {
    marginVertical: CommonHeights.res5,
  } as ViewStyle,

  opacity5: { opacity: 0.5 } as ViewStyle,

  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  } as ViewStyle,

  rowFlex: {
    flexDirection: 'row',
  } as ViewStyle,
};

export default CommonStyles;

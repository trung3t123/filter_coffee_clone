import { StyleSheet, ViewStyle } from 'react-native';
import Colors from 'utils/colors';
import CommonHeights from './CommonHeights';
import CommonFonts, { FontFamily } from './CommonFonts';

const CommonStyles = {
  flex1: { flex: 1 } as ViewStyle,

  mainLinerGradientColor: [Colors.mainGradientStart, Colors.mainGradientEnd],

  textColorContentPost: 'rgba(252, 252, 252, 0.75)',

  iconColor: 'rgba(252, 252, 252, 0.75)',

  container: {
    flex: 1,
    backgroundColor: Colors.mainBackgroundColorContainer,
  } as ViewStyle,

  titleBanner: {
    fontFamily: FontFamily.DMSans.medium,
    fontWeight: '700',
    color: Colors.white,
    fontSize: CommonFonts.res48,
  } as ViewStyle,

  subTitleBanner: {
    fontFamily: FontFamily.DMSans.medium,
    fontSize: CommonFonts.res20,
    fontWeight: '500',
    textAlign: 'center',
    opacity: 0.75,
    color: Colors.white,
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

import Colors from 'utils/colors';
import { StyleSheet } from 'react-native';
import CommonHeights from 'theme/CommonHeights';
import CommonFonts from 'theme/CommonFonts';
import CommonWidths from 'theme/CommonWidths';
import CommonStyles from 'theme/CommonStyles';

export default StyleSheet.create({
  contentContainerStyleFlatList: {
    flex: 1,
    backgroundColor: Colors.mainBackgroundColorContainer,
    justifyContent: 'space-between',
  },
  viewButton: {
    position: 'absolute',
    bottom: CommonHeights.res70,
    width: CommonWidths.windowWidth - CommonWidths.baseSpaceHorizontal * 2,
    alignSelf: 'center',
  },
  viewContent: {
    width: CommonWidths.res370,
    height: CommonHeights.res400,
    borderRadius: 30,
  },

  contentScrollView: {
    paddingHorizontal: CommonHeights.res20,

    flex: 1,
    alignItems: 'center',
  },

  titleText: {
    marginTop: CommonHeights.res40,
    ...CommonStyles.titleBanner,

    marginBottom: CommonHeights.res5,

    position: 'relative',
    zIndex: 11,
  },

  subtitleText: {
    ...CommonStyles.subTitleBanner,
  },

  viewTitleIntroduce: {
    position: 'absolute',
    bottom: CommonHeights.res245,
    width: '100%',
    alignItems: 'center',
  },
});

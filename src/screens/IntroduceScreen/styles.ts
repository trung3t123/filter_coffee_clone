import Colors from 'utils/colors';
import { StyleSheet } from 'react-native';
import CommonHeights from 'theme/CommonHeights';
import CommonFonts from 'theme/CommonFonts';
import CommonWidths from 'theme/CommonWidths';

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
    fontSize: CommonFonts.res48,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: CommonHeights.res5,
    color: Colors.white,

    position: 'relative',
    zIndex: 11,
  },

  subtitleText: {
    fontSize: CommonFonts.res20,
    color: Colors.white,
    textAlign: 'center',
  },

  viewTitleIntroduce: {
    position: 'absolute',
    bottom: CommonHeights.res245,
    width: '100%',
    alignItems: 'center',
  },
});

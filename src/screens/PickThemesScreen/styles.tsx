import Colors from 'utils/colors';
import { StyleSheet } from 'react-native';
import CommonHeights from 'theme/CommonHeights';
import CommonWidths from 'theme/CommonWidths';
import CommonFonts, { FontFamily } from 'theme/CommonFonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.mainBackgroundColorContainer,
  },
  contentContainerStyleFlatList: {},

  header: {
    paddingHorizontal: CommonWidths.baseSpaceHorizontal,

    justifyContent: 'flex-end',
    marginBottom: CommonHeights.res30,
    height: CommonHeights.res260,
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },

  textTitle: {
    fontFamily: FontFamily.DMSans.bold,
    fontSize: CommonFonts.res48,
    fontWeight: '600',
    lineHeight: 48,
    color: Colors.white,
  },

  viewButton: {
    marginTop: CommonHeights.res10,
    marginBottom: CommonHeights.res40,
    paddingHorizontal: CommonWidths.baseSpaceHorizontal / 2,
  },
});

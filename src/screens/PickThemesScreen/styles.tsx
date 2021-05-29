import Colors from 'utils/colors';
import { StyleSheet } from 'react-native';
import CommonFonts from 'theme/CommonFonts';
import CommonHeights from 'theme/CommonHeights';
import CommonWidths from 'theme/CommonWidths';

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
    fontSize: CommonFonts.res48,
    fontWeight: '600',
    textAlign: 'left',
    color: Colors.white,
  },

  viewButton: {
    marginTop: CommonHeights.res10,
    marginBottom: CommonHeights.res40,
    paddingHorizontal: CommonWidths.baseSpaceHorizontal / 2,
  },
});

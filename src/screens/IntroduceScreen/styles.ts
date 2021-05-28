import Colors from 'utils/colors';
import { StyleSheet } from 'react-native';
import CommonHeights from 'theme/CommonHeights';
import CommonFonts from 'theme/CommonFonts';

export default StyleSheet.create({
  contentContainerStyleFlatList: {
    flex: 1,
    backgroundColor: Colors.mainBackgroundColorContainer,
    paddingHorizontal: CommonHeights.res20,
    justifyContent: 'space-between',
  },
  viewButton: {
    marginBottom: CommonHeights.res70,
  },
  viewContent: {
    width: '100%',
    height: CommonHeights.res500,
    backgroundColor: Colors.mainBackgroundColorComponent,
    borderRadius: 30,
  },

  contentScrollView: {
    paddingHorizontal: CommonHeights.res20,

    flex: 1,
    alignItems: 'center',
  },
  header: {
    marginBottom: CommonHeights.res20,
  },
  titleText: {
    paddingTop: CommonHeights.res40,
    fontSize: CommonFonts.res48,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: CommonHeights.res5,
    color: Colors.white,
  },
  subtitleText: {
    fontSize: CommonFonts.res20,
    color: Colors.white,
    textAlign: 'center',
  },
});

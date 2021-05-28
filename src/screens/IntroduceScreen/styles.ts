import Colors from 'utils/colors';
import { StyleSheet } from 'react-native';
import CommonHeights from 'theme/CommonHeights';
import CommonFonts from 'theme/CommonFonts';

export default StyleSheet.create({
  contentContainerStyleFlatList: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  buttonLogin: { flex: 2 },
  viewContent: {
    width: '100%',
    height: CommonHeights.res500,
    backgroundColor: '#1D1D1D',
    borderRadius: 30,
  },

  contentScrollView: {
    paddingHorizontal: CommonHeights.res20,

    flex: 10,
    alignItems: 'center',
  },
  header: {
    marginBottom: CommonHeights.res20,
  },
  titleText: {
    paddingTop: CommonHeights.res40,
    fontSize: CommonFonts.res48,
    fontWeight: '700',
    textAlign: 'left',
    marginBottom: CommonHeights.res5,
    color: Colors.white,
  },
  subtitleText: {
    fontSize: CommonFonts.res20,
    color: Colors.white,
  },
});

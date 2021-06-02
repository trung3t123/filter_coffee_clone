import { StyleSheet } from 'react-native';

import CommonHeights from 'theme/CommonHeights';
import CommonWidths from 'theme/CommonWidths';
import CommonFonts from 'theme/CommonFonts';
import Colors from 'utils/colors';
// import CommonFonts from 'theme/CommonFonts';

const styles = StyleSheet.create({
  containerFlatList: {
    flex: 1,
    paddingHorizontal: CommonWidths.baseSpaceHorizontal,
  },
  containerItem: {
    marginBottom: CommonHeights.res20,
  },
  viewInfoPost: { flexDirection: 'row', marginBottom: CommonHeights.res10 },
  viewContentPost: {
    paddingLeft: CommonWidths.res15,
    paddingBottom: CommonHeights.res5,
  },
  viewBottomPost: {
    flexDirection: 'row',
    paddingLeft: CommonWidths.res15,
  },

  avatar: {
    height: CommonHeights.res40,
    width: CommonHeights.res40,
    borderRadius: 50,
    margin: 1,
  },

  viewNamePostOfUser: {
    justifyContent: 'space-between',
    flex: 1,
    paddingVertical: 0,
    lineHeight: 0,
    marginLeft: CommonWidths.res10,
  },

  textNameUserPost: {
    color: Colors.white,
    fontSize: CommonFonts.res17,
    fontWeight: '500',
  },
  textTime: { color: Colors.white, fontSize: CommonFonts.res13, opacity: 0.75 },
  textLikeAndComment: {
    color: Colors.white,
    fontSize: CommonFonts.res15,
    fontWeight: '500',
  },
  textContent: {
    color: Colors.white,
    fontSize: CommonFonts.res23,
    opacity: 0.75,
  },
  viewIconCheck: {
    backgroundColor: Colors.verifiedUser,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewLike: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: CommonWidths.res25,
  },

  opacity75: {
    opacity: 0.75,
  },

  viewComment: { flexDirection: 'row', alignItems: 'center' },
});

export default styles;

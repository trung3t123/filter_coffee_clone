import { StyleSheet } from 'react-native';

import CommonHeights from 'theme/CommonHeights';
import CommonWidths from 'theme/CommonWidths';
import CommonFonts from 'theme/CommonFonts';
import Colors from 'utils/colors';

const styles = StyleSheet.create({
  containerFlatList: {
    flex: 1,
    paddingHorizontal: CommonWidths.baseSpaceHorizontal,
  },
  containerItem: {
    marginBottom: CommonHeights.res20,
    borderBottomColor: Colors.borderColorItem,
    borderBottomWidth: 1,
    paddingHorizontal: CommonWidths.baseSpaceHorizontal,
    paddingBottom: CommonHeights.res16,
  },
  viewInfoPost: { flexDirection: 'row', marginBottom: CommonHeights.res15 },
  viewContentPost: {
    paddingBottom: CommonHeights.res10,
  },
  viewBottomPost: {
    flexDirection: 'row',
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
    marginLeft: CommonWidths.res5,
    marginRight: CommonWidths.res15,
  },
  textContent: {
    color: Colors.white,
    fontSize: CommonFonts.res23,
  },
  viewIconCheck: {
    backgroundColor: Colors.verifiedUser,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: CommonHeights.res12,
    width: CommonHeights.res12,
  },
  viewLike: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  opacity75: {
    opacity: 0.75,
    marginLeft: CommonWidths.res5,
    marginRight: CommonWidths.res10,
  },

  viewComment: { flexDirection: 'row', alignItems: 'center' },
});

export default styles;

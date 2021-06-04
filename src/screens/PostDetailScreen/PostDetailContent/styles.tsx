import { StyleSheet } from 'react-native';

import CommonHeights from 'theme/CommonHeights';
import CommonWidths from 'theme/CommonWidths';
import CommonFonts, { FontFamily } from 'theme/CommonFonts';
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
    minHeight: CommonHeights.res50,
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
    lineHeight: CommonFonts.res20,
    fontWeight: '500',
    fontFamily: FontFamily.DMSans.medium,
  },

  textTime: {
    color: Colors.white,
    fontSize: CommonFonts.res13,
    lineHeight: CommonFonts.res13,
    opacity: 0.75,
    fontWeight: '400',
    fontFamily: FontFamily.DMSans.regular,
  },

  textLikeAndComment: {
    color: Colors.white,
    fontSize: CommonFonts.res15,
    marginLeft: CommonWidths.res5,

    fontWeight: '500',
    fontFamily: FontFamily.DMSans.medium,
  },

  textContent: {
    color: 'rgba(252, 252, 252, 0.75)',
    fontSize: CommonFonts.res21,
    marginBottom: CommonHeights.res10,
    fontFamily: 'DMSans-Regular',
    fontWeight: '400',
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
  },

  viewComment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: CommonWidths.res15,
  },
});

export default styles;

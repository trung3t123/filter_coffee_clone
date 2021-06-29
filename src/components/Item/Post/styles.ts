import { StyleSheet } from 'react-native';
import CommonHeights from 'theme/CommonHeights';
import Colors from 'utils/colors';
import CommonWidths from 'theme/CommonWidths';
import CommonFonts, { FontFamily } from 'theme/CommonFonts';
import CommonStyles from 'theme/CommonStyles';

const styles = StyleSheet.create({
  containerItem: {
    paddingBottom: CommonHeights.res20,
    marginBottom: CommonHeights.res10,
    borderBottomWidth: 1,
    borderColor: Colors.borderColorItem,
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
    // lineHeight: CommonFonts.res15,
    fontWeight: '500',
    marginLeft: 5,
    fontFamily: FontFamily.DMSans.medium,
  },

  textContent: {
    color: CommonStyles.textColorContentPost,
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
    marginRight: CommonWidths.res25,
  },

  opacity75: {
    opacity: 0.75,
    marginLeft: 5,
  },

  viewComment: { flexDirection: 'row', alignItems: 'center' },
  paddingLeft0: { paddingLeft: 0 },
});

export default styles;

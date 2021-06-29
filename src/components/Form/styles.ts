import Colors from 'utils/colors';
import { StyleSheet } from 'react-native';
import CommonFonts, { FontFamily } from 'theme/CommonFonts';
import CommonHeights from 'theme/CommonHeights';
import CommonStyles from 'theme/CommonStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: CommonHeights.res20,
  },
  contentContainerStyleFlatList: {
    flex: 1,
    backgroundColor: Colors.mainBackgroundColorContainer,
  },

  contentForm: {
    flex: 1,
    justifyContent: 'space-between',
  },

  header: {
    justifyContent: 'flex-end',
    height: CommonHeights.res260,
    marginBottom: CommonHeights.res50,
  },

  titleText: {
    fontFamily: FontFamily.DMSans.medium,
    fontSize: CommonFonts.res48,
    fontWeight: '600',
    lineHeight: 48,
    color: Colors.white,
  },

  subtitleText: {
    textAlign: 'center',
    fontSize: CommonHeights.res14,
    color: Colors.white,
    marginHorizontal: 2,

    alignSelf: 'center',
  },

  viewButton: {
    marginBottom: CommonHeights.res70,
  },

  errorText: {
    height: CommonHeights.res30,
    color: Colors.danger,
    textAlign: 'left',
  },
  errorMessage: {
    fontSize: CommonFonts.res14,
    textAlign: 'center',
    color: Colors.danger,
    marginTop: CommonHeights.res10,
  },

  closeButton: {
    marginHorizontal: CommonHeights.res20,
  },
  forgotPassword: {
    marginTop: CommonHeights.res10,
    alignSelf: 'flex-end',
  },
  forgotPasswordTxt: {
    color: Colors.porpoise,
    fontSize: CommonFonts.res15,
    fontWeight: '400',
    fontFamily: FontFamily.DMSans.medium,
  },

  viewGoLogin: {
    position: 'absolute',
    bottom: -CommonHeights.res20,
    flexDirection: 'row',
    alignSelf: 'center',
  },
});

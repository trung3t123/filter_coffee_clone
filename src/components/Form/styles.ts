import Colors from 'utils/colors';
import { StyleSheet } from 'react-native';
import CommonFonts from 'theme/CommonFonts';
import CommonHeights from 'theme/CommonHeights';

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
    fontSize: CommonFonts.res48,
    fontWeight: '600',
    textAlign: 'left',
    color: Colors.white,
  },

  subtitleText: {
    textAlign: 'center',
    fontSize: CommonHeights.res14,
    color: Colors.white,
    position: 'absolute',
    bottom: -CommonHeights.res20,
    alignSelf: 'center',
    paddingRight: 20,
  },

  viewButton: {
    marginBottom: CommonHeights.res70,
  },

  errorText: {
    height: CommonHeights.res30,
    // marginTop: 10,
    color: Colors.danger,
    textAlign: 'left',
  },
  errorMessage: {
    fontSize: CommonFonts.res14,
    textAlign: 'center',
    color: Colors.danger,
    borderColor: Colors.danger,
    borderWidth: 1,
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
  },
});

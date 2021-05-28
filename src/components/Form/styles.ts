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
    backgroundColor: Colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'relative',
  },
  contentContainerStyleFlatList: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  buttonLogin: { flex: 2 },
  form: {
    paddingHorizontal: CommonHeights.res20,
    flex: 10,
    justifyContent: 'center',
  },

  header: {
    marginBottom: CommonHeights.res20,
  },

  titleText: {
    fontSize: CommonFonts.res48,
    fontWeight: '600',
    textAlign: 'left',
    color: Colors.white,
  },

  subtitleText: {
    textAlign: 'left',
    fontSize: CommonHeights.res14,
    color: Colors.black70,
  },

  button: {
    borderRadius: 5,
    justifyContent: 'center',
    shadowOpacity: 0,
  },
  buttonSubmit: {
    marginBottom: CommonHeights.res20,
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

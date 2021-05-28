import Colors from 'utils/colors';
import { StyleSheet } from 'react-native';
import CommonFonts from 'theme/CommonFonts';

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
    paddingHorizontal: 20,
    paddingBottom: 50,

    paddingTop: 5,
    flex: 8,
    justifyContent: 'center',
  },
  header: {
    marginBottom: 20,
  },
  titleText: {
    fontSize: 48,
    fontWeight: '600',
    textAlign: 'left',
    marginBottom: 5,
    color: Colors.white,
  },
  subtitleText: {
    textAlign: 'left',
    fontSize: 14,
    color: Colors.black70,
  },
  button: {
    borderRadius: 5,
    justifyContent: 'center',
    shadowOpacity: 0,
  },
  buttonSubmit: {
    marginBottom: 20,
  },
  buttonLabel: {
    color: Colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonSecondaryLabel: {
    color: Colors.black70,
  },
  buttonContent: {
    padding: 5,
  },
  errorText: {
    height: 30,
    marginTop: 10,
    color: Colors.danger,
    textAlign: 'left',
  },
  errorMessage: {
    fontSize: 14,
    textAlign: 'center',
    color: Colors.danger,
    borderColor: Colors.danger,
    borderWidth: 1,
  },
  closeButtonWrapper: {
    position: 'absolute',
    top: '6%',
    right: 0,
    zIndex: 1,
  },
  closeButton: {
    marginHorizontal: 20,
  },
  forgotPassword: {
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  forgotPasswordTxt: {
    color: Colors.porpoise,
    fontSize: CommonFonts.res15,
    fontWeight: '400',
  },
});

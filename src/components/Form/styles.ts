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
  form: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 5,
  },
  header: {
    marginBottom: 20,
  },
  titleText: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 5,
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
    padding: 10,
    borderColor: Colors.danger,
    borderWidth: 1,
    marginBottom: 20,
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
  mb20: {
    marginBottom: 20,
  },
  forgotPasswordTxt: {
    color: Colors.porpoise,
    fontSize: CommonFonts.res12,
  },
});

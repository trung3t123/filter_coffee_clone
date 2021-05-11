import { TextStyle, ViewStyle } from 'react-native';
import Colors from 'utils/colors';

const FormStyles = {
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    flex: 1,
    marginTop: 50,
  },
  field: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 10,
    textAlign: 'left',
    color: Colors.black70,
    fontSize: 16,
  },
  button: {
    borderRadius: 5,
    justifyContent: 'center',
    shadowOpacity: 0,
    elevation: 0,
  } as ViewStyle,
  buttonLabel: {
    color: Colors.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
  } as TextStyle,
  buttonContent: {
    padding: 5,
  },
  errorText: {
    height: 20,
    marginTop: 5,
    color: Colors.danger,
    textAlign: 'left',
  } as TextStyle,
};

export default FormStyles;

import Colors from 'utils/colors';
import { responsiveHeight } from 'utils/screen';

export const CardStyles = {
  bottomModal: { borderTopStartRadius: 30, borderTopEndRadius: 30 },
  content: {
    paddingTop: responsiveHeight(60),
    // flexDirection: 'row',
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    borderColor: Colors.morningWhite,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    position: 'relative',
  },
};

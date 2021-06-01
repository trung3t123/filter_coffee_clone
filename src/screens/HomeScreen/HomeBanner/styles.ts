import { StyleSheet } from 'react-native';
import { ImageStyle } from 'react-native-fast-image';

import CommonHeights from 'theme/CommonHeights';
import CommonWidths from 'theme/CommonWidths';
import CommonFonts from 'theme/CommonFonts';

const styles = StyleSheet.create({
  containerBanner: {
    height: CommonHeights.res200,
    paddingHorizontal: CommonWidths.res15,
    marginHorizontal: CommonWidths.baseSpaceHorizontal,
    marginTop: CommonHeights.res10,
    backgroundColor: 'red',
    borderRadius: 17,
    paddingTop: CommonHeights.res35,
  },

  textTitleBanner: {
    fontSize: CommonFonts.res22,
    fontWeight: '500',
    color: 'white',
  },

  imageCoffee: {
    height: CommonFonts.res30,
    width: CommonFonts.res30,
    marginLeft: 5,
  } as ImageStyle,

  viewBottomBanner: { flexDirection: 'row', paddingTop: CommonHeights.res40 },

  textTimeBanner: { fontSize: CommonFonts.res14, color: 'white' },
});

export default styles;

import { StyleSheet } from 'react-native';
import { ImageStyle } from 'react-native-fast-image';

import CommonHeights from 'theme/CommonHeights';
import CommonWidths from 'theme/CommonWidths';
import CommonFonts, { FontFamily } from 'theme/CommonFonts';
import Colors from 'utils/colors';

const styles = StyleSheet.create({
  containerBanner: {
    height: CommonHeights.res200,
    paddingHorizontal: CommonWidths.res15,
    marginTop: CommonHeights.res10,
    borderRadius: 17,
    paddingTop: CommonHeights.res35,
  },

  textTitleBanner: {
    fontSize: CommonFonts.res22,
    fontWeight: '500',
    color: Colors.white,
    fontFamily: FontFamily.DMSans.medium,
    lineHeight: 30,
  },

  imageCoffee: {
    height: CommonFonts.res30,
    width: CommonFonts.res30,
    marginLeft: 5,
  } as ImageStyle,

  viewBottomBanner: { flexDirection: 'row', paddingTop: CommonHeights.res40 },

  textTimeBanner: {
    fontSize: CommonFonts.res15,
    color: Colors.white,
    fontFamily: FontFamily.DMSans.regular,
    lineHeight: 15,
  },

  titleFlatList: {
    color: Colors.white,
    marginTop: CommonHeights.res15,
    paddingTop: CommonHeights.res5,
    marginBottom: CommonHeights.res20,
    fontWeight: '500',

    fontSize: CommonFonts.res17,
    lineHeight: CommonFonts.res17,
    fontFamily: FontFamily.DMSans.medium,
  },
});

export default styles;

import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CommonWidths from 'theme/CommonWidths';
import CommonHeights from 'theme/CommonHeights';
import Colors from 'utils/colors';
import CacheImage from 'components/Image/CacheImage';
import CommonFonts, { FontFamily } from 'theme/CommonFonts';

type Props = {
  textItem: string;
  imageUrl: string;
};
const ResearchItem = ({ textItem, imageUrl }: Props) => {
  return (
    <View style={styles.container}>
      <CacheImage
        imageStyle={styles.itemImageContainer}
        source={{ uri: imageUrl }}
      />
      <Text style={styles.itemText}>{textItem}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: CommonWidths.res12,
    paddingVertical: CommonHeights.res15,
    backgroundColor: Colors.mainBackgroundColorComponent,
    marginBottom: CommonHeights.res10,
    borderRadius: 15,
    marginHorizontal: CommonWidths.baseSpaceHorizontal,
  },
  itemImageContainer: {
    width: CommonHeights.res80,
    height: CommonHeights.res80,
    resizeMode: 'contain',
    borderRadius: 10,
    marginRight: CommonWidths.res10,
    flex: 1,
  },
  itemText: {
    fontSize: CommonFonts.res17,
    fontWeight: '500',
    lineHeight: CommonFonts.res23,
    color: Colors.textInvertedWhiteColor,
    flex: 3,
    fontFamily: FontFamily.DMSans.medium,
  },
});

export default memo(ResearchItem);

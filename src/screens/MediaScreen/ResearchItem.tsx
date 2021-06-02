import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CommonWidths from 'theme/CommonWidths';
import CommonHeights from 'theme/CommonHeights';
import Colors from 'utils/colors';
import CacheImage from 'components/Image/CacheImage';

type Props = {
  textItem: string;
};

export default function ResearchItem({ textItem }: Props) {
  return (
    <View style={styles.container}>
      <CacheImage
        imageStyle={styles.itemImageContainer}
        source={require('../../../assets/Bitmap.png')}
      />
      <Text style={styles.itemText}>{textItem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: CommonWidths.res12,
    paddingVertical: CommonHeights.res15,
    backgroundColor: Colors.mainBackgroundColorComponent,
    marginBottom: CommonHeights.res10,
    borderRadius: 15,
  },
  itemImageContainer: {
    width: CommonHeights.res80,
    height: CommonHeights.res80,
    resizeMode: 'contain',
    borderRadius: 10,
    marginRight: 10,
    flex: 1,
  },
  itemText: {
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 23,
    color: Colors.textColor,
    flex: 3,
  },
});

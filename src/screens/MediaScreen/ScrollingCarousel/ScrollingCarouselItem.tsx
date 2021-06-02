import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CacheImage from 'components/Image/CacheImage';
import Colors from 'utils/colors';
import CommonHeights from 'theme/CommonHeights';
import CommonWidths from 'theme/CommonWidths';

type PropsType = {
  imageUrl: string;
  itemTitle: string;
};

export default function ScrollingCarouselItem({
  imageUrl,
  itemTitle,
}: PropsType) {
  return (
    <View style={styles.centerItem}>
      <View style={styles.itemContainer}>
        <CacheImage
          source={require('../../../../assets/Bitmap.png')}
          imageStyle={styles.scrollImageStyle}
        />
        <Text style={styles.itemTitle}>{itemTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: Colors.mainBackgroundColorComponent,
    paddingTop: CommonHeights.res24,
    width: CommonWidths.p80,
    paddingBottom: CommonHeights.res30,
    paddingHorizontal: CommonWidths.res22,
    borderRadius: 25,
  },
  centerItem: {
    width: CommonWidths.p100,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  itemTitle: {
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 28,
    color: Colors.textColor,
  },
  scrollImageStyle: {
    height: CommonHeights.res350,
    width: '100%',
    resizeMode: 'contain',
    borderRadius: 25,
    marginBottom: CommonHeights.res18,
  },
});

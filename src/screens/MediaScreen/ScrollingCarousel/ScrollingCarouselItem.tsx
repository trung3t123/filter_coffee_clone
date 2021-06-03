import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CacheImage from 'components/Image/CacheImage';
import Colors from 'utils/colors';
import CommonHeights from 'theme/CommonHeights';
import CommonWidths from 'theme/CommonWidths';
import CommonFonts from 'theme/CommonFonts';
import { memo } from 'react';

type PropsType = {
  imageUrl: string;
  itemTitle: string;
};

const ScrollingCarouselItem = ({ imageUrl, itemTitle }: PropsType) => {
  return (
    <View style={styles.centerItem}>
      <View style={styles.itemContainer}>
        <CacheImage
          source={{ uri: imageUrl }}
          imageStyle={styles.scrollImageStyle}
        />
        <Text style={styles.itemTitle}>{itemTitle}</Text>
      </View>
    </View>
  );
};

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
    fontSize: CommonFonts.res20,
    lineHeight: CommonFonts.res28,
    color: Colors.textInvertedWhiteColor,
  },
  scrollImageStyle: {
    height: CommonHeights.res350,
    width: '100%',
    resizeMode: 'contain',
    borderRadius: 25,
    marginBottom: CommonHeights.res18,
  },
});

export default memo(ScrollingCarouselItem);

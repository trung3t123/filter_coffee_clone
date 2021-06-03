import Header from 'components/Header';
import GradientText from 'components/Text/LinearGradientText/LinearGradientText';
import React, { memo, useRef, useEffect, useState } from 'react';
import {
  Animated,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CommonFonts from 'theme/CommonFonts';
import CommonHeights from 'theme/CommonHeights';
import CommonWidths from 'theme/CommonWidths';
import Colors from 'utils/colors';
import Screen from 'utils/screen';
import ResearchItem from './ResearchItem';
import ScrollingCarouselItem from './ScrollingCarousel/ScrollingCarouselItem';
import { useDispatch } from 'react-redux';
import { onGetMediaPost } from 'data/home/actions';
import { ActionDispatcher } from 'data/types';
import { itemType } from './type';

type PropTypes = {
  navigation: any;
};

const ITEM_SIZE = CommonWidths.p100;

const MediaScreen: React.FC<PropTypes> = () => {
  const dispatch: ActionDispatcher = useDispatch();
  const [mediaList, setMediaList] = useState([]);

  const fetchData = async () => {
    const mediaPost = await dispatch(onGetMediaPost(0, 10));
    setMediaList(mediaPost.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const scrollX = useRef(new Animated.Value(0)).current;

  function renderResearchList() {
    return mediaList.map((item: itemType) => (
      <TouchableOpacity
        key={item.id}
        // onPress={() => navigation.navigate(ROUTES.BLOG_DETAIL)}
      >
        <ResearchItem
          imageUrl={item.content.image_urls[0]}
          textItem={item.content.content}
          key={item.id}
        />
      </TouchableOpacity>
    ));
  }

  const renderItem = ({ item, index }) => {
    const inputRange = [
      ITEM_SIZE * (index - 0.5),
      ITEM_SIZE * index,
      ITEM_SIZE * (index + 0.5),
    ];
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.9, 1, 0.9],
    });
    const position = scrollX.interpolate({
      inputRange,
      outputRange: [-CommonWidths.p15, 0, CommonWidths.p15],
    });
    const perspective = scrollX.interpolate({
      inputRange,
      outputRange: [1200, 800, 1200],
    });
    return (
      <Animated.View
        style={{
          transform: [{ scale }, { translateX: position }, { perspective }],
        }}>
        <ScrollingCarouselItem
          key={item.id}
          imageUrl={item.content.image_urls[0]}
          itemTitle={item.content.content}
        />
      </Animated.View>
    );
  };

  const getKey = (item: { id: any }) => item.id;

  return (
    <View style={styles.container}>
      <Header isGoBack>
        <View style={styles.flexRow}>
          <Text style={styles.textTitleActive}>Insights </Text>
          <Text style={styles.textTitle}> - </Text>
          <Text style={styles.textTitle}>Scoops </Text>
        </View>
      </Header>
      <ScrollView style={styles.content}>
        <View style={styles.flatlistContainer}>
          <GradientText style={styles.subtitleText}>View all</GradientText>
          <Animated.FlatList
            contentContainerStyle={styles.alignItemCenter}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              {
                useNativeDriver: true,
              },
            )}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            data={mediaList}
            renderItem={renderItem}
            keyExtractor={getKey}
          />
        </View>
        <View style={styles.flexRowBetween}>
          <Text style={styles.itemTitle}>Coffee research</Text>
          <GradientText style={styles.subtitleText}>View all</GradientText>
        </View>
        <View style={styles.researchListContainer}>{renderResearchList()}</View>
      </ScrollView>
    </View>
  );
};

export default memo(MediaScreen);

const styles = StyleSheet.create({
  container: {
    height: Screen.height,
    width: Screen.width,
    backgroundColor: Colors.black,
    position: 'relative',
  },

  itemTitle: {
    fontWeight: '500',
    fontSize: CommonFonts.res20,
    paddingHorizontal: CommonWidths.res23,
    lineHeight: CommonFonts.res28,
    color: Colors.textInvertedWhiteColor,
  },

  flexRowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: CommonHeights.res18,
  },

  flexRow: {
    flexDirection: 'row',
  },
  alignItemCenter: { alignItems: 'center' },

  subtitleText: {
    textAlign: 'right',
    fontSize: CommonFonts.res15,
    paddingHorizontal: CommonWidths.res23,
    fontWeight: '500',
    paddingBottom: CommonHeights.res20,
  },

  researchListContainer: {
    paddingHorizontal: CommonWidths.res23,
    marginBottom: CommonHeights.p10,
  },

  content: {
    flex: 1,
    backgroundColor: Colors.black,
  },

  textTitleActive: {
    color: Colors.textInvertedWhiteColor,
    fontSize: CommonFonts.res22,
    fontWeight: '400',
  },

  textTitle: {
    color: Colors.textInvertedWhiteColor,
    opacity: 0.5,
    fontSize: CommonFonts.res22,
    fontWeight: '400',
  },

  flatlistContainer: {
    paddingBottom: CommonHeights.res60,
  },

  imageBackground: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
  },
});

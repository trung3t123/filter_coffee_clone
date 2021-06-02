import React, { useRef, memo } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Animated,
  ScrollView,
} from 'react-native';
import Screen from 'utils/screen';
import Header from 'components/Header';
import CommonFonts from 'theme/CommonFonts';
import Colors from 'utils/colors';
import GradientText from 'components/Text/LinearGradientText/LinearGradientText';
import CommonWidths from 'theme/CommonWidths';
import { render } from 'enzyme';
import ScrollingCarouselItem from './ScrollingCarousel/ScrollingCarouselItem';
import CommonHeights from 'theme/CommonHeights';
import ResearchItem from './ResearchItem';
import { ReactElement } from 'react';

type PropTypes = {
  navigation: any;
};

const mockData = [
  { id: '1', url: '../../../assets/Bitmap.png', tittle: 'California Boi ' },
  { id: '2', url: '../../../assets/Bitmap.png', tittle: 'California Boi ' },
  { id: '3', url: '../../../assets/Bitmap.png', tittle: 'California Boi ' },
  { id: '4', url: '../../../assets/Bitmap.png', tittle: 'California Boi ' },
  { id: '5', url: '../../../assets/Bitmap.png', tittle: 'California Boi ' },
  { id: '6', url: '../../../assets/Bitmap.png', tittle: 'California Boi ' },
  { id: '7', url: '../../../assets/Bitmap.png', tittle: 'California Boi ' },
];

const researchData = [
  {
    id: '1',
    url: '../../../assets/Bitmap.png',
    tittle: 'Plant based milk company Oatly just IPO’ed at $10 billion',
  },
  {
    id: '2',
    url: '../../../assets/Bitmap.png',
    tittle: '$150 billion media merger you should know about ✌️',
  },
  {
    id: '3',
    url: '../../../assets/Bitmap.png',
    tittle: 'Adani gobbles SB Energy',
  },
  {
    id: '4',
    url: '../../../assets/Bitmap.png',
    tittle: '$150 billion media merger you should know about ✌️',
  },
  {
    id: '5',
    url: '../../../assets/Bitmap.png',
    tittle: 'Plant based milk company Oatly just IPO’ed at $10 billion',
  },
  {
    id: '6',
    url: '../../../assets/Bitmap.png',
    tittle: 'Adani gobbles SB Energy',
  },
];

const ITEM_SIZE = CommonWidths.p100;

const MediaScreen: React.FC<PropTypes> = ({}) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  function renderResearchList() {
    return researchData.map(item => (
      <ResearchItem textItem={item.tittle} key={item.id} />
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
          key={index}
          imageUrl={item.url}
          itemTitle={item.tittle}
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
            data={mockData}
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
    backgroundColor: Colors.white,
    position: 'relative',
  },

  itemTitle: {
    fontWeight: '500',
    fontSize: CommonFonts.res20,
    lineHeight: CommonFonts.res28,
    color: Colors.textInvertedWhiteColor,
  },

  flexRowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: CommonWidths.res23,
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

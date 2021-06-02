import React, { memo } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import CommonHeights from 'theme/CommonHeights';
import CommonWidths from 'theme/CommonWidths';
import CommonFonts from 'theme/CommonFonts';
import Colors from 'utils/colors';

import { useNavigation } from '@react-navigation/native';
import ROUTES from 'routes/names';
import { itemType } from 'screens/HomeScreen/HomeListPosts/types';
import Avatar from 'components/Image/Avatar';
import IconWithText from 'components/Icon/IconWithText';

type ItemPostProps = {
  item: itemType;
};

const PostItem: React.FC<ItemPostProps> = ({ item }) => {
  const navigation = useNavigation();

  const navigateToDetailPost = () => {
    navigation.navigate(ROUTES.POST_DETAIL, { idPost: item.item.id });
  };

  return (
    <TouchableWithoutFeedback onPress={navigateToDetailPost}>
      <View style={styles.containerItem}>
        <View style={styles.viewInfoPost}>
          <Avatar isEnableGradient avatarStyle={styles.avatar} />

          <View style={styles.viewNamePostOfUser}>
            <Text style={styles.textNameUserPost}>
              Ishika Agarwal{' '}
              <View style={styles.viewIconCheck}>
                <Icon
                  name="check"
                  color={Colors.white}
                  size={CommonFonts.res8}
                />
              </View>
            </Text>

            <Text style={styles.textTime}>
              @wtfishika • <Text>20h ago</Text>
            </Text>
          </View>
        </View>

        <View style={styles.viewContentPost}>
          <Text style={styles.textContent}>{item?.item?.content?.content}</Text>
        </View>

        <View style={styles.viewBottomPost}>
          <IconWithText
            styleContainerIcon={styles.viewLike}
            iconColor={Colors.red}
            iconName={'heart'}
            textStyle={styles.textLikeAndComment}
            title={'11.23k'}
            sizeIcon={CommonFonts.res23}
          />
          <IconWithText
            styleContainerIcon={styles.viewComment}
            iconColor={Colors.white}
            iconName={'message-circle'}
            textStyle={styles.opacity75}
            title={'1.76k'}
            sizeIcon={CommonFonts.res23}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default memo(PostItem);

const styles = StyleSheet.create({
  containerItem: {
    marginBottom: CommonHeights.res20,
  },
  viewInfoPost: { flexDirection: 'row', marginBottom: CommonHeights.res10 },
  viewContentPost: {
    paddingLeft: CommonWidths.res15,
    paddingBottom: CommonHeights.res5,
  },
  viewBottomPost: {
    flexDirection: 'row',
    paddingLeft: CommonWidths.res15,
  },

  avatar: {
    height: CommonHeights.res40,
    width: CommonHeights.res40,
    borderRadius: 50,
    margin: 1,
  },

  viewNamePostOfUser: {
    justifyContent: 'space-between',
    flex: 1,
    paddingVertical: 0,
    lineHeight: 0,
    marginLeft: CommonWidths.res10,
  },

  textNameUserPost: {
    color: Colors.white,
    fontSize: CommonFonts.res17,
    fontWeight: '500',
  },
  textTime: { color: Colors.white, fontSize: CommonFonts.res13, opacity: 0.75 },
  textLikeAndComment: {
    color: Colors.white,
    fontSize: CommonFonts.res15,
    fontWeight: '500',
  },
  textContent: {
    color: Colors.white,
    fontSize: CommonFonts.res23,
    opacity: 0.75,
  },
  viewIconCheck: {
    backgroundColor: Colors.verifiedUser,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewLike: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: CommonWidths.res25,
  },

  opacity75: {
    opacity: 0.75,
  },

  viewComment: { flexDirection: 'row', alignItems: 'center' },
});

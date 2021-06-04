import React, { memo, useMemo } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import CommonHeights from 'theme/CommonHeights';
import CommonWidths from 'theme/CommonWidths';
import CommonFonts, { FontFamily } from 'theme/CommonFonts';
import Colors from 'utils/colors';

import { useNavigation } from '@react-navigation/native';
import ROUTES from 'routes/names';
import { itemType } from 'screens/HomeScreen/HomeListPosts/types';
import Avatar from 'components/Image/Avatar';
import IconWithText from 'components/Icon/IconWithText';
import { calculateTimeAgo } from 'utils/commonFunction';

type ItemPostProps = {
  item: itemType;
};

const PostItem: React.FC<ItemPostProps> = ({ item }) => {
  const navigation = useNavigation();

  const navigateToDetailPost = () => {
    navigation.navigate(ROUTES.POST_DETAIL, {
      idPost: item.item.id,
      item: item.item,
    });
  };

  const onCalculateTimeAgo = useMemo(() => {
    return calculateTimeAgo(item.item.content.createdAt);
  }, [item.item.content.createdAt]);

  return (
    <TouchableWithoutFeedback onPress={navigateToDetailPost}>
      <View style={styles.containerItem}>
        <View style={styles.viewInfoPost}>
          <View>
            <Avatar
              uri={item.item.user.image_url}
              isEnableGradient
              avatarStyle={styles.avatar}
            />
          </View>

          <View style={styles.viewNamePostOfUser}>
            <Text style={styles.textNameUserPost}>
              {item.item.user.fullname}{' '}
              <View style={styles.viewIconCheck}>
                <Icon
                  name="check"
                  color={Colors.white}
                  size={CommonFonts.res8}
                />
              </View>
            </Text>

            <Text style={styles.textTime}>
              @wtfishika{'  •  '}
              <Text>{onCalculateTimeAgo}</Text>
            </Text>
          </View>
        </View>

        <View style={styles.viewContentPost}>
          <Text style={styles.textContent}>{item?.item?.content?.content}</Text>
        </View>

        <View style={styles.viewBottomPost}>
          <IconWithText
            image
            styleContainerIcon={styles.viewLike}
            iconColor={Colors.red}
            iconName={'heart'}
            textStyle={styles.textLikeAndComment}
            title={'11.23k'}
            sizeIcon={CommonFonts.res23}
          />
          <IconWithText
            image
            styleContainerIcon={styles.viewComment}
            iconColor={Colors.white}
            iconName={'message-circle'}
            textStyle={{ ...styles.textLikeAndComment, ...styles.opacity75 }}
            title={item.item.comment_posts.length}
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
    paddingBottom: CommonHeights.res20,
    marginBottom: CommonHeights.res10,
    borderBottomWidth: 1,
    borderColor: Colors.borderColorItem,
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
    marginLeft: CommonWidths.res10,
  },

  textNameUserPost: {
    color: Colors.white,
    fontSize: CommonFonts.res17,
    lineHeight: CommonFonts.res20,
    fontWeight: '500',
    fontFamily: FontFamily.DMSans.medium,
  },

  textTime: {
    color: Colors.white,
    fontSize: CommonFonts.res13,
    lineHeight: CommonFonts.res13,
    opacity: 0.75,
    fontWeight: '400',
    fontFamily: FontFamily.DMSans.regular,
  },

  textLikeAndComment: {
    color: Colors.white,
    fontSize: CommonFonts.res15,
    // lineHeight: CommonFonts.res15,
    fontWeight: '500',
    marginLeft: 5,
    fontFamily: FontFamily.DMSans.medium,
  },

  textContent: {
    color: 'rgba(252, 252, 252, 0.75)',
    fontSize: CommonFonts.res21,
    marginBottom: CommonHeights.res10,
    fontFamily: 'DMSans-Regular',
    fontWeight: '400',
  },
  viewIconCheck: {
    backgroundColor: Colors.verifiedUser,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: CommonHeights.res12,
    width: CommonHeights.res12,
  },
  viewLike: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: CommonWidths.res25,
  },

  opacity75: {
    opacity: 0.75,
    marginLeft: 5,
  },

  viewComment: { flexDirection: 'row', alignItems: 'center' },
});

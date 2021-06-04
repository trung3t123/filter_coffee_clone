/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import CommonHeights from 'theme/CommonHeights';
import CommonWidths from 'theme/CommonWidths';
import CommonFonts, { FontFamily } from 'theme/CommonFonts';
import Colors from 'utils/colors';

// import { itemType } from 'screens/HomeScreen/HomeListPosts/types';
import Avatar from 'components/Image/Avatar';
import IconWithText from 'components/Icon/IconWithText';
import { calculateTimeAgo } from 'utils/commonFunction';

type ItemPostProps = {
  message?: string;
  userName?: string;
  linkAvatar?: string;
  createAtPost: string;
};

const ReplyCommentItem: React.FC<ItemPostProps> = ({
  message,
  userName,
  linkAvatar,
  createAtPost,
}) => {
  const onCalculateTimeAgo = useMemo(() => calculateTimeAgo(createAtPost), [
    [createAtPost],
  ]);

  return (
    <View style={styles.containerItem}>
      <View style={styles.viewInfoPost}>
        <View>
          <Avatar
            uri={linkAvatar}
            isEnableGradient
            avatarStyle={styles.avatar}
          />
        </View>

        <View style={styles.viewNamePostOfUser}>
          <Text style={styles.textNameUserPost}>
            {userName}{' '}
            <View style={styles.viewIconCheck}>
              <Icon name="check" color={Colors.white} size={CommonFonts.res8} />
            </View>
          </Text>

          <Text style={styles.textTime}>
            @wtfishika • <Text>{onCalculateTimeAgo}</Text>
          </Text>
        </View>
      </View>

      <View style={styles.viewContentPost}>
        <Text style={styles.textContent}>{message}</Text>
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
      </View>
    </View>
  );
};

export default memo(ReplyCommentItem);

const styles = StyleSheet.create({
  containerItem: {
    marginBottom: CommonHeights.res20,
    paddingHorizontal: CommonWidths.baseSpaceHorizontal,

    borderBottomColor: Colors.borderColorItem,
    borderBottomWidth: 1,
    paddingBottom: CommonHeights.res16,
  },
  viewInfoPost: { flexDirection: 'row', marginBottom: CommonHeights.res10 },
  viewContentPost: {
    paddingBottom: CommonHeights.res5,
  },
  viewBottomPost: {
    flexDirection: 'row',
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
    marginLeft: CommonWidths.res5,

    fontWeight: '500',
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
  },
});

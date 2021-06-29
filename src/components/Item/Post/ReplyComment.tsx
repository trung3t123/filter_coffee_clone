/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useMemo } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import CommonFonts from 'theme/CommonFonts';
import Colors from 'utils/colors';
import Avatar from 'components/Image/Avatar';
import IconWithText from 'components/Icon/IconWithText';
import { calculateTimeAgo } from 'utils/commonFunction';

import styles from './styles';
import CommonWidths from 'theme/CommonWidths';

export type ItemPostProps = {
  message?: string;
  userName?: string;
  linkAvatar?: string;
  createAtPost: string;
  fullName?: string;
};

const ReplyComment: React.FC<ItemPostProps> = ({
  message,
  userName,
  linkAvatar,
  createAtPost,
  fullName,
}) => {
  const onCalculateTimeAgo = useMemo(() => calculateTimeAgo(createAtPost), [
    [createAtPost],
  ]);

  return (
    <View
      style={[
        styles.containerItem,
        { paddingHorizontal: CommonWidths.baseSpaceHorizontal },
      ]}>
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
            {fullName}{' '}
            <View style={styles.viewIconCheck}>
              <Icon name="check" color={Colors.white} size={CommonFonts.res8} />
            </View>
          </Text>

          <Text style={styles.textTime}>
            {'@'}
            {userName}
            {'  •  '}
            <Text>{onCalculateTimeAgo}</Text>
          </Text>
        </View>
      </View>

      <View style={[styles.viewContentPost, styles.paddingLeft0]}>
        <Text style={styles.textContent}>{message}</Text>
      </View>

      <View style={[styles.viewBottomPost, styles.paddingLeft0]}>
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

export default memo(ReplyComment);

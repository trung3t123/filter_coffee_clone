import React, { memo, useMemo } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import CommonFonts from 'theme/CommonFonts';
import Colors from 'utils/colors';

import Avatar from 'components/Image/Avatar';
import IconWithText from 'components/Icon/IconWithText';
import { calculateTimeAgo } from 'utils/commonFunction';

import styles from './styles';

export type MainPostProps = {
  imageUrl?: string;
  fullName: string;
  userName: string;
  content: string;
  groupType: string;
  totalComment: number;
  createAt: string;
};

const MainPost: React.FC<MainPostProps> = ({
  imageUrl,
  fullName,
  userName,
  content,
  groupType,
  totalComment,
  createAt,
}) => {
  const onCalculateTimeAgo = useMemo(() => {
    return calculateTimeAgo(createAt);
  }, [createAt]);

  return (
    <View style={styles.containerItem}>
      <View style={styles.viewInfoPost}>
        <View>
          <Avatar
            uri={imageUrl && imageUrl}
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

      <View style={styles.viewContentPost}>
        <Text style={styles.textContent}>{content}</Text>
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
        {groupType !== 'premium' && (
          <IconWithText
            image
            styleContainerIcon={styles.viewComment}
            iconColor={Colors.white}
            iconName={'message-circle'}
            textStyle={{ ...styles.textLikeAndComment, ...styles.opacity75 }}
            title={totalComment}
            sizeIcon={CommonFonts.res23}
          />
        )}
      </View>
    </View>
  );
};

export default memo(MainPost);

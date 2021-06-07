import React, { memo, useMemo } from 'react';
import { View, Text } from 'react-native';
import IconWithText from 'components/Icon/IconWithText';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';
import Avatar from 'components/Image/Avatar';
import Colors from 'utils/colors';
import CommonFonts from 'theme/CommonFonts';
import { PostTypes } from 'data/home/types';
import CacheImage from 'components/Image/CacheImage';
import { calculateTimeAgo } from 'utils/commonFunction';
import CommonStyles from 'theme/CommonStyles';

const DetailPost = ({
  totalComment,
  item,
  isPostTypePreminum,
}: {
  totalComment?: number;
  item: PostTypes;
  isPostTypePreminum: boolean;
}) => {
  const onCalculateTimeAgo = useMemo(
    () => calculateTimeAgo(item.content.createdAt ?? new Date()),
    [item?.content.createdAt],
  );

  return (
    <>
      {isPostTypePreminum && (
        <Text style={styles.textTitlePost}>{item.description}</Text>
      )}

      <View style={styles.containerItem}>
        <>
          <View style={styles.viewInfoPost}>
            <View>
              <Avatar
                uri={item?.user.image_url}
                isEnableGradient
                avatarStyle={styles.avatar}
              />
            </View>

            <View style={styles.viewNamePostOfUser}>
              <Text style={styles.textNameUserPost}>
                {item?.user.fullname}{' '}
                <View style={styles.viewIconCheck}>
                  <Icon
                    name="check"
                    color={Colors.white}
                    size={CommonFonts.res8}
                  />
                </View>
              </Text>

              <Text style={styles.textTime}>
                {'@'}
                {item.user.username}
                {'  •  '}
                <Text>{onCalculateTimeAgo}</Text>
              </Text>
            </View>
          </View>

          {isPostTypePreminum && (
            <View style={styles.viewBannerDetailPost}>
              <CacheImage
                resizeMode="stretch"
                uri={item.thumbnail_url}
                imageStyle={styles.imageBanner}
              />
            </View>
          )}

          <View style={styles.viewContentPost}>
            <Text style={styles.textContent}>{item?.content.content}</Text>
          </View>

          <View style={styles.viewBottomPost}>
            <IconWithText
              styleContainerIcon={styles.viewComment}
              iconColor={CommonStyles.iconColor}
              iconName={'eye'}
              textStyle={styles.opacity75}
              title={'23.67k'}
              sizeIcon={CommonFonts.res23}
            />

            <IconWithText
              styleContainerIcon={styles.viewComment}
              iconColor={Colors.red}
              iconName={'heart'}
              textStyle={styles.textLikeAndComment}
              title={'11.23k'}
              image
              sizeIcon={CommonFonts.res23}
            />
            {!isPostTypePreminum && (
              <IconWithText
                styleContainerIcon={styles.viewComment}
                iconColor={Colors.white}
                iconName={'message-circle'}
                textStyle={styles.opacity75}
                title={totalComment ?? 0}
                image
                sizeIcon={CommonFonts.res23}
              />
            )}
            <IconWithText
              styleContainerIcon={styles.viewComment}
              iconColor={Colors.white}
              iconName={'share-2'}
              textStyle={styles.opacity75}
              title={'1.76k'}
              image
              sizeIcon={CommonFonts.res23}
            />
          </View>
        </>
      </View>
    </>
  );
};

export default memo(DetailPost);

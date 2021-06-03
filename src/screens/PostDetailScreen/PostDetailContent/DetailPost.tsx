/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback, memo } from 'react';
import { View, Text } from 'react-native';
import IconWithText from 'components/Icon/IconWithText';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';
import Avatar from 'components/Image/Avatar';
import Colors from 'utils/colors';
import CommonFonts from 'theme/CommonFonts';
import { getDetailPost } from 'data/home/actions';
import { PostTypes } from 'data/home/types';

const DetailPost = ({
  idPost,
  totalComment,
  setDetailPostReady,
}: {
  idPost: string;
  totalComment: number;
  setDetailPostReady: () => void;
}) => {
  const [detailPost, setDetailPost] = useState<PostTypes>();

  const [isLoading, setLoading] = useState<boolean>(false);

  const onGetDetailPost = useCallback(async () => {
    setLoading(true);
    try {
      const { data, success, error } = await getDetailPost(idPost);

      if (error) {
        setLoading(false);
        throw new Error(error);
      }

      if (success) {
        setLoading(false);
        setDetailPost(data);
        setDetailPostReady();
      }
    } catch (error) {
      setLoading(false);
    }
  }, [idPost, setDetailPost]);

  useEffect(() => {
    onGetDetailPost();
  }, []);

  return (
    <View style={styles.containerItem}>
      {isLoading ? (
        <View />
      ) : (
        <>
          <View style={styles.viewInfoPost}>
            <View>
              <Avatar
                isLoading={isLoading}
                uri={detailPost?.user.image_url}
                isEnableGradient
                avatarStyle={styles.avatar}
              />
            </View>

            <View style={styles.viewNamePostOfUser}>
              <Text style={styles.textNameUserPost}>
                {detailPost?.user.fullname}{' '}
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
            <Text style={styles.textContent}>
              {detailPost?.content.content}
            </Text>
          </View>

          <View style={styles.viewBottomPost}>
            <IconWithText
              styleContainerIcon={styles.viewComment}
              iconColor={Colors.white}
              iconName={'eye'}
              textStyle={styles.opacity75}
              title={'23.67k'}
              sizeIcon={CommonFonts.res23}
            />

            <IconWithText
              styleContainerIcon={styles.viewLike}
              iconColor={Colors.red}
              iconName={'heart'}
              textStyle={styles.textLikeAndComment}
              title={'11.23k'}
              image
              sizeIcon={CommonFonts.res23}
            />
            <IconWithText
              styleContainerIcon={styles.viewComment}
              iconColor={Colors.white}
              iconName={'message-circle'}
              textStyle={styles.opacity75}
              title={totalComment}
              image
              sizeIcon={CommonFonts.res23}
            />
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
      )}
    </View>
  );
};

export default memo(DetailPost);

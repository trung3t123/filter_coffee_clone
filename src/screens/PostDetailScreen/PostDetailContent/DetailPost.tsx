import React from 'react';
import { View, Text } from 'react-native';
import IconWithText from 'components/Icon/IconWithText';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';
import Avatar from 'components/Image/Avatar';
import Colors from 'utils/colors';
import CommonFonts from 'theme/CommonFonts';
import { PostTypes } from 'data/home/types';

const DetailPost = ({ item }: { item?: PostTypes }) => {
  return (
    <View style={styles.containerItem}>
      <View style={styles.viewInfoPost}>
        <Avatar isEnableGradient avatarStyle={styles.avatar} />

        <View style={styles.viewNamePostOfUser}>
          <Text style={styles.textNameUserPost}>
            Ishika Agarwal{' '}
            <View style={styles.viewIconCheck}>
              <Icon name="check" color={Colors.white} size={CommonFonts.res8} />
            </View>
          </Text>

          <Text style={styles.textTime}>
            @wtfishika • <Text>20h ago</Text>
          </Text>
        </View>
      </View>

      <View style={styles.viewContentPost}>
        <Text style={styles.textContent}>{item?.content?.content}</Text>
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
        <IconWithText
          styleContainerIcon={styles.viewComment}
          iconColor={Colors.white}
          iconName={'share-2'}
          textStyle={styles.opacity75}
          title={'1.76k'}
          sizeIcon={CommonFonts.res23}
        />
      </View>
    </View>
  );
};

export default DetailPost;

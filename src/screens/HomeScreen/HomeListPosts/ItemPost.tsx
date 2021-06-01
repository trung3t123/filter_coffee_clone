import React, { memo } from 'react';
import { View, Text } from 'react-native';
import { itemType } from './types';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';
import Avatar from 'components/Image/Avatar';
import Colors from 'utils/colors';
import CommonFonts from 'theme/CommonFonts';

type ItemPostProps = {
  item: itemType;
};

const ItemPost: React.FC<ItemPostProps> = ({ item }) => {
  return (
    <View style={styles.containerItem}>
      <View style={styles.viewInfoPost}>
        <Avatar isEnableGradient avatarStyle={styles.avatar} />

        <View style={styles.viewNamePostOfUser}>
          <Text style={styles.textNameUserPost}>
            Ishika Agarwal
            <View style={styles.viewIconCheck}>
              <Icon name="check" color={Colors.white} />
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
        <View style={styles.viewLike}>
          <Icon name="heart" color={Colors.red} size={CommonFonts.res23} />

          <Text style={styles.textLikeAndComment}>11.23k</Text>
        </View>

        <View style={styles.viewComment}>
          <Icon
            name="message-circle"
            color={Colors.white}
            size={CommonFonts.res23}
            style={styles.opacity75}
          />
          <Text style={styles.textLikeAndComment}>1.76k</Text>
        </View>
      </View>
    </View>
  );
};

export default memo(ItemPost);

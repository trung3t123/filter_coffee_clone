import React, { memo } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import CommonWidths from 'theme/CommonWidths';
import CommonFonts from 'theme/CommonFonts';
import CommonHeights from 'theme/CommonHeights';
import LinearGradient from 'react-native-linear-gradient';
import CommonStyles from 'theme/CommonStyles';
import Colors from 'utils/colors';

const sizeViewOptionTheme =
  CommonWidths.windowWidth / 2 - CommonWidths.baseSpaceHorizontal * 1.5;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: Colors.mainBackgroundColorComponent,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: sizeViewOptionTheme,
    height: sizeViewOptionTheme,
    margin: CommonWidths.res5,
    padding: 1,
  },
  text: {
    fontSize: CommonFonts.res15,
    fontWeight: '500',
    color: Colors.white,
    marginTop: CommonHeights.res20,
  },
  linearGradient: {
    ...StyleSheet.absoluteFillObject,

    width: sizeViewOptionTheme,
    height: sizeViewOptionTheme,
    borderRadius: 15,
  },
});

type OptimeThemeProps = {
  onPress?: () => void;
  isActive?: boolean;
  nameIcon: string;
  title: string;
};

const OptionTheme: React.FC<OptimeThemeProps> = ({
  onPress,
  isActive,
  nameIcon,
  title,
}) => {
  return (
    <View style={styles.container}>
      {isActive && (
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={CommonStyles.mainLinerGradientColor}
          style={styles.linearGradient}
        />
      )}
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.content}>
          <Icon
            name={nameIcon}
            size={CommonWidths.res27}
            color={Colors.white}
          />
          <Text style={styles.text}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default memo(OptionTheme);

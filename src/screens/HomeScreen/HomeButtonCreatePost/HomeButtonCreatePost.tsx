import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import LinearBackground from 'components/Theme/LinearBackground';

import CommonHeights from 'theme/CommonHeights';
import CommonWidths from 'theme/CommonWidths';
import CommonFonts from 'theme/CommonFonts';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const HomeButtonCreatePost = () => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.containerButton}>
        <LinearBackground borderRadiusLinerView={50} />
        <Icon name="edit" size={CommonFonts.res20} color={Colors.white} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HomeButtonCreatePost;

const styles = StyleSheet.create({
  containerButton: {
    height: CommonHeights.res60,
    width: CommonHeights.res60,
    position: 'absolute',
    bottom: CommonHeights.res120,
    right: CommonWidths.res20,
    justifyContent: 'center',
    borderRadius: 50,
    alignItems: 'center',
  },
});

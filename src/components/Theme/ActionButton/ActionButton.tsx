import React from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
  GestureResponderEvent,
} from 'react-native';
import CommonHeights from 'theme/CommonHeights';
import CommonWidths from 'theme/CommonWidths';
import CommonFonts from 'theme/CommonFonts';
import LinearBackground from '../LinearBackground';

var styles = StyleSheet.create({
  linearGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonText: {
    fontSize: CommonFonts.res18,
    // fontFamily: 'Metropolis',
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
    zIndex: 1,
    letterSpacing: -1,
  },
  container: {
    borderRadius: 15,
    overflow: 'hidden',
    marginVertical: CommonHeights.res10,
    marginHorizontal: CommonWidths.res20,
    height: CommonHeights.res56,
    justifyContent: 'center',
  },
});

type PropTypes = {
  text?: string;
  loading?: boolean;
  disabled?: boolean;
  onPress: (e: GestureResponderEvent) => void;
};

const ActionButton: React.FC<PropTypes> = ({
  text = 'Get Started',
  onPress,
  disabled,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} disabled={disabled}>
      <View style={styles.container}>
        <LinearBackground />
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ActionButton;

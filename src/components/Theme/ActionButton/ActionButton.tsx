import React from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
  GestureResponderEvent,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CommonHeights from 'theme/CommonHeights';
import Colors from 'utils/colors';

var styles = StyleSheet.create({
  linearGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonText: {
    fontSize: 18,
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
    margin: 10,
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
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[Colors.mainGradientStart, Colors.mainGradientEnd]}
          style={styles.linearGradient}
        />
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ActionButton;

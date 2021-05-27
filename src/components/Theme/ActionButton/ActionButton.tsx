import React from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
  GestureResponderEvent,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

var styles = StyleSheet.create({
  linearGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonText: {
    fontSize: 18,
    // fontFamily: 'Metropolis',
    textAlign: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
    zIndex: 1,
    letterSpacing: -1,
  },
  container: {
    borderRadius: 15,
    overflow: 'hidden',
    margin: 10,
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
          colors={['#00AEFF', '#875BFF']}
          style={styles.linearGradient}
        />
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ActionButton;

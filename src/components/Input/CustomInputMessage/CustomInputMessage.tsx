import React, { memo, Component, createRef } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  TouchableWithoutFeedback,
  Animated,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Colors from 'utils/colors';
import CommonWidths from 'theme/CommonWidths';
import CommonFonts from 'theme/CommonFonts';
import CommonHeights from 'theme/CommonHeights';
import { HIT_SLOP } from 'theme/touch';
import Screen from 'utils/screen';
import Platform from 'utils/platform';
import { doNothing } from 'constants/default-values';

type CustomInputMessageProps = {
  submitEditing: (text: string) => void;
  isInputReady?: boolean;
};

class CustomInputMessage extends Component<CustomInputMessageProps> {
  state = {
    valueInput: '',
  };

  Height = new Animated.Value(0);

  componentDidMount() {
    const animateTo = (y: number, duration: number) =>
      Animated.timing(this.Height, {
        toValue: y,
        duration,
        useNativeDriver: false,
      }).start();

    Keyboard.addListener(Platform.KeyboardEvent.Show, evt => {
      animateTo(evt.endCoordinates.height, evt.duration);
    });
    Keyboard.addListener(Platform.KeyboardEvent.Hide, evt => {
      animateTo(0, evt.duration);
    });
  }

  componentWillUnmount = () => {
    Keyboard.removeListener(Platform.KeyboardEvent.Show, doNothing);
    Keyboard.removeListener(Platform.KeyboardEvent.Hide, doNothing);
  };

  refInput: React.RefObject<TextInput> = createRef();
  translateY = new Animated.Value(0);

  onClearTextInput = () => this.refInput?.current?.clear();

  onBlurTextInput = () => this.refInput?.current?.blur();

  onChangeValue: (text: string) => void = text => {
    this.setState({ valueInput: text });
  };

  onSendMessage = async () => {
    const { valueInput } = this.state;
    const { submitEditing } = this.props;
    await submitEditing(valueInput);
    this.onClearTextInput();
  };

  onSubmitEditing = (
    event: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => {
    event.persist();
    const { submitEditing } = this.props;
    const { valueInput } = this.state;

    submitEditing(valueInput);
    this.onClearTextInput();
  };

  render() {
    const { valueInput } = this.state;

    return (
      <View style={styles.containerInput}>
        <View style={styles.justifyContentCenter}>
          <TextInput
            clearButtonMode="never"
            ref={this.refInput}
            onChangeText={this.onChangeValue}
            value={valueInput}
            onSubmitEditing={this.onSubmitEditing}
            placeholder={'Add a comment'}
            placeholderTextColor={Colors.white}
            style={styles.input}
          />
          <View style={styles.viewIcon}>
            <TouchableWithoutFeedback
              onPress={this.onSendMessage}
              hitSlop={HIT_SLOP.SIZE10}>
              <Icon name="send" size={CommonFonts.res22} color={Colors.white} />
            </TouchableWithoutFeedback>
          </View>
        </View>
        <Animated.View style={{ height: this.Height }} />
      </View>
    );
  }
}

export default memo(CustomInputMessage);

const styles = StyleSheet.create({
  containerInput: {
    paddingVertical: CommonHeights.res15,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.mainBackgroundColorComponent,
    paddingHorizontal: CommonWidths.baseSpaceHorizontal,
    paddingBottom: Screen.homeIndicatorHeight + CommonHeights.res15,
  },
  input: {
    width: '100%',
    paddingVertical: CommonHeights.res15,
    minHeight: CommonHeights.res50,
    backgroundColor: Colors.borderColorItem,
    borderRadius: 15,
    color: Colors.white,
    fontSize: CommonFonts.res17,
    fontWeight: '500',
    paddingLeft: CommonWidths.baseSpaceHorizontal,
    paddingRight: CommonWidths.baseSpaceHorizontal * 2,
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  viewIcon: {
    height: CommonFonts.res20,
    width: CommonFonts.res20,
    zIndex: 100,
    position: 'absolute',
    right: CommonHeights.res15,
  },
});

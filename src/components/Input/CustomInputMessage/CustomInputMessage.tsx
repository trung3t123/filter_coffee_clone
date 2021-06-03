import React, { memo, Component, createRef } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Colors from 'utils/colors';
import CommonWidths from 'theme/CommonWidths';
import CommonFonts from 'theme/CommonFonts';
import CommonHeights from 'theme/CommonHeights';
import { HIT_SLOP } from 'theme/touch';
import Screen from 'utils/screen';

type CustomInputMessageProps = {
  submitEditing: (text: string) => void;
  isInputReady?: boolean;
};

class CustomInputMessage extends Component<CustomInputMessageProps> {
  state = {
    valueInput: '',
  };

  refInput: React.RefObject<TextInput> = createRef();
  translateY = new Animated.Value(0);

  onClearTextInput = () => this.refInput?.current?.clear();

  onBlurTextInput = () => this.refInput?.current?.blur();

  onChangeValue: (text: string) => void = text => {
    this.setState({ valueInput: text });
  };

  onSendMessage = () => {
    const { valueInput } = this.state;
    const { submitEditing } = this.props;
    submitEditing(valueInput);
    this.onClearTextInput();
    this.onBlurTextInput();
  };

  onSubmitEditing = (
    event: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => {
    event.persist();
    const { submitEditing } = this.props;
    const { valueInput } = this.state;

    console.log(this.refInput);

    submitEditing(valueInput);
    this.onClearTextInput();
  };

  render() {
    const { valueInput } = this.state;
    const { isInputReady } = this.props;

    if (!isInputReady) {
      return null;
    }

    return (
      <View style={styles.containerInput}>
        <View style={styles.justifyContentCenter}>
          <TextInput
            clearButtonMode="never"
            ref={this.refInput}
            onBlur={this.onClearTextInput}
            blurOnSubmit
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

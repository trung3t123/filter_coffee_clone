import React, {
  useState,
  useMemo,
  memo,
  useRef,
  Component,
  createRef,
} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Colors from 'utils/colors';
import CommonWidths from 'theme/CommonWidths';
import CommonFonts from 'theme/CommonFonts';
import CommonHeights from 'theme/CommonHeights';
import { HIT_SLOP } from 'theme/touch';

type CustomInputMessageProps = {
  onSubmitEditing?: (
    event: NativeSyntheticEvent<TextInputSubmitEditingEventData> | string,
  ) => void;
};

// ({ onSubmitEditing }: CustomInputMessageProps) =>
class CustomInputMessage extends Component<CustomInputMessageProps> {
  constructor(props) {
    super(props);
    this.state = {
      valueInput: '',
    };
    this.refInput = createRef().current;
  }

  //  [valueInput, setValueInput] = useState<string>();

  onChangeValue: (text: string) => void = text => {
    this.setState({ valueInput: text });
  };

  onSendMessage = () => {
    const { valueInput } = this.state;
    const { onSubmitEditing } = this.props;
    onSubmitEditing(valueInput);
    this.refInput?.clear();
    this.refInput?.blur();
  };

  render() {
    const { valueInput } = this.state;
    return (
      <View style={styles.containerInput}>
        <View style={styles.justifyContentCenter}>
          <TextInput
            ref={ref => (this.refInput = ref)}
            onBlur={() => {
              this.refInput?.clear();
            }}
            clearButtonMode="always"
            blurOnSubmit
            onChangeText={this.onChangeValue}
            value={valueInput}
            onSubmitEditing={this.props.onSubmitEditing}
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
  },
  input: {
    width: '100%',
    paddingVertical: CommonHeights.res15,
    maxHeight: CommonHeights.res50,
    backgroundColor: 'rgba(50, 50, 53, 1) ',
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
    height: 20,
    width: 20,
    zIndex: 100,
    position: 'absolute',
    right: CommonHeights.res15,
  },
});

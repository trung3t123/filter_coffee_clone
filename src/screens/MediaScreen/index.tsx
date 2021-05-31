import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Screen from 'utils/screen';
import Header from 'components/Header';
import CommonFonts from 'theme/CommonFonts';

type PropTypes = {
  navigation: any;
};

const MediaScreen: React.FC<PropTypes> = ({}) => {
  // const dispatch: ActionDispatcher = useDispatch();

  return (
    <View
      style={{
        height: Screen.height,
        width: Screen.width,
        backgroundColor: 'white',
        position: 'relative',
      }}>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          // top: 10,
          flex: 1,
          backgroundColor: 'red',
        }}>
        <Header isAbsolute>
          <View />
          <Text
            style={{
              color: 'white',
              fontSize: CommonFonts.res22,
              fontWeight: '600',
            }}>
            Media
          </Text>
          <View />
        </Header>
        <Image
          resizeMode="stretch"
          source={require('../../../assets/Bitmap.png')}
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: 'black',
          }}
        />
      </View>
    </View>
  );
};

export default MediaScreen;

import React, { useState, useCallback, useMemo, memo } from 'react';
import { View, ActivityIndicator } from 'react-native';
import FastImage, { ImageStyle } from 'react-native-fast-image';

import styles from './styles';
import { doNothing } from 'constants/default-values';

type FastImageProp = {
  imageStyle: ImageStyle;
  uri?: string;
  resizeMode?: any;
  loadingImage?: boolean;
  source?: any;
};

const CacheImage = ({
  imageStyle,
  uri,
  resizeMode,
  loadingImage,
  source,
}: FastImageProp) => {
  const [isLoadingImage, setIsLoadingImage] = useState(false);

  const sourceImage = useMemo(() => {
    return uri ? { uri } : source ?? require('../../../../assets/Bitmap.png'); // test require default
  }, [uri, source]);

  const setImageLoading = useCallback(() => {
    setIsLoadingImage(!isLoadingImage);
  }, [setIsLoadingImage, isLoadingImage]);

  const onLoadImage = useCallback(() => {
    loadingImage ? setImageLoading() : doNothing();
  }, [loadingImage, setImageLoading]);

  return (
    <View>
      <FastImage
        resizeMode={resizeMode || 'cover'}
        style={imageStyle}
        source={sourceImage}
        onLoadStart={onLoadImage}
        onLoadEnd={onLoadImage}
      />
      {(isLoadingImage || loadingImage) && (
        <ActivityIndicator
          style={styles.positionAbsolute}
          color="white"
          size="large"
        />
      )}
    </View>
  );
};

export default memo(CacheImage);

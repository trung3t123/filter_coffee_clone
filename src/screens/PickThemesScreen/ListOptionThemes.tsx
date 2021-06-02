import React, { memo, useCallback } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { MOCK_OPTION_THEMES } from 'constants/mock-data';
import OptionTheme from 'components/OptionTheme';

type OptionThemeType = {
  id: string;
  nameIcon: string;
  title: string;
  value: string;
};

type ListOptionThemesType = {
  onPickOptionTheme: (value: OptionThemeType['value']) => void;
  optionThemePicked: OptionThemeType['value'][];
};

const ListOptionThemes: React.FC<ListOptionThemesType> = ({
  onPickOptionTheme,
  optionThemePicked,
}) => {
  const renderOptionTheme = useCallback(
    (option: OptionThemeType) => {
      const key = `${option.id}`;
      return (
        <View key={key}>
          <OptionTheme
            title={option.title}
            nameIcon={option.nameIcon}
            isActive={optionThemePicked.includes(option.value)}
            onPress={() => onPickOptionTheme(option.value)}
          />
        </View>
      );
    },
    [onPickOptionTheme, optionThemePicked],
  );

  return (
    <View style={styles.content}>
      {MOCK_OPTION_THEMES.map(renderOptionTheme)}
    </View>
  );
};

export default memo(ListOptionThemes);

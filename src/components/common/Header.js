import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  )
};

const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    elevation: 2,
  },

  textStyle: {
    fontSize: 20
  }
};

export { Header };
import React, {useEffect} from 'react';
import {View, AccessibilityInfo} from 'react-native';

const LimitlessView = (props) => {
  useEffect(() => {
    AccessibilityInfo.announceForAccessibility(props.announceOnMount);
  });
  return <View {...props} />;
};

export {LimitlessView};

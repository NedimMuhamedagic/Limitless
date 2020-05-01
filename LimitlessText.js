import React, {forwardRef} from 'react';
import {Text, Alert} from 'react-native';

const normalizeStringFromChildrenComponents = (unsafeChildren) => {
  let children = unsafeChildren;
  let data = '';

  if (typeof children === 'string') {
    data += ` ${children}`;
  }
  if (typeof children === 'object') {
    children = [children];
  }
  if (Array.isArray(children)) {
    children.forEach((c) => {
      if (typeof c === 'string') {
        data += ` ${c}`;
      } else {
        if (c.props.textBefore) {
          data += ` ${c.props.textBefore}`;
        }
        data += ` ${normalizeStringFromChildrenComponents(c.props.children)}`;
        if (c.props.textAfter) {
          data += ` ${c.props.textAfter}`;
        }
      }
    });
  }
  return data;
};
// accessibilityActions={[
//   {name: 'activate', label: 'open up the users profile'},
// ]}

const LimitlessText = forwardRef((props, ref) => {
  let data = normalizeStringFromChildrenComponents(props.children);

  return (
    <Text
      ref={ref}
      accessible
      accessibilityLabel={`${props.textBefore} ${data} ${props.textAfter}`}
      onPress={() => Alert.alert('Alert', 'opened the profile')}
      {...props}>
      {props.children}
    </Text>
  );
});
//   onAccessibilityAction={(event) => {
//     switch (event) {
//       case 'activate':
//         Alert.alert('OPENED!!!');
//         break;
//       default:
//         break;
//     }
//   }}>

export {LimitlessText};

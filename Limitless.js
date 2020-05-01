import React, {forwardRef} from 'react';
import {Text, Alert} from 'react-native';

const normalizeStringFromChildrenComponents = (unsafeChildren) => {
  let children = unsafeChildren;
  let data = '';
  console.log(children);
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
        console.log(c);
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

const Limitless = (LimitlesRefComponent) =>
  forwardRef((props, ref) => {
    let data = normalizeStringFromChildrenComponents(props.children);

    if (!data && props.title) {
      data = props.title;
    }
    if (!data && props.placeholder) {
      data = props.placeholder;
    }

    return (
      <LimitlesRefComponent
        ref={ref}
        accessible
        accessibilityLabel={`${props.textBefore} ${data} ${props.textAfter}`}
        onPress={() => Alert.alert('Alert', 'opened the profile')}
        {...props}>
        {props.children}
      </LimitlesRefComponent>
    );
  });

export {Limitless};

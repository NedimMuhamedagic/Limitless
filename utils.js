import {
  AccessibilityInfo,
  findNodeHandle,
  UIManager,
  Platform,
} from 'react-native';

export const announce = (string) =>
  AccessibilityInfo.announceForAccessibility(string);

const FOCUS_ON_VIEW = 8;

export const focusOnElement = (ref) => {
  if (!ref) {
    return;
  }
  const reactTag = findNodeHandle(ref);
  console.log('REFERENCE', reactTag);

  Platform.OS === 'android'
    ? UIManager.sendAccessibilityEvent(reactTag, FOCUS_ON_VIEW)
    : AccessibilityInfo.setAccessibilityFocus(reactTag);
};

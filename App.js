/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useRef} from 'react';
import {StatusBar, Text, Button, TextInput, Switch} from 'react-native';

import {LimitlessText} from './LimitlessText';
import {LimitlessView} from './LimitlessView';
import {announce, focusOnElement} from './utils';
import {Limitless} from './Limitless';

const VoiceButton = Limitless(Button);
const VoiceInput = Limitless(Switch);

const App = () => {
  const continueRef = useRef(null);
  // useEffect(() => {
  //   setTimeout(() => {
  //     focusOnElement(continueRef.current);
  //   }, 2000);
  // }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <VoiceInput
        textBefore="this is name edit box"
        textAfter="this will change your name"
      />
      {/* <LimitlessView announceOnMount="BACI TI SI KURAVA" /> */}
      {/* <LimitlessText style={{color: 'red'}} textBefore="one" textAfter="three">
        two
      </LimitlessText>
      <VoiceButton
        textBefore="press this"
        textAfter="Something"
        title="foobar"
      />
      <LimitlessText
        ref={continueRef}
        textBefore=""
        textAfter="Pressing this will submit your post">
        Continue
      </LimitlessText> */}
    </>
  );
};

export default App;

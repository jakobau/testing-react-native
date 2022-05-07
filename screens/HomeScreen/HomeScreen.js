// REACT IMPORTS
import React from 'react';
import { Text, View } from 'react-native';
import { StyleSheet, Button, SafeAreaView, Alert } from 'react-native';

// PHOTOEDITOR SDK IMPORTS
import {PESDK, PhotoEditorModal, Configuration} from 'react-native-photoeditorsdk';

// CHANGE TEST IMAGES HERE
import testImage1 from '../../images/example_image.jpg';
import testImage2 from '../../images/example_image2.png';

// EXPORTED FUNCTION
const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>AeroInspect React Native Testing Environment</Text>
        {/*<PhotoEditorModal visible={true} image={testImage1}/>*/}
        <Button
          title="Photo Editor Test"
          onPress={() => PESDK.openEditor(testImage2)}
        />
    </View>
  );
}

export default Home;
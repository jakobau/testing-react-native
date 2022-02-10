import React from 'react';
import { Text, View } from 'react-native';

import {PESDK, PhotoEditorModal, Configuration} from 'react-native-photoeditorsdk';

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Try editing me! 🎉
        <PhotoEditorModal visible={true} image={require('../../images/example_image.jpg')}/>
      </Text>
    </View>
  );
}

export default Home;
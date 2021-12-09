import React, { useState } from 'react';
import {
  Text, View, SafeAreaView, Image, StyleSheet, ScrollView,
} from 'react-native';
import styles from './Styles';

const ImageStyles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 400,
    height: 300,
    resizeMode: 'stretch',
  },
});

function Second({ navigation }) {
  const [titleText, setTitleText] = useState("Cat's Story");
  const bodyText = '  It is still editting';

  const onPressTitle = () => {
    setTitleText(titleText === "Cat's Story" ? 'He wanna have some sleep' : "Cat's Story");
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
          <Text style={styles.titleText} onPress={onPressTitle}>
            {'\n'}
            {titleText}
            {'\n'}
          </Text>
          <Text numberOfLines={5} onPress={() => navigation.goBack()}>{bodyText}</Text>

          <View style={ImageStyles.container}>
            <Image
              style={ImageStyles.stretch}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaEr2BdhKbghNC-HQ-sCxigv15Il0Bp0sK1g&usqp=CAU',
              }}
              fadeDuration={3000}
            />
          </View>
        </View>
        <Text style={styles.Text}>
          This is a angry coding cat.
          {'\n'}
          {'\n'}
          He is bad in calculus
          {'\n'}
          {'\n'}
          and
          {'\n'}
          {'\n'}
          He just wanna a day off.
          {'\n'}
          {'\n'}
          But his homework is too much to get a break.
          {'\n'}
          {'\n'}
          So it has benn three days that he can not sleep well
          {'\n'}
          {'\n'}
          RIP coding cat.
        </Text>
      </ScrollView>
    </SafeAreaView>

  );
}

export default Second;

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../helpers/Responsive';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.backArrowContainer}
            onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.backArrow}
              source={require('../../assets/images/backArrow.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <Image
            style={styles.logo}
            source={require('../../assets/images/item59.png')}
          />

          <TextInput
            style={[styles.textInput, {marginTop: 50}]}
            placeholder="first & last name"
          />
          <TextInput
            style={styles.textInput}
            placeholder="abc@gmail.com"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.textInput}
            placeholder="password"
            secureTextEntry={true}
          />

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('myaccount')}
            style={[styles.btn, {backgroundColor: '#f7931d'}]}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'CircularStd-Book',
                color: '#ffff',
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 80,
  },
  backArrow: {
    width: 20,
    height: 20,
  },
  backArrowContainer: {
    position: 'absolute',
    left: 20,
    marginTop: 20,
  },
  logo: {
    width: wp(40),
    height: wp(40),
  },
  textInput: {
    width: wp(80),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 10,
  },
  btn: {
    width: wp(34),
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 60,
  },
});

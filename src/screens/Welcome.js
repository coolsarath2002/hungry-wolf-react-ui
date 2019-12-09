import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../helpers/Responsive';

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/welcome.png')}
          style={{width: wp(90), height: wp(100), marginTop: 10}}
          resizeMode="contain"
        />
        <Text
          style={{
            fontSize: 30,
            fontFamily: 'CircularStd-Book',
            color: '#221e1f',
          }}>
          Welcome
        </Text>
        <View
          style={{
            width: wp(70),
            alignItems: 'center',
            padding: 10,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'CircularStd',
              textAlign: 'center',
              color: '#221e1f',
            }}>
            Homemade food and deliver to customer neighbour everyday
          </Text>
          <View style={{paddingVertical: 30}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('signup')}
              style={[styles.btn, {backgroundColor: '#f7931d'}]}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'CircularStd-Book',
                  color: '#ffff',
                }}>
                I am a Wolf (Customer)
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('signupchef')}
              // onPress={() => this.props.navigation.navigate('mapsearch')}
              style={[styles.btn, {backgroundColor: '#c7e9c7', marginTop: 10}]}>
              <Text
                style={{
                  color: '#5fc05f',
                  fontSize: 14,
                  fontFamily: 'CircularStd-Book',
                }}>
                I am a Bunny (Chef)
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  btn: {
    width: wp(50),
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
  },
});

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';

export default class OrderInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={{width: '60%', paddingVertical: 20, paddingLeft: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/icons/calendar.png')}
              style={{width: 12, height: 12, marginRight: 5}}
            />
            <Text style={styles.description}>2019-09-22 09:30:09</Text>
          </View>

          <Text style={[styles.label, {marginTop: 5}]}>Chicken Meals</Text>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/icons/status1.png')}
              style={{width: 12, height: 12, marginRight: 5, marginTop: 5}}
            />
            <Text style={[styles.description, {marginTop: 5}]}>
              Chicken 65 (6 peices)
            </Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/icons/status1.png')}
              style={{width: 12, height: 12, marginRight: 5, marginTop: 5}}
            />
            <Text style={[styles.description, {marginTop: 5}]}>
              White Rice (2 cups)
            </Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/icons/status2.png')}
              style={{width: 12, height: 12, marginRight: 5, marginTop: 5}}
            />
            <Text style={[styles.description, {marginTop: 5}]}>
              Sambar (30 g)
            </Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('../../assets/icons/status3.png')}
              style={{width: 12, height: 12, marginRight: 5, marginTop: 5}}
            />
            <Text style={[styles.description, {marginTop: 5}]}>
              Curd (15 g)
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '85%',
            }}></View>
        </View>

        <View style={{width: '40%', paddingTop: 44}}>
          <Text style={styles.label}>Quantitiy</Text>
          <Text style={[styles.description, {marginTop: 3}]}>1</Text>
          <Text style={[styles.label, {marginTop: 8}]}>Price</Text>
          <Text style={[styles.description, {marginTop: 3}]}>Rs 75</Text>

          <TouchableOpacity
            onPress={() => null}
            style={{
              borderBottomWidth: 2,
              borderColor: '#5fc05f',
              width: 44,
              marginTop: 2,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'CircularStd',
                color: '#5fc05f',
              }}>
              Details
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    color: '#494949',
    fontFamily: 'CircularStd-Book',
  },
  description: {
    color: '#c0c0c0',
    fontSize: 14,
    fontFamily: 'CircularStd',
  },
});

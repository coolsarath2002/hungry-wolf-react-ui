import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Component} from 'react';

import NumericInput from 'react-native-numeric-input';

export default class OrderSummaryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  render() {
    return (
      <View style={{flex: 1, paddingVertical: 10, paddingHorizontal: 16}}>
        <View style={{paddingTop: 5}}>
          <View style={{paddingHorizontal: 20}}>
            <Text style={styles.label}>Chicken Meals</Text>

            <View style={styles.iconContainer}>
              <Image
                source={require('../../assets/icons/status1.png')}
                style={styles.statusIcon}
              />
              <Text style={[styles.description, {marginTop: 5}]}>
                Chicken 65 (6 peices)
              </Text>
            </View>

            <View style={styles.iconContainer}>
              <Image
                source={require('../../assets/icons/status1.png')}
                style={styles.statusIcon}
              />
              <Text style={[styles.description, {marginTop: 5}]}>
                White Rice (2 cups)
              </Text>
            </View>

            <View style={styles.iconContainer}>
              <Image
                source={require('../../assets/icons/status2.png')}
                style={styles.statusIcon}
              />
              <Text style={[styles.description, {marginTop: 5}]}>
                Sambar (30 g)
              </Text>
            </View>

            <View style={styles.iconContainer}>
              <Image
                source={require('../../assets/icons/status3.png')}
                style={styles.statusIcon}
              />
              <Text style={[styles.description, {marginTop: 5}]}>
                Curd (15 g)
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 15,
              width: '100%',
              paddingHorizontal: 10,
            }}>
            <Text style={styles.label}>Quantitiy</Text>
            <NumericInput
              value={this.state.value}
              onChange={value => this.setState({value})}
              onLimitReached={(isMax, msg) => console.log(isMax, msg)}
              totalWidth={70}
              totalHeight={22}
              iconSize={40}
              step={1}
              minValue={0}
              valueType="real"
              rounded
              // textColor="#B0228C"
              iconStyle={{color: '#5fc05f'}}
              rightButtonBackgroundColor="#c7e9c7"
              leftButtonBackgroundColor="#c7e9c7"
            />
            <TouchableOpacity
              onPress={() => null}
              style={{
                borderBottomWidth: 2,
                borderColor: 'red',
                marginTop: 2,
              }}>
              <Text style={[styles.label, {color: 'red'}]}>Delete</Text>
            </TouchableOpacity>
            <Text style={[styles.label, {fontSize: 22}]}>Rs 75</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: '#494949',
    fontFamily: 'CircularStd-Book',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    width: '20%',
    height: 35,
    marginVertical: 5,
  },
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
  btn: {
    width: '90%',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 4,
    marginTop: 15,
    backgroundColor: '#c7e9c7',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIcon: {width: 12, height: 12, marginRight: 5, marginTop: 5},
});

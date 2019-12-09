import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../helpers/Responsive';

import OrderInfo from '../components/OrderInfo';

export default class OrderStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'In Progress',
      isActive: false,
      isActive1: true,
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{height: 45, flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.backArrowContainer}
            onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.backArrow}
              source={require('../../assets/images/backArrow.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>I'm Blessed</Text>
        </View>
        <View style={styles.header}>
          <Text style={styles.title}>Order # 1234345-345345</Text>
        </View>

        <OrderInfo />

        <ImageBackground
          source={require('../../assets/images/statusback.png')}
          style={{
            width: '100%',
            height: hp(40),
            position: 'absolute',
            bottom: -40,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View
              style={[
                styles.stepContainer,
                {
                  backgroundColor: this.state.isActive ? '#fff' : 'transparent',
                },
              ]}>
              <View
                style={[
                  styles.step,
                  {
                    backgroundColor: this.state.isActive
                      ? '#fff2af'
                      : '#f4f4f4',
                  },
                ]}>
                <Text
                  style={[styles.description, {color: 'black', fontSize: 12}]}>
                  9:30
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.stepContainer,
                {
                  backgroundColor: this.state.isActive ? '#fff' : 'transparent',
                },
              ]}>
              <View
                style={[
                  styles.step,
                  {
                    backgroundColor: this.state.isActive
                      ? '#fff2af'
                      : '#f4f4f4',
                  },
                ]}>
                <Text
                  style={[styles.description, {color: 'black', fontSize: 12}]}>
                  9:30
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.stepContainer,
                {
                  backgroundColor: this.state.isActive1
                    ? '#fff'
                    : 'transparent',
                },
              ]}>
              <View
                style={[
                  styles.step,
                  {
                    backgroundColor: this.state.isActive1
                      ? '#fff2af'
                      : '#f4f4f4',
                  },
                ]}>
                <Text
                  style={[styles.description, {color: 'black', fontSize: 12}]}>
                  9:30
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.stepContainer,
                {
                  backgroundColor: this.state.isActive ? '#fff' : 'transparent',
                },
              ]}>
              <View
                style={[
                  styles.step,
                  {
                    backgroundColor: this.state.isActive
                      ? '#fff2af'
                      : '#f4f4f4',
                  },
                ]}>
                <Text
                  style={[styles.description, {color: 'black', fontSize: 12}]}>
                  9:30
                </Text>
              </View>
            </View>
          </View>
          <Text
            style={[
              styles.label,
              {marginTop: 5, fontSize: 18, marginLeft: 20, marginTop: 60},
            ]}>
            Order Status
          </Text>
          <TouchableOpacity
            onPress={() => null}
            style={[
              styles.btn,
              {
                backgroundColor:
                  this.state.status == 'Delivered' ? '#4bc076' : '#fff2af',
              },
            ]}>
            <Text
              style={[
                styles.btnText,
                {color: this.state.status == 'Delivered' ? '#fff' : '#caa700'},
              ]}>
              In Progress
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backArrow: {
    width: 20,
    height: 20,
  },
  backArrowContainer: {
    marginLeft: 20,
    marginRight: 10,
  },
  header: {
    width: wp(100),
    height: 45,
    backgroundColor: '#f3f3f3',
    borderTopWidth: 0.5,
    borderBottomWidth: 1,
    borderColor: '#999',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: '#4bc076',
    fontFamily: 'CircularStd-Book',
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
    width: wp(23),
    paddingVertical: 6,
    alignItems: 'center',
    borderRadius: 20,
    marginLeft: 20,
    marginTop: 10,
  },
  btnText: {
    fontSize: 12,
    fontFamily: 'CircularStd-Book',
  },
  stepContainer: {
    width: wp(14),
    height: wp(14),
    borderRadius: wp(28),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -wp(7),
  },
  step: {
    width: wp(11),
    height: wp(11),
    borderRadius: wp(22),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

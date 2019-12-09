import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../helpers/Responsive';

import {Icon} from 'react-native-elements';
import Modal from 'react-native-modal';
import NumericInput from 'react-native-numeric-input';
import React from 'react';

class OrderModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  render() {
    return (
      <Modal
        isVisible={this.props.visible}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropColor="black"
        animationInTiming={250}
        animationOutTiming={250}
        backdropOpacity={0}>
        <View
          style={{
            alignSelf: 'center',
            position: 'absolute',
            bottom: -20,
            backgroundColor: '#fff',
          }}>
          <View style={styles.popUpTop}>
            <Text style={styles.title}>Chicken Meals</Text>

            <TouchableOpacity
              onPress={this.props.onPress}
              style={{marginRight: wp(1)}}>
              <Icon name="close" size={22} color={'grey'} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 0.5,
              width: '100%',
              backgroundColor: '#a5adb6',
              marginTop: 5,
            }}></View>

          <View style={styles.popUpContainer}>
            <View style={{width: '50%', paddingBottom: 20}}>
              <Text style={styles.label}>Menu Details</Text>

              <Text style={[styles.description, {marginTop: 5}]}>
                Chicken 65 (6 peices)
              </Text>

              <Text style={[styles.description, {marginTop: 5}]}>
                White Rice (2 cups)
              </Text>

              <Text style={[styles.description, {marginTop: 5}]}>
                Sambar (30 g)
              </Text>

              <Text style={[styles.description, {marginTop: 5}]}>
                Curd (15 g)
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 15,
                  width: '85%',
                }}>
                <Text style={styles.label}>Quantitiy</Text>
                <Text style={styles.label}>Price</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '85%',
                }}>
                {/* <Text style={styles.description}>1</Text> */}
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
                <Text style={styles.description}>Rs 75</Text>
              </View>
            </View>

            <View style={{width: '50%', marginLeft: 20}}>
              <Text style={styles.label}>Order Close By Time</Text>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../../assets/icons/clock.png')}
                  style={{width: 12, height: 12, marginRight: 5}}
                />
                <Text style={styles.description}>45 min left</Text>
              </View>

              <Text style={[styles.label, {marginTop: 3}]}>
                Time Left To Order
              </Text>

              <Text style={styles.description}>24 min</Text>

              <Text style={[styles.label, {marginTop: 3}]}>Delivery Time</Text>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../../assets/icons/clock.png')}
                  style={{width: 12, height: 12, marginRight: 5}}
                />
                <Text style={styles.description}>16 min</Text>
              </View>

              <TouchableOpacity onPress={() => null} style={styles.btn}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: 'CircularStd-Book',
                    color: '#5fc05f',
                  }}>
                  Place Order
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default OrderModal;

const styles = StyleSheet.create({
  popUpContainer: {
    width: wp(100),
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
  },
  popUpTop: {
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    height: hp(7),
    width: wp(100),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    flexDirection: 'row',
    paddingTop: 10,
  },
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
});

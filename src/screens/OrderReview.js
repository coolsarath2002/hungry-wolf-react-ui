import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../helpers/Responsive';

import {AirbnbRating} from 'react-native-elements';
import OrderInfo from '../components/OrderInfo';

export default class OrderReview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text
          style={[
            styles.label,
            {alignSelf: 'center', paddingBottom: 10, fontSize: 22},
          ]}>
          Review Order
        </Text>
        <View style={styles.header}>
          <Text style={styles.title}>Order # 1234345-345345</Text>
        </View>
        <OrderInfo />
        <View style={{alignItems: 'flex-start', paddingHorizontal: 16}}>
          <Text style={[styles.label, {paddingTop: 0}]}>Quality</Text>
          <AirbnbRating showRating={false} size={16} />

          <Text style={styles.label}>Quantity</Text>
          <AirbnbRating showRating={false} size={16} />

          <Text style={styles.label}>Delivery</Text>
          <AirbnbRating showRating={false} size={16} />

          <Text style={styles.label}>Flavor</Text>
          <AirbnbRating showRating={false} size={16} />

          <Text style={styles.label}>Packaging</Text>
          <AirbnbRating showRating={false} size={16} />

          <Text style={styles.label}>One Word Review</Text>
          <TextInput style={styles.input} placeholder={'write here...'} />

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('addmenu')}
            style={styles.btn}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'CircularStd-Book',
                color: '#5fc05f',
              }}>
              Submit Review
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
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
    paddingTop: 8,
  },
  input: {
    width: wp(90),
    height: 40,
    borderWidth: 1,
    borderColor: '#494949',
    alignSelf: 'center',
    marginTop: 4,
  },
  btn: {
    width: wp(40),
    paddingVertical: 10,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 4,
    marginTop: 15,
    backgroundColor: '#c7e9c7',
  },
});

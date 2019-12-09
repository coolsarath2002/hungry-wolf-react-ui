import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../helpers/Responsive';

import {Divider} from 'react-native-elements';
import OrderSummaryItem from '../components/OrderSummaryItem';

const data = [{}, {}, {}, {}, {}];

export default class OrderSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.label, {alignSelf: 'center', paddingTop: 8}]}>
          Order Confirmation
        </Text>

        <View style={styles.header}>
          <Text style={styles.title}>Order Summary</Text>
        </View>

        <View style={{flex: 1}}>
          <ScrollView>
            {data.map((item, index) => (
              <>
                <OrderSummaryItem />
                <Divider />
              </>
            ))}

            <View style={{paddingHorizontal: 16, paddingTop: 8}}>
              <Text style={styles.label}>Total Order Cost : 150</Text>

              <Text style={[styles.label1, {marginTop: 14}]}>Billing Info</Text>
              <Divider />
              <Text style={[styles.label2, {marginTop: 4}]}>
                Cash on Delivery
              </Text>

              <Text style={[styles.label1, {marginTop: 14}]}>
                Delivery/Pickup Location
              </Text>
              <Divider />
              <Text style={[styles.label2, {marginTop: 4}]}>
                123 Main Street
              </Text>
              <Text style={styles.label2}>Unit 24</Text>
              <Text style={styles.label2}>Zipcode 890765</Text>
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
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1},
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
    color: '#494949',
    fontFamily: 'CircularStd-Book',
    paddingBottom: 10,
    fontSize: 22,
  },
  label1: {
    fontSize: 18,
    color: '#494949',
    fontFamily: 'CircularStd-Book',
    paddingBottom: 4,
  },
  label2: {
    fontFamily: 'CircularStd-Bold',
    fontSize: 16,
    color: '#494949',
  },
  btn: {
    width: '80%',
    paddingVertical: 10,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 4,
    marginTop: 15,
    backgroundColor: '#c7e9c7',
    marginBottom: 20,
  },
});

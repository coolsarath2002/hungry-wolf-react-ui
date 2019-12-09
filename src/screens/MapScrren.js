import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {Component} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from '../helpers/Responsive';

import {Card} from 'react-native-elements';
import MapView from 'react-native-maps';
import OrderModal from '../components/OrderModal';

const list = [
  {lat: 31.450597, lng: 74.326327},
  {lat: 31.487897, lng: 74.305347},
  {lat: 31.480397, lng: 74.329347},
  {lat: 31.465397, lng: 74.316347},
];
const list1 = [
  {lat: 31.460597, lng: 74.306327},
  {lat: 31.477897, lng: 74.305347},
  {lat: 31.497397, lng: 74.329347},
];

class MapSearch extends Component {
  state = {
    currentLatitude: 31.480497,
    currentLongitude: 74.316347,

    shopsData: [],
    ShopId: '',

    LATLNG: {
      latitude: 31.46791,
      longitude: 74.311069,
    },

    orderModal: false,
  };

  toggleOrderModal = () => {
    this.setState({orderModal: !this.state.orderModal});
  };

  onMarkerPress = () => {};

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <MapView
          style={{height: '100%', width: '100%'}}
          region={{
            latitude: this.state.currentLatitude,
            longitude: this.state.currentLongitude,
            latitudeDelta: 0.065,
            longitudeDelta: 0.0621,
          }}>
          <MapView.Marker
            coordinate={{
              latitude: this.state.currentLatitude,
              longitude: this.state.currentLongitude,
            }}
            title={'marker.title'}
            description={'marker.description'}
            animation={true}>
            <View
              style={{
                backgroundColor: '#4bc076',
                width: wp(10),
                height: wp(10),
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: wp(5),
              }}>
              <Image
                source={require('../../assets/images/logo.png')}
                resizeMode={'contain'}
                style={{width: wp(6), height: wp(6)}}
              />
            </View>
          </MapView.Marker>

          {list &&
            list.map((item, index) => (
              <MapView.Marker
                coordinate={{
                  latitude: parseFloat(item.lat),
                  longitude: parseFloat(item.lng),
                }}
                title={'abc'}
                description={''}
                animation={true}
                //   onPress={e => {
                //     e.stopPropagation();
                //     this.onMarkerPress(shop.ShopId, shop.ImageUrl);
                //   }}
              >
                <TouchableOpacity
                //   style={styles.artistsOnMap}
                // onPress={async () =>
                //   await this.setState({ShopId: shop.ShopId})
                // }
                >
                  <Image
                    source={require('../../assets/icons/rabit.png')}
                    style={{
                      width: wp(12),
                      height: wp(25),
                      // borderRadius: wp(20),
                    }}
                    resizeMode="cover"
                  />
                </TouchableOpacity>
              </MapView.Marker>
            ))}

          {list1 &&
            list1.map((item, index) => (
              <MapView.Marker
                coordinate={{
                  latitude: parseFloat(item.lat),
                  longitude: parseFloat(item.lng),
                }}
                title={'abc'}
                description={''}
                animation={true}>
                <TouchableOpacity style={styles.numOnMap}>
                  <View style={styles.numOnMapPink}>
                    <Text style={{color: '#fff', fontWeight: 'bold'}}>
                      {index + 1}
                    </Text>
                  </View>
                </TouchableOpacity>
              </MapView.Marker>
            ))}
        </MapView>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search..."
            style={{height: 45, width: wp(80)}}
          />
          <Image
            source={require('../../assets/icons/search.png')}
            style={{width: 20, height: 20}}
          />
        </View>
        <Card containerStyle={styles.bottomCard}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={this.toggleOrderModal}>
              <Image
                source={require('../../assets/icons/menu.png')}
                style={{width: wp(8), height: wp(7)}}
              />
            </TouchableOpacity>
            <View
              style={{
                width: 1,
                height: wp(7),
                marginHorizontal: 10,
                backgroundColor: '#999',
              }}></View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('orderlist')}>
              <Image
                source={require('../../assets/icons/map.png')}
                style={{width: wp(8), height: wp(7)}}
              />
            </TouchableOpacity>

            <OrderModal
              visible={this.state.orderModal}
              onPress={this.toggleOrderModal}
            />
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  numOnMap: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(20),
    // backgroundColor: '#facdd2',
    backgroundColor: '#fff',

    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#8f8f8f',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    elevation: 2,
    shadowRadius: 2,
  },
  numOnMapPink: {
    width: wp(6),
    height: wp(6),
    borderRadius: wp(12),
    backgroundColor: '#facdd2',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#8f8f8f',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    elevation: 2,
    shadowRadius: 2,
  },
  searchContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    position: 'absolute',
    top: 40,
    zIndex: 10,
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 5,
    elevation: 2,
  },
  bottomCard: {
    position: 'absolute',
    zIndex: 10,
    paddingVertical: 7,
    borderRadius: 5,
    bottom: 20,
  },
});

export default MapSearch;

import { View, Text, SafeAreaView, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFavourites, removeFavourites } from '../redux/actions/FavouritesActions';
import { Colors } from '../resources/Colors';
import { AppStrings } from '../resources/Strings';
import { Device } from '../utils/Device';
import LinearGradient from 'react-native-linear-gradient';

type Props = {}

const Favorite = (props: Props) => {
    const dispatch = useDispatch();
    const favourite = useSelector((store) => store.favourites.list);    
    function removeFromFavourite(item:any,index:number) {
        dispatch(removeFavourites(item));
    }
    const renderItem = ({ item, index }: any) => {
        return <LinearGradient start={{ x: 1.0, y: 0.5 }} end={{ x: 0.5, y: 1.0 }}
            colors={[Colors.skyDark, Colors.sky]} style={{ margin: 5, marginStart: 30, marginEnd: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 10, borderWidth: 1, flexDirection: 'row', padding: 5, backgroundColor: Colors.sky }}>
            <Image source={{ uri: item.picture.thumbnail }} style={{position:'absolute',marginStart:10, height: 90, width: 90, borderRadius: 45, start: -35, borderWidth: 1, borderColor: Colors.black }} />
            <View style={{ flex: 8,marginStart:60 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={{ uri: 'name' }} style={{ height: 40, width: 40 }} />
                    <Text style={{ color: Colors.black, fontWeight: '700', fontSize: 16,textAlignVertical: 'center' }}>
                        {item.name.title}.{item.name.first} {item.name.last}
                    </Text>
                </View>
                <View style={styles.subImageViewStyle}>
                    <Image source={{ uri: 'age' }} style={styles.subImageStyle} />
                    <Text style={{ color: Colors.black }}>{AppStrings.Age}{item.dob.age}</Text>
                </View>
                <View style={styles.subImageViewStyle}>
                    <Image source={{ uri: 'email' }} style={styles.subImageStyle} />
                    <Text style={{ color: Colors.black }}>{item.email.trim()}</Text>
                </View>
                <View style={styles.subImageViewStyle}>
                    <Image source={{ uri: 'phone' }} style={styles.subImageStyle} />
                    <Text style={{ color: Colors.black }}>{item.phone}</Text>
                </View>
                <View style={styles.subImageViewStyle}>
                    <Image source={{ uri: 'address' }} style={styles.subImageStyle} />
                    <Text style={{ color: Colors.black }}>{item.location.state},{item.location.country}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => removeFromFavourite(item, index)} style={{ flex: 1, margin: 10, alignSelf: 'flex-start', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={{ uri: 'starfilled' }} style={{ height: 30, width: 30 ,tintColor:Colors.gold}} />
            </TouchableOpacity>
        </LinearGradient>
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                keyExtractor={(item, index) => item.id?.value + index}
                data={favourite}
                ListFooterComponent={<View style={{height:150}}/>}
                ListEmptyComponent={<View style={{height:Device.height,justifyContent:'center',alignItems:'center'}}>
                    <Image source={{uri:'nodata'}} style={{height:Device.height*0.3,width:Device.height*0.3}}/>
                    <Text style={{color:Colors.skyDark,textAlign:'center',fontSize:16,fontWeight:'500',padding:40}}>{AppStrings.OppsNoFav}</Text>
                </View>}
                renderItem={renderItem} />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create(
    {
        subImageStyle: { height: 20, width: 20, marginStart: 10, marginVertical: 2.5, marginEnd: 10 },
        subImageViewStyle: { flexDirection: 'row' }
    })
export default Favorite
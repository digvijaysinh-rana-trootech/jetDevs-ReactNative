import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, RefreshControl, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useDispatch } from 'react-redux'
import { addFavourites } from '../redux/actions/FavouritesActions'
import { Colors } from '../resources/Colors'
import { AppStrings } from '../resources/Strings'
import { Device } from '../utils/Device'

type Props = {}
const baseURL = 'https://randomuser.me/api/'
const Home = (props: Props) => {
    const dispatch = useDispatch();
    const [usersData, setusersData] = useState<any[]>([])
    const [refreshing, setrefreshing] = useState(false)
    const [initRefreshing, setinitRefreshing] = useState(true)
    const [page, setpage] = useState(10)
    useEffect(() => {
        getUsers()
        return () => { }
    }, [])
    useEffect(() => {
        getUsersWithPagination()
        return () => { }
    }, [page])

    function getUsers() {
        axios.get(baseURL + "?results=" + page).then((response) => {
            console.log(response.data);
            setusersData(response.data.results)
            setinitRefreshing(false)
            setrefreshing(false)
        });
    }
    function getUsersWithPagination() {
        axios.get(baseURL + "?results=" + page).then((response) => {
            console.log(response.data);
            setusersData(users => [...users, ...response.data.results]);
        });
    }
    function addToFavourite(item: any, index: number) {
        dispatch(addFavourites(item));
    }
    const renderItem = ({ item, index }: any) => {
        return <LinearGradient start={{ x: 1.0, y: 0.5 }} end={{ x: 0.5, y: 1.0 }}
            colors={[Colors.skyDark, Colors.sky]} style={{ margin: 5, marginStart: 30, marginEnd: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 10, borderWidth: 1, flexDirection: 'row', padding: 5, backgroundColor: Colors.sky }}>
            <Image source={{ uri: item.picture.thumbnail }} style={{ position: 'absolute', marginStart: 10, height: 90, width: 90, borderRadius: 45, start: -35, borderWidth: 1, borderColor: Colors.black }} />
            <View style={{ flex: 8, marginStart: 60 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={{ uri: 'name' }} style={{ height: 40, width: 40 }} />
                    <Text style={{ color: Colors.black, fontWeight: '700', fontSize: 16, textAlignVertical: 'center' }}>
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
            <TouchableOpacity onPress={() => addToFavourite(item, index)} style={{ flex: 1, margin: 10, alignSelf: 'flex-start', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={{ uri: 'star' }} style={{ height: 30, width: 30 }} />
            </TouchableOpacity>
        </LinearGradient>
    }
    function fetchList() {
        setpage(value => value + 10)
    }

    function onEndReached() {
        fetchList();
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                keyExtractor={(item, index) => (item?.id?.value) ? item.id.value : Math.random()}
                data={usersData}
                ListEmptyComponent={<View style={{ height: Device.height, width: Device.width, alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={require('../gifs/ripple.gif')}
                        style={{ width: Device.width * 0.7, height: Device.width * 0.7, alignSelf: 'center', display: refreshing ? 'none' : 'flex' }}
                    />
                    <Text style={{ color: Colors.skyDark, fontSize: 30 }}>{AppStrings.Loading}</Text>
                </View>}
                renderItem={renderItem}
                onEndReached={() => onEndReached()}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={() => {
                            setrefreshing(true)
                            getUsers()
                        }
                        }
                    />
                }
                ListFooterComponent={
                    initRefreshing ?
                        null : <Image
                            source={require('../gifs/loader.gif')}
                            style={{ width: 100, height: 100, marginBottom: 100, alignSelf: 'center', display: refreshing ? 'none' : 'flex' }}
                        />
                }
                onEndReachedThreshold={0.3} />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create(
    {
        subImageStyle: { height: 20, width: 20, marginStart: 10, marginVertical: 2.5, marginEnd: 10 },
        subImageViewStyle: { flexDirection: 'row' }
    })
export default Home
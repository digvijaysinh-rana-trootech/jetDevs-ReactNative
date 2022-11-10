import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { addFavourites } from '../redux/actions/FavouritesActions'
import { Colors } from '../resources/Colors'
import { AppStrings } from '../resources/Strings'

type Props = {}
const baseURL = 'https://randomuser.me/api/'
const Home = (props: Props) => {
    const dispatch = useDispatch();
    const [usersData, setusersData] = useState()
    useEffect(() => {
        getUsers()
        return () => { }
    }, [])
    function getUsers() {
        axios.get(baseURL + "?results=10").then((response) => {
            console.log(response.data);
            setusersData(response.data.results)
        });
    }
    function addToFavourite(item: any, index: number) {
        dispatch(addFavourites(item));
    }
    const renderItem = ({ item, index }: any) => {
        return <View style={{ margin: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, borderWidth: 1, flexDirection: 'row', padding: 10, backgroundColor: Colors.sky }}>
            <Image source={{ uri: item.picture.thumbnail }} style={{ height: 50, width: 50, borderRadius: 25 }} />
            <View style={{ flex: 9, margin: 10 }}>
                <Text style={{ color: Colors.skyDark }}>{AppStrings.Name}{item.name.title}.{item.name.first} {item.name.last}</Text>
                <Text style={{ color: Colors.skyDark }}>{AppStrings.Age}{item.dob.age}</Text>
                <Text style={{ color: Colors.skyDark }}>{AppStrings.Mail}{item.email.trim()}</Text>
                <Text style={{ color: Colors.skyDark }}>{AppStrings.Phone}{item.phone}</Text>
                <Text style={{ color: Colors.skyDark }}>{AppStrings.Address}{item.location.street.number}, {item.location.street.name}, {item.location.city}, {item.location.state}, {item.location.country}</Text>
            </View>
            <TouchableOpacity onPress={() => addToFavourite(item, index)} style={{ flex: 1, margin: 10, alignSelf: 'flex-start', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={{ uri: 'star' }} style={{ height: 30, width: 30 }} />
            </TouchableOpacity>
        </View>
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                keyExtractor={(item, index) => item.id.value + index}
                data={usersData}
                renderItem={renderItem} />
        </SafeAreaView>
    )
}

export default Home
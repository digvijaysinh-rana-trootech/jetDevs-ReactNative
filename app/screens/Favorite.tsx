import { View, Text, SafeAreaView, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFavourites } from '../redux/actions/FavouritesActions';
import { Colors } from '../resources/Colors';
import { AppStrings } from '../resources/Strings';

type Props = {}

const Favorite = (props: Props) => {
    const dispatch = useDispatch();
    const favourite = useSelector((store) => store.favourites.list);

    const handleIncrement = () => {
        dispatch(addFavourites("a" + Math.random()));
    };
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
            <TouchableOpacity onPress={() => {//addToFavourite(item, index)
            }
            } style={{ flex: 1, margin: 10, alignSelf: 'flex-start', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={{ uri: 'favourite' }} style={{ height: 20, width: 20 }} />
            </TouchableOpacity>
        </View>
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                keyExtractor={(item, index) => item.id.value + index}
                data={favourite}
                renderItem={renderItem} />
        </SafeAreaView>
    )
}

export default Favorite
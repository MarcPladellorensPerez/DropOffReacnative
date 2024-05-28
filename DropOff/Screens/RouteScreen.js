import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Route from '../components/Route';
import FirebaseFetchUtils from '../fireBaseFetchUtils';
import Header from '../components/Header';
import logo from '../img/logoDropOff.png';
import { LIGHT_GRAY, ORANGE } from '../colors/colors';

const RouteScreen = ({ navigation }) => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const fetchUtils = new FirebaseFetchUtils();
        const userLoginId = 'E4fhtfPhFcagyZf9Gb3dOXsZean2'; // Reemplaza con tu ID de inicio de sesión de usuario
        const routesIds = await fetchUtils.fetchBusinessData(userLoginId, 'routes');
        console.log('Routes IDs:', routesIds); // Imprime los IDs de las rutas
        const fetchedRoutes = await fetchUtils.fetchFieldData(routesIds, 'Routes');
        console.log('Fetched Routes:', fetchedRoutes); // Imprime las rutas obtenidas
        setRoutes(fetchedRoutes.itemList);
      } catch (error) {
        console.error('Error fetching Routes:', error);
      }
    };

    fetchRoutes();
  }, []);

  const handleRoutePress = (route) => {
    navigation.navigate('EditRouteScreen', { route });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleRoutePress(item)}>
      <View style={styles.routeContainer}>
        <Route route={item} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Routes List</Text>
      <FlatList
        data={routes}
        renderItem={renderItem}
        keyExtractor={item => item.id} // Asegúrate de que cada ruta tenga una propiedad `id`
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: LIGHT_GRAY,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    marginTop:60,
    color: '#333',
  },
  listContent: {
    paddingBottom: 16,
    width: '100%',
  },
  routeContainer: {
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginTop: 10,
  },
});

export default RouteScreen;

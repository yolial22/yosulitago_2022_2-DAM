import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import PantallaPrincipalInterna from './PantallaPrincipalInterna';

const Stack = createStackNavigator();

const PantallaPrincipal = () => (
        <Stack.Navigator options="false">
            <Stack.Screen name="Página Principal Interna" component={PantallaPrincipalInterna} />
        </Stack.Navigator>
);

export default PantallaPrincipal;
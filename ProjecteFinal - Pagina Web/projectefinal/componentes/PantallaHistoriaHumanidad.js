import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import PantallaHistoriaHumanidadInterna from './PantallaHistoriaHumanidadInterna';

import PantallaHistoriaEgipto from './PantallaHistoriaEgipto';

import PantallaHistoriaGrecia from './PantallaHistoriaGrecia';

import PantallaHistoriaLatinoAmerica from './PantallaHistoriaLatinoAmerica';

import PantallaHistoriaNordica from './PantallaHistoriaNordica';

const Stack = createStackNavigator();
 
const PantallaHistoriaHumanidad = () => (
        <Stack.Navigator options="false">
            <Stack.Screen name={'Historia de la Humanidad Interna'} component={PantallaHistoriaHumanidadInterna} />
            <Stack.Screen name={'Historia de Egipto'} component={PantallaHistoriaEgipto} />
            <Stack.Screen name={'Historia de Grecia'} component={PantallaHistoriaGrecia} />
            <Stack.Screen name={'Historia de LatinoAmérica'} component={PantallaHistoriaLatinoAmerica} />
            <Stack.Screen name={'Historia Nórdica'} component={PantallaHistoriaNordica} />
        </Stack.Navigator>
);

export default PantallaHistoriaHumanidad;
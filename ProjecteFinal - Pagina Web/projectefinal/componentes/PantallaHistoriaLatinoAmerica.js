import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import PantallaHistoriaLatinoAmericaInterna from './PantallaHistoriaLatinoAmericaInterna';

import PantallaHistoriaAzteca from './PantallaHistoriaAzteca';

import PantallaHistoriaInca from './PantallaHistoriaInca';

import PantallaHistoriaMaya from './PantallaHistoriaMaya';

const Stack = createStackNavigator();
 
const PantallaHistoriaLatinoAmerica = () => (
        <Stack.Navigator options="false">
            <Stack.Screen name={'Historia de LatinoAmérica Interna'} component={PantallaHistoriaLatinoAmericaInterna} />
            <Stack.Screen name={'Historia Azteca'} component={PantallaHistoriaAzteca} />
            <Stack.Screen name={'Historia Inca'} component={PantallaHistoriaInca} />
            <Stack.Screen name={'Historia Maya'} component={PantallaHistoriaMaya} />
        </Stack.Navigator>
);

export default PantallaHistoriaLatinoAmerica;
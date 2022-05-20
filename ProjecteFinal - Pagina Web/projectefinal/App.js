import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PantallaPaginaPrincipal from './componentes/PantallaPrincipal';

import PantallaQuienesSomos from './componentes/PantallaQuienesSomos';

import PantallaViabilidadMarketing from './componentes/PantallaViabilidadMarketing';

import PantallaHistoriaHumanidad from './componentes/PantallaHistoriaHumanidad';

import PantallaContacto from './componentes/PantallaContacto';

import { I18nextProvider } from 'react-i18next';

import i18next from 'i18next';

import global_en_paginaprincipal from "./traducciones/en/globalpaginaprincipal.json";

import global_es_paginaprincipal from "./traducciones/es/globalpaginaprincipal.json";

import global_en_quienessomos from "./traducciones/en/globalquienessomos.json";

import global_es_quienessomos from "./traducciones/es/globalquienessomos.json";

import global_en_viabilidadmarketing from "./traducciones/en/globalviabilidadmarketing.json";

import global_es_viabilidadmarketing from "./traducciones/es/globalviabilidadmarketing.json";

import global_en_historiahumanidad from "./traducciones/en/globalhistoriahumanidad.json";

import global_es_historiahumanidad from "./traducciones/es/globalhistoriahumanidad.json";

import global_en_historiaegipto from "./traducciones/en/globalhistoriaegipto.json";

import global_es_historiaegipto from "./traducciones/es/globalhistoriaegipto.json";

import global_en_historiagrecia from "./traducciones/en/globalhistoriagrecia.json";

import global_es_historiagrecia from "./traducciones/es/globalhistoriagrecia.json";

import global_en_historianordica from "./traducciones/en/globalhistorianordica.json";

import global_es_historianordica from "./traducciones/es/globalhistorianordica.json";

import global_en_historialatinoamerica from "./traducciones/en/globalhistorialatinoamerica.json";

import global_es_historialatinoamerica from "./traducciones/es/globalhistorialatinoamerica.json";

import global_en_historiaazteca from "./traducciones/en/globalhistoriaazteca.json";

import global_es_historiaazteca from "./traducciones/es/globalhistoriaazteca.json";

import global_en_historiainca from "./traducciones/en/globalhistoriainca.json";

import global_es_historiainca from "./traducciones/es/globalhistoriainca.json";

import global_en_historiamaya from "./traducciones/en/globalhistoriamaya.json";

import global_es_historiamaya from "./traducciones/es/globalhistoriamaya.json";

import global_en_contacto from "./traducciones/en/globalcontacto.json";

import global_es_contacto from "./traducciones/es/globalcontacto.json";

i18next.init({
  interpolation: { escapeValue: false},
  lng: "es",
  resources: {
    en: 
    {
      globalpaginaprincipal: global_en_paginaprincipal,
      globalquienessomos: global_en_quienessomos,
      globalviabilidadmarketing: global_en_viabilidadmarketing,
      globalhistoriahumanidad: global_en_historiahumanidad,
      globalhistoriaegipto: global_en_historiaegipto,
      globalhistoriagrecia: global_en_historiagrecia,
      globalhistorialatinoamerica: global_en_historialatinoamerica,
      globalhistoriaazteca: global_en_historiaazteca,
      globalhistoriainca: global_en_historiainca,
      globalhistoriamaya: global_en_historiamaya,
      globalhistorianordica: global_en_historianordica,
      globalcontacto: global_en_contacto
    },
    
    es: {
      globalpaginaprincipal: global_es_paginaprincipal,
      globalquienessomos: global_es_quienessomos,
      globalviabilidadmarketing: global_es_viabilidadmarketing,
      globalhistoriahumanidad: global_es_historiahumanidad,
      globalhistoriaegipto: global_es_historiaegipto,
      globalhistoriagrecia: global_es_historiagrecia,
      globalhistorialatinoamerica: global_es_historialatinoamerica,
      globalhistoriaazteca: global_es_historiaazteca,
      globalhistoriainca: global_es_historiainca,
      globalhistoriamaya: global_es_historiamaya,
      globalhistorianordica: global_es_historianordica,
      globalcontacto: global_es_contacto
    },
  },
});

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <I18nextProvider i18n={i18next}>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Página Principal' component={PantallaPaginaPrincipal} />
        <Tab.Screen name='Quienes Somos' component={PantallaQuienesSomos} />
        <Tab.Screen name='Viabilidad y Marketing' component={PantallaViabilidadMarketing} />
        <Tab.Screen name='Historia de la Humanidad' component={PantallaHistoriaHumanidad} />
        <Tab.Screen name='Contacto' component={PantallaContacto} />
      </Tab.Navigator>
    </NavigationContainer>
    </I18nextProvider>
  );
}
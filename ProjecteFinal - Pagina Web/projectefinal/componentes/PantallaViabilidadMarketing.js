import React from 'react';

import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';

import { Button } from 'react-native-paper';

import LogoEmpresa from '../imagenes/LogoEmpresa.png';

import ViabilidadEconomica from '../imagenes/ViabilidadEconomica.jpg';

import ViabilidadMarketing from '../imagenes/ViabilidadMarketing.png';

import { useTranslation } from "react-i18next";

const PantallaViabilidadMarketing = ({navigation}) => {
    const [t, i18n] = useTranslation("globalviabilidadmarketing");
    const PantallaViabilidadMarketing = () => {
            return (
            <View style={styles.contenedor}>
                <View style={styles.contenedorheader}>
                    <Button style={styles.botonpaginaprincipal} mode='contained' onPress={() => navigation.goBack('Pagina Principal')}><Text style={styles.textopaginaprincipal}>{t("header.Home Page")}</Text></Button>
                    <Button style={styles.botonquienessomos} mode='contained' onPress={() => navigation.navigate('Quienes Somos')}><Text style={styles.textoquienesomos}>{t("header.About Us")}</Text></Button>
                    <Button style={styles.botonhistoriahumanidad} mode='contained' onPress={() => navigation.navigate('Historia de la Humanidad')}><Text style={styles.textohistoriahumanidad}>{t("header.History of Humanity")}</Text></Button>
                    <Button style={styles.botoncontacto} mode='contained' onPress={() => navigation.navigate('Contacto')}><Text style={styles.textocontacto}>{t("header.Contact")}</Text></Button>
                    <Button style={styles.botonidioma} mode='contained' onPress={(() => i18n.changeLanguage("en"))}><Text style={styles.textoidioma}>EN</Text></Button>
                    <Button style={styles.botonidioma} mode='contained' onPress={(() => i18n.changeLanguage("es"))}><Text style={styles.textoidioma}>ES</Text></Button>
                    <ImageBackground style={styles.logoempresa} source={LogoEmpresa} />
                </View>
                <View style={styles.contenedorprincipal}>
                    <View style={styles.contenedortextoviabilidades}>
                        <Text style={styles.textoviabilidadeconomica}>{t("container.TextViabilityEconomic")}</Text>
                        <Text style={styles.textoviabilidadmarketing}>{t("container.TextViabilityMarketing")}</Text>
                    </View>
                    <View style={styles.contenedortextoimagenviabilidades}>
                        <Text style={styles.textoveconomica}>{t("container.TextVEconomic")}</Text>
                        <ImageBackground style={styles.imagenviabilidadeconomica} source={ViabilidadEconomica} />
                        <Text style={styles.textovmarketing}>{t("container.TextVMarketing")}</Text>
                        <ImageBackground style={styles.imagenmarketing} source={ViabilidadMarketing} />
                    </View>
                </View>
                <View style={styles.contenedorfooter}>
                    <Text style={styles.textofooter}>{t("footer.TextFooter")}: Yosu Litago Albuixech</Text>
                </View>
            </View>
            );
        };
    return (
        <ScrollView>
            <View>
                <PantallaViabilidadMarketing></PantallaViabilidadMarketing>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    contenedor: 
    {
        flex: 1,

        justifyContent: 'center',

        alignItems: 'center',

        flexDirection: 'column',

        backgroundColor: 'white',
    },

    contenedorheader:
    {
        height: 130,

        width: '100%',

        backgroundColor: 'orange',

        textAlign: 'center',

        justifyContent: 'center',

        alignItems: 'center',

        flexDirection: 'row',
    },

    botonpaginaprincipal: 
    {
        backgroundColor: 'orange',

        height: 60, 

        width: 230,

        textAlign: 'center', 
        
        justifyContent: 'center', 

        alignItems: 'center',

        marginTop: 33,

        marginLeft: 80,

        marginBottom: 33,
    },

    textopaginaprincipal: 
    {
        color: 'white',

        fontWeight: 'bold',

        fontStyle: 'italic',

        fontFamily: 'arial',

        fontSize: 22,
    },

    botonquienessomos: 
    {
        backgroundColor: 'orange',

        height: 60, 

        width: 220,

        textAlign: 'center', 
        
        justifyContent: 'center', 

        alignItems: 'center',

        marginTop: 33,

        marginLeft: 30,

        marginBottom: 33,
    },

    textoquienesomos: 
    {
        color: 'white',

        fontWeight: 'bold',

        fontStyle: 'italic',

        fontFamily: 'arial',

        fontSize: 22,
    },

    botonhistoriahumanidad: 
    {
        backgroundColor: 'orange',

        height: 60, 

        width: 360,

        textAlign: 'center', 
        
        justifyContent: 'center', 

        alignItems: 'center',

        marginTop: 33,

        marginLeft: 30,

        marginBottom: 33,
    },

    textohistoriahumanidad: 
    {
        color: 'white',

        fontWeight: 'bold',

        fontStyle: 'italic',

        fontFamily: 'arial',

        fontSize: 22,
    },

    botoncontacto: 
    {
        backgroundColor: 'orange',

        height: 60, 

        width: 150,

        textAlign: 'center', 
        
        justifyContent: 'center', 

        alignItems: 'center',

        marginTop: 33,

        marginLeft: 30,

        marginBottom: 33,
    },

    textocontacto: 
    {
        color: 'white',

        fontWeight: 'bold',

        fontStyle: 'italic',

        fontFamily: 'arial',

        fontSize: 22,
    },

    botonidioma: 
    {
        backgroundColor: 'orange',

        height: 60, 

        width: 110,

        textAlign: 'center', 
        
        justifyContent: 'center', 

        alignItems: 'center',

        marginTop: 33,

        marginLeft: 30,

        marginBottom: 33,
    },

    textoidioma: 
    {
        color: 'white',

        fontWeight: 'bold',

        fontStyle: 'italic',

        fontFamily: 'arial',

        fontSize: 22,
    },

    logoempresa: 
    {
        height: 130,

        width: 180,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 33,

        marginLeft: 10,

        marginBottom: 33,
    },

    contenedorprincipal:
    {
        flex: 1,

        justifyContent: 'center',

        alignItems: 'center',

        flexDirection: 'column',
    },

    contenedortextoviabilidades: 
    {
        flexDirection: 'row',
    },

    textoviabilidadeconomica: 
    {
        color: 'black',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 33,

        marginTop: 33,

        marginLeft: 150,

        marginRight: 300,
    },

    textoviabilidadmarketing: 
    {
        color: 'black',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 33,

        marginTop: 33,

        marginLeft: 150,

        marginRight: 300,
    },

    contenedortextoimagenviabilidades: 
    {
        flexDirection: 'row',
    },

    textoveconomica: 
    {
        color: 'black',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 22,

        marginTop: 33,

        marginLeft: 33,

        marginRight: 11,

        marginBottom: 33,
    },

    textovmarketing: 
    {
        color: 'black',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 22,

        marginTop: 33,

        marginLeft: 33,

        marginRight: 11,

        marginBottom: 33,
    },

    imagenviabilidadeconomica: 
    {
        height: 600,

        width: 400,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 33,

        marginBottom: 33,
    },

    imagenmarketing: 
    {
        height: 600,

        width: 400,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 33,

        marginRight: 33,

        marginBottom: 33,
    },

    contenedorfooter:
    {
        height: 30,

        width: '100%',

        backgroundColor: 'orange',

        textAlign: 'center',

        justifyContent: 'center',

        alignItems: 'center',
    },

    textofooter:
    {
        color: 'white',

        fontWeight: 'bold',

        fontStyle: 'italic',

        fontFamily: 'arial',

        fontSize: 22,
    },
});

export default PantallaViabilidadMarketing;
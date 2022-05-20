import React from 'react';

import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';

import { Button } from 'react-native-paper';

import LogoEmpresa from '../imagenes/LogoEmpresa.png';

import CivilizacionAzteca from '../imagenes/CivilizacionAzteca.jpg';

import CivilizacionInca from '../imagenes/CivilizacionInca.jpg';

import CivilizacionMaya from '../imagenes/CivilizacionMaya.jpg';

import { useTranslation } from "react-i18next";

const PantallaHistoriaLatinoAmericaInterna = ({navigation}) => {
    const [t, i18n] = useTranslation("globalhistorialatinoamerica");
    const PantallaHistoriaLatinoAmerica = () => {
            return (
            <View style={styles.contenedor}>
                <View style={styles.contenedorheader}>
                    <Button style={styles.botonpaginaprincipal} mode='contained' onPress={() => navigation.navigate('Página Principal')}><Text style={styles.textopaginaprincipal}>{t("header.Home Page")}</Text></Button>
                    <Button style={styles.botonquienessomos} mode='contained' onPress={() => navigation.navigate('Quienes Somos')}><Text style={styles.textoquienesomos}>{t("header.About Us")}</Text></Button>
                    <Button style={styles.botonviabilidadmarketing} mode='contained' onPress={() => navigation.navigate('Viabilidad y Marketing')}><Text style={styles.textoviabilidadmarketing}>{t("header.Viability and Marketing")}</Text></Button>
                    <Button style={styles.botoncontacto} mode='contained' onPress={() => navigation.navigate('Contacto')}><Text style={styles.textocontacto}>{t("header.Contact")}</Text></Button>
                    <Button style={styles.botonidioma} mode='contained' onPress={(() => i18n.changeLanguage("en"))}><Text style={styles.textoidioma}>EN</Text></Button>
                    <Button style={styles.botonidioma} mode='contained' onPress={(() => i18n.changeLanguage("es"))}><Text style={styles.textoidioma}>ES</Text></Button>
                    <ImageBackground style={styles.logoempresa} source={LogoEmpresa} />
                </View>
                <View style={styles.contenedorprincipal}>
                    <Text style={styles.textohistorialatinoamerica}>{t("container.TextHistoryHumanity")}</Text>
                    <View style={styles.contenedorcivilizacionaztecainca}>
                        <View>
                            <ImageBackground style={styles.imagencivilizacionazteca} source={CivilizacionAzteca} />
                            <Button style={styles.botoncivilizacionazteca} mode='contained' onPress={() => navigation.navigate('Historia Azteca')}><Text style={styles.textocivilizacionazteca}>{t("container.TextCivilizationAztec")}</Text></Button>
                        </View>
                        <View>
                            <ImageBackground style={styles.imagencivilizacioninca} source={CivilizacionInca} />
                            <Button style={styles.botoncivilizacioninca} mode='contained' onPress={() => navigation.navigate('Historia Inca')}><Text style={styles.textocivilizacioninca}>{t("container.TextCivilizationInka")}</Text></Button>
                        </View>
                    </View>
                    <View style={styles.contenedorcivilizacionmaya}>
                        <View>
                            <ImageBackground style={styles.imagencivilizacionmaya} source={CivilizacionMaya} />
                            <Button style={styles.botoncivilizacionmaya} mode='contained' onPress={() => navigation.navigate('Historia Maya')}><Text style={styles.textocivilizacionmaya}>{t("container.TextCivilizationMayan")}</Text></Button>
                        </View>
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
                <PantallaHistoriaLatinoAmerica></PantallaHistoriaLatinoAmerica>
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

        marginLeft: 110,

        marginBottom: 33,
    },

    textopaginaprincipal: 
    {
        color:'white',

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
        color:'white',

        fontWeight: 'bold',

        fontStyle: 'italic',

        fontFamily: 'arial',

        fontSize: 22,
    },

    botonviabilidadmarketing: 
    {
        backgroundColor:'orange',

        height: 60, 

        width: 330,

        textAlign: 'center', 
        
        justifyContent: 'center', 

        alignItems: 'center',

        marginTop: 33,

        marginLeft: 30,

        marginBottom: 33,
    },

    textoviabilidadmarketing: 
    {
        color:'white',

        fontWeight: 'bold',

        fontStyle: 'italic',

        fontFamily: 'arial',

        fontSize: 22,
    },

    botoncontacto: 
    {
        backgroundColor:'orange',

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
        color:'white',

        fontWeight: 'bold',

        fontStyle: 'italic',

        fontFamily: 'arial',

        fontSize: 22,
    },

    botonidioma: 
    {
        backgroundColor:'orange',

        height: 60, 

        width: 105,

        textAlign: 'center', 
        
        justifyContent: 'center', 

        alignItems: 'center',

        marginTop: 33,

        marginLeft: 30,

        marginBottom: 33,
    },

    textoidioma: 
    {
        color:'white',

        fontWeight: 'bold',

        fontStyle: 'italic',

        fontFamily: 'arial',

        fontSize: 22,
    },

    logoempresa: 
    {
        height: 130,

        width: 190,

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

    textohistorialatinoamerica: 
    {
        color:'black',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 44,

        marginTop: 33,

        marginBottom: 11,
    },

    contenedorcivilizacionaztecainca: 
    {
        flexDirection: 'row',
    },

    imagencivilizacionazteca: 
    {
        height: 600,

        width: 600,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 30,

        marginBottom: 11,
    },

    botoncivilizacionazteca: 
    {
        backgroundColor: 'white',

        height: 80, 

        width: 220,

        textAlign: 'center', 
        
        justifyContent: 'center', 

        alignItems: 'center',

        marginTop: 11,

        marginLeft: 190,

        marginBottom: 11,
    },

    textocivilizacionazteca: 
    {
        color:'black',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 22,
    },

    imagencivilizacioninca: 
    {
        height: 600,

        width: 600,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    botoncivilizacioninca: 
    {
        backgroundColor: 'white',

        height: 80, 

        width: 190,

        textAlign: 'center', 
        
        justifyContent: 'center', 

        alignItems: 'center',

        marginTop: 11,

        marginLeft: 210,

        marginBottom: 11,
    },

    textocivilizacioninca: 
    {
        color:'black',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 22,
    },

    contenedorcivilizacionmaya: 
    {
        flexDirection: 'row',
    },

    imagencivilizacionmaya: 
    {
        height: 600,

        width: 600,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    botoncivilizacionmaya: 
    {
        backgroundColor: 'white',

        height: 80, 

        width: 200,

        textAlign: 'center', 
        
        justifyContent: 'center', 

        alignItems: 'center',

        marginTop: 11,

        marginLeft: 200,

        marginRight: 10,

        marginBottom: 11,
    },

    textocivilizacionmaya: 
    {
        color:'black',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 22,
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

export default PantallaHistoriaLatinoAmericaInterna;
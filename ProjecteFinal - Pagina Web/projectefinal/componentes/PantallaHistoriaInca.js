import React from 'react';

import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';

import { Button } from 'react-native-paper';

import LogoEmpresa from '../imagenes/LogoEmpresa.png';

import MapaImperioInca from '../imagenes/HistoriayCronologiaInca/MapaImperioInca.jpg';

import { useTranslation } from "react-i18next";

const PantallaHistoriaInca = ({navigation}) => {
    const [t, i18n] = useTranslation("globalhistoriainca");
    const PantallaHistoriaInca = () => {
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
                    <Text style={styles.historiainca}><i>{t("container.HistoryInka")}</i></Text>
                    <Text style={styles.historiainca}><i>{t("container.TextHistoryInka1")}</i></Text>
                    <Text style={styles.textohistoriainca}>
                        {t("container.TextHistoryInka2")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryInka3")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryInka4")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryInka5")}
                    </Text>
                    <Text style={styles.historiainca}><i>{t("container.TextHistoryInkaEmpire1")}</i></Text>
                    <Text style={styles.historiainca}><i>{t("container.TextHistoryInkaEmpire01")}</i></Text>
                    <Text style={styles.textohistoriainca}>
                        {t("container.TextHistoryInkaEmpire2")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryInkaEmpire3")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryInkaEmpire4")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryInkaEmpire5")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryInkaEmpire6")}
                    </Text>
                    <Text style={styles.historiainca}><i>{t("container.TextHistoryInkaEmpire02")}</i></Text>
                    <Text style={styles.textohistoriainca}>
                        {t("container.TextHistoryInkaEmpire7")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryInkaEmpire8")}
                    </Text>
                    <View style={styles.contenedorMapaImperioInca}>
                        <View>
                            <ImageBackground style={styles.imagenMapaImperioInca} source={MapaImperioInca} />
                            <Text style={styles.textoMapaImperioInca}>{t("container.TextMap")}</Text>
                        </View>
                    </View>
                    <Text style={styles.historiainca}><i>{t("container.ChronologyInka")}</i></Text>
                    <Text style={styles.historiainca}><i>{t("container.TextChronologyInkaCivilization1")}</i></Text>
                    <Text style={styles.historiainca}><i>{t("container.TextChronologyInkaCivilization01")}</i></Text>
                    <Text style={styles.textohistoriainca}>
                        {t("container.TextChronologyInkaCivilization2")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyInkaCivilization3")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyInkaCivilization4")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyInkaCivilization5")}
                    </Text> 
                    <Text style={styles.historiainca}><i>{t("container.TextChronologyInkaCivilization02")}</i></Text>
                    <Text style={styles.textohistoriainca1}>
                        {t("container.TextChronologyInkaCivilization6")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyInkaCivilization7")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyInkaCivilization8")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyInkaCivilization9")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyInkaCivilization10")}
                    </Text>
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
                <PantallaHistoriaInca></PantallaHistoriaInca>
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

        width: 210,

        textAlign: 'center', 
        
        justifyContent: 'center', 

        alignItems: 'center',

        marginTop: 33,

        marginLeft: 130,

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

    historiainca: 
    {
        color:'black',

        textAlign: 'center', 
        
        justifyContent: 'center', 

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 44,

        marginTop: 33,
    },

    textohistoriainca: 
    {
        color:'black',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 22,

        marginTop: 33,

        marginLeft: 11,
    },

    textohistoriainca1: 
    {
        color:'black',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 22,

        marginTop: 33,

        marginLeft: 11,

        marginRight: 300,
    },

    contenedorMapaImperioInca: 
    {
        flexDirection: 'row',
    },

    imagenMapaImperioInca: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoMapaImperioInca: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 100,

        marginBottom: 11,
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

export default PantallaHistoriaInca;
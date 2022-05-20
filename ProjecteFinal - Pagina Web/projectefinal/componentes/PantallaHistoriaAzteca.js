import React from 'react';

import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';

import { Button } from 'react-native-paper';

import LogoEmpresa from '../imagenes/LogoEmpresa.png';

import AstronomiaAzteca from '../imagenes/HistoriayCronologiaAzteca/AstronomiaAzteca.jpg';

import PiramidesAztecas from '../imagenes/HistoriayCronologiaAzteca/PiramidesAztecas.jpg';

import AdornoPlumas from '../imagenes/HistoriayCronologiaAzteca/AdornoPlumas.jpg';

import LeyesAztecas from '../imagenes/HistoriayCronologiaAzteca/LeyesAztecas.jpg';

import SociedadAzteca from '../imagenes/HistoriayCronologiaAzteca/SociedadAzteca.jpg';

import { useTranslation } from "react-i18next";

const PantallaHistoriaAzteca = ({navigation}) => {
    const [t, i18n] = useTranslation("globalhistoriaazteca");
    const PantallaHistoriaAzteca = () => {
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
                    <Text style={styles.historiamaya}><i>{t("container.HistoryAztec")}</i></Text>
                    <Text style={styles.historiamaya}><i>{t("container.TextHistoryAztec1")}</i></Text>
                    <Text style={styles.textohistoriamaya}>
                        {t("container.TextHistoryAztec2")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryAztec3")}
                    </Text>
                    <Text style={styles.historiamaya}><i>{t("container.TextHistoryAztecEconomyAgriculture")}</i></Text>
                    <Text style={styles.textohistoriamaya}>
                        {t("container.TextHistoryAztecEconomyAgriculture1")}
                    </Text>
                    <Text style={styles.historiamaya}><i>{t("container.TextHistoryAztecLanguageWriting")}</i></Text>
                    <Text style={styles.textohistoriamaya}>
                        {t("container.TextHistoryAztecLanguageWriting1")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryAztecLanguageWriting2")}
                    </Text>
                    <Text style={styles.historiamaya}><i>{t("container.TextHistoryAztecPoems")}</i></Text>
                    <Text style={styles.textohistoriamaya}>
                        {t("container.TextHistoryAztecPoems1")}
                    </Text>
                    <Text style={styles.historiamaya}><i>{t("container.TextHistoryAztecBeliefs")}</i></Text>
                    <Text style={styles.textohistoriamaya}>
                        {t("container.TextHistoryAztecBeliefs1")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryAztecBeliefs2")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryAztecBeliefs3")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryAztecBeliefs4")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryAztecBeliefs5")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryAztecBeliefs6")}
                    </Text>
                    <Text style={styles.historiamaya}><i>{t("container.TextHistoryAztecScience")}</i></Text>
                    <Text style={styles.textohistoriamaya}>
                        {t("container.TextHistoryAztecScience1")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryAztecScience2")}
                    </Text>
                    <View style={styles.contenedorAstronomiaAzteca}>
                        <View>
                            <ImageBackground style={styles.imagenAstronomiaAzteca} source={AstronomiaAzteca} />
                            <Text style={styles.textoAstronomiaAzteca}>{t("container.TextAstronomy")}</Text>
                        </View>
                    </View>
                    <Text style={styles.historiamaya}><i>{t("container.TextHistoryAztecMedicine")}</i></Text>
                    <Text style={styles.textohistoriamaya}>
                        {t("container.TextHistoryAztecMedicine1")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryAztecMedicine2")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryAztecMedicine3")}
                    </Text>
                    <Text style={styles.historiamaya}><i>{t("container.TextHistoryAztecArt")}</i></Text>
                    <Text style={styles.textohistoriamaya}>
                        {t("container.TextHistoryAztecArt1")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryAztecArt2")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryAztecArt3")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryAztecArt4")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryAztecArt5")}
                    </Text>
                    <View style={styles.contenedorPiramidesAztecasAdornoPlumas}>
                        <View>
                            <ImageBackground style={styles.imagenPiramidesAztecas} source={PiramidesAztecas} />
                            <Text style={styles.textoPiramidesAztecas}>{t("container.TextPyramid")}</Text>
                        </View>
                        <View>
                            <ImageBackground style={styles.imagenAdornoPlumas} source={AdornoPlumas} />
                            <Text style={styles.textoAdornoPlumas}>{t("container.TextOrnamentFeathers")}</Text>
                        </View>
                    </View>
                    <Text style={styles.historiamaya}><i>{t("container.TextHistoryAztecLaws")}</i></Text>
                    <Text style={styles.textohistoriamaya}>
                        {t("container.TextHistoryAztecLaws1")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryAztecLaws2")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryAztecLaws3")}
                    </Text>
                    <View style={styles.contenedorLeyesAztecas}>
                        <View>
                            <ImageBackground style={styles.imagenLeyesAztecas} source={LeyesAztecas} />
                            <Text style={styles.textoLeyesAztecas}>{t("container.TextLaws")}</Text>
                        </View>
                    </View>
                    <Text style={styles.historiamaya}><i>{t("container.TextHistoryAztecSociety")}</i></Text>
                    <Text style={styles.textohistoriamaya}>
                        {t("container.TextHistoryAztecSociety1")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryAztecSociety2")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryAztecSociety3")}
                    </Text>
                    <View style={styles.contenedorSociedadAzteca}>
                        <View>
                            <ImageBackground style={styles.imagenSociedadAzteca} source={SociedadAzteca} />
                            <Text style={styles.textoSociedadAzteca}>{t("container.TextSociety")}</Text>
                        </View>
                    </View>
                    <Text style={styles.historiamaya}><i>{t("container.TextHistoryAztecEducation")}</i></Text>
                    <Text style={styles.textohistoriamaya}>
                        {t("container.TextHistoryAztecEducation1")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryAztecEducation2")}
                    </Text>
                    <Text style={styles.historiamaya}><i>{t("container.TextHistoryAztecSexuality")}</i></Text>
                    <Text style={styles.textohistoriamaya}>
                        {t("container.TextHistoryAztecSexuality1")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryAztecSexuality2")}
                    </Text>
                    <Text style={styles.historiamaya}><i>{t("container.ChronologyAztec")}</i></Text>
                    <Text style={styles.historiamaya}><i>{t("container.ChronologyAztec1")}</i></Text>
                    <Text style={styles.textohistoriamaya1}>
                        {t("container.TextChronologyAztec1")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyAztec2")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyAztec3")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyAztec4")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyAztec5")}
                    </Text>
                    <Text style={styles.historiamaya}><i>{t("container.ChronologyAztec2")}</i></Text>
                    <Text style={styles.textohistoriamaya}>
                        {t("container.TextChronologyAztec6")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyAztec7")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyAztec8")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyAztec9")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyAztec10")}
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
                <PantallaHistoriaAzteca></PantallaHistoriaAzteca>
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

    historiamaya: 
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

    textohistoriamaya: 
    {
        color:'black',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 22,

        marginTop: 33,

        marginLeft: 11,
    },

    textohistoriamaya1: 
    {
        color:'black',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 22,

        marginTop: 33,

        marginLeft: 11,

        marginRight: 900,
    },

    contenedorAstronomiaAzteca: 
    {
        flexDirection: 'row',
    },

    imagenAstronomiaAzteca: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoAstronomiaAzteca: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 60,

        marginBottom: 11,
    },

    contenedorPiramidesAztecasAdornoPlumas: 
    {
        flexDirection: 'row',
    },

    imagenPiramidesAztecas: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoPiramidesAztecas: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 70,

        marginBottom: 11,
    },

    imagenAdornoPlumas: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 20,

        marginBottom: 11,
    },

    textoAdornoPlumas: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 70,

        marginBottom: 11,
    },

    contenedorLeyesAztecas: 
    {
        flexDirection: 'row',
    },

    imagenLeyesAztecas: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoLeyesAztecas: 
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

    contenedorSociedadAzteca: 
    {
        flexDirection: 'row',
    },

    imagenSociedadAzteca: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoSociedadAzteca: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 70,

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

export default PantallaHistoriaAzteca;
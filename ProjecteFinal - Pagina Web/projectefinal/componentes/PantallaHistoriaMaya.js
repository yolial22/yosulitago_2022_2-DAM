import React from 'react';

import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';

import { Button } from 'react-native-paper';

import LogoEmpresa from '../imagenes/LogoEmpresa.png';

import PiramideMaya1 from '../imagenes/HistoriaMaya/PiramideMaya1.jpg';

import PiramideMaya2 from '../imagenes/HistoriaMaya/PiramideMaya2.jpg';

import CodiceMaya from '../imagenes/HistoriaMaya/CodiceMaya.jpg';

import NumeracionMaya from '../imagenes/HistoriaMaya/NumeracionMaya.jpg';

import JuegoPelota from '../imagenes/HistoriaMaya/JuegoPelota.jpg';

import UbicacionCivilizacionMaya from '../imagenes/CronologiaMaya/UbicacionCivilizacionMaya.jpg';

import AgriculturaMaya from '../imagenes/CronologiaMaya/AgriculturaMaya.png';

import SieteProfeciasMayas from '../imagenes/CronologiaMaya/SieteProfeciasMayas.jpg';

import CiudadMaya from '../imagenes/CronologiaMaya/CiudadMaya.jpg';

import PiramideMaya from '../imagenes/CronologiaMaya/PiramideMaya.jpg';

import { useTranslation } from "react-i18next";

const PantallaHistoriaMaya = ({navigation}) => {
    const [t, i18n] = useTranslation("globalhistoriamaya");
    const PantallaHistoriaMaya = () => {
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
                    <Text style={styles.historiamaya}><i>{t("container.HistoryMayan")}</i></Text>
                    <Text style={styles.historiamaya}><i>{t("container.TextHistoryMayan1")}</i></Text>
                    <Text style={styles.textohistoriamaya}>
                        {t("container.TextHistoryMayan2")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryMayan3")}
                    </Text>
                    <Text style={styles.historiamaya}><i>{t("container.TextHistoryMayanArt1")}</i></Text>
                    <Text style={styles.textohistoriamaya}>
                        {t("container.TextHistoryMayanArt2")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryMayanArt3")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryMayanArt4")}
                    </Text>
                    <View style={styles.contenedorPiramideMaya1PiramideMaya2}>
                        <View>
                            <ImageBackground style={styles.imagenPiramideMaya1} source={PiramideMaya1} />
                            <Text style={styles.textoPiramideMaya1}>{t("container.TextPyramid")}</Text>
                        </View>
                        <View>
                            <ImageBackground style={styles.imagenPiramideMaya2} source={PiramideMaya2} />
                            <Text style={styles.textoPiramideMaya2}>{t("container.TextPyramid")}</Text>
                        </View>
                    </View>
                    <Text style={styles.historiamaya}><i>{t("container.TextHistoryMayanCulture1")}</i></Text>
                    <Text style={styles.textohistoriamaya}>
                        {t("container.TextHistoryMayanCulture2")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryMayanCulture3")}
                    </Text>
                    <View style={styles.contenedorCodiceMaya}>
                        <View>
                            <ImageBackground style={styles.imagenCodiceMaya} source={CodiceMaya} />
                            <Text style={styles.textoCodiceMaya}>{t("container.TextCodex")}</Text>
                        </View>
                    </View>
                    <Text style={styles.historiamaya}><i>{t("container.TextHistoryMayanScienceCalendarAstronomy1")}</i></Text>
                    <Text style={styles.textohistoriamaya}>
                        {t("container.TextHistoryMayanScienceCalendarAstronomy2")}
                    </Text>
                    <Text style={styles.historiamaya}><i>{t("container.TextHistoryMayanMathematics1")}</i></Text>
                    <Text style={styles.textohistoriamaya}>
                        {t("container.TextHistoryMayanMathematics2")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryMayanMathematics3")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryMayanMathematics4")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryMayanMathematics5")}
                    </Text>
                    <View style={styles.contenedorNumeracionMaya}>
                        <View>
                            <ImageBackground style={styles.imagenNumeracionMaya} source={NumeracionMaya} />
                            <Text style={styles.textoNumeracionMaya}>{t("container.TextNumeration")}</Text>
                        </View>
                    </View>
                    <Text style={styles.historiamaya}><i>{t("container.TextHistoryMayanSociety1")}</i></Text>
                    <Text style={styles.textohistoriamaya}>
                        {t("container.TextHistoryMayanSociety2")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryMayanSociety3")}
                    </Text>
                    <Text style={styles.historiamaya}><i>{t("container.TextHistoryMayanLife1")}</i></Text>
                    <Text style={styles.textohistoriamaya}>
                        {t("container.TextHistoryMayanLife2")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryMayanLife3")}
                    </Text>
                    <View style={styles.contenedorJuegoPelota}>
                        <View>
                            <ImageBackground style={styles.imagenJuegoPelota} source={JuegoPelota} />
                            <Text style={styles.textoJuegoPelota}>{t("container.TextGameBall")}</Text>
                        </View>
                    </View>
                    <Text style={styles.historiamaya}><i>{t("container.TextHistoryMayanBeliefsThoughts1")}</i></Text>
                    <Text style={styles.textohistoriamaya}>
                        {t("container.TextHistoryMayanBeliefsThoughts2")}
                    </Text>
                    <Text style={styles.historiamaya}><i>{t("container.ChronologyMayan")}</i></Text>
                    <Text style={styles.textohistoriamaya}>
                        {t("container.TextChronologyMayan1")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyMayan2")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyMayan3")}
                    </Text>
                    <View style={styles.contenedorUbicacionCivilizacionMaya}>
                        <View>
                            <ImageBackground style={styles.imagenUbicacionCivilizacionMaya} source={UbicacionCivilizacionMaya} />
                            <Text style={styles.textoUbicacionCivilizacionMaya}>{t("container.TextUbication")}</Text>
                        </View>
                    </View>
                    <Text style={styles.historiamaya}><i>{t("container.TextChronologyMayanArchaic1")}</i></Text>
                    <Text style={styles.textohistoriamaya}>
                        {t("container.TextChronologyMayanArchaic2")}
                    </Text>
                    <View style={styles.contenedorAgriculturaMaya}>
                        <View>
                            <ImageBackground style={styles.imagenAgriculturaMaya} source={AgriculturaMaya} />
                            <Text style={styles.textoAgriculturaMaya}>{t("container.TextAgriculture")}</Text>
                        </View>
                    </View>
                    <Text style={styles.historiamaya}><i>{t("container.TextChronologyMayanPreClassic1")}</i></Text>
                    <Text style={styles.textohistoriamaya}>
                        {t("container.TextChronologyMayanPreClassic2")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyMayanPreClassic3")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyMayanPreClassic4")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyMayanPreClassic5")}
                    </Text>
                    <View style={styles.contenedorSieteProfeciasMayas}>
                        <View>
                            <ImageBackground style={styles.imagenSieteProfeciasMayas} source={SieteProfeciasMayas} />
                            <Text style={styles.textoSieteProfeciasMayas}>{t("container.TextSevenProphecies")}</Text>
                        </View>
                    </View>
                    <Text style={styles.historiamaya}><i>{t("container.TextChronologyMayanClassic1")}</i></Text>
                    <Text style={styles.textohistoriamaya}>
                        {t("container.TextChronologyMayanClassic2")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyMayanClassic3")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyMayanClassic4")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyMayanClassic5")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyMayanClassic6")}
                    </Text>
                    <View style={styles.contenedorCiudadMaya}>
                        <View>
                            <ImageBackground style={styles.imagenCiudadMaya} source={CiudadMaya} />
                            <Text style={styles.textoCiudadMaya}>{t("container.TextCity")}</Text>
                        </View>
                    </View>
                    <Text style={styles.historiamaya}><i>{t("container.TextChronologyMayanPostClassic1")}</i></Text>
                    <Text style={styles.textohistoriamaya}>
                        {t("container.TextChronologyMayanPostClassic2")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyMayanPostClassic3")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyMayanPostClassic4")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyMayanPostClassic5")}
                    </Text>
                    <View style={styles.contenedorPiramideMaya}>
                        <View>
                            <ImageBackground style={styles.imagenPiramideMaya} source={PiramideMaya} />
                            <Text style={styles.textoPiramideMaya}>{t("container.TextPyramid")}</Text>
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
                <PantallaHistoriaMaya></PantallaHistoriaMaya>
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

    contenedorPiramideMaya1PiramideMaya2: 
    {
        flexDirection: 'row',
    },

    imagenPiramideMaya1: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoPiramideMaya1: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 150,

        marginBottom: 11,
    },

    imagenPiramideMaya2: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoPiramideMaya2: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 130,

        marginBottom: 11,
    },

    contenedorCodiceMaya: 
    {
        flexDirection: 'row',
    },

    imagenCodiceMaya: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoCodiceMaya: 
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

    contenedorNumeracionMaya: 
    {
        flexDirection: 'row',
    },

    imagenNumeracionMaya: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoNumeracionMaya: 
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

    contenedorJuegoPelota: 
    {
        flexDirection: 'row',
    },

    imagenJuegoPelota: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoJuegoPelota: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 120,

        marginBottom: 11,
    },

    contenedorUbicacionCivilizacionMaya: 
    {
        flexDirection: 'row',
    },

    imagenUbicacionCivilizacionMaya: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoUbicacionCivilizacionMaya: 
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

    contenedorAgriculturaMaya: 
    {
        flexDirection: 'row',
    },

    imagenAgriculturaMaya: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoAgriculturaMaya: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 80,

        marginBottom: 11,
    },

    contenedorSieteProfeciasMayas: 
    {
        flexDirection: 'row',
    },

    imagenSieteProfeciasMayas: 
    {
        height: 400,

        width: 1000,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoSieteProfeciasMayas: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 330,

        marginBottom: 11,
    },

    contenedorCiudadMaya: 
    {
        flexDirection: 'row',
    },

    imagenCiudadMaya: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoCiudadMaya: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 150,

        marginBottom: 11,
    },

    contenedorPiramideMaya: 
    {
        flexDirection: 'row',
    },

    imagenPiramideMaya: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoPiramideMaya: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 140,

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

export default PantallaHistoriaMaya;
import React from 'react';

import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';

import { Button } from 'react-native-paper';

import LogoEmpresa from '../imagenes/LogoEmpresa.png';

import CivilizacionEgipcia from '../imagenes/CivilizacionEgipcia.jpg';

import CivilizacionGriega from '../imagenes/CivilizacionGriega.jpg';

import CivilizacionLatinoAmericana from '../imagenes/CivilizacionLatinoAmericana.jpg';

import CivilizacionNordica from '../imagenes/CivilizacionNordica.jpg';

import { useTranslation } from "react-i18next";

const PantallaHistoriaHumanidadInterna = ({navigation}) => {
    const [t, i18n] = useTranslation("globalhistoriahumanidad");
    const PantallaHistoriaHumanidad = () => {
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
                    <View>
                        <Text style={styles.textohistoriahumanidad}>{t("container.TextHistoryHumanity")}</Text>
                    </View>
                    <View style={styles.contenedorcivilizacionesegipciagriega}>
                        <View>
                            <ImageBackground style={styles.imagencivilizacionegipcia} source={CivilizacionEgipcia} />
                            <Button style={styles.botoncivilizacionegipcia} mode='contained' onPress={() => navigation.navigate('Historia de Egipto')}><Text style={styles.textocivilizacionegipcia}>{t("container.TextCivilizationEgyptian")}</Text></Button>
                        </View>
                        <View>
                            <ImageBackground style={styles.imagencivilizaciongriega} source={CivilizacionGriega} />
                            <Button style={styles.botoncivilizaciongriega} mode='contained' onPress={() => navigation.navigate('Historia de Grecia')}><Text style={styles.textocivilizaciongriega}>{t("container.TextCivilizationGreek")}</Text></Button>
                        </View>
                    </View>
                    <View style={styles.contenedorcivilizacioneslatinoamericananordica}>
                        <View>
                            <ImageBackground style={styles.imagencivilizacionlatinoamericana} source={CivilizacionLatinoAmericana} />
                            <Button style={styles.botoncivilizacionlatinoamericana} mode='contained' onPress={() => navigation.navigate('Historia de LatinoAmérica')}><Text style={styles.textocivilizacionlatinoamericana}>{t("container.TextCivilizationLatinAmerica")}</Text></Button>
                        </View>
                        <View>
                            <ImageBackground style={styles.imagencivilizacionnordica} source={CivilizacionNordica} />
                            <Button style={styles.botoncivilizacionnordica} mode='contained' onPress={() => navigation.navigate('Historia Nórdica')}><Text style={styles.textocivilizacionnordica}>{t("container.TextCivilizationNordic")}</Text></Button>
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
                <PantallaHistoriaHumanidad></PantallaHistoriaHumanidad>
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

        width: 170,

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

    textohistoriahumanidad: 
    {
        color:'black',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 55,

        marginTop: 33,
    },

    contenedorcivilizacionesegipciagriega: 
    {
        flexDirection: 'row',
    },

    imagencivilizacionegipcia: 
    {
        height: 600,

        width: 600,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 33,

        marginLeft: 30,

        marginRight: 300,
    },

    botoncivilizacionegipcia: 
    {
        backgroundColor: 'white',

        height: 80, 

        width: 260,

        textAlign: 'center', 
        
        justifyContent: 'center', 

        alignItems: 'center',

        marginTop: 33,

        marginLeft: 170,
    },

    textocivilizacionegipcia: 
    {
        color:'black',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 22,
    },

    imagencivilizaciongriega: 
    {
        height: 600,

        width: 600,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 33,

        marginRight: 60,
    },

    botoncivilizaciongriega: 
    {
        backgroundColor:'white',

        height: 80, 

        width: 260,

        textAlign: 'center', 
        
        justifyContent: 'center', 

        alignItems: 'center',

        marginTop: 33,

        marginLeft: 170,
    },

    textocivilizaciongriega: 
    {
        color:'black',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 22,
    },

    contenedorcivilizacioneslatinoamericananordica: 
    {
        flexDirection: 'row',
    },

    imagencivilizacionlatinoamericana: 
    {
        height: 600,

        width: 600,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 33,

        marginLeft: 30,

        marginRight: 300,
    },

    botoncivilizacionlatinoamericana: 
    {
        backgroundColor: 'white',

        height: 80, 

        width: 370,

        textAlign: 'center', 
        
        justifyContent: 'center', 

        alignItems: 'center',

        marginTop: 33,

        marginLeft: 130,

        marginBottom: 33,
    },

    textocivilizacionlatinoamericana: 
    {
        color:'black',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 22,
    },

    imagencivilizacionnordica: 
    {
        height: 600,

        width: 600,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 33,

        marginRight: 60,
    },

    botoncivilizacionnordica: 
    {
        backgroundColor:'white',

        height: 80, 

        width: 240,

        textAlign: 'center', 
        
        justifyContent: 'center', 

        alignItems: 'center',

        marginTop: 33,

        marginLeft: 180,

        marginBottom: 33,
    },

    textocivilizacionnordica: 
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

export default PantallaHistoriaHumanidadInterna;
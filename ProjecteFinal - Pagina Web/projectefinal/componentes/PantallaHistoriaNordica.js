import React from 'react';

import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';

import { Button } from 'react-native-paper';

import LogoEmpresa from '../imagenes/LogoEmpresa.png';

import BarcoOseberg from '../imagenes/HistoriayCronologiaNordica/BarcoOseberg.jpg';

import BanderaReinoVikingoYork from '../imagenes/HistoriayCronologiaNordica/BanderaReinoVikingoYork.jpg';

import HaraldI from '../imagenes/HistoriayCronologiaNordica/HaraldI.jpg';

import EspadasMontaña from '../imagenes/HistoriayCronologiaNordica/EspadasMontaña.jpg';

import EgilSkallagrimsson from '../imagenes/HistoriayCronologiaNordica/EgilSkallagrimsson.jpg';

import EstatuaRollon from '../imagenes/HistoriayCronologiaNordica/EstatuaRollon.jpg';

import HaraldDienteAzul from '../imagenes/HistoriayCronologiaNordica/HaraldDienteAzul.jpg';

import PiedrasJelling from '../imagenes/HistoriayCronologiaNordica/PiedrasJelling.jpg';

import CanutoGrande from '../imagenes/HistoriayCronologiaNordica/CanutoGrande.jpg';

import MuerteSanOlav from '../imagenes/HistoriayCronologiaNordica/MuerteSanOlav.jpeg';

import BatallaStamfordBridge from '../imagenes/HistoriayCronologiaNordica/BatallaStamfordBridge.jpg';

import { useTranslation } from "react-i18next";

const PantallaHistoriaNordica = ({navigation}) => {
    const [t, i18n] = useTranslation("globalhistorianordica");
    const PantallaHistoriaNordica = () => {
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
                    <Text style={styles.historianordica}><i>{t("container.HistoryNordic")}</i></Text>
                    <Text style={styles.historianordica}><i>{t("container.HistoryNordicMythology")}</i></Text>
                    <Text style={styles.textohistorianordica}>
                        {t("container.TextHistoryNordicMythology1")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryNordicMythology2")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryNordicMythology3")}
                    </Text>
                    <Text style={styles.historianordica}><i>{t("container.TextHistoryNordicCosmology")}</i></Text>
                    <Text style={styles.textohistorianordica}>
                        {t("container.TextHistoryNordicCosmology1")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryNordicCosmology2")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryNordicCosmology3")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryNordicCosmology4")}
                    </Text>
                    <Text style={styles.historianordica}><i>{t("container.TextHistoryNordicDivineBeings")}</i></Text>
                    <Text style={styles.textohistorianordica}>
                        {t("container.TextHistoryNordicDivineBeings1")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryNordicDivineBeings2")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryNordicDivineBeings3")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryNordicDivineBeings4")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryNordicDivineBeings5")}
                    </Text>
                    <Text style={styles.historianordica}><i>{t("container.TextHistoryNordicGiants")}</i></Text>
                    <Text style={styles.textohistorianordica}>
                        {t("container.TextHistoryNordicGiants1")}
                    </Text>
                    <Text style={styles.historianordica}><i>{t("container.TextHistoryNordicGodsGiants")}</i></Text>
                    <Text style={styles.textohistorianordica}>
                        {t("container.TextHistoryNordicGodsGiants1")}
                    </Text>
                    <Text style={styles.historianordica}><i>{t("container.TextHistoryNordicKingsHeroes")}</i></Text>
                    <Text style={styles.textohistorianordica}>
                        {t("container.TextHistoryNordicKingsHeroes1")}
                    </Text>
                    <Text style={styles.historianordica}><i>{t("container.TextHistoryNordicChristianity")}</i></Text>
                    <Text style={styles.textohistorianordica}>
                        {t("container.TextHistoryNordicChristianity1")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryNordicChristianity2")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryNordicChristianity3")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryNordicChristianity4")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryNordicChristianity5")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryNordicChristianity6")}
                    </Text>
                    <Text style={styles.historianordica}><i>{t("container.TextChronologyNordic")}</i></Text>
                    <Text style={styles.historianordica}><i>{t("container.TextChronologyNordic01")}</i></Text>
                    <Text style={styles.textohistorianordica}>
                        {t("container.TextChronologyNordic1")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic2")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic3")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic4")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic5")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic6")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic7")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic8")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic9")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic10")}
                    </Text>
                    <Text style={styles.historianordica}><i>{t("container.TextChronologyNordic02")}</i></Text>
                    <Text style={styles.textohistorianordica}>
                        {t("container.TextChronologyNordic11")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic12")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic13")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic14")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic15")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic16")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic17")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic18")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic19")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic20")}
                    </Text>
                    <Text style={styles.historianordica}><i>{t("container.TextChronologyNordic03")}</i></Text>
                    <Text style={styles.textohistorianordica}>
                        {t("container.TextChronologyNordic21")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic22")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic23")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic24")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic25")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic26")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic27")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic28")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic29")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic30")}
                    </Text>
                    <Text style={styles.historianordica}><i>{t("container.TextChronologyNordic04")}</i></Text>
                    <Text style={styles.textohistorianordica}>
                        {t("container.TextChronologyNordic31")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic32")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic33")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic34")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic35")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic36")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic37")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic38")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic39")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic40")}
                    </Text>
                    <Text style={styles.historianordica}><i>{t("container.TextChronologyNordic05")}</i></Text>
                    <Text style={styles.textohistorianordica}>
                        {t("container.TextChronologyNordic41")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic42")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic43")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic44")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic45")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic46")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic47")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic48")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic49")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic50")}
                    </Text>
                    <Text style={styles.historianordica}><i>{t("container.TextChronologyNordic06")}</i></Text>
                    <Text style={styles.textohistorianordica}>
                        {t("container.TextChronologyNordic51")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyNordic52")}
                    </Text>
                    <View style={styles.contenedorBarcoOsebergBanderaReinoVikingoYork}>
                        <View>
                            <ImageBackground style={styles.imagenBarcoOseberg} source={BarcoOseberg} />
                            <Text style={styles.textoBarcoOseberg}>{t("container.TextShipOseberg")}</Text>
                        </View>
                        <View>
                            <ImageBackground style={styles.imagenBanderaReinoVikingoYork} source={BanderaReinoVikingoYork} />
                            <Text style={styles.textoBanderaReinoVikingoYork}>{t("container.TextFlagVikingKingdomYork")}</Text>
                        </View>
                    </View>
                    <View style={styles.contenedorHaraldIEspadasMontaña}>
                        <View>
                            <ImageBackground style={styles.imagenHaraldI} source={HaraldI} />
                            <Text style={styles.textoHaraldI}>{t("container.TextHaraldI")}</Text>
                        </View>
                        <View>
                            <ImageBackground style={styles.imagenEspadasMontaña} source={EspadasMontaña} />
                            <Text style={styles.textoEspadasMontaña}>{t("container.TextSwordsMountain")}</Text>
                        </View>
                    </View>
                    <View style={styles.contenedorEgilSkallagrimssonEstatuaRollon}>
                        <View>
                            <ImageBackground style={styles.imagenEgilSkallagrimsson} source={EgilSkallagrimsson} />
                            <Text style={styles.textoEgilSkallagrimsson}>{t("container.TextEgilSkallagrimsson")}</Text>
                        </View>
                        <View>
                            <ImageBackground style={styles.imagenEstatuaRollon} source={EstatuaRollon} />
                            <Text style={styles.textoEstatuaRollon}>{t("container.TextStatueRollon")}</Text>
                        </View>
                    </View>
                    <View style={styles.contenedorHaraldDienteAzulPiedrasJelling}>
                        <View>
                            <ImageBackground style={styles.imagenHaraldDienteAzul} source={HaraldDienteAzul} />
                            <Text style={styles.textoHaraldDienteAzul}>{t("container.TextHaraldBlueTooth")}</Text>
                        </View>
                        <View>
                            <ImageBackground style={styles.imagenPiedrasJelling} source={PiedrasJelling} />
                            <Text style={styles.textoPiedrasJelling}>{t("container.TextJellingStones")}</Text>
                        </View>
                    </View>
                    <View style={styles.contenedorCanutoGrandeMuerteSanOlav}>
                        <View>
                            <ImageBackground style={styles.imagenCanutoGrande} source={CanutoGrande} />
                            <Text style={styles.textoCanutoGrande}>{t("container.TextCanuteGreat")}</Text>
                        </View>
                        <View>
                            <ImageBackground style={styles.imagenMuerteSanOlav} source={MuerteSanOlav} />
                            <Text style={styles.textoMuerteSanOlav}>{t("container.TextDeathOlav")}</Text>
                        </View>
                    </View>
                    <View style={styles.contenedorBatallaStamfordBridge}>
                        <View>
                            <ImageBackground style={styles.imagenBatallaStamfordBridge} source={BatallaStamfordBridge} />
                            <Text style={styles.textoBatallaStamfordBridge}>{t("container.TextBattleStamfordBridge")}</Text>
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
                <PantallaHistoriaNordica></PantallaHistoriaNordica>
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

    historianordica: 
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

    textohistorianordica: 
    {
        color:'black',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 22,

        marginTop: 33,

        marginLeft: 11,
    },

    contenedorBarcoOsebergBanderaReinoVikingoYork: 
    {
        flexDirection: 'row',
    },

    imagenBarcoOseberg: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginLeft: 90,

        marginBottom: 11,
    },

    textoBarcoOseberg: 
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

    imagenBanderaReinoVikingoYork: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginLeft: 150,

        marginBottom: 11,
    },

    textoBanderaReinoVikingoYork: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 50,

        marginBottom: 11,
    },

    contenedorHaraldIEspadasMontaña: 
    {
        flexDirection: 'row',
    },

    imagenHaraldI: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoHaraldI: 
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

    imagenEspadasMontaña: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoEspadasMontaña: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 9,

        marginBottom: 11,
    },

    contenedorEgilSkallagrimssonEstatuaRollon: 
    {
        flexDirection: 'row',
    },

    imagenEgilSkallagrimsson: 
    {
        height: 600,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoEgilSkallagrimsson: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 30,

        marginBottom: 11,
    },

    imagenEstatuaRollon: 
    {
        height: 600,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoEstatuaRollon: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 50,

        marginBottom: 11,
    },

    contenedorHaraldDienteAzulPiedrasJelling: 
    {
        flexDirection: 'row',
    },

    imagenHaraldDienteAzul: 
    {
        height: 600,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoHaraldDienteAzul: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 50,

        marginBottom: 11,
    },

    imagenPiedrasJelling: 
    {
        height: 600,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoPiedrasJelling: 
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

    contenedorCanutoGrandeMuerteSanOlav: 
    {
        flexDirection: 'row',
    },

    imagenCanutoGrande: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoCanutoGrande: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 50,

        marginBottom: 11,
    },

    imagenMuerteSanOlav: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoMuerteSanOlav: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 30,

        marginBottom: 11,
    },

    contenedorBatallaStamfordBridge: 
    {
        flexDirection: 'row',
    },

    imagenBatallaStamfordBridge: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoBatallaStamfordBridge: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 50,

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

export default PantallaHistoriaNordica;
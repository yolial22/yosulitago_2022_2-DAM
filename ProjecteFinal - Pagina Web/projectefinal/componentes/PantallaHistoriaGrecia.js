import React from 'react';

import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';

import { Button } from 'react-native-paper';

import LogoEmpresa from '../imagenes/LogoEmpresa.png';

import UbicacionAntiguaGrecia from '../imagenes/HistoriaGrecia/UbicacionAntiguaGrecia.jpg';

import Atenas from '../imagenes/HistoriaGrecia/Atenas.jpg';

import Atenea from '../imagenes/HistoriaGrecia/Atenea.jpg';

import Esparta from '../imagenes/HistoriaGrecia/Esparta.jpg';

import Panteon from '../imagenes/HistoriaGrecia/Panteon.jpg';

import Tebas from '../imagenes/HistoriaGrecia/Tebas.jpg';

import Agora from '../imagenes/HistoriaGrecia/Agora.jpg';

import Polis from '../imagenes/HistoriaGrecia/Polis.jpg';

import Policleto from '../imagenes/HistoriaGrecia/Policleto.jpg';

import Fidias from '../imagenes/HistoriaGrecia/Fidias.jpg';

import CeramicaPeriodoHeladico from '../imagenes/CronologiaGrecia/CeramicaPeriodoHeladico.jpg';

import EsculturaLinealA from '../imagenes/CronologiaGrecia/EsculturaLinealA.jpg';

import Knossos from '../imagenes/CronologiaGrecia/Knossos.png';

import AnforaProtogeometrica from '../imagenes/CronologiaGrecia/AnforaProtogeometrica.jpg';

import RuinasEstadioOlimpia from '../imagenes/CronologiaGrecia/RuinasEstadioOlimpia.jpg';

import BustoHomero from '../imagenes/CronologiaGrecia/BustoHomero.jpg';

import BustoHipocrates from '../imagenes/CronologiaGrecia/BustoHipocrates.jpg';

import BatallaTermopilas from '../imagenes/CronologiaGrecia/BatallaTermopilas.png';

import panteon from '../imagenes/CronologiaGrecia/Panteon.jpg';

import ReinoMacedonia from '../imagenes/CronologiaGrecia/ReinoMacedonia.png';

import BatallaIssos from '../imagenes/CronologiaGrecia/BatallaIssos.jpg';

import FaroAlejandria from '../imagenes/CronologiaGrecia/FaroAlejandria.jpg';

import { useTranslation } from "react-i18next";

const PantallaHistoriaGrecia = ({navigation}) => {
    const [t, i18n] = useTranslation("globalhistoriagrecia");
    const PantallaHistoriaGrecia = () => {
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
                    <Text style={styles.historiagriega}><i>{t("container.HistoryGreek")}</i></Text>
                    <Text style={styles.historiagriega}><i>{t("container.HistoryGreekAncient")}</i></Text>
                    <Text style={styles.textohistoriagriega}>
                        {t("container.TextHistoryGreekAncient1")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryGreekAncient2")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryGreekAncient3")}
                    </Text>
                    <Text style={styles.historiagriega}><i>{t("container.TextHistoryGreekLocalitation")}</i></Text>
                    <Text style={styles.textohistoriagriega}>
                        {t("container.TextHistoryGreekLocalitation1")}
                    </Text>
                    <View style={styles.contenedorUbicacionAntiguaGrecia}>
                        <View>
                            <ImageBackground style={styles.imagenUbicacionAntiguaGrecia} source={UbicacionAntiguaGrecia} />
                            <Text style={styles.textoUbicacionAntiguaGrecia}>{t("container.TextHistoryGreekLocalitation2")}</Text>
                        </View>
                    </View>
                    <Text style={styles.historiagriega}><i>{t("container.TextHistoryGreekHistorical")}</i></Text>
                    <Text style={styles.textohistoriagriega}>
                        {t("container.TextHistoryGreekHistorical1")}
                    </Text>
                    <Text style={styles.historiagriega}><i>{t("container.TextHistoryGreekDark")}</i></Text>
                    <Text style={styles.textohistoriagriega}>
                        {t("container.TextHistoryGreekDark1")}
                    </Text>
                    <Text style={styles.historiagriega}><i>{t("container.TextHistoryGreekArchaic")}</i></Text>
                    <Text style={styles.textohistoriagriega}>
                        {t("container.TextHistoryGreekArchaic1")}
                    </Text>
                    <Text style={styles.historiagriega}><i>{t("container.TextHistoryGreekClassic")}</i></Text>
                    <Text style={styles.textohistoriagriega}>
                        {t("container.TextHistoryGreekClassic1")}
                    </Text>
                    <Text style={styles.historiagriega}><i>{t("container.TextHistoryGreekHellenistic")}</i></Text>
                    <Text style={styles.textohistoriagriega}>
                        {t("container.TextHistoryGreekHellenistic1")}
                    </Text>
                    <Text style={styles.historiagriega}><i>{t("container.TextHistoryGreekCharacteristics")}</i></Text>
                    <Text style={styles.textohistoriagriega}>
                        {t("container.TextHistoryGreekCharacteristics1")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryGreekCharacteristics2")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryGreekCharacteristics3")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryGreekCharacteristics4")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryGreekCharacteristics5")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryGreekCharacteristics6")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryGreekCharacteristics7")}
                    </Text>
                    <Text style={styles.historiagriega}><i>{t("container.TextHistoryGreekEconomy")}</i></Text>
                    <Text style={styles.textohistoriagriega}>
                        {t("container.TextHistoryGreekEconomy1")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryGreekEconomy2")}
                    </Text>
                    <Text style={styles.historiagriega}><i>{t("container.TextHistoryGreekOrganization")}</i></Text>
                    <Text style={styles.textohistoriagriega}>
                        {t("container.TextHistoryGreekOrganization1")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryGreekOrganization2")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryGreekOrganization3")}
                    </Text>
                    <Text style={styles.historiagriega}><i>{t("container.TextHistoryGreekSocialOrganization")}</i></Text>
                    <Text style={styles.textohistoriagriega}>
                        {t("container.TextHistoryGreekSocialOrganization1")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryGreekSocialOrganization2")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryGreekSocialOrganization3")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryGreekSocialOrganization4")}
                    </Text>
                    <Text style={styles.historiagriega}><i>{t("container.TextHistoryGreekReligion")}</i></Text>
                    <Text style={styles.textohistoriagriega}>
                        {t("container.TextHistoryGreekReligion1")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryGreekReligion2")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryGreekReligion3")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryGreekReligion4")}
                    </Text>
                    <View style={styles.contenedorAtenasAtenea}>
                        <View>
                            <ImageBackground style={styles.imagenAtenas} source={Atenas} />
                            <Text style={styles.textoAtenas}>{t("container.TextAthens")}</Text>
                        </View>
                        <View>
                            <ImageBackground style={styles.imagenAtenea} source={Atenea} />
                            <Text style={styles.textoAtenea}>{t("container.TextAthenea")}</Text>
                        </View>
                    </View>
                    <View style={styles.contenedorEspartaPanteon}>
                        <View>
                            <ImageBackground style={styles.imagenEsparta} source={Esparta} />
                            <Text style={styles.textoEsparta}>{t("container.TextSparta")}</Text>
                        </View>
                        <View>
                            <ImageBackground style={styles.imagenPanteon} source={Panteon} />
                            <Text style={styles.textoPanteon}>{t("container.TextPantheon")}</Text>
                        </View>
                    </View>
                    <View style={styles.contenedorAgoraPolis}>
                        <View>
                            <ImageBackground style={styles.imagenAgora} source={Agora} />
                            <Text style={styles.textoAgora}>{t("container.TextAgora")}</Text>
                        </View>
                        <View>
                            <ImageBackground style={styles.imagenPolis} source={Polis} />
                            <Text style={styles.textoPolis}>{t("container.TextPolys")}</Text>
                        </View>
                    </View>
                    <View style={styles.contenedorTebas}>
                        <View>
                            <ImageBackground style={styles.imagenTebas} source={Tebas} />
                            <Text style={styles.textoTebas}>{t("container.TextThebes")}</Text>
                        </View>
                    </View>
                    <Text style={styles.historiagriega}><i>{t("container.TextHistoryGreekArchitecture")}</i></Text>
                    <Text style={styles.textohistoriagriega}>
                        {t("container.TextHistoryGreekArchitecture1")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryGreekArchitecture2")}
                        <br></br>
                        <br></br>
                        {t("container.TextHistoryGreekArchitecture3")}
                    </Text>
                    <Text style={styles.historiagriega}><i>{t("container.TextHistoryGreekSculpture")}</i></Text>
                    <Text style={styles.textohistoriagriega}>
                        {t("container.TextHistoryGreekSculpture1")}
                    </Text>
                    <View style={styles.contenedorPolicletoFidias}>
                        <View>
                            <ImageBackground style={styles.imagenPolicleto} source={Policleto} />
                            <Text style={styles.textoPolicleto}>{t("container.TextPolykleitos")}</Text>
                        </View>
                        <View>
                            <ImageBackground style={styles.imagenFidias} source={Fidias} />
                            <Text style={styles.textoFidias}>{t("container.TextPhibias")}</Text>
                        </View>
                    </View>
                    <Text style={styles.cronologiagriega}><i>{t("container.TextChronologyGreek")}</i></Text>
                    <Text style={styles.historiagriega}><i>{t("container.TextChronologyGreekNeolithic")}</i></Text>
                    <Text style={styles.textocronologiagriega}>
                        {t("container.TextChronologyGreekNeolithic1")}
                    </Text>
                    <Text style={styles.historiagriega}><i>{t("container.TextChronologyGreekBronceAge")}</i></Text>
                    <Text style={styles.textocronologiagriega}>
                        {t("container.TextChronologyGreekBronceAge1")}
                    </Text>
                    <View style={styles.contenedorCeramicaPeriodoHeladico}>
                        <View>
                            <ImageBackground style={styles.imagenCeramicaPeriodoHeladico} source={CeramicaPeriodoHeladico} />
                            <Text style={styles.textoCeramicaPeriodoHeladico}>{t("container.TextCeramics")}</Text>
                        </View>
                    </View>
                    <Text style={styles.historiagriega}><i>{t("container.TextChronologyGreekBronceAgeMiddle")}</i></Text>
                    <Text style={styles.textocronologiagriega}>
                        {t("container.TextChronologyGreekBronceAgeMiddle1")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyGreekBronceAgeMiddle2")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyGreekBronceAgeMiddle3")}
                    </Text>
                    <View style={styles.contenedorEsculturaLinealA}>
                        <View>
                            <ImageBackground style={styles.imagenEsculturaLinealA} source={EsculturaLinealA} />
                            <Text style={styles.textoEsculturaLinealA}>{t("container.TextLinearSculptureA")}</Text>
                        </View>
                    </View>
                    <Text style={styles.historiagriega}><i>{t("container.TextChronologyGreekBronceAgeRecent")}</i></Text>
                    <Text style={styles.textocronologiagriega}>
                        {t("container.TextChronologyGreekBronceAgeRecent1")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyGreekBronceAgeRecent2")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyGreekBronceAgeRecent3")}
                    </Text>
                    <View style={styles.contenedorKnossos}>
                        <View>
                            <ImageBackground style={styles.imagenKnossos} source={Knossos} />
                            <Text style={styles.textoKnossos}>{t("container.TextKnossos")}</Text>
                        </View>
                    </View>
                    <Text style={styles.historiagriega}><i>{t("container.TextChronologyGreekDark")}</i></Text>
                    <Text style={styles.textocronologiagriega}>
                        {t("container.TextChronologyGreekDark1")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyGreekDark2")}
                    </Text>
                    <View style={styles.contenedorAnforaProtogeometrica}>
                        <View>
                            <ImageBackground style={styles.imagenAnforaProtogeometrica} source={AnforaProtogeometrica} />
                            <Text style={styles.textoAnforaProtogeometrica}>{t("container.TextProtogeometricAmphora")}</Text>
                        </View>
                    </View>
                    <Text style={styles.historiagriega}><i>{t("container.TextChronologyGreekDarkRecent")}</i></Text>
                    <Text style={styles.textocronologiagriega}>
                        {t("container.TextChronologyGreekDarkRecent1")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyGreekDarkRecent2")}
                    </Text>
                    <View style={styles.contenedorRuinasEstadioOlimpia}>
                        <View>
                            <ImageBackground style={styles.imagenRuinasEstadioOlimpia} source={RuinasEstadioOlimpia} />
                            <Text style={styles.textoRuinasEstadioOlimpia}>{t("container.TextOlympiaStadium")}</Text>
                        </View>
                    </View>
                    <Text style={styles.historiagriega}><i>{t("container.TextChronologyGreekDarkArchaic")}</i></Text>
                    <Text style={styles.historiagriega}><i>{t("container.TextChronologyGreekDarkArchaic01")}</i></Text>
                    <Text style={styles.textocronologiagriega}>
                        {t("container.TextChronologyGreekDarkArchaic1")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyGreekDarkArchaic2")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyGreekDarkArchaic3")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyGreekDarkArchaic4")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyGreekDarkArchaic5")}
                    </Text>
                    <Text style={styles.historiagriega}><i>{t("container.TextChronologyGreekDarkArchaic02")}</i></Text>
                    <Text style={styles.textocronologiagriega}>
                        {t("container.TextChronologyGreekDarkArchaic6")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyGreekDarkArchaic7")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyGreekDarkArchaic8")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyGreekDarkArchaic9")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyGreekDarkArchaic10")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyGreekDarkArchaic11")}
                    </Text>
                    <View style={styles.contenedorBustoHomeroBustoHipocrates}>
                        <View>
                            <ImageBackground style={styles.imagenBustoHomero} source={BustoHomero} />
                            <Text style={styles.textoBustoHomero}>{t("container.TextHomer")}</Text>
                        </View>
                        <View>
                            <ImageBackground style={styles.imagenBustoHipocrates} source={BustoHipocrates} />
                            <Text style={styles.textoBustoHipocrates}>{t("container.TextHipocrates")}</Text>
                        </View>
                    </View>
                    <Text style={styles.historiagriega}><i>{t("container.TextChronologyGreekClassic")}</i></Text>
                    <Text style={styles.historiagriega}><i>{t("container.TextChronologyGreekDarkArchaic03")}</i></Text>
                    <Text style={styles.textocronologiagriega}>
                        {t("container.TextChronologyGreekClassic1")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyGreekClassic2")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyGreekClassic3")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyGreekClassic4")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyGreekClassic5")}
                    </Text>
                    <Text style={styles.historiagriega}><i>{t("container.TextChronologyGreekDarkArchaic04")}</i></Text>
                    <Text style={styles.textocronologiagriega}>
                        {t("container.TextChronologyGreekClassic6")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyGreekClassic7")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyGreekClassic8")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyGreekClassic9")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyGreekClassic10")}
                    </Text>
                    <Text style={styles.historiagriega}><i>{t("container.TextChronologyGreekDarkArchaic05")}</i></Text>
                    <Text style={styles.textocronologiagriega}>
                        {t("container.TextChronologyGreekClassic11")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyGreekClassic12")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyGreekClassic13")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyGreekClassic14")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyGreekClassic15")}
                    </Text>
                    <Text style={styles.historiagriega}><i>{t("container.TextChronologyGreekDarkArchaic06")}</i></Text>
                    <Text style={styles.textocronologiagriega}>
                        {t("container.TextChronologyGreekClassic16")}
                        <br></br>
                        <br></br>
                        {t("container.TextChronologyGreekClassic17")}
                    </Text>
                    <View style={styles.contenedorBatallaTermopilasPanteon}>
                        <View>
                            <ImageBackground style={styles.imagenBatallaTermopilas} source={BatallaTermopilas} />
                            <Text style={styles.textoBatallaTermopilas}>{t("container.TextThermopylae")}</Text>
                        </View>
                        <View>
                            <ImageBackground style={styles.imagenPanteon} source={panteon} />
                            <Text style={styles.textoPanteon}>{t("container.TextPantheon")}</Text>
                        </View>
                    </View>
                    <View style={styles.contenedorReinoMacedoniaBatallaIssos}>
                        <View>
                            <ImageBackground style={styles.imagenReinoMacedonia} source={ReinoMacedonia} />
                            <Text style={styles.textoReinoMacedonia}>{t("container.TextKingdomMacedonian")}</Text>
                        </View>
                        <View>
                            <ImageBackground style={styles.imagenBatallaIssos} source={BatallaIssos} />
                            <Text style={styles.textoBatallaIssos}>{t("container.TextIssos")}</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.historiagriega}><i>{t("container.TextChronologyGreekHellenistic")}</i></Text>
                <Text style={styles.textocronologiagriega}>
                    {t("container.TextChronologyGreekHellenistic1")}
                    <br></br>
                    <br></br>
                    {t("container.TextChronologyGreekHellenistic2")}
                    <br></br>
                    <br></br>
                    {t("container.TextChronologyGreekHellenistic3")}
                    <br></br>
                    <br></br>
                    {t("container.TextChronologyGreekHellenistic4")}
                    <br></br>
                    <br></br>
                    {t("container.TextChronologyGreekHellenistic5")}
                    <br></br>
                    <br></br>
                    {t("container.TextChronologyGreekHellenistic6")}
                    <br></br>
                    <br></br>
                    {t("container.TextChronologyGreekHellenistic7")}
                </Text>
                <View style={styles.contenedorFaroAlejandria}>
                    <View>
                        <ImageBackground style={styles.imagenFaroAlejandria} source={FaroAlejandria} />
                        <Text style={styles.textoFaroAlejandria}>{t("container.TextChronologyGreekLighthouseAlexandria")}</Text>
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
                <PantallaHistoriaGrecia></PantallaHistoriaGrecia>
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

    historiagriega: 
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

    textohistoriagriega: 
    {
        color:'black',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 22,

        marginTop: 33,

        marginLeft: 11,
    },

    contenedorUbicacionAntiguaGrecia: 
    {
        flexDirection: 'row',
    },

    imagenUbicacionAntiguaGrecia: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginLeft: 70,

        marginBottom: 11,
    },

    textoUbicacionAntiguaGrecia: 
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

    contenedorAtenasAtenea: 
    {
        flexDirection: 'row',
    },

    imagenAtenas: 
    {
        height: 600,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoAtenas: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 190,

        marginBottom: 11,
    },

    imagenAtenea: 
    {
        height: 600,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoAtenea: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 170,

        marginBottom: 11,
    },

    contenedorEspartaPanteon: 
    {
        flexDirection: 'row',
    },

    imagenEsparta: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoEsparta: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 190,

        marginBottom: 11,
    },

    imagenPanteon: 
    {
        height: 600,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoPanteon: 
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

    contenedorTebas: 
    {
        flexDirection: 'row',
    },

    imagenTebas: 
    {
        height: 600,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoTebas: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 200,

        marginBottom: 11,
    },

    contenedorAgoraPolis: 
    {
        flexDirection: 'row',
    },

    imagenAgora: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoAgora: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 210,

        marginBottom: 11,
    },

    imagenPolis: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoPolis: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 250,

        marginBottom: 11,
    },

    contenedorPolicletoFidias: 
    {
        flexDirection: 'row',
    },

    imagenPolicleto: 
    {
        height: 800,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoPolicleto: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 210,

        marginBottom: 11,
    },

    imagenFidias: 
    {
        height: 800,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoFidias: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 190,

        marginBottom: 11,
    },

    cronologiagriega: 
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

    textocronologiagriega: 
    {
        color:'black',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 22,

        marginTop: 33,

        marginLeft: 11,
    },

    contenedorCeramicaPeriodoHeladico: 
    {
        flexDirection: 'row',
    },

    imagenCeramicaPeriodoHeladico: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoCeramicaPeriodoHeladico: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 25,

        marginBottom: 11,
    },

    contenedorEsculturaLinealA: 
    {
        flexDirection: 'row',
    },

    imagenEsculturaLinealA: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoEsculturaLinealA: 
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

    contenedorKnossos: 
    {
        flexDirection: 'row',
    },

    imagenKnossos: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoKnossos: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 175,

        marginBottom: 11,
    },

    contenedorAnforaProtogeometrica: 
    {
        flexDirection: 'row',
    },

    imagenAnforaProtogeometrica: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoAnforaProtogeometrica: 
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

    contenedorRuinasEstadioOlimpia: 
    {
        flexDirection: 'row',
    },

    imagenRuinasEstadioOlimpia: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoRuinasEstadioOlimpia: 
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

    contenedorBustoHomeroBustoHipocrates: 
    {
        flexDirection: 'row',
    },

    imagenBustoHomero: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoBustoHomero: 
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

    imagenBustoHipocrates: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoBustoHipocrates: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 110,

        marginBottom: 11,
    },

    contenedorBatallaTermopilasPanteon: 
    {
        flexDirection: 'row',
    },

    imagenBatallaTermopilas: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoBatallaTermopilas: 
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

    imagenPanteon: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoPanteon: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 200,

        marginBottom: 11,
    },

    contenedorReinoMacedoniaBatallaIssos: 
    {
        flexDirection: 'row',
    },

    imagenReinoMacedonia: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoReinoMacedonia: 
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

    imagenBatallaIssos: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoBatallaIssos: 
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

    contenedorFaroAlejandria: 
    {
        flexDirection: 'row',
    },

    imagenFaroAlejandria: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoFaroAlejandria: 
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

export default PantallaHistoriaGrecia;
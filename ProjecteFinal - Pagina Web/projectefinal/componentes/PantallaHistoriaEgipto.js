import React from 'react';

import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';

import { Button } from 'react-native-paper';

import LogoEmpresa from '../imagenes/LogoEmpresa.png';

import Menes from '../imagenes/HistoriaEgipto/Menes.jpg';

import PepyII from '../imagenes/HistoriaEgipto/PepyII.jpg';

import PiramideGiza from '../imagenes/HistoriaEgipto/PiramideGiza.jpg';

import Heracleopolis from '../imagenes/HistoriaEgipto/Heracleopolis.jpg';

import Memphis from '../imagenes/HistoriaEgipto/Memphis.jpg';

import Tebas from '../imagenes/HistoriaEgipto/Tebas.jpg';

import Mentuhotep from '../imagenes/HistoriaEgipto/Mentuhotep.jpg';

import MentuhotepIV from '../imagenes/HistoriaEgipto/MentuhotepIV.jpg';

import AmenemhetI from '../imagenes/HistoriaEgipto/AmenemhetI.jpg';

import AmenemhetIII from '../imagenes/HistoriaEgipto/AmenemhetIII.jpg';

import AmenemhetIV from '../imagenes/HistoriaEgipto/AmenemhetIV.jpg';

import Sobekneferu from '../imagenes/HistoriaEgipto/Sobekneferu.jpg';

import AhmoseI from '../imagenes/HistoriaEgipto/AhmoseI.jpg';

import AmenhotepI from '../imagenes/HistoriaEgipto/AmenhotepI.jpg';

import AmenhotepIII from '../imagenes/HistoriaEgipto/AmenhotepIII.jpg';

import AmenhotepIV from '../imagenes/HistoriaEgipto/AmenhotepIV.jpg';

import ThutmosisI from '../imagenes/HistoriaEgipto/ThutmosisI.jpg';

import ThutmosisIII from '../imagenes/HistoriaEgipto/ThutmosisIII.jpg';

import Hatshepsut from '../imagenes/HistoriaEgipto/Hatshepsut.jpg';

import Amarna from '../imagenes/HistoriaEgipto/Amarna.jpg';

import ValleReyes from '../imagenes/HistoriaEgipto/ValleReyes.jpg';

import Tutankamon from '../imagenes/HistoriaEgipto/Tutankamon.jpg';

import RamsesIII from '../imagenes/HistoriaEgipto/RamsesIII.jpg';

import Sheshonq from '../imagenes/HistoriaEgipto/Sheshonq.jpg';

import Shabako from '../imagenes/HistoriaEgipto/Shabako.jpg';

import Taharka from '../imagenes/HistoriaEgipto/Taharka.jpg';

import Esarhaddon from '../imagenes/HistoriaEgipto/Esarhaddon.jpg';

import NechoSais from '../imagenes/HistoriaEgipto/NechoSais.jpg';

import PsammetichusI from '../imagenes/HistoriaEgipto/PsammetichusI.jpg';

import PsammetichusIII from '../imagenes/HistoriaEgipto/PsammetichusIII.jpg';

import Cambises from '../imagenes/HistoriaEgipto/Cambises.jpg';

import Dario from '../imagenes/HistoriaEgipto/Dario.jpg';

import Jerjes from '../imagenes/HistoriaEgipto/Jerjes.jpg';

import ArtajerjesIII from '../imagenes/HistoriaEgipto/ArtajerjesIII.png';

import AlejandroMagno from '../imagenes/HistoriaEgipto/AlejandroMagno.jpg';

import Ptolomeo from '../imagenes/HistoriaEgipto/Ptolomeo.jpg';

import CleopatraVII from '../imagenes/HistoriaEgipto/CleopatraVII.jpg';

import OctavioCesarAugusto from '../imagenes/HistoriaEgipto/OctavioCesarAugusto.jpg';

import menes from '../imagenes/CronologiaEgipto/Menes.jpg';

import PiramideSaqqara from '../imagenes/CronologiaEgipto/PiramideSaqqara.jpg';

import HorusAha from '../imagenes/CronologiaEgipto/HorusAha.jpg';

import Djer from '../imagenes/CronologiaEgipto/Djer.jpg';

import Semerkhet from '../imagenes/CronologiaEgipto/Semerkhet.jpg';

import Raneb from '../imagenes/CronologiaEgipto/Raneb.jpg';

import Peribsen from '../imagenes/CronologiaEgipto/Peribsen.jpg';

import Khasekhemwy from '../imagenes/CronologiaEgipto/Khasekhemwy.jpg';

import Zoser from '../imagenes/CronologiaEgipto/Zoser.jpg';

import piramidegiza from '../imagenes/CronologiaEgipto/PiramideGiza.jpg';

import GranEsfinge from '../imagenes/CronologiaEgipto/GranEsfinge.jpg';

import Snefru from '../imagenes/CronologiaEgipto/Snefru.jpg';

import Khufu from '../imagenes/CronologiaEgipto/Khufu.jpg';

import Khafra from '../imagenes/CronologiaEgipto/Khafra.jpg';

import Menkaura from '../imagenes/CronologiaEgipto/Menkaura.jpg';

import Userkaf from '../imagenes/CronologiaEgipto/Userkaf.jpg';

import Sahura from '../imagenes/CronologiaEgipto/Sahura.jpg';

import Shepseskara from '../imagenes/CronologiaEgipto/Shepseskara.jpg';

import DjedkaraIsesi from '../imagenes/CronologiaEgipto/DjedkaraIsesi.jpg';

import IntefII from '../imagenes/CronologiaEgipto/IntefII.jpg';

import MentuhotepIII from '../imagenes/CronologiaEgipto/MentuhotepIII.jpg';

import SenwosretI from '../imagenes/CronologiaEgipto/SenwosretI.jpg';

import SenwosretIII from '../imagenes/CronologiaEgipto/SenwosretIII.jpg';

import amenemhetIII from '../imagenes/CronologiaEgipto/AmenemhetIII.jpg';

import amenemhetIV from '../imagenes/CronologiaEgipto/AmenemhetIV.jpg';

import sobekneferu from '../imagenes/CronologiaEgipto/Sobekneferu.jpg';

import Sobekhotep from '../imagenes/CronologiaEgipto/Sobekhotep.jpg';

import Avaris from '../imagenes/CronologiaEgipto/Avaris.jpg';

import tebas from '../imagenes/CronologiaEgipto/Tebas.jpg';

import amarna from '../imagenes/CronologiaEgipto/Amarna.jpg';

import ahmoseI from '../imagenes/CronologiaEgipto/AhmoseI.jpg';

import thutmosisIII from '../imagenes/CronologiaEgipto/ThutmosisIII.jpg';

import hatshepsut from '../imagenes/CronologiaEgipto/Hatshepsut.jpg';

import AmenofisII from '../imagenes/CronologiaEgipto/AmenofisII.jpg';

import ThutmosisIV from '../imagenes/CronologiaEgipto/ThutmosisIV.jpg';

import AmenofisIII from '../imagenes/CronologiaEgipto/AmenofisIII.jpg';

import Akhenaton from '../imagenes/CronologiaEgipto/Akhenaton.jpg';

import tutankamon from '../imagenes/CronologiaEgipto/tutankamon.jpg';

import Ay from '../imagenes/CronologiaEgipto/Ay.jpg';

import Horemheb from '../imagenes/CronologiaEgipto/Horemheb.jpg';

import RamsesI from '../imagenes/CronologiaEgipto/RamsesI.jpg';

import SetiI from '../imagenes/CronologiaEgipto/SetiI.jpg';

import RamsesII from '../imagenes/CronologiaEgipto/RamsesII.jpg';

import Merenptah from '../imagenes/CronologiaEgipto/Merenptah.jpg';

import Siptah from '../imagenes/CronologiaEgipto/Siptah.jpg';

import Tawosret from '../imagenes/CronologiaEgipto/Tawosret.jpg';

import Sethnakhte from '../imagenes/CronologiaEgipto/Sethnakhte.jpg';

import ramsesIII from '../imagenes/CronologiaEgipto/RamsesIII.jpg';

import RamsesV from '../imagenes/CronologiaEgipto/RamsesV.jpg';

import RamsesVI from '../imagenes/CronologiaEgipto/RamsesVI.jpg';

import SheshonqII from '../imagenes/CronologiaEgipto/SheshonqII.jpg';

import OsorkonIII from '../imagenes/CronologiaEgipto/OsorkonIII.jpg';

import shabako from '../imagenes/CronologiaEgipto/Shabako.jpg';

import PsameticoI from '../imagenes/CronologiaEgipto/PsameticoI.jpg';

import dario from '../imagenes/CronologiaEgipto/Dario.jpg';

import NectaneboI from '../imagenes/CronologiaEgipto/NectaneboI.jpg';

import NectaneboII from '../imagenes/CronologiaEgipto/NectaneboII.jpg';

import alejandromagno from '../imagenes/CronologiaEgipto/AlejandroMagno.jpg';

import Filipo from '../imagenes/CronologiaEgipto/Filipo.jpg';

import ptolomeo from '../imagenes/CronologiaEgipto/Ptolomeo.jpg';

import PtolomeoIII from '../imagenes/CronologiaEgipto/PtolomeoIII.jpg';

import PtolomeoIV from '../imagenes/CronologiaEgipto/PtolomeoIV.jpg';

import PtolomeoV from '../imagenes/CronologiaEgipto/PtolomeoV.jpg';

import CleopatraIII from '../imagenes/CronologiaEgipto/CleopatraIII.jpg';

import octaviocesaraugusto from '../imagenes/CronologiaEgipto/OctavioCesarAugusto.jpg';

import Tiberio from '../imagenes/CronologiaEgipto/Tiberio.jpg';

import Diocleciano from '../imagenes/CronologiaEgipto/Diocleciano.jpg';

import Teodosio from '../imagenes/CronologiaEgipto/Teodosio.jpg';

import ValentinianoIII from '../imagenes/CronologiaEgipto/ValentinianoIII.jpg';

import { useTranslation } from "react-i18next";

const PantallaHistoriaEgipto = ({navigation}) => {
    const [t, i18n] = useTranslation("globalhistoriaegipto");
    const PantallaHistoriaEgipto = () => {
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
                        <Text style={styles.historiaegipcia}><i>{t("container.HistoryEgypt")}</i></Text>
                        <Text style={styles.textohistoriaegipcia}>
                            {t("container.TextHistoryEgypt1")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgypt2")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgypt3")}
                        </Text>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextHistoryEgyptPredynastic")}</i></Text>
                        <Text style={styles.textohistoriaegipcia}>
                            {t("container.TextHistoryEgyptPredynastic1")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptPredynastic2")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptPredynastic3")}
                            <br></br>
                            <br></br> 
                            {t("container.TextHistoryEgyptPredynastic4")}
                        </Text>
                        <View style={styles.contenedorMenes}>
                            <View>
                                <ImageBackground style={styles.imagenMenes} source={Menes} />
                                <Text style={styles.textoMenes}>Menes</Text>
                            </View>
                        </View>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextHistoryEgyptArchaic")}</i></Text>
                        <Text style={styles.textohistoriaegipcia}>
                            {t("container.TextHistoryEgyptArchaic1")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptArchaic2")}
                        </Text>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextHistoryEgyptPyramids")}</i></Text>
                        <Text style={styles.textohistoriaegipcia}>
                            {t("container.TextHistoryEgyptPyramids1")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptPyramids2")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptPyramids3")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptPyramids4")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptPyramids5")}
                        </Text>
                        <View style={styles.contenerdorimagenesPepyIIPiramideGiza}>
                            <View>
                                <ImageBackground style={styles.imagenPepyII} source={PepyII} />
                                <Text style={styles.textoPepyII}>Pepy II</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenPiramideGiza} source={PiramideGiza} />
                                <Text style={styles.textoPiramideGiza}>{t("container.TextPyramidGiza")}</Text>
                            </View>
                        </View>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextHistoryEgyptFirstIntermediate")}</i></Text>
                        <Text style={styles.textohistoriaegipcia}>
                            {t("container.TextHistoryEgyptFirstIntermediate1")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptFirstIntermediate2")}
                        </Text>
                        <View style={styles.contenedorHeracleopolisMemphis}>
                            <View>
                                <ImageBackground style={styles.imagenHeracleopolis} source={Heracleopolis} />
                                <Text style={styles.textoHeracleopolis}>{t("container.TextHeracleopolis")}</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenMemphis} source={Memphis} />
                                <Text style={styles.textoMemphis}>Memphis</Text>
                            </View>
                        </View>
                        <View style={styles.contenedorTebasMentuhotep}>
                            <View>
                                <ImageBackground style={styles.imagenTebas} source={Tebas} />
                                <Text style={styles.textoTebas}>{t("container.TextThebes")}</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenMentuhotep} source={Mentuhotep} />
                                <Text style={styles.textoMentuhotep}>Mentuhotep</Text>
                            </View>
                        </View>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextHistoryEgyptTwelfthDynasty")}</i></Text>
                        <Text style={styles.textohistoriaegipcia}>
                            {t("container.TextHistoryEgyptTwelfthDynasty1")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptTwelfthDynasty2")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptTwelfthDynasty3")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptTwelfthDynasty4")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptTwelfthDynasty5")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptTwelfthDynasty6")}
                        </Text>
                        <View style={styles.contenedorMentuhotepIVAmenemhetI}>
                            <View>
                                <ImageBackground style={styles.imagenMentuhotepIV} source={MentuhotepIV} />
                                <Text style={styles.textoMentuhotepIV}>Mentuhotep IV</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenAmenemhetI} source={AmenemhetI} />
                                <Text style={styles.textoAmenemhetI}>Amenemhet I</Text>
                            </View>
                        </View>
                        <View style={styles.contenedorAmenemhetIIIAmenemhetIV}>
                            <View>
                                <ImageBackground style={styles.imagenAmenemhetIII} source={AmenemhetIII} />
                                <Text style={styles.textoAmenemhetIII}>Amenemhet III</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenAmenemhetIV} source={AmenemhetIV} />
                                <Text style={styles.textoAmenemhetIV}>Amenemhet IV</Text>
                            </View>
                        </View>
                        <View style={styles.contenedorSobekneferu}>
                            <View>
                                <ImageBackground style={styles.imagenSobekneferu} source={Sobekneferu} />
                                <Text style={styles.textoSobekneferu}>Sobekneferu</Text>
                            </View>
                        </View>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextHistoryEgyptSecondIntermediate")}</i></Text>
                        <Text style={styles.textohistoriaegipcia}>
                            {t("container.TextHistoryEgyptSecondIntermediate1")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptSecondIntermediate2")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptSecondIntermediate3")}
                            <br></br>
                            <br></br> 
                            {t("container.TextHistoryEgyptSecondIntermediate4")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptSecondIntermediate5")}
                        </Text>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextHistoryEgyptNewKingdom")}</i></Text>
                        <Text style={styles.textohistoriaegipcia}>
                            {t("container.TextHistoryEgyptNewKingdom1")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptNewKingdom2")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptNewKingdom3")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptNewKingdom4")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptNewKingdom5")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptNewKingdom6")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptNewKingdom7")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptNewKingdom8")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptNewKingdom9")}
                        </Text>
                        <View style={styles.contenedorAhmoseIAmenhotepI}>
                            <View>
                                <ImageBackground style={styles.imagenAhmoseI} source={AhmoseI} />
                                <Text style={styles.textoAhmoseI}>Ahmose I</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenAmenhotepI} source={AmenhotepI} />
                                <Text style={styles.textoAmenhotepI}>Amenhotep I</Text>
                            </View>
                        </View>
                        <View style={styles.contenedorAmenhotepIIIAmenhotepIV}>
                            <View>
                                <ImageBackground style={styles.imagenAmenhotepIII} source={AmenhotepIII} />
                                <Text style={styles.textoAmenhotepIII}>Amenhotep III</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenAmenhotepIV} source={AmenhotepIV} />
                                <Text style={styles.textoAmenhotepIV}>Amenhotep IV</Text>
                            </View>
                        </View>
                        <View style={styles.contenedorThutmosisIThutmosisIII}>
                            <View>
                                <ImageBackground style={styles.imagenThutmosisI} source={ThutmosisI} />
                                <Text style={styles.textoThutmosisI}>Thutmosis I</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenThutmosisIII} source={ThutmosisIII} />
                                <Text style={styles.textoThutmosisIII}>Thutmosis III</Text>
                            </View>
                        </View>
                        <View style={styles.contenedorTutankamonRamsesIII}>
                            <View>
                                <ImageBackground style={styles.imagenTutankamon} source={Tutankamon} />
                                <Text style={styles.textoTutankamon}>{t("container.TextTutankhamun")}</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenRamsesIII} source={RamsesIII} />
                                <Text style={styles.textoRamsesIII}>Ramses III</Text>
                            </View>
                        </View>
                        <View style={styles.contenedorAmarnaValleReyes}>
                            <View>
                                <ImageBackground style={styles.imagenAmarna} source={Amarna} />
                                <Text style={styles.textoAmarna}>Amarna</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenValleReyes} source={ValleReyes} />
                                <Text style={styles.textoValleReyes}>{t("container.TextValleyKings")}</Text>
                            </View>
                        </View>
                        <View style={styles.contenedorHatshepsut}>
                            <View>
                                <ImageBackground style={styles.imagenHatshepsut} source={Hatshepsut} />
                                <Text style={styles.textoHatshepsut}>Hatshepsut</Text>
                            </View>
                        </View>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextHistoryEgyptThirdIntermediate")}</i></Text>
                        <Text style={styles.textohistoriaegipcia}>
                            {t("container.TextHistoryEgyptThirdIntermediate1")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptThirdIntermediate2")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptThirdIntermediate3")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptThirdIntermediate4")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptThirdIntermediate5")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptThirdIntermediate6")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptThirdIntermediate7")}
                        </Text>
                        <View style={styles.contenedorSheshonqShabako}>
                            <View>
                                <ImageBackground style={styles.imagenSheshonq} source={Sheshonq} />
                                <Text style={styles.textoSheshonq}>Sheshonq</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenShabako} source={Shabako} />
                                <Text style={styles.textoShabako}>Shabako</Text>
                            </View>
                        </View>
                        <View style={styles.contenedorTaharkaEsarhaddon}>
                            <View>
                                <ImageBackground style={styles.imagenTaharka} source={Taharka} />
                                <Text style={styles.textoTaharka}>Taharka</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenEsarhaddon} source={Esarhaddon} />
                                <Text style={styles.textoEsarhaddon}>Esarhaddon</Text>
                            </View>
                        </View>
                        <View style={styles.contenedorNechoSais}>
                            <View>
                                <ImageBackground style={styles.imagenNechoSais} source={NechoSais} />
                                <Text style={styles.textoNechoSais}>{t("container.TextNechoSais")}</Text>
                            </View>
                        </View>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextHistoryEgyptLastIntermediate")}</i></Text>
                        <Text style={styles.textohistoriaegipcia}> 
                            {t("container.TextHistoryEgyptLastIntermediate1")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptLastIntermediate2")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptLastIntermediate3")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptLastIntermediate4")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptLastIntermediate5")}
                            <br></br>
                            <br></br>
                            {t("container.TextHistoryEgyptLastIntermediate6")}
                        </Text>
                        <View style={styles.contenedorPsammetichusIPsammetichusIII}>
                            <View>
                                <ImageBackground style={styles.imagenPsammetichusI} source={PsammetichusI} />
                                <Text style={styles.textoPsammetichusI}>Psammetichus I</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenPsammetichusIII} source={PsammetichusIII} />
                                <Text style={styles.textoPsammetichusIII}>Psammetichus III</Text>
                            </View>
                        </View>
                        <View style={styles.contenedorCambisesDario}>
                            <View>
                                <ImageBackground style={styles.imagenCambises} source={Cambises} />
                                <Text style={styles.textoCambises}>{t("container.TextCambyses")}</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenDario} source={Dario} />
                                <Text style={styles.textoDario}>{t("container.TextDarius")}</Text>
                            </View>
                        </View>
                        <View style={styles.contenedorJerjesArtajerjesIII}>
                            <View>
                                <ImageBackground style={styles.imagenJerjes} source={Jerjes} />
                                <Text style={styles.textoJerjes}>{t("container.TextXerxes")}</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenArtajerjesIII} source={ArtajerjesIII} />
                                <Text style={styles.textoArtajerjesIII}>{t("container.TextArtaxerxesIII")} III</Text>
                            </View>
                        </View>
                        <View style={styles.contenedorAlejandroMagnoPtolomeo}>
                            <View>
                                <ImageBackground style={styles.imagenAlejandroMagno} source={AlejandroMagno} />
                                <Text style={styles.textoAlejandroMagno}>{t("container.TextAlexanderGreat")}</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenPtolomeo} source={Ptolomeo} />
                                <Text style={styles.textoPtolomeo}>{t("container.TextPtolemy")}</Text>
                            </View>
                        </View>
                        <View style={styles.contenedorCreopatraCesar}>
                            <View>
                                <ImageBackground style={styles.imagenCleopatra} source={CleopatraVII} />
                                <Text style={styles.textoCleopatra}>Cleopatra</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenOctavioCesarAugusto} source={OctavioCesarAugusto} />
                                <Text style={styles.textoOctavioCesarAugusto}>{t("container.TextOctavianCaesarAugustus")}</Text>
                            </View>
                        </View>
                        <Text style={styles.cronologiaegipcia}><i>{t("container.ChronologyEgypt")}</i></Text>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextChronologyEgyptPredynastic")}</i></Text>
                        <Text style={styles.textocronologiaegipcia}>
                            {t("container.TextChronologyEgyptPredynastic1")}
                        </Text>
                        <View style={styles.contenedorMenes}>
                            <View>
                                <ImageBackground style={styles.imagenMenes} source={menes} />
                                <Text style={styles.textoMenes}>Menes</Text>
                            </View>
                        </View>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextChronologyEgyptArchaic")}</i></Text>
                        <Text style={styles.textocronologiaegipcia}>
                            {t("container.TextChronologyEgyptArchaic1")}
                        </Text>
                        <View style={styles.contenedorPiramideSaqqara}>
                            <View>
                                <ImageBackground style={styles.imagenPiramideSaqqara} source={PiramideSaqqara} />
                                <Text style={styles.textoPiramideSaqqara}>{t("container.TextPyramidSaqqara")}</Text>
                            </View>
                        </View>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextChronologyEgyptFirstDynasty")}</i></Text>
                        <View style={styles.contenedorNarmerHorusAha}>
                            <View>
                                <ImageBackground style={styles.imagenNarmer} source={menes} />
                                <Text style={styles.textoNarmer}>Menes</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenHorusAha} source={HorusAha} />
                                <Text style={styles.textoHorusAha}>Horus Aha</Text>
                            </View>
                        </View>
                        <View style={styles.contenedorDjerSemerkhet}>
                            <View>
                                <ImageBackground style={styles.imagenDjer} source={Djer} />
                                <Text style={styles.textoDjer}>Djer</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenSemerkhet} source={Semerkhet} />
                                <Text style={styles.textoSemerkhet}>Semerkhet</Text>
                            </View>
                        </View>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextChronologyEgyptSecondDynasty")}</i></Text>
                        <View style={styles.contenedorRanebPeribsen}>
                            <View>
                                <ImageBackground style={styles.imagenRaneb} source={Raneb} />
                                <Text style={styles.textoRaneb}>Raneb</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenPeribsen} source={Peribsen} />
                                <Text style={styles.textoPeribsen}>Peribsen</Text>
                            </View>
                        </View>
                        <View style={styles.contenedorKhasekhemwy}>
                            <View>
                                <ImageBackground style={styles.imagenKhasekhemwy} source={Khasekhemwy} />
                                <Text style={styles.textoKhasekhemwy}>Khasekhemwy</Text>
                            </View>
                        </View>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextChronologyEgyptThirdDynasty")}</i></Text>
                        <View style={styles.contenedorZoser}>
                            <View>
                                <ImageBackground style={styles.imagenZoser} source={Zoser} />
                                <Text style={styles.textoZoser}>Zoser</Text>
                            </View>
                        </View>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextChronologyEgyptAncientEgyptianEmpire")}</i></Text>
                        <Text style={styles.textocronologiaegipcia}>
                            {t("container.TextChronologyEgyptAncientEgyptianEmpire1")}
                            <br></br>
                            <br></br>
                            {t("container.TextChronologyEgyptAncientEgyptianEmpire2")}
                            <br></br>
                            <br></br>
                            {t("container.TextChronologyEgyptAncientEgyptianEmpire3")}
                            <br></br>
                            <br></br>
                            {t("container.TextChronologyEgyptAncientEgyptianEmpire4")}
                            <br></br>
                            <br></br>
                            {t("container.TextChronologyEgyptAncientEgyptianEmpire5")}
                        </Text>
                        <View style={styles.contenedorPiramideGizaGranEsfinge}>
                            <View>
                                <ImageBackground style={styles.imagenPiramideGiza} source={piramidegiza} />
                                <Text style={styles.textoPiramideGiza}>{t("container.TextPyramidGiza")}</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenGranEsfinge} source={GranEsfinge} />
                                <Text style={styles.textoGranEsfinge}>{t("container.TextGreatSqhinx")}</Text>
                            </View>
                        </View>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextChronologyEgyptFourtDynasty")}</i></Text>
                        <View style={styles.contenedorSnefruKhufu}>
                            <View>
                                <ImageBackground style={styles.imagenSnefru} source={Snefru} />
                                <Text style={styles.textoSnefru}>{t("container.TextSnefru")}</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenKhufu} source={Khufu} />
                                <Text style={styles.textoKhufu}>{t("container.TextKhufu")}</Text>
                            </View>
                        </View>
                        <View style={styles.contenedorKhafraMenkaura}>
                            <View>
                                <ImageBackground style={styles.imagenKhafra} source={Khafra} />
                                <Text style={styles.textoKhafra}>{t("container.TextKhafra")}</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenMenkaura} source={Menkaura} />
                                <Text style={styles.textoMenkaura}>{t("container.TextMenkaura")}</Text>
                            </View>
                        </View>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextChronologyEgyptFifthDynasty")}</i></Text>
                        <View style={styles.contenedorUserkafSahura}>
                            <View>
                                <ImageBackground style={styles.imagenUserkaf} source={Userkaf} />
                                <Text style={styles.textoUserkaf}>{t("container.TextUserKaf")}</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenSahura} source={Sahura} />
                                <Text style={styles.textoSahura}>{t("container.TextSahura")}</Text>
                            </View>
                        </View>
                        <View style={styles.contenedorShepseskaraDjedkaraIsesi}>
                            <View>
                                <ImageBackground style={styles.imagenShepseskara} source={Shepseskara} />
                                <Text style={styles.textoShepseskara}>{t("container.TextShepseskara")}</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenDjedkaraIsesi} source={DjedkaraIsesi} />
                                <Text style={styles.textoDjedkaraIsesi}>{t("container.TextDjedkaraIsesi")}</Text>
                            </View>
                        </View>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextChronologyEgyptFirstIntermediate")}</i></Text>
                        <Text style={styles.textocronologiaegipcia}>
                            {t("container.TextChronologyEgyptFirstIntermediate1")}
                            <br></br>
                            <br></br>
                            {t("container.TextChronologyEgyptFirstIntermediate2")}
                            <br></br>
                            <br></br>
                            {t("container.TextChronologyEgyptFirstIntermediate3")}
                            <br></br>
                            <br></br>
                            {t("container.TextChronologyEgyptFirstIntermediate4")}
                        </Text>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextChronologyEgyptNinthTenthDynasty")}</i></Text>
                        <View style={styles.contenedorIntefII}>
                            <View>
                                <ImageBackground style={styles.imagenIntefII} source={IntefII} />
                                <Text style={styles.textoIntefII}>{t("container.TextIntefII")}</Text>
                            </View>
                        </View>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextChronologyEgyptEleventhDynasty")}</i></Text>
                        <View style={styles.contenedorMentuhotepIII}>
                            <View>
                                <ImageBackground style={styles.imagenMentuhotepIII} source={MentuhotepIII} />
                                <Text style={styles.textoMentuhotepIII}>{t("container.TextMentuhotepIII")}</Text>
                            </View>
                        </View>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextChronologyEgyptTwelfthDynasty")}</i></Text>
                        <View style={styles.contenedorSenwosretISenwosretIII}>
                            <View>
                                <ImageBackground style={styles.imagenSenwosretI} source={SenwosretI} />
                                <Text style={styles.textoSenwosretI}>{t("container.TextSenwosretI")}</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenSenwosretIII} source={SenwosretIII} />
                                <Text style={styles.textoSenwosretIII}>{t("container.TextSenwosretIII")}</Text>
                            </View>
                        </View>
                        <View style={styles.contenedorAmenemhetIIIAmenemhetIV}>
                            <View>
                                <ImageBackground style={styles.imagenamenemhetIII} source={amenemhetIII} />
                                <Text style={styles.textoamenemhetIII}>{t("container.TextAmenemhetIII")}</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenamenemhetIV} source={amenemhetIV} />
                                <Text style={styles.textoamenemhetIV}>{t("container.TextAmenemhetIV")}</Text>
                            </View>
                        </View>
                        <View style={styles.contenedorSobekneferu}>
                            <View>
                                <ImageBackground style={styles.imagensobekneferu} source={sobekneferu} />
                                <Text style={styles.textosobekneferu}>{t("container.TextSobekneferu")}</Text>
                            </View>
                        </View>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextChronologyEgyptThirtiethDynasty")}</i></Text>
                        <View style={styles.contenedorSobekhotep}>
                            <View>
                                <ImageBackground style={styles.imagenSobekhotep} source={Sobekhotep} />
                                <Text style={styles.textoSobekhotep}>Sobekhotep</Text>
                            </View>
                        </View>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextChronologyEgyptSecondIntermediate")}</i></Text>
                        <Text style={styles.textocronologiaegipcia}>
                            {t("container.TextChronologyEgyptSecondIntermediate1")}
                        </Text>
                        <View style={styles.contenedorAvaris}>
                            <View>
                                <ImageBackground style={styles.imagenAvaris} source={Avaris} />
                                <Text style={styles.textoAvaris}>{t("container.TextAvaris")}</Text>
                            </View>
                        </View>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextChronologyEgyptNewKingdom")}</i></Text>
                        <Text style={styles.textocronologiaegipcia}>
                            {t("container.TextChronologyEgyptNewKingdom1")}
                            <br></br>
                            <br></br>
                            {t("container.TextChronologyEgyptNewKingdom2")}
                            <br></br>
                            <br></br>
                            {t("container.TextChronologyEgyptNewKingdom3")}
                        </Text>
                        <View style={styles.contenedorTebasAmarna}>
                            <View>
                                <ImageBackground style={styles.imagenTebas} source={tebas} />
                                <Text style={styles.textoTebas}>{t("container.TextThebes")}</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenAmarna} source={amarna} />
                                <Text style={styles.textoAmarna}>Amarna</Text>
                            </View>
                        </View>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextChronologyEgyptEighteenthDynasty")}</i></Text>
                        <View style={styles.contenedorAhmoseIThutmosisIII}>
                            <View>
                                <ImageBackground style={styles.imagenAhmoseI} source={ahmoseI} />
                                <Text style={styles.textoAhmoseI}>Ahmose I</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenThutmosisIII} source={thutmosisIII} />
                                <Text style={styles.textoThutmosisIII}>Thutmosis III</Text>
                            </View>
                        </View>
                        <View style={styles.contenedorHatshepsutAmenofisII}>
                            <View>
                                <ImageBackground style={styles.imagenhatshepsut} source={hatshepsut} />
                                <Text style={styles.textohatshepsut}>Hatshepsut</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenAmenofisII} source={AmenofisII} />
                                <Text style={styles.textoAmenofisII}>{t("container.TextAmenophis")} II</Text>
                            </View>
                        </View>
                        <View style={styles.contenedorThutmosisIVAmenofisIII}>
                            <View>
                                <ImageBackground style={styles.imagenThutmosisIV} source={ThutmosisIV} />
                                <Text style={styles.textoThutmosisIV}>Thutmosis IV</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenAmenofisIII} source={AmenofisIII} />
                                <Text style={styles.textoAmenofisIII}>{t("container.TextAmenophis")} III</Text>
                            </View>
                        </View>
                        <View style={styles.contenedorAkhenatonTutankamon}>
                            <View>
                                <ImageBackground style={styles.imagenAkhenaton} source={Akhenaton} />
                                <Text style={styles.textoAkhenaton}>Akhenaton</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagentutankamon} source={tutankamon} />
                                <Text style={styles.textotutankamon}>{t("container.TextTutankhamun")}</Text>
                            </View>
                        </View>
                        <View style={styles.contenedorAyHoremheb}>
                            <View>
                                <ImageBackground style={styles.imagenAy} source={Ay} />
                                <Text style={styles.textoAy}>Ay</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenHoremheb} source={Horemheb} />
                                <Text style={styles.textoHoremheb}>Horemheb</Text>
                            </View>
                        </View>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextChronologyEgyptNineteenthDynasty")}</i></Text>
                        <View style={styles.contenedorRamsesISetiI}>
                            <View>
                                <ImageBackground style={styles.imagenRamsesI} source={RamsesI} />
                                <Text style={styles.textoRamsesI}>Ramses I</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenSetiI} source={SetiI} />
                                <Text style={styles.textoSetiI}>{t("container.TextSetyI")} I</Text>
                            </View>
                        </View>
                        <View style={styles.contenedorRamsesIIMerenptah}>
                            <View>
                                <ImageBackground style={styles.imagenRamsesII} source={RamsesII} />
                                <Text style={styles.textoRamsesII}>Ramses II</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenMerenptah} source={Merenptah} />
                                <Text style={styles.textoMerenptah}>Merenptah</Text>
                            </View>
                        </View>
                        <View style={styles.contenedorSiptah}>
                            <View>
                                <ImageBackground style={styles.imagenSiptah} source={Siptah} />
                                <Text style={styles.textoSiptah}>Siptah</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenTawosret} source={Tawosret} />
                                <Text style={styles.textoTawosret}>Tawosret</Text>
                            </View>
                        </View>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextChronologyEgyptTwentiethDynasty")}</i></Text>
                        <View style={styles.contenedorSethnakhteRamsesIII}>
                            <View>
                                <ImageBackground style={styles.imagenSethnakhte} source={Sethnakhte} />
                                <Text style={styles.textoSethnakhte}>Sethnakhte</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenRamsesIII} source={ramsesIII} />
                                <Text style={styles.textoRamsesIII}>Ramses III</Text>
                            </View>
                        </View>
                        <View style={styles.contenedorRamsesVRamsesVI}>
                            <View>
                                <ImageBackground style={styles.imagenRamsesV} source={RamsesV} />
                                <Text style={styles.textoRamsesV}>RamsesV</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenRamsesVI} source={RamsesVI} />
                                <Text style={styles.textoRamsesVI}>Ramses VI</Text>
                            </View>
                        </View>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextChronologyEgyptThirdIntermediate")}</i></Text>
                        <Text style={styles.textocronologiaegipcia}>
                            {t("container.TextChronologyEgyptThirdIntermediate1")}
                           <br></br>
                           <br></br>
                           {t("container.TextChronologyEgyptThirdIntermediate2")}
                        </Text>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextChronologyEgyptTwentySecondDynasty")}</i></Text>
                        <View style={styles.contenedorSheshonqIIOsorkonIII}>
                            <View>
                                <ImageBackground style={styles.imagenSheshonqII} source={SheshonqII} />
                                <Text style={styles.textoSheshonqII}>Sheshonq II</Text>
                            </View>
                        </View>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextChronologyEgyptTwentyThirdDynasty")}</i></Text>
                        <View style={styles.contenedorSheshonqIIOsorkonIII}>
                            <View>
                                <ImageBackground style={styles.imagenOsorkonIII} source={OsorkonIII} />
                                <Text style={styles.textoOsorkonIII}>Osorkon III</Text>
                            </View>
                        </View>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextChronologyEgyptDisappearanceAncientEgypt")}</i></Text>
                        <Text style={styles.textocronologiaegipcia}>
                            {t("container.TextChronologyEgyptDisappearanceAncientEgypt1")}
                            <br></br>
                            <br></br>
                            {t("container.TextChronologyEgyptDisappearanceAncientEgypt2")}
                        </Text>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextChronologyEgyptTwentyFifthDynasty")}</i></Text>
                        <View style={styles.contenedorShabako}>
                            <View>
                                <ImageBackground style={styles.imagenShabako} source={shabako} />
                                <Text style={styles.textoShabako}>Shabako</Text>
                            </View>
                        </View>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextChronologyEgyptTwentySixthDynasty")}</i></Text>
                        <View style={styles.contenedorPsameticoI}>
                            <View>
                                <ImageBackground style={styles.imagenPsameticoI} source={PsameticoI} />
                                <Text style={styles.textoPsameticoI}>{t("container.TextPsameticI")} I</Text>
                            </View>
                        </View>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextChronologyEgyptTwentySeventhDynasty")}</i></Text>
                        <View style={styles.contenedorDario}>
                            <View>
                                <ImageBackground style={styles.imagenDario} source={dario} />
                                <Text style={styles.textoDario}>{t("container.TextDarius")}</Text>
                            </View>
                        </View>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextChronologyEgyptThirtyDynasty")}</i></Text>
                        <View style={styles.contenedorNectaneboINectaneboII}>
                            <View>
                                <ImageBackground style={styles.imagenNectaneboI} source={NectaneboI} />
                                <Text style={styles.textoNectaneboI}>Nectanebo I</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenNectaneboII} source={NectaneboII} />
                                <Text style={styles.textoNectaneboII}>Nectanebo II</Text>
                            </View>
                        </View>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextChronologyEgyptGrecoRoman")}</i></Text>
                        <Text style={styles.textocronologiaegipcia}>
                            {t("container.TextChronologyEgyptGrecoRoman1")}
                            <br></br>
                            <br></br>
                            {t("container.TextChronologyEgyptGrecoRoman2")}
                        </Text>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextChronologyEgyptMacedonianDynasty")}</i></Text>
                        <View style={styles.contenedorAlejandroMagnoFilipo}>
                            <View>
                                <ImageBackground style={styles.imagenAlejandroMagno} source={alejandromagno} />
                                <Text style={styles.textoAlejandroMagno}>{t("container.TextAlexanderGreat")}</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenFilipo} source={Filipo} />
                                <Text style={styles.textoFilipo}>{t("container.TextPhilip")}</Text>
                            </View>
                        </View>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextChronologyEgyptPtolomaicDynasty")}</i></Text>
                        <View style={styles.contenedorPtolomeoIPtolomeoIII}>
                            <View>
                                <ImageBackground style={styles.imagenPtolomeoI} source={ptolomeo} />
                                <Text style={styles.textoPtolomeoI}>{t("container.TextPtolemy")} I</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenPtolomeoIII} source={PtolomeoIII} />
                                <Text style={styles.textoPtolomeoIII}>{t("container.TextPtolemy")} III</Text>
                            </View>
                        </View>
                        <View style={styles.contenedorPtolomeoIVPtolomeoV}>
                            <View>
                                <ImageBackground style={styles.imagenPtolomeoIV} source={PtolomeoIV} />
                                <Text style={styles.textoPtolomeoIV}>{t("container.TextPtolemy")} IV</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenPtolomeoV} source={PtolomeoV} />
                                <Text style={styles.textoPtolomeoV}>{t("container.TextPtolemy")} V</Text>
                            </View>
                        </View>
                        <View style={styles.contenedorCleopatraIIICleopatraVII}>
                            <View>
                                <ImageBackground style={styles.imagenCleopatraIII} source={CleopatraIII} />
                                <Text style={styles.textoCleopatraIII}>{t("container.TextCleopatra")} III</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenCleopatraVII} source={CleopatraVII} />
                                <Text style={styles.textoCleopatraVII}>{t("container.TextCleopatra")} VII</Text>
                            </View>
                        </View>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextChronologyEgyptRoman")}</i></Text>
                        <View style={styles.contenedorOctavoCesarAugustoTiberio}>
                            <View>
                                <ImageBackground style={styles.imagenoctaviocesaraugusto} source={octaviocesaraugusto} />
                                <Text style={styles.textooctaviocesaraugusto}>{t("container.TextOctavianCaesarAugustus")}</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenTiberio} source={Tiberio} />
                                <Text style={styles.textoTiberio}>{t("container.TextTiberius")}</Text>
                            </View>
                        </View>
                        <View style={styles.contenedorDiocleciano}>
                            <View>
                                <ImageBackground style={styles.imagenDiocleciano} source={Diocleciano} />
                                <Text style={styles.textoDiocleciano}>{t("container.TextDiocletian")}</Text>
                            </View>
                        </View>
                        <Text style={styles.historiaegipcia}><i>{t("container.TextChronologyEgyptByzantine")}</i></Text>
                        <View style={styles.contenedorTeodosioVeletinianoIII}>
                            <View>
                                <ImageBackground style={styles.imagenTeodosio} source={Teodosio} />
                                <Text style={styles.textoTeodosio}>{t("container.TextTheodosius")}</Text>
                            </View>
                            <View>
                                <ImageBackground style={styles.imagenValentinianoIII} source={ValentinianoIII} />
                                <Text style={styles.textoValentinianoIII}>{t("container.TextValentinianus")} III</Text>
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
                <PantallaHistoriaEgipto></PantallaHistoriaEgipto>
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

    historiaegipcia: 
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

    textohistoriaegipcia: 
    {
        color:'black',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 22,

        marginTop: 33,

        marginLeft: 11,
    },

    contenedorMenes: 
    {
        flexDirection: 'row',
    },

    imagenMenes: 
    {
        height: 400,

        width: 500,

        marginTop: 11,

        marginBottom: 11,
    },

    textoMenes: 
    {
        color:'black',

        textAlign: 'center', 
        
        justifyContent: 'center', 

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginBottom: 11,
    },

    contenerdorimagenesPepyIIPiramideGiza: 
    {
        flexDirection: 'row',
    },

    imagenPepyII: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoPepyII: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 220,

        marginBottom: 11,
    },

    imagenPiramideGiza: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoPiramideGiza: 
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

    contenedorHeracleopolisMemphis: 
    {
        flexDirection: 'row'
    },

    imagenHeracleopolis: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoHeracleopolis: 
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

    imagenMemphis: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoMemphis: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 180,

        marginBottom: 11,
    },

    contenedorTebasMentuhotep: 
    {
        flexDirection: 'row',
    },

    imagenTebas: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

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

        marginStart: 200,

        marginLeft: 100,

        marginBottom: 11,
    },

    imagenMentuhotep: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoMentuhotep: 
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

    contenedorMentuhotepIVAmenemhetI: 
    {
        flexDirection: 'row',
    },

    imagenMentuhotepIV: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100, 

        marginBottom: 11,
    },

    textoMentuhotepIV: 
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

    imagenAmenemhetI: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoAmenemhetI: 
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

    contenedorAmenemhetIIIAmenemhetIV: 
    {
        flexDirection: 'row',
    },

    imagenAmenemhetIII: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoAmenemhetIII: 
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

    imagenAmenemhetIV: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoAmenemhetIV: 
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

    contenedorSobekneferu: 
    {
        flexDirection: 'row',
    },

    imagenSobekneferu: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoSobekneferu: 
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

    contenedorAhmoseIAmenhotepI: 
    {
        flexDirection: 'row',
    },

    imagenAhmoseI: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoAhmoseI: 
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

    imagenAmenhotepI: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoAmenhotepI: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 180,

        marginBottom: 11,
    },

    contenedorAmenhotepIIIAmenhotepIV: 
    {
        flexDirection: 'row',
    },

    imagenAmenhotepIII: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoAmenhotepIII: 
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

    imagenAmenhotepIV: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoAmenhotepIV: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 160,

        marginBottom: 11,
    },

    contenedorThutmosisIThutmosisIII: 
    {
        flexDirection: 'row',
    },

    imagenThutmosisI: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoThutmosisI: 
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

    imagenThutmosisIII: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoThutmosisIII: 
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

    contenedorTutankamonRamsesIII: 
    {
        flexDirection: 'row',
    },

    imagenTutankamon: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoTutankamon: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 153,

        marginBottom: 11,
    },

    imagenRamsesIII: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoRamsesIII: 
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

    contenedorAmarnaValleReyes: 
    {
        flexDirection: 'row',
    },

    imagenAmarna: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoAmarna: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 180,

        marginBottom: 11,
    },

    imagenValleReyes: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoValleReyes: 
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

    contenedorHatshepsut: 
    {
        flexDirection: 'row',
    },

    imagenHatshepsut: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoHatshepsut: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 160,

        marginBottom: 11,
    },

    contenedorSheshonqShabako: 
    {
        flexDirection: 'row',
    },

    imagenSheshonq: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoSheshonq: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 180,

        marginBottom: 11,
    },

    imagenShabako: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoShabako: 
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

    contenedorTaharkaEsarhaddon: 
    {
        flexDirection: 'row',
    },

    imagenTaharka: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoTaharka: 
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

    imagenEsarhaddon: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoEsarhaddon: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 160,

        marginBottom: 11,
    },

    contenedorNechoSais: 
    {
        flexDirection: 'row',
    },

    imagenNechoSais: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoNechoSais: 
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

    contenedorPsammetichusIPsammetichusIII: 
    {
        flexDirection: 'row',
    },

    imagenPsammetichusI: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoPsammetichusI: 
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

    imagenPsammetichusIII: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoPsammetichusIII: 
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

    contenedorCambisesDario: 
    {
        flexDirection: 'row',
    },

    imagenCambises: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoCambises: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 180,

        marginBottom: 11,
    },

    imagenDario: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoDario: 
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

    contenedorJerjesArtajerjesIII: 
    {
        flexDirection: 'row',
    },

    imagenJerjes: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoJerjes: 
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

    imagenArtajerjesIII: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoArtajerjesIII: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 180,

        marginBottom: 11,
    },

    contenedorAlejandroMagnoPtolomeo: 
    {
        flexDirection: 'row',
    },

    imagenAlejandroMagno: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoAlejandroMagno: 
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

    imagenPtolomeo: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoPtolomeo: 
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

    contenedorCreopatraCesar: 
    {
        flexDirection: 'row',
    },

    imagenCleopatra: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoCleopatra: 
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

    imagenOctavioCesarAugusto: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoOctavioCesarAugusto: 
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

    cronologiaegipcia: 
    {
        color:'balck',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 44,

        marginTop: 33,
    },

    textocronologiaegipcia: 
    {
        color:'black',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 22,

        marginTop: 33,

        marginLeft: 11,

        marginBottom: 33,
    },

    contenedorPiramideSaqqara: 
    {
        flexDirection: 'row',
    },

    imagenPiramideSaqqara: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoPiramideSaqqara: 
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

    contenedorNarmerHorusAha: 
    {
        flexDirection: 'row',
    },

    imagenNarmer: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoNarmer: 
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

    imagenHorusAha: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoHorusAha: 
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

    contenedorDjerSemerkhet: 
    {
        flexDirection: 'row',
    },

    imagenDjer: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoDjer: 
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

    imagenSemerkhet: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoSemerkhet: 
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

    contenedorRanebPeribsen: 
    {
        flexDirection: 'row',
    },

    imagenRaneb: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoRaneb: 
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

    imagenPeribsen: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoPeribsen: 
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

    contenedorKhasekhemwy: 
    {
        flexDirection: 'row',
    },

    imagenKhasekhemwy: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoKhasekhemwy: 
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

    contenedorZoser: 
    {
        flexDirection: 'row',
    },

    imagenZoser: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoZoser: 
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

    contenedorPiramideGizaGranEsfinge: 
    {
        flexDirection: 'row',
    },

    imagenGranEsfinge: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginLeft: 100,

        marginBottom: 11,
    },

    textoGranEsfinge: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 260,

        marginBottom: 11,
    },

    contenedorSnefruKhufu: 
    {
        flexDirection: 'row',
    },

    imagenSnefru: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoSnefru: 
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

    imagenKhufu: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoKhufu: 
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

    contenedorKhafraMenkaura: 
    {
        flexDirection: 'row',
    },

    imagenKhafra: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoKhafra: 
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

    imagenMenkaura: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoMenkaura: 
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

    contenedorUserkafSahura: 
    {
        flexDirection: 'row',
    },

    imagenUserkaf: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoUserkaf: 
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

    imagenSahura: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoSahura: 
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

    contenedorShepseskaraDjedkaraIsesi: 
    {
        flexDirection: 'row',
    },

    imagenShepseskara: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoShepseskara: 
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

    imagenDjedkaraIsesi: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoDjedkaraIsesi: 
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

    contenedorIntefII: 
    {
        flexDirection: 'row',
    },

    imagenIntefII: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoIntefII: 
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

    contenedorMentuhotepIII: 
    {
        flexDirection: 'row',
    },

    imagenMentuhotepIII: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoMentuhotepIII: 
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

    contenedorSenwosretISenwosretIII: 
    {
        flexDirection: 'row',
    },

    imagenSenwosretI: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoSenwosretI: 
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

    imagenSenwosretIII: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoSenwosretIII: 
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

    imagenamenemhetIII: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoamenemhetIII: 
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

    imagenamenemhetIV: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoamenemhetIV: 
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

    imagensobekneferu: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textosobekneferu: 
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

    contenedorSobekhotep: 
    {
        flexDirection: 'row',
    },

    imagenSobekhotep: 
    {
        height: 900,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoSobekhotep: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 160,

        marginBottom: 11,
    },

    contenedorAvaris: 
    {
        flexDirection: 'row',
    },

    imagenAvaris: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginLeft: 150,

        marginBottom: 11,
    },

    textoAvaris: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginBottom: 11,
    },

    contenedorTebasAmarna: 
    {
        flexDirection: 'row',
    },

    contenedorAhmoseIThutmosisIII: 
    {
        flexDirection: 'row',
    },

    contenedorHatshepsutAmenofisII: 
    {
        flexDirection: 'row',
    },

    imagenhatshepsut: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textohatshepsut: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 160,

        marginBottom: 11,
    },

    imagenAmenofisII: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoAmenofisII: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 160,

        marginBottom: 11,
    },

    contenedorThutmosisIVAmenofisIII: 
    {
        flexDirection: 'row',
    },

    imagenThutmosisIV: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoThutmosisIV: 
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

    imagenAmenofisIII: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoAmenofisIII: 
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

    contenedorAkhenatonTutankamon: 
    {
        flexDirection: 'row',
    },

    imagenAkhenaton: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoAkhenaton: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 160,

        marginBottom: 11,
    },

    imagentutankamon: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textotutankamon: 
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

    contenedorAyHoremheb: 
    {
        flexDirection: 'row',
    },

    imagenAy: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoAy: 
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

    imagenHoremheb: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoHoremheb: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 180,

        marginBottom: 11,
    },

    contenedorRamsesISetiI: 
    {
        flexDirection: 'row',
    },

    imagenRamsesI: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoRamsesI: 
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

    imagenSetiI: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoSetiI: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 230,

        marginBottom: 11,
    },

    contenedorRamsesIIMerenptah: 
    {
        flexDirection: 'row',
    },

    imagenRamsesII: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoRamsesII: 
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

    imagenMerenptah: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoMerenptah: 
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

    contenedorSiptah: 
    {
        flexDirection: 'row',
    },

    imagenSiptah: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoSiptah: 
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

    imagenTawosret: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoTawosret: 
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

    contenedorSethnakhteRamsesIII: 
    {
        flexDirection: 'row',
    },

    imagenSethnakhte: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoSethnakhte: 
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

    contenedorRamsesVRamsesVI: 
    {
        flexDirection: 'row',
    },

    imagenRamsesV: 
    {
        height: 600,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoRamsesV: 
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

    imagenRamsesVI: 
    {
        height: 600,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoRamsesVI: 
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

    contenedorSheshonqIIOsorkonIII: 
    {
        flexDirection: 'row',
    },

    imagenSheshonqII: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoSheshonqII: 
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

    imagenOsorkonIII: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoOsorkonIII: 
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

    contenedorShabako: 
    {
        flexDirection: 'row',
    },

    contenedorPsameticoI: 
    {
        flexDirection: 'row',
    },

    imagenPsameticoI: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoPsameticoI: 
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

    contenedorDario: 
    {
        flexDirection: 'row',
    },

    contenedorNectaneboINectaneboII: 
    {
        flexDirection: 'row',
    },

    imagenNectaneboI: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoNectaneboI: 
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

    imagenNectaneboII: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoNectaneboII: 
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

    contenedorAlejandroMagnoFilipo: 
    {
        flexDirection: 'row',
    },

    imagenFilipo: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoFilipo: 
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

    contenedorPtolomeoIPtolomeoIII: 
    {
        flexDirection: 'row',
    },

    imagenPtolomeoI: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoPtolomeoI: 
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

    imagenPtolomeoIII: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoPtolomeoIII: 
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

    contenedorPtolomeoIVPtolomeoV: 
    {
        flexDirection: 'row',
    },

    imagenPtolomeoIV: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoPtolomeoIV: 
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

    imagenPtolomeoV: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoPtolomeoV: 
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

    contenedorCleopatraIIICleopatraVII: 
    {
        flexDirection: 'row',
    },

    imagenCleopatraIII: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoCleopatraIII: 
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

    imagenCleopatraVII: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoCleopatraVII: 
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

    contenedorOctavoCesarAugustoTiberio: 
    {
        flexDirection: 'row',
    },

    imagenoctaviocesaraugusto: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textooctaviocesaraugusto: 
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

    imagenTiberio: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoTiberio: 
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

    contenedorDiocleciano: 
    {
        flexDirection: 'row',
    },

    imagenDiocleciano: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoDiocleciano: 
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

    contenedorTeodosioVeletinianoIII: 
    {
        flexDirection: 'row',
    },

    imagenTeodosio: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginRight: 100,

        marginBottom: 11,
    },

    textoTeodosio: 
    {
        color:'black',

        alignItems: 'center',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 180,

        marginBottom: 11,
    },

    imagenValentinianoIII: 
    {
        height: 400,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 11,

        marginBottom: 11,
    },

    textoValentinianoIII: 
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

export default PantallaHistoriaEgipto;
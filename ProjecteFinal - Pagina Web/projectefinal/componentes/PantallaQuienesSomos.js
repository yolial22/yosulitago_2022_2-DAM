import React from 'react';

import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';

import { Button } from 'react-native-paper';

import LogoEmpresa from '../imagenes/LogoEmpresa.png';

import LogoYosu from '../imagenes/Yosu.jpg';

import LogoAlejandro from '../imagenes/Alejandro.jpg';

import { useTranslation } from "react-i18next";

const PantallaQuienesSomos = ({navigation}) => {
    const [t, i18n] = useTranslation("globalquienessomos");
    const PantallaQuienesSomos = () => {
            return (
            <View style={styles.contenedor}>
                <View style={styles.contenedorheader}>
                    <Button style={styles.botonpaginaprincipal} mode='contained' onPress={() => navigation.navigate('Página Principal')}><Text style={styles.textopaginaprincipal}>{t("header.Home Page")}</Text></Button>
                    <Button style={styles.botonviabilidadmarketing} mode='contained' onPress={() => navigation.navigate('Viabilidad y Marketing')}><Text style={styles.textoviabilidadmarketing}>{t("header.Viability and Marketing")}</Text></Button>
                    <Button style={styles.botonhistoriahumanidad} mode='contained' onPress={() => navigation.navigate('Historia de la Humanidad')}><Text style={styles.textohistoriahumanidad}>{t("header.History of Humanity")}</Text></Button>
                    <Button style={styles.botoncontacto} mode='contained' onPress={() => navigation.navigate('Contacto')}><Text style={styles.textocontacto}>{t("header.Contact")}</Text></Button>
                    <Button style={styles.botonidioma} mode='contained' onPress={(() => i18n.changeLanguage("en"))}><Text style={styles.textoidioma}>EN</Text></Button>
                    <Button style={styles.botonidioma} mode='contained' onPress={(() => i18n.changeLanguage("es"))}><Text style={styles.textoidioma}>ES</Text></Button>
                    <ImageBackground style={styles.logoempresa} source={LogoEmpresa} />
                </View>
                <View style={styles.contenedorprincipal}>
                    <View>
                        <Text style={styles.textoquienesomos}>{t("container.TextAboutUs")}</Text>
                    </View>
                    <View style={styles.contenedorimagenpersonas}>
                        <View>
                            <ImageBackground style={styles.imagenyosu} source={LogoYosu} />
                            <Text style={styles.textoyosu}>{t("container.TextYosu")}: Yosu Litago Albuixech</Text>
                        </View>
                        <View>
                            <ImageBackground style={styles.imagenalejandro} source={LogoAlejandro} />
                            <Text style={styles.textoalejandro}>{t("container.TextAlejandro")}: Alejandro Ortiz Carbonell</Text>
                        </View>
                    </View>
                    <View style={styles.contenedorfooter}>
                    <Text style={styles.textofooter}>{t("footer.TextFooter")}: Yosu Litago Albuixech</Text>
                    </View>
                </View>
            </View>
            );
        };
    return (
        <ScrollView>
            <View>
                <PantallaQuienesSomos></PantallaQuienesSomos>
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

    botonviabilidadmarketing: 
    {
        backgroundColor: 'orange',

        height: 60, 

        width: 330,

        textAlign: 'center', 
        
        justifyContent: 'center', 

        alignItems: 'center',

        marginTop: 33,

        marginLeft: 10,

        marginBottom: 33,
    },

    textoviabilidadmarketing: 
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

        marginLeft: 10,

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

        marginLeft: 10,

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

        width: 105,

        textAlign: 'center', 
        
        justifyContent: 'center', 

        alignItems: 'center',

        marginTop: 33,

        marginLeft: 10,

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

    textoquienesomos: 
    {
        color: 'black',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 33,

        marginTop: 33,

        marginLeft: 10,

        marginBottom: 33,
    },

    contenedorimagenpersonas: 
    {
        flexDirection: 'row',
    },

    imagenyosu: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 33,

        marginRight: 222,
    },

    textoyosu: 
    {
        color: 'black',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 11,

        marginBottom: 33,
    },

    imagenalejandro: 
    {
        height: 500,

        width: 500,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 33,
    },

    textoalejandro: 
    {
        color: 'black',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 30,

        marginTop: 11,

        marginLeft: 7,

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

export default PantallaQuienesSomos;
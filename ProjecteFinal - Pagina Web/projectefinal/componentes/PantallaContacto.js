import { React, useState } from 'react';

import { StyleSheet, ScrollView, ImageBackground, Linking, Text, View, TurboModuleRegistry } from 'react-native';

import { Button } from 'react-native-paper';

import { NativeBaseProvider, FormControl, Input } from "native-base";

import LogoEmpresa from '../imagenes/LogoEmpresa.png';

import { useTranslation } from "react-i18next";

const PantallaContacto = ({navigation}) => {
    const [t, i18n] = useTranslation("globalcontacto");

    const [nombre, setNombre] = useState();

    const [email, setEmail] = useState();

    const [comentario, setComentario] = useState();
  
    function validarNombre(nombre) 
    {
        const reg = /^[a-zA-Z]+(\s{1}[a-zA-Z]+)*$/;

        if(!reg.test(nombre))
        {
            alert("El nombre introducido no es correcto, ya que el nombre esta vacio y contiene numeros.");

            setNombre("");
        } 
        else 
        {
            setNombre(nombre);
        }
    }
  
    function validarEmail(email) 
    {
        const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  
        if(!reg.test(email))
        {
            setEmail("");
        }
        else 
        {
            setEmail(email);
        }
    }

    function validarComentario(comentario) 
    {
        if(!comentario === "") 
        {
            setComentario("");
        }
        else 
        {
            setComentario(comentario);
        }
    }
  
    function enviarFormulario() 
    {
        const regnombre = /^[a-zA-Z]+(\s{1}[a-zA-Z]+)*$/;

        const regemail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

        if(!regnombre.test(nombre))
        {
            setNombre();
        } 
  
        else if(!regemail.test(email))
        {
            setEmail();
        }
        else if(!comentario === "") 
        {
            setComentario();
        }
        else 
        {
            alert("Formulario realizado con exito.");
        
            Linking.openURL("https://www.google.com/intl/es/gmail/about/");

            setNombre("");
  
            setEmail("");

            setComentario("");
        }
    }

    function restablecerFormulario() 
    {
        setNombre("");

        setEmail("");

        setComentario("");
    }

    return (
        <ScrollView>
            <View style={styles.contenedor}>
                <View style={styles.contenedorheader}>
                    <Button style={styles.botonpaginaprincipal} mode='contained' onPress={() => navigation.navigate('Página Principal')}><Text style={styles.textopaginaprincipal}>{t("header.Home Page")}</Text></Button>
                    <Button style={styles.botonquienessomos} mode='contained' onPress={() => navigation.navigate('Quienes Somos')}><Text style={styles.textoquienesomos}>{t("header.About Us")}</Text></Button>
                    <Button style={styles.botonviabilidadmarketing} mode='contained' onPress={() => navigation.navigate('Viabilidad y Marketing')}><Text style={styles.textoviabilidadmarketing}>{t("header.Viability and Marketing")}</Text></Button>
                    <Button style={styles.botonhistoriahumanidad} mode='contained' onPress={() => navigation.navigate('Historia de la Humanidad')}><Text style={styles.textohistoriahumanidad}>{t("header.History of Humanity")}</Text></Button>
                    <Button style={styles.botonidioma} mode='contained' onPress={(() => i18n.changeLanguage("en"))}><Text style={styles.textoidioma}>EN</Text></Button>
                    <Button style={styles.botonidioma} mode='contained' onPress={(() => i18n.changeLanguage("es"))}><Text style={styles.textoidioma}>ES</Text></Button>
                    <ImageBackground style={styles.logoempresa} source={LogoEmpresa} />
                </View>
                <View style={styles.contenedorprincipal}>
                    <Text style={styles.textoformulariocontacto}>{t("container.TextFormContact")}</Text>
                    <br></br>
                    <Text style={styles.textocontacto}>{t("container.TextContact")}</Text>
                    <br></br>
                    <NativeBaseProvider>
                    <FormControl>
                        <table border='5' width='800'>
                            <Text style={styles.textonombre}>{t("container.TextName")}:</Text>
                                <Input fontSize = '22' marginBottom = '22' id={nombre} value={nombre} type='text' placeholder={t("container.PlaceholderName")} onChangeText={(valor => validarNombre(valor))} pattern="/^[a-zA-Z]+(\s{1}[a-zA-Z]+)*$/" isRequired />
                            <Text style={styles.textoemail}>{t("container.TextEmail")}:</Text>
                                <Input fontSize = '22' marginBottom = '22' id={email} type='email' placeholder={t("container.PlaceholderEmail")} onChangeText={(valor => validarEmail(valor))} pattern="/[a-z0-9!#$%'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/" isRequired />
                            <Text style={styles.textocomentario}>{t("container.TextCommentary")}:</Text>
                                <Input fontSize = '22' height = '200' id={comentario} value={comentario} type='text' placeholder={t("container.PlaceholderCommentary")} onChangeText={(valor => validarComentario(valor))} isRequired />
                        </table>
                        <View style={styles.contenedorbotonesformulariocontacto}>
                            <Button style={styles.botonenviarformulariocontacto} type='submit' onPress={enviarFormulario}><Text style={styles.textoenviarbotonformulariocontacto}>{t("container.TextButtonSendFormContact")}</Text></Button>
                            <Button style={styles.botonrestablecerformulariocontacto} type='reset' onPress={restablecerFormulario}><Text style={styles.textorestablecerbotonformulariocontacto}>{t("container.TextButtonRestoreFormContact")}</Text></Button>
                        </View>
                    </FormControl>
                    </NativeBaseProvider>
                </View>
                <View style={styles.contenedorfooter}>
                    <Text style={styles.textofooter}>{t("footer.TextFooter")}: Yosu Litago Albuixech</Text>
                </View>
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

        marginLeft: 65,

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

        marginLeft: 10,

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

        width: 170,

        justifyContent: 'center',

        alignItems: 'center',

        marginTop: 33,

        marginLeft: 10,

        marginRight: 45,

        marginBottom: 33,
    },

    contenedorprincipal:
    {
        flex: 1,

        justifyContent: 'center',

        alignItems: 'center',

        flexDirection: 'column',
    },

    textoformulariocontacto: 
    {
        color: 'black',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 55,

        marginTop: 11,
    },

    textocontacto: 
    {
        color: 'black',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 44,

        marginLeft: 50,

        marginBottom: 11,
    },

    textonombre: 
    {
        color: 'black',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 33,
    },

    textoemail: 
    {
        color: 'black',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 33,
    },

    textocomentario: 
    {
        color: 'black',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 33,
    },

    contenedorbotonesformulariocontacto: 
    {
        flexDirection: 'row',
    },

    botonenviarformulariocontacto: 
    {
        backgroundColor: 'white',

        height: 80, 

        width: 450,

        textAlign: 'center', 
        
        justifyContent: 'center', 

        alignItems: 'center',

        marginTop: 22,

        marginLeft: -100,

        marginRight: 10,

        marginBottom: 22,
    },

    textoenviarbotonformulariocontacto: 
    {
        color: 'black',

        fontWeight: 'bold',

        fontFamily: 'arial',

        fontSize: 22,
    },

    botonrestablecerformulariocontacto: 
    {
        backgroundColor: 'white',

        height: 80, 

        width: 530,

        textAlign: 'center', 
        
        justifyContent: 'center', 

        alignItems: 'center',

        marginTop: 22,

        marginLeft: 10,

        marginRight: -100,

        marginBottom: 22,
    },

    textorestablecerbotonformulariocontacto: 
    {
        color: 'black',

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

export default PantallaContacto;
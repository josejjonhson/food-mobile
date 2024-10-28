import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./registro.style.js"
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";

function Registro(){
    return <ScrollView>
        <View style={styles.container}>
            <Header texto="Criar uma conta." />

            <View style={styles.formGroup}>
                <View style={styles.form}>
                    <TextBox placeholder="Ex. José Jonhson Barros Tavares" label="Nome Completo" />
                </View>
                <View style={styles.form}>
                    <TextBox placeholder="Seu melhor email" label="E-mail" />
                </View>
                <View style={styles.form}>
                    <TextBox isPassword={true} placeholder="Defina sua senha" label="Escolha uma senha" />
                </View>
                <View style={styles.form}>
                    <TextBox isPassword={true} placeholder="Confirme sua senha" label="Confirme a senha" />
                </View>
                <View style={styles.form}>
                    <Button texto="Próximo passo" />
                </View>
            </View>
            
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Text style={styles.footerText}>Acessar minha conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView> 
}

export default Registro;
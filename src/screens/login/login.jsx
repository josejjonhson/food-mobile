import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./login.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";

function Login(){
    return <View style={styles.container}>
        <Header texto="Acesse sua Conta." />

        <View style={styles.formGroup}>
            <View style={styles.form}>
                <TextBox placeholder="Seu melhor email" label="E-mail" />
            </View>
            <View style={styles.form}>
                <TextBox isPassword={true} placeholder="Password" label="Senha" />
            </View>
            <View style={styles.form}>
                <Button texto="Acessar" />
            </View>
        </View>
        
        <View style={styles.footer}>
            <TouchableOpacity>
                <Text style={styles.footerText}>Criar minha conta</Text>
            </TouchableOpacity>
        </View>
    </View>
}

export default Login;
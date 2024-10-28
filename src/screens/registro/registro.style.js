import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container:{
        flex: 1, // Ocupar toda a tela
        padding: 40,
        alignItems: "center",
        justifyContent: "center"
    },
    form:{
        width: "100%",
        marginBottom: 15
    },
    formGroup:{
        width: "100%",
        marginTop: 25,
        marginBottom: 40
    },
    footer:{
        width: "100%",
        position: "absolute",
        bottom: 0,
        marginBottom: 25
    },
    footerText:{
        textAlign: "center",
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.md
    }
}
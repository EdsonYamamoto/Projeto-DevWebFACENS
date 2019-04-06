import { url } from '@/assets/util.js'

export function EncontraUsuario(login, senha) {
    console.log(url);
    var usuario;
    usuario = {
        nome: "Teste",
        login: login,
        senha: senha
    }
    return usuario
}

export function EncontraTodosUsuario() {
    var usuarios = [];

    return usuarios;
}
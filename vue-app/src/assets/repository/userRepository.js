import { url } from '@/assets/util.js'
/* eslint-disable */
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

    var headers = [
        {
            text: "ID",
            align: "left",
            value: "ID"
        },
        { text: "Nome", value: "Nome" },
        { text: "Data Nascimento", value: "Nacismento" },
        { text: "CPF", value: "CPF" },
        { text: "Email", value: "Email" },
        { text: "Senha", value: "Senha" },
        { text: "Permissao", value: "Permissao" },
        { text: "Editar", sortable: false },
        { text: "Deletar", sortable: false }
    ];
    var desserts = [
        {
            ID: 0,
            Nome: "Frozen Yogurt",
            Nacismento: 159,
            CPF: 6.0,
            Email: 24,
            Senha: 4.0,
            Permissao: "1%"
        },
        {
            ID: 1,
            Nome: "Ice cream sandwich",
            Nacismento: 237,
            CPF: 9.0,
            Email: 37,
            Senha: 4.3,
            Permissao: "1%"
        },
        {
            ID: 2,
            Nome: "Eclair",
            Nacismento: 262,
            CPF: 16.0,
            Email: 23,
            Senha: 6.0,
            Permissao: "7%"
        },
        {
            ID: 3,
            Nome: "Cupcake",
            Nacismento: 305,
            CPF: 3.7,
            Email: 67,
            Senha: 4.3,
            Permissao: "8%"
        },
        {
            ID: 4,
            Nome: "Gingerbread",
            Nacismento: 356,
            CPF: 16.0,
            Email: 49,
            Senha: 3.9,
            Permissao: "16%"
        },
        {
            ID: 5,
            Nome: "Jelly bean",
            Nacismento: 375,
            CPF: 0.0,
            Email: 94,
            Senha: 0.0,
            Permissao: "0%"
        },
        {
            ID: 6,
            Nome: "Lollipop",
            Nacismento: 392,
            CPF: 0.2,
            Email: 98,
            Senha: 0,
            Permissao: "2%"
        },
        {
            ID: 7,
            Nome: "Honeycomb",
            Nacismento: 408,
            CPF: 3.2,
            Email: 87,
            Senha: 6.5,
            Permissao: "45%"
        },
        {
            ID: 8,
            Nome: "Donut",
            Nacismento: 452,
            CPF: 25.0,
            Email: 51,
            Senha: 4.9,
            Permissao: "22%"
        },
        {
            ID: 9,
            Nome: "KitKat",
            Nacismento: 518,
            CPF: 26.0,
            Email: 65,
            Senha: 7,
            Permissao: "6%"
        }
    ];

    return { headers: headers, desserts: desserts };
}
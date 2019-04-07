/* eslint-disable */
import { url } from '@/assets/util.js'

export function EncontraCurso() {
    var curso;

    return curso
}

export function EncontraTodosCurso() {

    var headers = [
        {
            text: "ID",
            align: "left",
            value: "ID"
        },
        { text: "Nome", value: "Nome" },
        { text: "Coordenador", value: "Coordenador" },
        { text: "Duracao", value: "Duracao" },
        { text: "Grade curricular", value: "Grade curricular" },
        { text: "Editar", sortable: false },
        { text: "Deletar", sortable: false }
    ];
    var desserts = [
        {
            ID: 0,
            Nome: "Ice cream sandwich",
            Coordenador: "Frozen Yogurt",
            Duracao: 159,
            GradeCurricular: 6.0,
        },
        {
            ID: 1,
            Nome: "Ice cream sandwich",
            Coordenador: 237,
            Duracao: 9.0,
            GradeCurricular: 37
        },
        {
            ID: 2,
            Nome: "Eclair",
            Coordenador: 262,
            Duracao: 16.0,
            GradeCurricular: 23
        },
        {
            ID: 3,
            Nome: "Cupcake",
            Coordenador: 305,
            Duracao: 3.7,
            GradeCurricular: 67
        },
        {
            ID: 4,
            Nome: "Gingerbread",
            Coordenador: 356,
            Duracao: 16.0,
            GradeCurricular: 49
        },
        {
            ID: 5,
            Nome: "Jelly bean",
            Coordenador: 375,
            Duracao: 0.0,
            GradeCurricular: 94
        },
        {
            ID: 6,
            Nome: "Lollipop",
            Coordenador: 392,
            Duracao: 0.2,
            GradeCurricular: 98
        },
        {
            ID: 7,
            Nome: "Honeycomb",
            Coordenador: 408,
            Duracao: 3.2,
            GradeCurricular: 87
        },
        {
            ID: 8,
            Nome: "Donut",
            Coordenador: 452,
            Duracao: 25.0,
            GradeCurricular: 51
        },
        {
            ID: 9,
            Nome: "KitKat",
            Coordenador: 518,
            Duracao: 26.0,
            GradeCurricular: 65
        }
    ];

    return { headers: headers, desserts: desserts };
}
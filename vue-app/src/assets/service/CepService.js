/* eslint-disable */
import { url } from '@/assets/util.js'
import axios from "axios";

export async function BuscaCEP(CEP) {
    var retorno;
    await axios({
        method: "get",
        url: "https://viacep.com.br/ws/" + CEP + "/json/"
    })
        .then(function (response) {
            console.log("FUNCIONOU!");
            console.log(response);
            retorno = response;
        })
        .catch(function (error) {
            console.log("FALHOU!");
            retorno = error;
        });

    return retorno;
}

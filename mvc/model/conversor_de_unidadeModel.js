export default class Conversor_de_unidade {
    constructor() {
        this.unidades = {
            medida: {
                km: 1000,
                m: 1,
                cm: 0.01,
                mm: 0.001,
                mi: 1609.34,
                yd: 0.9144,
                ft: 0.3048,
                in: 0.0254
            },
            peso: {
                kg: 1000,
                g: 1,
                mg: 0.001,
                lb: 453.592,
                oz: 28.3495
            },
            temperatura: {
                C: 'celsius',
                F: 'fahrenheit',
                K: 'kelvin'
            },
            volume: {
                l: 1,
                ml: 0.001,
                gal: 3.78541,
                qt: 0.946353,
                pt: 0.473176,
                cup: 0.236588
            }
        };
    }

    converter(valor, de, para, tipo) {
        if (tipo === 'temperatura') {
            return this.converterTemperatura(valor, de, para);
        }

        const unidadeBase = this.unidades[tipo][de];
        const unidadeAlvo = this.unidades[tipo][para];
        return (valor * unidadeBase) / unidadeAlvo;
    }

    converterTemperatura(valor, de, para) {
        let resultado;
        // Primeiro converte para Celsius
        switch (de) {
            case 'F':
                valor = (valor - 32) * 5 / 9;
                break;
            case 'K':
                valor = valor - 273.15;
                break;
        }
        // Depois converte de Celsius para unidade desejada
        switch (para) {
            case 'C':
                resultado = valor;
                break;
            case 'F':
                resultado = (valor * 9 / 5) + 32;
                break;
            case 'K':
                resultado = valor + 273.15;
                break;
        }
        return resultado;
    }

    getUnidades(tipo) {
        return Object.keys(this.unidades[tipo]);
    }
}
import MainView from "../view/mainView.js";
import Conversor_de_unidade from "../model/conversor_de_unidadeModel.js";

export default class Conversor_de_unidadeController {
    constructor() {
        this.conversor = new Conversor_de_unidade();
        this.tipoAtual = 'medida';
    }

    async index() {
        const mainView = new MainView();
        await mainView.render();
        this.inicializarEventos();
    }

    inicializarEventos() {
        // Seleciona elementos
        const cartoes = document.querySelectorAll('.cartao');
        const input1 = document.getElementById('input_1');
        const input2 = document.getElementById('input_2');
        const select1 = document.getElementById('select_1');
        const select2 = document.getElementById('select_2');

        // Eventos dos cartões
        cartoes.forEach(cartao => {
            cartao.addEventListener('click', (e) => {
                this.mudarTipo(e.currentTarget.id);
            });
        });

        // Eventos de conversão
        input1.addEventListener('input', () => this.converter(1));
        input2.addEventListener('input', () => this.converter(2));
        select1.addEventListener('change', () => this.converter(1));
        select2.addEventListener('change', () => this.converter(2));

        // Inicializa selects
        this.atualizarSelects('medida');
    }

    mudarTipo(tipo) {
        // Remove seleção anterior
        document.querySelector('.card-selected').classList.remove('card-selected');
        // Adiciona seleção ao novo cartão
        document.getElementById(tipo).classList.add('card-selected');
        // Atualiza título
        document.querySelector('#section-conversor h3').textContent =
            document.getElementById(tipo).querySelector('p').textContent;

        this.tipoAtual = tipo;
        this.atualizarSelects(tipo);
        this.limparInputs();
    }

    atualizarSelects(tipo) {
        const select1 = document.getElementById('select_1');
        const select2 = document.getElementById('select_2');
        const unidades = this.conversor.getUnidades(tipo);

        const nomesPorExtenso = {
            // Medidas de distância
            km: 'Quilômetros (km)',
            m: 'Metros (m)',
            cm: 'Centímetros (cm)',
            mm: 'Milímetros (mm)',
            mi: 'Milhas (mi)',
            yd: 'Jardas (yd)',
            ft: 'Pés (ft)',
            in: 'Polegadas (in)',
            // Peso
            kg: 'Quilogramas (kg)',
            g: 'Gramas (g)',
            mg: 'Miligramas (mg)',
            lb: 'Libras (lb)',
            oz: 'Onças (oz)',
            // Temperatura
            C: 'Celsius (°C)',
            F: 'Fahrenheit (°F)',
            K: 'Kelvin (K)',
            // Volume
            l: 'Litros (L)',
            ml: 'Mililitros (mL)',
            gal: 'Galões (gal)',
            qt: 'Quartos (qt)',
            pt: 'Pints (pt)',
            cup: 'Xícaras (cup)'
        };

        select1.innerHTML = '<option value="">Selecione</option>';
        select2.innerHTML = '<option value="">Selecione</option>';

        unidades.forEach(unidade => {
            select1.innerHTML += `<option value="${unidade}">${nomesPorExtenso[unidade]}</option>`;
            select2.innerHTML += `<option value="${unidade}">${nomesPorExtenso[unidade]}</option>`;
        });
    }

    converter(inputOrigem) {
        const input1 = document.getElementById('input_1');
        const input2 = document.getElementById('input_2');
        const select1 = document.getElementById('select_1');
        const select2 = document.getElementById('select_2');

        if (!select1.value || !select2.value) return;

        const valor = inputOrigem === 1 ? input1.value : input2.value;
        const de = inputOrigem === 1 ? select1.value : select2.value;
        const para = inputOrigem === 1 ? select2.value : select1.value;

        if (!valor) {
            input1.value = '';
            input2.value = '';
            return;
        }

        const resultado = this.conversor.converter(
            parseFloat(valor),
            de,
            para,
            this.tipoAtual
        );

        if (inputOrigem === 1) {
            input2.value = resultado.toFixed(4);
        } else {
            input1.value = resultado.toFixed(4);
        }
    }

    limparInputs() {
        document.getElementById('input_1').value = '';
        document.getElementById('input_2').value = '';
    }
}
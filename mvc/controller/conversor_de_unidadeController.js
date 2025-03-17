import MainView from "../view/mainView.js";
import Conversor_de_unidade from "../model/conversor_de_unidadeModel.js";

export default class Conversor_de_unidadeController {
    async index() {

        const mainView = new MainView();
        await mainView.render();

    }
}
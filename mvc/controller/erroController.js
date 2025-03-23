import MainView from '../view/mainView.js';
import ErroModel from '../model/erroModel.js';

export default class erroController {
    async index() {

        const mainView = new MainView();
        mainView.render();

    }
}
import MainView from '../view/mainView.js';
import HomeModel from '../model/homeModel.js';

export default class homeController {
    async index() {

        const mainView = new MainView();
        await mainView.render();

    }

}
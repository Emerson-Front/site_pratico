export default class App {

    constructor() {
        this.executar();
    }

    async executar() {

        if (window.location.pathname === '/') {
            window.location.href = '/home';
            return;
        }

        const url_atual = window.location.pathname.split('/')[1];
        const arquivo = `mvc/controller/${url_atual}Controller.js`;

        try {
            const controller = new (await import(`../${arquivo}`)).default();
            controller.index();

        } catch (error) {
            console.log('Erro ao carregar o controller', error);
            window.location.href = '/erro';
        }

    }

}
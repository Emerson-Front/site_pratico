export default class MainView {

    async render() {

        const url_atual = window.location.pathname.split('/')[1];

        const arquivo_header = await fetch('mvc/view/templates/header.html');
        const arquivo_page = await fetch(`mvc/view/pages/${url_atual}View.html`);
        const arquivo_footer = await fetch('mvc/view/templates/footer.html');

        const header = await arquivo_header.text();
        const page = await arquivo_page.text();
        const footer = await arquivo_footer.text();

        document.body.innerHTML = header + page + footer;


        // Altera o título da página e o ícone (favicon) com base na URL atual
        let icone = document.querySelector("link[rel*='icon']") || document.createElement('link');
        switch (url_atual) {
            case 'home':
                icone.href = 'mvc/view/imagens/icon/home.ico';
                document.title = 'Home';
                break;
            case 'pdf':
                document.title = 'PDF';
                icone.href = 'mvc/view/imagens/icon/pdf.ico';
                break
            case 'conversor_de_unidade':
                document.title = 'Conversor de Unidade';
                // icone.href = 'mvc/view/imagens/icon/conversor.ico';
                break;
            case 'conversor_numerico':
                document.title = 'Conversor Numérico';
                // icone.href = 'mvc/view/imagens/icon/conversor_numerico.ico';
                break;
            case 'erro':
                document.title = 'Erro';
                // icone.href = 'mvc/view/imagens/icon/erro.ico';
                break;
        }

    }


}


export default class PdfModel {
    // Gerar PDF, usando html2pdf
    gerarPdf(css, html) {



        html2pdf()
            .from(css + html)
            .set({ jsPDF: { format: 'a4' } })
            .toPdf()
            .output('bloburl')
            .then(pdfUrl => window.open(pdfUrl, '_blank'));

    }

    // Verifica se existe uma imagem no html e substitui o src pela URL do mapping
    verificaImagem(imgs, urlMapping) {

        if (imgs.length > 0) {
            imgs.each(function () {
                let src_atual = $(this).attr('src'); // Ex: "img-1"

                // Verifica se a chave (src_atual) da imagem existe no mapping
                if (urlMapping[src_atual]) {
                    $(this).attr('src', urlMapping[src_atual]);  // Substitui o src pela URL do mapping
                }

            });

        }

    }

}
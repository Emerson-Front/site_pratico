export default class PdfModel {

    preview(css, html) {
        const iframe = $('#preview')[0];
        let iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(css + html);
        iframeDoc.close();
        return;
    }


    // Gerar PDF, usando html2pdf
    gerarPdf(css, html) {

        html2pdf()
            .from(css + html)
            .set({ jsPDF: { format: 'a4' } })
            .toPdf()
            .output('bloburl')
            .then(pdfUrl => window.open(pdfUrl, '_blank')); // Abre na nova guia

    }

}

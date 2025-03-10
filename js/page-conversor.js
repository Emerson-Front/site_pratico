medida_de_distancia();

function reset() {

    $(".cartao").removeClass('card-selected');

    // Limpa os <option> do <select> e inputs
    $('#select_1, #select_2').html('<option>Selecione</option>');
    $('#input_1, #input_2').val('');
}


// Quando clicar em um cartao:

$(".cartao").click(function () {
    reset();

    $(this).addClass('card-selected');
    var cardId = $(this).attr('id');
    var texto = $(this).text();
    $('#section-conversor h3').text(texto);

    switch (cardId) {
        case 'medida':
            medida_de_distancia();
            break;

        default:
            alert('Em Obra!');
            location.reload();
    }

});



// Medida de distância
function medida_de_distancia() {

    var medidas = ['Centimetro', 'Metro', 'Quilômetro'];

    // Cria as tags <option>
    for (i = 0; i < medidas.length; i++) {

        $('#select_1').append('<option value="' + medidas[i] + '">' + medidas[i] + '</option>');

        $('#select_2').append('<option value="' + medidas[i] + '">' + medidas[i] + '</option>');

    }



    $('#select_1, #select_2').click(function () {
        var option_1 = $('#select_1').val();
        var option_2 = $('#select_2').val();

        if (option_1 === option_2) {
            // Se os inputs forem iguais'
            $("#input_1, #input_2").on("input", function () {
                let valor1 = $(this).val();
                let valor2 = valor1;
                $("#input_2, #input_1").val(valor2);
            });

        }

        // Input_1
        if (option_1 === medidas[0]) {

            // Centimetro & Metro
            if (option_2 === medidas[1]) {
                $('#input_1').on('input', function () {
                    let valor1 = $(this).val();
                    let valor2 = valor1 / 100;
                    $('#input_2').val(valor2);
                });
                $('#input_2').on('input', function () {
                    let valor1 = $(this).val();
                    let valor2 = valor1 * 100;
                    $('#input_1').val(valor2);
                });

                // Centimetro & Quilometro
            } else if (option_2 === medidas[2]) {
                $('#input_1').on('input', function () {
                    let valor1 = $(this).val();
                    let valor2 = valor1 / 100000;
                    $('#input_2').val(valor2);
                });

                $('#input_2').on('input', function () {
                    let valor1 = $(this).val();
                    let valor2 = valor1 * 100000;
                    $('#input_1').val(valor2);
                });

            }

        } else if (option_1 === medidas[1]) {
            // Metro & Centimetro
            if (option_2 === medidas[0]) {
                $('#input_1').on('input', function () {
                    let valor1 = $(this).val();
                    let valor2 = valor1 * 100;
                    $('#input_2').val(valor2);
                });
                $('#input_2').on('input', function () {
                    let valor1 = $(this).val();
                    let valor2 = valor1 / 100;
                    $('#input_1').val(valor2);
                });

                // Metro & Quilometro
            } else if (option_2 === medidas[2]) {
                $('#input_1').on('input', function () {
                    let valor1 = $(this).val();
                    let valor2 = valor1 / 1000;
                    $('#input_2').val(valor2);
                });
                $('#input_2').on('input', function () {
                    let valor1 = $(this).val();
                    let valor2 = valor1 * 1000;
                    $('#input_1').val(valor2);
                });
            }

        } else if (option_1 === medidas[2]) {
            // Quilometro & Centimetro
            if (option_2 === medidas[0]) {
                $('#input_1').on('input', function () {
                    let valor1 = $(this).val();
                    let valor2 = valor1 * 100000;
                    $('#input_2').val(valor2);
                });
                $('#input_2').on('input', function () {
                    let valor1 = $(this).val();
                    let valor2 = valor1 / 100000;
                    $('#input_1').val(valor2);
                });

                // Quilometro & Metro
            } else if (option_2 === medidas[1]) {
                $('#input_1').on('input', function () {
                    let valor1 = $(this).val();
                    let valor2 = valor1 * 1000;
                    $('#input_2').val(valor2);
                });
                $('#input_2').on('input', function () {
                    let valor1 = $(this).val();
                    let valor2 = valor1 / 1000;
                    $('#input_1').val(valor2);
                });
            }

        }

    });





}


function peso() {

}



function temperatura() {

}

function volume() {

}

function moeda() {

}


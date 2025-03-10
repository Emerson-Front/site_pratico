<div class="page-conversor">

    <h2>Selecione uma unidade de medida:</h2>

    <section id="section-cartao">

        <div class="cartao card-selected" id="medida">
            <img src="mvc/views/imagens/comprimento.png" alt="Imagem de comprimento (Distância)">
            <p>Medida de distância</p>
        </div>

        <div class="cartao" id="peso">
            <img src="mvc/views/imagens/peso.png" alt="Imagem de um peso">
            <p>Peso</p>
        </div>

        <div class="cartao" id="temperatura">
            <img src="mvc/views/imagens/temperatura.png" alt="Imagem de termômetro">
            <p>Temperatura</p>
        </div>

        <div class="cartao" id="volume">
            <img src="mvc/views/imagens/volume.png" alt="Imagem de um galão">
            <p>Volume</p>
        </div>

        <div class="cartao" id="moeda">
            <img src="mvc/views/imagens/moeda.png" alt="Imagem de uma moeda">
            <p>Moeda</p>
        </div>

    </section>


    <section id="section-conversor">

        <h3>Medida de distância</h3>

        <div class="box">
            <div class="parte">
                <input type="number" name="" id="input_1">
                <select name="select_1" id="select_1">
                    <option value="">Selecione</option>
                </select>
            </div>

            <span style="font-size:30px; margin:0 5px"><b>=</b></span>

            <div class="parte">
                <input type="number" name="" id="input_2">
                <select name="select_2" id="select_2">
                    <option value="">Selecione</option>
                </select>
            </div>
        </div>

    </section>

</div> <!-- page-conversor -->

<script src="js/page-conversor.js"></script>
        const timerElement = document.getElementById('timer');

        function atualizarContagem() {
            const anoAtual = new Date().getFullYear();
            const dataAnoNovo = new Date(`January 01, ${anoAtual + 1} 00:00:00`);

            const agora = new Date();

            const diferenca = dataAnoNovo - agora;

            if (diferenca < 0) {
                clearInterval(intervalo); 
                return;
            }

            const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

            timerElement.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
        }

        const intervalo = setInterval(atualizarContagem, 1000);

        atualizarContagem();
$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        do {
            const tarefaNova = $('#taskdigitada').val();
            const novoItem = $('<li style="display: none;"></li>').text(tarefaNova);
            const checkbox = $('<input type="checkbox">');
            novoItem.prepend(checkbox);
            
            $(novoItem).appendTo('ul').fadeIn(100); // fadeIn para exibir o novo item
            $('#taskdigitada').val('');
            
        $('#botao').click(function() {
        const ulCorrespondente = $(this).closest('li');
        ulCorrespondente.remove();
    });

    $('input[type="checkbox"]').change(function() {
        if ($(this).is(':checked')) { // Verifica se a caixa de seleção está marcada
            const tarefaAdd = $(this).closest('li'); // Encontra o item de lista correspondente
            tarefaAdd.css('text-decoration', 'line-through'); // Aplica estilo de linha através do texto
        } else {
            const tarefaAdd = $(this).closest('li'); // Encontra o item de lista correspondente
            tarefaAdd.css('text-decoration', 'none'); // Remove o estilo de linha do texto
        }
    });
        } while ($('#taskdigitada').val() != '') ;
    });
});
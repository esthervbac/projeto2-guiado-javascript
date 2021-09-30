var people = [
    {   
        name: 'Maria Antonieta Alves',
        tel:  '+55 (21) 99999-9999',
        xp:   true
    },
    {   
        name: 'Carlos Eduardo Vieira',
        tel:  '+55 (21) 99999-9999',
        xp:   true
    },
    {   
        name: 'Priscila Veiga',
        tel:  '+55 (21) 99999-9999',
        xp:   false
    },
    {   
        name: 'José Roberto Barcelos',
        tel:  '+55 (21) 99999-9999',   
        xp:   false
    },
    {   
        name: 'Raíssa Martins',
        tel:  '+55 (21) 99999-9999',
        xp:   false
    },
    {   
        name: 'Isadora Mota',
        tel:  '+55 (21) 99999-9999',
        xp:   true
    },
    {   
        name: 'Angélica Barbosa',
        tel:  '+55 (21) 99999-9999',
        xp:   false
    },
    {   
        name: 'Luiz Pedro Sampaio',
        tel:  '+55 (21) 99999-9999',
        xp:   true
    },
    {   
        name: 'Henrique Ribeiro Santos',
        tel:  '+55 (21) 99999-9999',
        xp:   true
    },
    {   
        name: 'Silvio Duarte Alcântara',
        tel:  '+55 (21) 99999-9999',
        xp:   true
    },
];

function desenhaTabela() {

    currentLines = [...document.querySelectorAll('table.lista tbody .dinamic-content')];
    currentLines.forEach((element) => {
        element.remove()
    })

    for (person in people)  {
        document.querySelector('table.lista tbody').innerHTML += `<tr class="dinamic-content" style="background-color: ${ ((person % 2 == 0) ? '#fff' : '#eee' )}">
                <td>
                    ${ people[person].name }
                </td>
                <td>
                    ${ people[person].tel }
                </td>
                <td>
                    ${ (people[person].xp ? '<strong style="color:green"> Sim </strong>' : '<strong style="color:red"> Não </strong>') }
                </td>
                <td>
                    <button onclick="people.splice(${person}, 1); desenhaTabela()"> Excluir </button>
                </td>
            </tr>`
    }
}  

desenhaTabela();
/**
 * Created by Emmanuelle on 03/02/2016.
 */

var $grille = document.getElementById('jeu'),
    $cases = document.getElementsByClassName('case'),
    $text = document.getElementById('text'),
    $button = document.getElementById('redo'),
    coup = 0,
    player,
    content;

function go(e) {
    var case0 = e.target;
    coup = coup + 1;
    if (case0.className == "case") {
        if (coup % 2 != 0) {
            player = 'player1';
        }
        else {
            player = 'player2';

        }
        case0.classList.add(player);
        if (coup > 4) {
            verify(player);
        }
    }
    else {
        $text.innerHTML = 'Tu essaies de tricher ??? Cette case est déjà prise. Tu passes ton tour !';
        coup = coup + 1;
    }

}
function verify(player) {
    var A = 'case ' + player;
    //On vérifie les lignes
    for (var i = 0; i <= 6; i = i + 3) {
        if ($cases[i].className == A && $cases[i + 1].className == A && $cases[i + 2].className == A) {
            win(player);
        }
    }
    //On vérifie les colonnes
    for (var j = 0; j <= 3; j = j + 1) {
        if ($cases[j].className == A && $cases[j + 3].className == A && $cases[j + 6].className == A) {
            win(player);
        }
    }
    //On vérifie les diagonales
    if (($cases[0].className == A && $cases[4].className == A && $cases[8].className == A)
        || ($cases[2].className == A && $cases[4].className == A && $cases[6].className == A)) {
        win(player);
    }

    if (coup == 9){
        $text.style.backgroundColor = "grey";
        $text.innerHTML = 'Egalité';
    }
    //on vérifie l'égalité

}
function win(player) {
    $text.style.backgroundColor = "grey";
    $text.innerHTML = player + ' a gagné !';

}

function redo() {
    $text.innerHtml = " ";
    $text.style.backgroundColor = "transparent";
    coup = 0;
    for (var i = 0; i < $cases.length; i++) {
        $cases[i].classList.remove('player1');
        $cases[i].classList.remove('player2');
    }
}


$grille.addEventListener('click', go, false);
$button.addEventListener('click', redo, false);
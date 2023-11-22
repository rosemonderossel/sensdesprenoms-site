/**
 *
 */
"use strict";

function removeDiacritics(texte) {
    const replacements =
        {
            â: "a",
            ç: "c",
            è: "e",
            é: "e",
            ë: "e",
            î: "i",
            ï: "i",
            ô: "o",
            " ": "_",
        };

    let resultat =
        texte;
    for (let charDiacritique in replacements) {
        resultat =
            resultat.replaceAll(
                charDiacritique,
                replacements[
                    charDiacritique
                ]
            );
    }
    return resultat;
}

/**
 *
 */
const searchBar =
    document.getElementById(
        "searchBar"
    );

/**
 *
 */
let prenoms_ids = [];
document
    .querySelectorAll("div.fiche_prenom[id]")
    .forEach((div) => {
        prenoms_ids.push(div.id);
    }
);


/**
 *
 */
function onInput() {
    const searchString = removeDiacritics(searchBar.value.toLowerCase());
    const length = searchBar.value.length;
    for (const prenoms_id of prenoms_ids) {
        if (prenoms_id.substring(0, length) === searchString) {
            console.log(`L'ID "${searchString}" a été trouvé. = ${prenoms_id}`);
            const element = document.getElementById(prenoms_id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                searchBar.focus();
                return;
            }
        }
    }
    console.log(`L'ID "${searchString}" n’a pas été trouvé.`);
}


/**
 *
 */
searchBar.addEventListener("input", onInput);


/**
 *
 */
document.addEventListener("DOMContentLoaded",
    function() {
        onInput();
    }
);

// 1. ziskajte referenciu na DOM element s triedou 'display' a priradte ju do premennej displayElement
const displayElement = document.querySelector('.display');

// 2. napiste funkciu, ktora na koniec textu v displayElement prida hodnotu z argumentu funkcie
// Priklad1: ak displayElement neobsahuje text, tak volanie insertValueFn(1) zmení text z '' na '1'
// Priklad2: ak displayElement obsahuje text '11', tak volanie insertValueFn(2) zmení text z '11' na '112'
const insertValueFn = (newValue) => {
    displayElement.textContent += newValue; 
};

// 3. ziskajte referenciu na vsetky DOM elementy s triedou 'button-num' a priradte ju do premennej allNumButtons
const allNumButtons = document.querySelectorAll('.button-num');

// 4. 
// A) S vyuzitim cyklu, prejdite cez vsetky elementy ulozene v allNumButtons.
// B) Zaistite, aby sa po kliknuti na kazdy button z pola 'allNumButtons' vykonala funkcia insertValueFn (vyuzite event click).
//    Ako argument vo funkcii insertValueFn pouzite text, ktory ma v sebe prave stlaceny button.
for (let button of allNumButtons) {
    button.addEventListener('click', () => insertValueFn(button.textContent));
    // dalsi sposob ako to zapisat:
    // button.onclick(() => insertValueFn(button.textContent));
}

// 5. opakujte postup z kroku 3 a 4 aj pre buttony s operatormi (+, -, x, /, .). 
//    Musite najst sposob, ako vybrat len buttony s textom +, -, x, /, . 
//    (hint: pridajte nieco do index.html, aby ste ich vedeli identifikovat. Uprava index.html bude potrebna aj pri bodoch 6,7 a 9). 
// const allOperatorButtons;

// 6. Pristupte k elementu ⌦ na vymazanie jedneho znaku a ulozte si ho do konstanty.
//    Implementujte jeho funkcionalitu tak, aby sa po kliknuti nan vymazal posledny znak z displeja.
// const eraseNumElement;

// 7. Pristupte k elementu C na vymazanie vsetkeho na displeji (myslim ten element).
//    Implementujte jeho funkcionalitu tak, aby sa po kliknuti nan vymazal cely obsah displeja.
// const eraseAllElement;

// 8. do konstanty doTheMath priradte nasu funkciu, ktora zoberie priklad z displeja a vypocita ho pomocou funkcie eval()
// dokumentacia: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval 
// const doTheMath;

// 9. pristupte ku elementu = a zaistite, aby sa po kliknuti vykonal vypocet pomocou funkcie doTheMath()
// const executeElement;

// 10. bonus - mozno ste uz zistili, ze nasobenie nefunguje.
// Problemom je, ze na nasobenie pouzivame symbol 'x' namiesto symbolu '*'.
// Klient ale od nas chce, aby sme aj nadalej zobrazovali 'x'.
// Ake mame moznosti na vyriesenie tohto problemu? 
// (hint. ja by som to vyriesil pomocou nejakej manipulacie s textom vo funkcii doTheMath)
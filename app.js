// 1. ziskajte referenciu na DOM element s triedou 'display' a priradte ju do premennej displayElement
// const displayElement;

// 2. napiste funkciu, ktora na koniec textu v displayElement prida hodnotu z argumentu funkcie
// Priklad1: ak displayElement neobsahuje text, tak volanie insertNumberFn(1) zmení sa text z '' na '1'
// Priklad2: ak displayElement obsahuje text '11', tak volanie insertNumberFn(2) zmení sa text z '11' na '112'
// const insertValueFn;

// 3. ziskajte referenciu na vsetky DOM elementy s triedou 'button' a priradte ju do premennej allNumButtons
// const allNumButtons;

// 4. 
// A) S vyuzitim cyklu, prejdite cez vsetky elementy ulozene v allNumButtons.
// B) Zaistite, aby sa po kliknuti na kazdy button z pola 'allNumButtons' vykonala funkcia insertNumberFn (vyuzite event click).
//    Ako argument vo funkcii insertNumberFn pouzite text, ktory ma v sebe prave stlaceny button.


// 5. opakujte postup z kroku 3 a 4 aj pre buttony s operatormi (+, -, x, /, .). 
//    Musite najst sposob, ako vybrat len buttony s textom +, -, x, /, . 
//    (hint: pridajte nieco do index.html aby ste ich vedeli identifikovat. To bude potrebne aj pri bodoch 6,7 a 9). 
// const allOperatorButtons;

// 6. Pristupte k elementu na vymazanie jedneho znaku.
//    Implementujte jeho funkcionalitu tak, aby sa po kliknuti nan vymazal posledny znak z displeja.
// const eraseNumElement;

// 7. Pristupte k elementu na vymazanie vsetkeho na displeji (myslim ten element).
//    Implementujte jeho funkcionalitu tak, aby sa po kliknuti nan vymazal posledny znak z displeja.
// const eraseAllElement;

// 8. do konstanty doTheMath priradte nasu funkciu, ktora zoberie priklad z displeja a vypocita ho pomocou funkcie eval()
// dokumentacia: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval 
// const doTheMath;

// 9. pristupte ku buttonu = a zaistite aby sa po kliknuti vykonal vypocet
// const executeElement;

// 10. bonus - mozno ste uz zistili, ze nasobenie nefunguje.
// Problemom je, ze na nasobenie pouzivame symbol 'x' namiesto symbolu '*'.
// Klient ale od nas chce, aby sme aj nadalej zobrazovali 'x'.
// Ake mame moznosti na vyriesenie tohto problemu? 
// (hint. ja by som to vyriesil pomocou nejakej manipulacie s textom vo funkcii doTheMath)
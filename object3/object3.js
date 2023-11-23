
let fizetes = {
    Anna: 2100,
    Cecil: 1890,
    Emil: 2050,
    Gerald: 2920
};
  
function osszegzes(fizetesek) {
    let osszeg = 0;

    for (let szemely in fizetesek) {
      console.log(`${szemely} fizetése: ${fizetesek[szemely]}`);
      osszeg += fizetesek[szemely];
    }
    console.log(`Az össz kereset: ${osszeg}`);
}
  
osszegzes(fizetes);

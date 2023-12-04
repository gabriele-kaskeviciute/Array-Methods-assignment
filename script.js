// 1. Nusikopijuok array (const cars = ["BMW", "VW", "Audi"]) ir naudojant forEach, atspausdink kiekvieną elementą (automobilio reikšmę)

console.log("//////  1  //////")

const  cars = ["BMW", "VW", "Audi"];
cars.forEach((element) => console.log(element))

// 2. Pakoreguok pirmą pratimą, kad atspaudintum index: value (pvz: "0: BMW", "1: VW" ir t.t.).

console.log("//////  2  //////")

const  cars2 = ["BMW", "VW", "Audi"];
cars2.forEach((element, index) => console.log(index, element))

// 3. Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padaryk, kad susikurtų naujas array (ir jį atspausdink), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" => "Petras").

console.log("//////  3  //////")

const friends = ["rūta", "LOra", "JoaNNa", "ReBecca", "žiVilė"];
console.log(friends)

function capitalizeWords(friends) {
  return friends.map(word => {
    const firstLetter = word.charAt(0).toUpperCase();
    const rest = word.slice(1).toLowerCase();

    return firstLetter + rest;
  });
}
console.log(capitalizeWords(friends));



// 4. Sukurk Array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs 18.
console.log("//////  4  //////")

const friendsAge = [15, 11, 23, 35, 56, 45, 71]
console.log(friendsAge)

const filter = friendsAge.filter(x => x >= 18)
console.log(filter)

// 5. Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės.

console.log("//////  5  //////")

const miestai = ["Vilnius", "Kaunas", "Klaipėda", "Palanga", "Kretinga", "Panevėžys"]
console.log(miestai)

const result = miestai.find(miestas => miestas.startsWith("K"));
console.log(result)


// 6. Penktame pratime esantį sprendimą pakoreguot ir patikrink su some ar bent vienas miestas prasideda iš mažosios.
console.log("//////  6  //////")

const miestai2 = ["vilnius", "Kaunas", "klaipėda", "Palanga", "kretinga", "Panevėžys"]
console.log(miestai2)

const result2 = miestai2.find(miestas => miestas.toUpperCase(0))

    console.log(result2)


// 7. Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas prasideda ir mažosios, bet ar visi iš didžiosios.

console.log("////// 7 //////")

const miestai3 = ["vilnius", "Kaunas", "klaipėda", "Palanga", "kretinga", "Panevėžys"];
 
const result3 = miestai3.every(miestas => miestas.toUpperCase() == miestas);
 
console.log("Ar visi mistai prasideda iš didžiosios?" + " - " + result3);
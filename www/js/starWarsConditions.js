const starWars7 = 'Star Wars: El Despertar de la Fuerza';
const pgStarWars7 = 13;

const nameAlonso = 'Alonso';
const ageAlonso = 26;

const nameSanti = 'Santi';
const ageSanti = 12;

const canWatchStarWars7 = (name, age, isWithAdult=false) => {
    if(age >= pgStarWars7){alert(`${name} puede pasar a ver ${starWars7}`)}
    else if(isWithAdult){ alert(`${name} puede pasar a ver ${starWars7}. Aunque su edad es ${age}, se encuentra acompañada/o por un adulto `);}
    else{ alert(`${name} no puede pasar a ver  ${starWars7}. Tiene ${age} años y necesita tener ${pgStarWars7}`)}
}

canWatchStarWars7(nameAlonso, ageAlonso);
canWatchStarWars7(nameSanti, ageSanti, true);
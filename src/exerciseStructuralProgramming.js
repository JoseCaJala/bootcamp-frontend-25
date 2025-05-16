let list = [
  { name: 'Fido', age: 5, type: 'dog' },
  { name: 'Lulu', age: 10, type: 'cat' },
  { name: 'Max', age: 3, type: 'dog' },
  { name: 'Milo', age: 2, type: 'cat' },
  { name: 'Bella', age: 4, type: 'dog' }
];

function toHumanYears(list){
    let newList = []
    for (const item of list) {
        newList.push(convertYears(item.age, item.type))
    }
    return newList;
}

function convertYears(age,type){
    if(type === 'dog') return HumanToDog(age)
    if(type === 'cat') return HumanToCat(age)
}

HumanToDog = (year) => year*7;
HumanToCat = (year) => year*5;

console.log(toHumanYears(list));

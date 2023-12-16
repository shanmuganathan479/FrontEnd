var personsInfo = {
    company: 'sp-coder',
    persons: [{
        id: 1,
        name: 'Adil'
    }, {
        id: 2,
        name: 'Arif'
    }]
};
const getNames = personsInfo.persons.map((data) => data.name);
console.log(getNames);
const companies = [
    {name : "Company One", category: "Finance", start: 1981, end: 2003},
    {name : "Company Two", category: "Retail", start: 1981, end: 2008},
    {name : "Company Three", category: "Auto", start: 1981, end: 2007},
    {name : "Company Four", category: "Retail", start: 1981, end: 2010},
    {name : "Company Five", category: "Technology", start: 1981, end: 2014},
    {name : "Company Six", category: "Finance", start: 1981, end: 2010},
    {name : "Company Seven", category: "Auto", start: 1981, end: 1996},
    {name : "Company Eight", category: "Technology", start: 1981, end: 2016},
    {name : "Company Nine", category: "Retail", start: 1981, end: 1989},

];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


// using a for loop
for(let i = 0; i < companies.length;  i++) {
    console.log(companies[i]);
}

// using forEach
companies.forEach(function(company){
   console.log(company.name);
});

// // using filter
// const canDrink = ages.filter(function(age){
//     if(age >= 21) {
//         return true;
//     }
// });

console.log(canDrink);
 
// using filter on for loops

for(let i = 0; i < ages.length; i++) {
    if(ages[i] >= 21) {
      canDrink.push(ages[i]);
    }
}


// arrow function

const canDrink = ages.filter(age => age >= 21);

const retailCompanies = companies.filter(company => company.category === 'Retail');

console.log(retailCompanies);

const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));

console.log(eightiesCompanies);

const lastedTenYears = companies.filter(company => (company.end - company.start > 10))
console.log(lastedTenYears);

// map
// creste array of company names

const testMap = companies.map(company => `${company.name}` ))
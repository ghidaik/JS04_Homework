/*Work with a partner to create a monkey object, which has the following properties:
* name
* species
* foodsEaten
And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.
Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.
Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).
*/

let monkey={

    name:['memo','bebo','neno'],
    species:['Baboon','Blue Monkey','Vervet Monkey'],
    foodsEaten:['banana','apple','corn'],
    
    eatSomething:function(params) {
      
    },
 
    introduce:function(){
        for(let i=0;i< monkey.name.length;i++){
console.log('hi monkey name is :'+this.name[i] + 'monkey species is :'  +  this.species[i] + 'monkey food is '+this.foodsEaten[i]);}
    },   
    

}

console.log(monkey.introduce());
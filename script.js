class User {
    constructor(_firstName,_lastName,_age,_location){
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }
    compareAge(anotherUser){
        if(this.age > anotherUser.age){
            return this.firstName + ' è più vecchio di ' + anotherUser.firstName;
        } else{
                return this.firstName + ' è più giovane di ' + anotherUser.firstName;
            }
        }
    }

const Lucio = new User('Lucio','Giocondo','26','Ercolano')
console.log('LUCIO', Lucio)

const Flora = new User('Flora', 'Rosbino','50','Ercolano')
console.log('Flora',Flora)

console.log(Lucio.compareAge(Flora))
console.log(Flora.compareAge(Lucio))

const petNameInput = document.getElementById('petName')
const ownerNameInput = document.getElementById('ownerName')
const speciesInput = document.getElementById('species')
const breedInput = document.getElementById('breed')
const petList = document.getElementById('pet-list');

class Pet{
    constructor(_petName, _ownerName, _species, _breed){
        this.petName = _petName
        this.ownerName = _ownerName
        this.species = _species
        this.breed = _breed
    }
    hasSameOwnerName(anotherPet){
        return this.ownerName === anotherPet.ownerName
    }

}
let pets =[]
const form = document.getElementById('pet-form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const pet = new Pet(
        petNameInput.value,
        ownerNameInput.value,
        speciesInput.value,
        breedInput.value
        );
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = 'Pet Name: ' + pet.petName + ', Owner: ' + pet.ownerName + ', Species: ' + pet.species + ', Breed: ' + pet.breed;
        petList.appendChild(li);

        console.log('Pet Saved',pet)
        pets.forEach(existingPet => {
            if (pet.hasSameOwnerName(existingPet)) {
              console.log(pet.petName + ' and ' + existingPet.petName + ' hanno lo stesso padrone ')
            } else {
              console.log(pet.petName + ' and ' + existingPet.petName + ' hanno un padrone diverso.');
            }
          });
          pets.push(pet)
        form.reset()
})




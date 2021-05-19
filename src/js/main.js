 
// ### Créer une class Objet
// ### Propriétés : nom, prix

 class Objet{
      constructor(nom,prix){
           this.nom = nom;
           this.prix = prix;
      }
 }



// III
// ### Créer deux instances d'objets avec un nom et un prix

let aquarium = new Objet("Aquarium", 150);
let terrarium = new Objet("Terrarium", 350);

// ### Créer une boite (tableau) et mettre les deux objets dedans.

let boite = [];
boite.push(aquarium);
boite.push(terrarium);
 
// ### Créer une class Personnage
// ### _Propriétés : nom(string), sac(tableau), argent(number)
// ### _Méthode : prendre(objet, boite)
// ### _Méthode : acheter(vendeur, objet)

class Personnage{
     constructor(nom,sac,argent){
          this.nom = nom;
          this.sac = sac;
          this.argent = argent;
          this.prendre = (objet, boite)=> {
               this.sac.push(objet);
               boite.splice(boite.indexOf(objet),1);
               console.log(`${this.nom} a mit un ${objet} dans son sac`);

          };
          this.acheter = (vendeur, objet) =>{
               if(this.argent >= objet.prix){
                    this.argent -= objet.prix;
                    vendeur.argent += objet.prix;
                    this.sac.push(objet);
                    vendeur.sac.splice(vendeur.sac.indexOf(objet),1);
                    console.log(`${this.nom} a acheté ${objet.nom} à ${vendeur.nom}`);

               }else{
                    console.log("Va acheter un truc moins cher");
               }

          };
     }
}

          
// ### Créer deux instances de Personnage et faites leur chacun [prendre] un objet de la boite avec leur méthode.

let naz = new Personnage("Naz",[], 800);
let ju = new Personnage("Ju", [], 700);


// ### Ensuite faites acheter à l'un des deux, l'objet de l'autre.

naz.prendre(aquarium, boite);
ju.prendre(terrarium, boite);
console.log(boite);

naz.acheter(ju,terrarium);
ju.acheter(naz, aquarium);

console.log(ju.argent);
console.log(naz.argent);


// story

let classeCoding19 = [];

let ajouter = (prenom, phrase)=>{
     classeCoding19.push(prenom);
     console.log(phrase);
}

let retirer = (prenom, phrase,)=>{
     classeCoding19.splice(classeCoding19.indexOf(prenom),1);
     console.log(phrase);
}

console.log(classeCoding19);

ajouter("nasila", "nasila va à ");
console.log(classeCoding19);
ajouter("antoine", "arrive")
console.log(classeCoding19);

retirer("antoine", "antoine sort chercher...");
console.log(classeCoding19);

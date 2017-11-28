/**
* Exercices sur les variables et les fonctions
**/

// ----
// Ecrire une fonction 'hello' qui affiche dans la console "Hello World!"

function hello() {
	console.log("Hello World!");
}

// ----
// écrire des fonctions suivante:
// addition(a, b)
function addition(){
	a=5;
	b=7;
	console.log(a+b);
}
// soustraction(a, b)
function soustraction(){
	a=3;
	b=76;
	res4=a-b
	console.log(res4);
}
// multiplication(a, b)
function multiplication(){
	a=5; b=5;
	res=a*b;

	console.log(res);
}
// division(a, b)
function division(){
	res=a/b;
	console.log(res);
}
// concatenation(str1, str2)
function concatenation(){

	res6="str1"+"str2"
	return res6;
}
// moyenne(a1, a2, a3)
function moyenne(){
 var a1=3;
 var a2=3;
 var a3=3;

 res8=(a1+a2+a3)/3
	console.log(res8);
}

// Chaque fonction devra effectuer l'opération correspondant à son nom, et renvoyer le résultat.
// Celui-ci sera stocké dans une variable, qui sera ensuite affichée dans la console

// ----
// Déclarer deux variables a et b, de valeurs respectives 5 et 12
// A l'aide d'une variable intermédiaire, inverser les deux valeurs pour que a ait pour valeur 12 et b pour valeur 5
// Afficher le résultat de a et b dans la console sous la forme d'une phrase: "A vaut : xxx et B vaut yyy"
var a, b;
// WRITE YOUR CODE HERE

console.log("A vaut : xxx et B vaut yyy")

// ----
// Ecrire une fonction 'isDivisibleBy5' qui reçoit un nombre en paramètre, et qui vérifie que ce nombre est divisible par 5.
// Cette fonction doit renvoyer un booléen
var isDivisibleBy5 = function isDivisibleBy5(x) {
	if ((x%5)===0){
			return true;
	}else{
		return false;
	}

}

// ----
// Ecrire une fonction 'isDivisibleByN' qui reçoit deux nombres entiers x et n, et qui vérifie si x est divisible par n.
// Cette fonction doit renvoyer un booléen
function isDivisibleByN(x, n) {
	if ((x%n)==1){
		return false;
	}else{
		return true;
	}

}

// ----
// Générer un nombre décimal compris entre 0 et 1, et le stocker dans une variable
// Changer la valeur de cette variable pour qu'elle vaille le nombre initial arrondi à 2 décimales
// Afficher dans la console
function genereEtArrondit() {
  // WRITE YOUR CODE HERE
	var a= (Math.random());
	return a;
}


/**
* Exercices sur les chaînes de caractères
**/

// ----
// Ecrire une fonction qui reçoit une chaîne de caractères, et qui renvoie la position
// de la première occurence de la lettre 'e' dans cette chaîne
	var a= 'eleve';
		function String(a){
			return a.charAt(0);
		}

// ----
// Ecrire une fonction qui reçoit une chaîne de caractères, et qui renvoie la position
// de la dernière occurence de la lettre 'e' dans cette chaîne
var b= 'eleve';
function String(b){
		return b.charAt(4);
	}

// ----
// Ecrire une fonction qui reçoit une chaîne de caractères contenant une prhase entière,
// et qui renvoie un tableau contenant chacun des différents mots dans la phrase

function String(){
	var c= "je suis un eleve";
	return c.split(" ");
}

// ----
// Ecrire une fonction qui reçoit une chaîne de caractère, qui transforme
// la première lettre en majuscule, et qui renvoie la nouvelle chaîne
var chain= 'atsam';
function capitalizeFirstLetter(chain){
	 return chain.charAt(0).toUpperCase()+chain.slice(1);
}

/**
* Exercices sur les fonctions natives javascript
**/

// ----
// Ecrire une fonction qui stocke vos noms et prénoms dans deux variables firstName et lastName
// Afficher dans une popup la concaténation des deux
var firstName='masta'
var lastName='atsam'
function concat(firstName, lastName){
	alert(firstName +" "+ lastName);
}

// ----
// Ecrire une fonction qui respecte les étapes suivantes:
// Demander à l'utilisateur de saisir une valeur numérique par le biais d'une popup
// Stocker cette valeur dans une variable
// Afficher sa valeur dans la console

var numerical=prompt ("please enter a number", "< >");

// ----
// Ecrire une fonction qui respecte les étapes suivantes:
// Demander à l'utilisateur de saisir deux valeurs numériques grâce à une popup de saisie
// L'alerter grâce à une popup si la valeur saisie n'est pas un nombre
// Afficher dans la console la somme des deux valeurs


/**
* Exercices sur les tableaux
**/

// ----
// Ecrire une fonction qui prend en argument un tableau de nombres et en calcule la somme.
// Valeurs initiales:
var numTab = [45, 99, 357, -33, 1, 8, -78];
function computeSumOfArray(tab) {
	somme=0;
	for(i=0; i<numTab.length;i++){
		somme+=numTab[i];
	}
	console.log(somme);
}

/**
* Exercices sur les structures de contrôles et de boucles
**/

// ----
// 1)
// 	- construire un tableau vide initialement
// 	- rajouter l'une après l'autre 10 valeurs quelconques (nombres, string) dans ce tableau
// 	- utiliser une boucle for pour afficher toutes les valeurs du tableau dans la console

		var array=[3, 15, "string", "No", 6, 5];
		function display(array){
			for(i =0; i<array.length; i++)
			 console.log(array[i]);
		}
// 2)
// 	- reprendre le tableau construit précédemment
// 	- utiliser une boucle while pour afficher toutes les valeurs du tableau dans la console
		var array=[3, 15, "string", "No", 6, 5];
		function display(array){
			while(i < array){
				console.log(array[i]);
				i++;
			}
}
// ----
// Ecrire une fonction qui réalise les étapes suivantes:
// Utiliser une fonction de type 'random' pour générer une liste de nombre aléatoires
// Utiliser une boucle for, et l'instruction 'if' pour afficher dans la console uniquement les nombres impairs de ce tableau

// ----
// Ecrire une fonction qui réalise les étapes suivantes:
// Sur 50 itérations:
//     - générer un entier de façon aléatoire
//     - si l'entier est divisible par 5, le stocker dans le tableau
// Afficher avec une boucle for le contenu du tableau dans la console


/**
* Exercices sur les objets
**/

// ----
// Construire un objet :
// - ayant deux propriéts: nom, prénom
// - dont les valeurs sont votre nom et votre prénom
// - rajouter dynamiquement une propriété âge
// - modifier dynamiquement le prénom de cet objet

// ----
// Ecrire une fonction qui reçoit un objet, et qui renvoie la longueur de cet objet
var getObjLength = function(obj) {
	// WRITE YOUR CODE HERE
};
// Tester cette fonction avec un objet de votre choix que vous aurez écrit

// ----
// Pour résoudre les exercices précédents vous avez écrit des fonctions.
// Vous devez maintenant construire un objet ayant plusieurs propriétés dont:
// - le nom de la propriété s'appelle 'solution_N', où N est le numéro de l'exercice
// - la valeur de la propriété est la fonction qui résoud l'exercice N

import fbAppli from 'firebase/app';
import 'firebase/firestore';

/******* Ex#3 - Étape B ********************************/ 
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBecMDnxjAsR0nKzSfoX3o_Jiu3KpcPFy8",
  authDomain: "ex3-produits-54553.firebaseapp.com",
  projectId: "ex3-produits-54553",
  storageBucket: "ex3-produits-54553.appspot.com",
  messagingSenderId: "1048891316016",
  appId: "1:1048891316016:web:3205663ca73979e3b5daf5"
};

// Initialiser Firebase
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/ 
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export default bd;
// // objet medecin
// class Medecin {
//   constructor(nom, adresse, tel, pratique, deplacement, distance) {
//     this.nom = nom; // text
//     this.adresse = adresse; // text
//     this.tel = tel; // text
//     this.pratique = pratique; // text
//     this.deplacement = deplacement; // bool
//     this.distance = distance; // number
//   }
// }

// const listDoctor = [
//   new Medecin(
//     "Claude Bernard",
//     "123 rue bliblablo",
//     "01.02.03.04.05",
//     "Medecin generaliste",
//     true,
//     1
//   ),
//   new Medecin(
//     "Émile Roux",
//     "123 rue loremipsum",
//     "01.02.03.04.05",
//     "Medecin generaliste",
//     false,
//     69
//   ),
//   new Medecin(
//     "Alexandre Yersin",
//     "12 avenue Disme",
//     "01.02.03.04.05",
//     "Infirmier",
//     true,
//     48
//   ),
//   new Medecin(
//     "Sigmund Freud",
//     "123 rue bliblablo",
//     "01.02.03.04.05",
//     "Medecin generaliste",
//     true,
//     22
//   ),
//   new Medecin(
//     "Peter Safar",
//     "123 rue loremipsum",
//     "01.02.03.04.05",
//     "Infirmier",
//     false,
//     8
//   ),
//   new Medecin(
//     "Marie Curie",
//     "12 avenue Disme",
//     "01.02.03.04.05",
//     "Infirmier",
//     true,
//     12
//   )
// ];
// // envoi sur le html/css
// function pushMedOnHTML(listeTrié) {
//   listeTrié.forEach(
//     docteur =>
//       `<div>
//       <h1>${docteur.name}</h1>
//       <h3>${docteur.pratique}</h3>
//       <p> Adresse : ${docteur.adresse}<p>
//       <p>Téléphone : ${docteur.tel}</p>
//       <p id="aDom">Déplacement à domicile: ${
//         docteur.deplacement ? "oui" : "non"
//       }
//       </div>`
//   );
// }

// // filter  à appliquer sur les médecins

// const filterDeplacement = document.getElementById("aDom");
// // const filterPratique = document.getElementById("");
// const boutonFilterADom = document.getElementById("btnADom");

// // filtres de déplacement
// boutonFilterADom.addEventListener("click", () => {
//   const medecin1 = listDoctor.filter(medecin => filterDeplacement);
//   return medecin1;
// });

// //filtre sur la pratique
// // filterPratique.addEventListener("click", () => {
// //   const tabtemp = listDoctor.filter(
// //     medecin => medecin.pratique === "Medecin generaliste"
// //   );
// //   return tabtemp;
// // });

// // filterDeplacement.addEventListener("click", () => {
// //   const tabtemp = listDoctor.filter(
// //     medecin => medecin.pratique === "Infirmier"
// //   );
// //   return tabtemp;
// // });
// //   );
// //   return tabtemp;
// // });

// const mainDoctors = document.getElementById("main");
// window.onload = function() {
//   mainDoctors.innerHTML = pushMedOnHTML(listDoctor);
// };

let btn = document.getElementById("dom");
let btnQuerry = document.getElementById("query");
let notMov1 = document.getElementById("docDom1");
let notMov2 = document.getElementById("docDom2");
let notMov3 = document.getElementById("docDom3");

btn.onclick = function() {
  if (notMov1.style.display === "flex") {
    notMov1.style.display = "none";
    notMov2.style.display = "none";
    notMov3.style.display = "none";
  } else {
    notMov1.style.display = "flex";
    notMov2.style.display = "flex";
    notMov3.style.display = "flex";
  }
};

btnQuerry.onclick = function() {
  if (notMov1.style.display === "flex") {
    notMov1.style.display = "none";
    notMov2.style.display = "none";
    notMov3.style.display = "none";
  } else {
    notMov1.style.display = "flex";
    notMov2.style.display = "flex";
    notMov3.style.display = "flex";
  }
};

# Teacher Finder

On veut créer une application pour trouver des formateurs en fonction d'un langage de base et/ou une spécialité.

Pour bien se préparer à ce qu'on va faire dans la suite de la spé on s'ajoute une contrainte :

- on ne touche pas au HTML, on va construire tous nos éléments HTML en Javascript
- on pourra modifier les styles dans le CSS

Résultat attendu :

![Résultat](docs/resultat.png)

## 1. Création de l'interface

Utilise Javascript pour créer des balises et les insérer dans le document.

Pour cela retrouve comment manipuler le DOM en ciblant des éléments, en en créant de nouveaux, en les modifiant et en les insérant.

Modifie les CSS pour te rapprocher du modèle. Les codes couleurs sont fournis dans le fichier CSS.

On veut 3 zones :

- un formulaire contenant un `select` pour choisir entre 2 options : `PHP` et `JavaScript`
- un compteur qui affiche le nombre de résultats
- une liste de formateurs avec leur prénom et un label spécifiant leur langage de prédilection

Tu trouveras ci-dessous la liste complète des formateurs, pour le moment on ne s'occupe que du langage de base, la spécialité viendra en bonus.

<details>
  <summary>Liste des formateurs</summary>

```js
[
  {
    name: 'Benjamin B.',
    language: 'PHP',
    specialty: 'Symfony',
  },
  {
    name: 'Benjamin N.',
    language: 'JavaScript',
    specialty: 'Data',
  },
  {
    name: 'Benoit',
    language: 'JavaScript',
    specialty: 'Data',
  },
  {
    name: 'Cécile',
    language: 'PHP',
    specialty: 'React',
  },
  {
    name: 'Fabien',
    language: 'JavaScript',
    specialty: 'React',
  },
  {
    name: 'Jean-Baptiste',
    language: 'PHP',
    specialty: 'Symfony',
  },
  {
    name: 'Jean-Christophe',
    language: 'PHP',
    specialty: 'Symfony',
  },
  {
    name: 'Luko',
    language: 'JavaScript',
    specialty: 'React',
  },
  {
    name: 'Quentin',
    language: 'JavaScript',
    specialty: 'React',
  },
  {
    name: 'Solène',
    language: 'PHP',
    specialty: 'React',
  },
  {
    name: 'Yann',
    language: 'JavaScript',
    specialty: 'Data',
  },
]
```

</details>

## 2. Interactions

Pose un écouteur d'évènement pour réagir quand la valeur sélectionnée **change**.

On veut alors filter la liste des formateurs et mettre à jour le compteur en fonction du langage choisi.
Il faut faire en sorte de n'afficher que les formateurs pratiquant le langage choisi.

## Bonus : 2ème filtre

- ajoute un 2ème filtre à ton interface pour les spécialités
- pose un écouteur pour réagir quand la valeur du 2ème `select` change
- filtre la liste en fonction des `select`
- n'oublie pas de mettre à jour le compteur

![Bonus](docs/bonus.png)

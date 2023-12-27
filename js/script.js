const app = {

  state: {
    languages: ['PHP', 'JavaScript'],
    specialities: ['Data', 'React', 'Symfony'],
    teachers: [
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
    ],
    selectedLanguage: 'PHP',
    selectedSpeciality: 'React',
  },

  init() {
    // A toi de jouer
    app.createFinder();
  },

  createFinder() {
    // Je stock l'élément principal de l'application dans la propriété rootElm
    // Cela me permettra au besoin de le récupérer n'importe où sans avoir besoin de faire un querySelector / getElementById
    app.rootElm = document.getElementById('app');

    const teachersFiltered = app.state.teachers.filter((teacher) => {
      // Si le langage du prof est différent de celui selectionner
      if(teacher.language !== app.state.selectedLanguage) {
        // Je ne le garde pas
        return false
      }
      // Si la spé du prof ne correspond pas à la spé selectionner
      if(teacher.specialty !== app.state.selectedSpeciality) {
        // Je ne le garde pas
        return false
      }

      // sinon... 
      return true;
    })

    // On s'organise en "composants"
    app.formElm = app.createForm();
    app.counterElm = app.createCounter(teachersFiltered.length);
    app.listElm = app.createList(teachersFiltered);

    // On ajoute les composants à l'application
    app.rootElm.append(app.formElm, app.counterElm, app.listElm);
  },

  createForm() {
    // Je créer dans un 1er temps mes options de langages
    // Pour chacun des langages stockés dans la propriété state.languages
    // Je le transforme en option
    const optLanguageElms = app.state.languages.map((language) => app.configureElement('option', {
      value: language,
      textContent: language,
      // Je vais selectionner le langage si il est égal à la donné stocker le langage selectionner
      selected: language === app.state.selectedLanguage
    }));

    // Je créer mon select en ajoutant les options à l'intérieur
    const selectLanguageElm = app.configureElement('select', {
      className: 'form__select',
    }, optLanguageElms);

    // J'écoute lorsque la valeur de mon select change
    selectLanguageElm.addEventListener('change', app.handleChangeSelectedLanguage);

    // Je transforme mon tableau de spécilités en tableau d'élément HTML option
    const optSpecialityElms = app.state.specialities.map((speciality) => app.configureElement('option', {
      value: speciality,
      textContent: speciality,
      selected: speciality === app.state.selectedSpeciality
    }));

    // Je créer mon select en ajoutant les options à l'intérieur
    const selectSpecialityElm = app.configureElement('select', {
      className: 'form__select',
    }, optSpecialityElms);

    selectSpecialityElm.addEventListener('change', app.handleChangeSelectedSpeciality);

    // Je créer mon formulaire en ajoutant le select à l'intérieur
    const formElm = app.configureElement('form', {
      className: 'form',
    }, [selectLanguageElm, selectSpecialityElm]);

    return formElm;
  },

  createCounter(nbOfTrainers) {
    // Je récupère le texte à afficher
    const text = app.getCounterTitle(nbOfTrainers);

    const counterElm = app.configureElement('h2', {
      className: 'counter'
    }, [text]);

    return counterElm;
  },

  /**
   * Retourne la phrase à afficher en fonction du nombre de formateur
   * @param {number} number Nombre de formateurs
   * @returns {string}
   */
  getCounterTitle(number) {
    if (number === 0) {
      return 'Aucun formateur trouvé';
    }
  
    if (number === 1) {
      return '1 formateur trouvé';
    }
  
    return `${number} formateurs trouvés`;
  },

  createList(teachers) {
    const createTeacherElm = (teacher) => {
      const nameElm = app.configureElement('span', {
        textContent: teacher.name
      })
      const languageElm = app.configureElement('span', {
        className: 'list__item-tag language',
        textContent: teacher.language
      })
      const specialityElm = app.configureElement('span', {
        className: 'list__item-tag speciality',
        textContent: teacher.specialty
      })
      return app.configureElement('li', {
        className: 'list__item',
      }, [nameElm, languageElm, specialityElm]);
    }

    // Je transforme mes données (tableau de prof) en élément HTML
    const teacherElms = teachers.map(createTeacherElm);

    const listElm = app.configureElement('ul', {
      className: 'list',
    }, teacherElms);

    return listElm
  },

  handleChangeSelectedLanguage(event) {
    // Je récupère le language sélectionné
    const selectedLanguage = event.target.value;
    // on dit quoi faire.
    // Je change la valeur du langage selectionner...
    // Mon affichage se met à jour automatiquement
    app.setState({
      selectedLanguage
    })
  },

  handleChangeSelectedSpeciality(event) {
    // Je récupère la spécialité sélectionné
    const selectedSpeciality = event.target.value;
    // on dit quoi faire.
    // Je change la valeur de la spé selectionner...
    // Mon affichage se met à jour automatiquement
    app.setState({
      selectedSpeciality
    })
  },

  /**
   * Méthode permettant de créer / configurer un élément HTML
   * @param {string} tag la balise de l'élément à créer
   * @param {object} props la liste des propriétés de l'élément
   * @param {array} children la liste des enfants de l'élément
   * @returns {HTMLElement} l'élément créé
   */
  configureElement(tag, props = {}, children = []) {
    // Je créer mon élément
    const elm = document.createElement(tag);

    // Je lui ajoute les propriétés
    // Je vais passé toutes les propriétés du paramètre props à ma variable elm
    Object.assign(elm, props);

    // si j'ai des enfants
    if(children.length > 0) {
      // J'ajoute ses enfants à mon élément
      // Je déverse le contenu du tableau children dans les arguments de la méthode append
      elm.append(...children);
    }

    return elm;
  },

  /**
   * Fonction qui va permettre de modifier les données du state + de mettre à jour l'affichage
   * @param {object} newState 
   */
  setState(newState) {
    // Je modifie les données stocker dans le state avec les nouvelles données passée en paramètre
    Object.assign(app.state, newState);

    // Je supprime le contenu de mon application
    app.rootElm.textContent = '';
    // Je recréer mon application
    app.createFinder();
  }

};

// on initialise l'app dès que le document est prêt
document.addEventListener('DOMContentLoaded', app.init);

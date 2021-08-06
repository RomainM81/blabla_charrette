const DataJourney = [
    {
      id:1,
      fromAdress: '3 rue de la fessière de la reine, Kaamelott',
      fromTown: 'Kaamelott',
      toAdress: 'Auberge du Père Fourasse, Fort Boyard',
      transportType: 'pieds',
      departure: 9,
      distance: 47,
      prices: [
        {
          type: 'pièce(s) d\'or',
          price: 1,
          acceptance: true
        },
        {
          type: 'pièce(s) d\'argent',
          price: 7,
          acceptance: true
        },
        {
          type: 'pièce(s) de cuivre',
          price: 30,
          acceptance: true
        },
        {
          type: 'kg(s) de patates',
          price: null,
          acceptance: false
        },
        {
          type: 'kg(s) de carottes',
          price: null,
          acceptance: false
        },
        {
          type: 'kg(s) de beurre',
          price: 12,
          acceptance: true
        },
        {
          type: 'kg(s) de sel',
          price: 3,
          acceptance: true
        },
        {
          type: 'pain(s)',
          price: null,
          acceptance: false
        },
        {
          type: 'mouton(s)',
          price: 3,
          acceptance: true
        }
      ]
    },
    {
      id:2,
      fromAdress: '43 allée de la gambas, Versaille',
      fromTown: 'Versaille',
      toAdress: 'Place du gueux cuiré, Montmirail',
      transportType:'cheval',
      departure: 11,
      distance: 12,
      prices: [
        {
          type: 'pièce(s) d\'or',
          price: 0.5,
          acceptance: true
        },
        {
          type: 'pièce(s) d\'argent',
          price: 4,
          acceptance: true
        },
        {
          type: 'pièce(s) de cuivre',
          price: 15,
          acceptance: true
        },
        {
          type: 'kg(s) de patates',
          price: null,
          acceptance: false
        },
        {
          type: 'kg(s) de carottes',
          price: 7,
          acceptance: true
        },
        {
          type: 'kg(s) de beurre',
          price: 4,
          acceptance: true
        },
        {
          type: 'kg(s) de sel',
          price: 1,
          acceptance: true
        },
        {
          type: 'pain(s)',
          price: 5,
          acceptance: true
        },
        {
          type: 'mouton(s)',
          price: null,
          acceptance: false
        }
      ]
    },
    {
      id:3,
      fromAdress: 'Boulevard Dame Beatrice la pouffiasse, Carmelid',
      fromTown: 'Carmelid',
      toAdress: '3 rue de la fessière de la reine, Kaamelott',
      transportType: 'carosse',
      departure: 14,
      distance: 21,
      prices: [
        {
          type: 'pièce(s) d\'or',
          price: 0.25,
          acceptance: true
        },
        {
          type: 'pièce(s) d\'argent',
          price: 3,
          acceptance: true
        },
        {
          type: 'pièce(s) de cuivre',
          price: 10,
          acceptance: true
        },
        {
          type: 'kg(s) de patates',
          price: 5,
          acceptance: true
        },
        {
          type: 'kg(s) de carottes',
          price: null,
          acceptance: false
        },
        {
          type: 'kg(s) de beurre',
          price: 2,
          acceptance: true
        },
        {
          type: 'kg(s) de sel',
          price: 0.5,
          acceptance: true
        },
        {
          type: 'pain(s)',
          price: null,
          acceptance: false
        },
        {
          type: 'mouton(s)',
          price: 1,
          acceptance: true
        }
      ]
    }
  ]
 
  export default DataJourney;
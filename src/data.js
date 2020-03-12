const cars = [
  {
    carClass: "A - Econômico",
    imageClass: "images/A/novoUno.png",
    carClassCharacteristcs: {
      doors: '2 portas',
      passengers: '4 passageiros',
      air: false,
      airBag: false,
      direction: "Hidráulica",
      gear: "Manual",
      abs: false,
    },
    availableCars: [
      {
        name: "Fiat Novo Uno 1.0",
        id: 1,
        image: 'images/A/novoUno.png'
      },
    ]
  },
  {
    carClass: "B - Econômico com ar",
    imageClass: "images/B/B.png",
    carClassCharacteristcs: {
      doors: '4 portas',
      passengers: '5 passageiros',
      air: true,
      airBag: false,
      direction: "Hidráulica",
      gear: "Manual",
      abs: true,
    },
    availableCars: [
      {
        name: "Renault Kwid 1.0",
        id: 2,
        image: 'images/B/KWID.png'
      },
      {
        name: "Novo Ford Ka Hatch SE 1.0",
        id: 3,
        image: 'images/B/KACR.png'
      },
      {
        name: "GM Onix 1.0",
        id: 4,
        image: 'images/B/ONIX.png'
      },
    ],
  },
  {
    carClass: "C - SUV",
    imageClass: "images/C/C.png",
    carClassCharacteristcs: {
      doors: '4 portas',
      passengers: '5 passageiros',
      air: true,
      airBag: true,
      direction: "Hidráulica",
      gear: "Automático",
      abs: true,
    },
    availableCars: [
      {
        name: "Nissan Kicks 1.6",
        id: 5,
        image: 'images/C/KICA.png'
      },
      {
        name: "Renault Duster 1.6",
        id: 6,
        image: 'images/C/DUST.png'
      }],
  },
  {
    carClass: "D - Pick-Up",
    imageClass: "images/D/D.png",
    carClassCharacteristcs: {
      doors: '2 portas',
      passengers: '5 passageiros',
      air: true,
      airBag: true,
      direction: "Elétrica",
      gear: "Automático",
      abs: true,
    },
    availableCars: [
      {
        name: "Fiat Toro 1.8",
        id: 7,
        image: 'images/D/TORA.png'
      },
      {
        name: "Renault Duster Oroch 2.0",
        id: 8,
        image: 'images/D/OROH.png'
      }],
  },
  {
    carClass: "E - Executivo Blindado",
    imageClass: "images/E/E.png",
    carClassCharacteristcs: {
      doors: '4 portas',
      passengers: '5 passageiros',
      air: true,
      airBag: true,
      direction: "Hidráulica",
      gear: "Manual",
      abs: true,
    },
    availableCars: [
      {
        name: "Novo Ford Fusion",
        id: 9,
        image: 'images/E/FUSB.png'
      },
      {
        name: "Audi A4 TFSI",
        id: 10,
        image: 'images/E/AUDB.png'
      }],
  },
];

module.exports = cars;

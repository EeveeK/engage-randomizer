// Creates unit objects

const dlcUnits = [
  {
    unitImg: "images/FEE_Portraits/FEE_Zelestia_portrait.png",
    unitName: "Zelestia",
    id: "36",
  },
  {
    unitImg: "images/FEE_Portraits/MadelineFE17Portrait.png",
    unitName: "Madeline",
    id: "37",
  },
  {
    unitImg: "images/FEE_Portraits/GregoryFE17Portrait.png",
    unitName: "Gregory",
    id: "38",
  },
  {
    unitImg: "images/FEE_Portraits/Nel.png",
    unitName: "Nel",
    id: "34",
  },
  {
    unitImg: "images/FEE_Portraits/Nil.png",
    unitName: "Nil",
    id: "35",
  },
]

let units = [
  {
    unitImg: "images/FEE_Portraits/Portrait_amber_fe17.png",
    unitName: "Amber",
    id: "15"
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_alcryst_fe17.png",
    unitName: "Alcryst",
    id: "11",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_alfred_fe17.png",
    unitName: "Alfred",
    id: "4",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_anna_fe17.png",
    unitName: "Anna",
    id: "10.5",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_boucheron_fe17.png",
    unitName: "Boucheron",
    id: "6",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_bunet_fe17.png",
    unitName: "Bunet",
    id: "22",

  },
  {
    unitImg: "images/FEE_Portraits/Portrait_céline_fe17.png",
    unitName: "Celine",
    id: "7",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_citrinne_fe17.png",
    unitName: "Citrinne",
    id: "12",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_clanne_fe17.png",
    unitName: "Clanne",
    id: "2",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_diamant_fe17.png",
    unitName: "Diamant",
    id: "14"
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_etie_fe17.png",
    unitName: "Etie",
    id: "5",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_chloé_fe17.png",
    unitName: "Chloe",
    id: "8",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_fogado_fe17.png",
    unitName: "Fogado",
    id: "20",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_framme_fe17.png",
    unitName: "Framme",
    id: "3",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_goldmary_fe17.png",
    unitName: "Goldmary",
    id: "29",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_hortensia_fe17.png",
    unitName: "Hortensia",
    id: "26",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_ivy_fe17.png",
    unitName: "Ivy",
    id: "17",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_jade_fe17.png",
    unitName: "Jade",
    id: "16",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_jean_fe17.png",
    unitName: "Jean",
    id: "9.5",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_kagetsu_fe17.png",
    unitName: "Kagetsu",
    id: "18",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_lapis_fe17.png",
    unitName: "Lapis",
    id: "13"
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_lindon_fe17.png",
    unitName: "Lindon",
    id: "30",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_louis_fe17.png",
    unitName: "Louis",
    id: "9",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_mauvier_fe17.png",
    unitName: "Mauvier",
    id: "32",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_merrin_fe17.png",
    unitName: "Merrin",
    id: "25",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_pandreo_fe17.png",
    unitName: "Pandreo",
    id: "21",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_panette_fe17.png",
    unitName: "Panette",
    id: "24",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_rosado_fe17.png",
    unitName: "Rosado",
    id: "28",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_saphir_fe17.png",
    unitName: "Saphir",
    id: "31",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_seadall_fe17.png",
    unitName: "Seadall",
    id: "27",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_timerra_fe17.png",
    unitName: "Timerra",
    id: "23",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_vander_fe17.png",
    unitName: "Vander",
    id: "1",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_veyle_fe17.png",
    unitName: "Veyle",
    id: "33",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_yunaka_fe17.png",
    unitName: "Yunaka",
    id: "10",
  },
  {
    unitImg: "images/FEE_Portraits/Portrait_zelkov_fe17.png",
    unitName: "Zelkov",
    id: "19",
  }
];


const uniqueClasses = [
  {

    className: "Avenir",
    uniqueClass: "Alfred",
    flying: false,
  },
  {

    className: "Vidame",
    uniqueClass: "Celine",
    flying: false,
  },
  {

    className: "Successeur",
    uniqueClass: "Diamant",
    flying: false,
  },
  {

    className: "Tireur d'élite",
    uniqueClass: "Alcryst",
    flying: false,
  },
  {

    className: "Picket",
    uniqueClass: "Timerra",
    flying: false,
  },
  {

    className: "Cupido",
    uniqueClass: "Fogado",
    flying: false,
  },
  {

    className: "Lindwurm",
    uniqueClass: "Ivy",
    flying: true,
  },
  {

    className: "Sleipnir Rider",
    uniqueClass: "Hortensia",
    flying: true,
  },
  {

    className: "Dancer",
    uniqueClass: "Seadall",
    flying: false,
  },
  {

    className: "Fell Child",
    uniqueClass: "Veyle",
    flying: false,
  },
  {

    className: "Melusine",
    uniqueClass: "Zelestia",
    flying: true,
  },
  {

    className: "Fell Child",
    uniqueClass: "Nel",
    flying: false,
  },
  {
    className: "Fell Child",
    uniqueClass: "Nil",
    flying: false,
  },
]

const dlcClasses = [
  {
    className: "Mage Canoneer",
    uniqueClass: "None",
    flying: false,
  },
  {
    className: "Enchanter",
    uniqueClass: "None",
    flying: false,
  },
]

const classes = [

  {
    className: "Swordmaster",
    uniqueClass: "None",
    flying: false,
  },
  {
    className: "Hero",
    uniqueClass: "None",
    flying: false,
  },
  {
    className: "Halberdier",
    uniqueClass: "None",
    flying: false,
  },
  {
    className: "Royal Knight",
    uniqueClass: "None",
    flying: false,
  },
  {
    className: "Berserker",
    uniqueClass: "None",
    flying: false,
  },
  {
    className: "Sniper",
    uniqueClass: "None",
    flying: false,
  },
  {
    className: "Bow Knight",
    uniqueClass: "None",
    flying: false,
  },
  {
    className: "Thief",
    uniqueClass: "None",
    flying: false,
  },
  {
    className: "Sage",
    uniqueClass: "None",
    flying: false,
  },
  {
    className: "Mage Knight",
    uniqueClass: "None",
    flying: false,
  },
  {
    className: "Martial Master",
    uniqueClass: "None",
  },
  {
    className: "High Priest",
    uniqueClass: "None",
    flying: false,
  },
  {
    className: "Martial Master",
    uniqueClass: "None",
    flying: false,
  },
  {
    className: "General",
    uniqueClass: "None",
    flying: false,
  },
  {
    className: "Great Knight",
    uniqueClass: "None",
    flying: false,
  },
  {
    className: "Paladin",
    uniqueClass: "None",
    flying: false,
  },
  {
    className: "Wolf Knight",
    uniqueClass: "None",
    flying: false,
  },
  {
    className: "Griffin Knight",
    uniqueClass: "None",
    flying: true,
  },
  {
    className: "Wyvern Knight",
    uniqueClass: "None",
    flying: true,
  }
];
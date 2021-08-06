import Perceval from '../../assets/Perceval.png'
import Karadoc from '../../assets/Karadoc.png'
const Data = [
    {
        id: 1,
        name:"Perceval",
        picture: Perceval,
        class:"Chevalier",
        hygiene:"Douteux",
        transport:"Cheval",
        age: 40,
        sexe:"Homme",
        payment: [
            {
            gold_c: true,
            silver_c:true,
            bronze_c:true,
            potato:false,
            carrot:false,
            butter:false,
            salt:false,
            bread: true
        }
    ]
    },
    {
        id: 2,
        name:"Caradoc",
        picture: Karadoc,
        class:"Chevalier",
        hygiene:"Plus que douteux",
        transport:"Cheval",
        age:"41",
        sexe:"Homme",
        payment: [
            {
            gold_c:false,
            silver_c:true,
            bronze_c:true,
            potato:true,
            carrot:true,
            butter:true,
            salt:true,
            bread:true
        }
    ]
    },
    {
        id: 3,
        name:"Abdou",
        picture:"",
        class:"Grouillot",
        hygiene:"",
        transport:"Pied",
        age:"35",
        sexe:"Homme",
        payment: [
            {
            gold_c:false,
            silver_c:false,
            bronze_c:false,
            potato:true,
            carrot:true,
            butter:false,
            salt:false,
            bread:false
        }
    ]
    },
    {
        id: 4,
        name:"Sylvain",
        picture:"",
        class:"Tavernier",
        hygiene:"",
        transport:"Ane",
        age:"31",
        sexe:"Homme",
        payment: [
            {
            gold_c:false,
            silver_c:true,
            bronze_c:true,
            potato:false,
            carrot:false,
            butter:true,
            salt:true,
            bread:true
        }
    ]
    },
    {
        id: 5,
        name:"Dorothée",
        picture:"",
        class:"Princesse",
        hygiene:"",
        transport:"Carosse",
        age:"31",
        sexe:"Femme",
        payment: [
            {
            gold_c:true,
            silver_c:true,
            bronze_c:true,
            potato:false,
            carrot:false,
            butter:false,
            salt:false,
            bread:false
        }
    ]
    },
    {
        id: 6,
        name:"Ludivine",
        picture:"",
        class:"Paysane",
        hygiene:"",
        transport:"Ane",
        age:"31",
        sexe:"Femme",
        payment: [
            {
            gold_c:false,
            silver_c:false,
            bronze_c:true,
            potato:true,
            carrot:true,
            butter:true,
            salt:true,
            bread:true
        }
    ]
    },
    {
        id: 7,
        name:"Loghan",
        picture:"",
        class:"Troubadour",
        hygiene:"",
        transport:"Pied",
        age:"31",
        sexe:"Homme",
        payment: [
            {
            gold_c:false,
            silver_c:true,
            bronze_c:true,
            potato:false,
            carrot:false,
            butter:false,
            salt:false,
            bread:false
        }
    ]
    },
];

export default Data;
import Perceval from '../../assets/Perceval.png'
import Karadoc from '../../assets/Karadoc.png'
import Guethenoc from '../../assets/Guethenoc1.jpg'
import Tavernier from '../../assets/tavernier.jpg'
import Guenièvre from '../../assets/Guenièvre.png'
import Merlin from '../../assets/merlin.jpg'
import Angarade from '../../assets/Angarade.png'

const Data = [
    {
        id: 1,
        name:"Perceval",
        picture: Perceval,
        class:"Chevalier",
        hygiene:"Douteux",
        hygiene_month : 6,
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
        name:"Karadoc",
        picture: Karadoc,
        class:"Chevalier",
        hygiene:"Plus que douteux",
        hygiene_month : 12,
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
        name:"Guethenoc",
        picture: Guethenoc,
        class:"Fermier",
        hygiene:"Sent la fiente de bovin",
        hygiene_month : 28,
        transport:"Pied",
        age:"65",
        sexe:"Homme",
        payment: [
            {
            gold_c:false,
            silver_c:false,
            bronze_c:false,
            potato:true,
            carrot:true,
            butter:false,
            salt:true,
            bread:true
        }
    ]
    },
    {
        id: 4,
        name:"Le Tavarnier",
        picture:Tavernier,
        class:"Tavernier",
        hygiene:"Passable",
        hygiene_month : 2,
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
        name:"Guenièvre",
        picture:Guenièvre,
        class:"Reine",
        hygiene:"Parfaite",
        hygiene_month : 1,
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
        name:"Merlin",
        picture: Merlin,
        class:"Enchanteur",
        hygiene:"Correct",
        hygiene_month : 2,
        transport:"Charrette",
        age:"884",
        sexe:"Homme",
        payment: [
            {
            gold_c:false,
            silver_c:true,
            bronze_c:true,
            potato:false,
            carrot:false,
            butter:false,
            salt:true,
            bread:true
        }
    ]
    },
    {
        id: 7,
        name:"Angarade",
        picture: Angarade,
        class:"Servante",
        hygiene:"Passable",
        hygiene_month : 2,
        transport:"Pied",
        age:"28",
        sexe:"Femme",
        payment: [
            {
            gold_c:false,
            silver_c:false,
            bronze_c:true,
            potato:true,
            carrot:true,
            butter:false,
            salt:true,
            bread:true
        }
    ]
    },
];

export default Data;
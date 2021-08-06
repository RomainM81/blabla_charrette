import merlin from '../../assets/merlinfaq.jpg'

import './Faq.css';

const Faq = () => {
    return (
        <div>
            <div className="bloc">
                <h2 className="titleFaq">Peste noire : la foire aux questions</h2>
                <img src={merlin} alt="merlin" />
            </div>
            <div className="blocFaq">
                <div>
                    <h3><i class="em em-biohazard_sign"></i> Utilisation du Pass Sanitaire</h3>
                    <p>Oyé oyé braves gens ! Un nouveau texte de loi vient d'êtrez voté. Chacun devra dorénavent recevoir 10 vaccins en 1 mois 
                        pour obtenir le Pass Sanitaire. Sans ça, pas de voyage. Mais ne vous inquiétez pas, nous avons négocier un prix exeptionnel
                        juste pour vous à 500 po le vaccin. Et si vous n'avez pas d'argent, tant pi pour vous, il faudra rester chez vous.</p>
                </div>
                <div>
                    <h3>Qu’est-ce que la peste ?</h3>
                    <p>La peste est une maladie infectieuse causée par la bactérie Yersinia Pestis, que l’on trouve
                    généralement chez des petits mammifères et leurs puces. Elle est transmise entre les animaux et les
                    humains par les piqures de puces infectées, le contact direct avec des tissus infectés, et l’inhalation
                    de gouttelettes respiratoires infectées. Les antibiotiques sont efficaces pour guérir de la peste, s’ils
                    sont délivrés très tôt, car le délai d’incubation de la maladie est généralement rapide. </p>
                </div>
                <div>
                    <h3>Quels sont les types de pestes ?</h3>
                    <p>Il y a trois formes de peste, selon l’itinéraire de l’infection : bubonique, septicémique et
                    pulmonaire. Toutes les formes sont guérissables si elles sont détectées à temps.</p>
                    <p><i class="em em-rotating_light"></i> <strong>La peste bubonique</strong> (connue en Europe médiévale comme la « Peste Noire ») est la forme la
                    plus commune de peste dans le monde et est causée par la piqure d’une puce infectée. Le
                    bacille de la peste, Y. pestis, est introduit par la piqure et voyage par l’intermédiaire du
                    système lymphatique jusqu’au ganglion lymphatique le plus proche où il se réplique. Le
                    ganglion lymphatique devient enflammé, tendu et douloureux, et on appelle cela un
                    « bubo ». Aux stades avancés de l'infection, les ganglions lymphatiques enflammés peuvent
                    se transformer en plaies ouvertes remplies de pue.</p>
                    <p><i class="em em-rotating_light"></i> <strong>La peste pulmonaire</strong> est la forme de la peste la plus virulente qui existe. La période
                    d’incubation peut être aussi courte que 24 heures. En général, la forme pulmonaire est
                    causée par la propagation aux poumons à cause de la peste bubonique avancée. Cependant,
                    une personne atteinte de la peste pulmonaire secondaire peut former des gouttelettes
                    infectieuses en aérosol et transmettre la peste par des gouttelettes d’un humain à l’autre. La
                    peste pulmonaire non traitée est toujours fatale.</p>
                    <p><i class="em em-rotating_light"></i> <strong>La peste septicémique</strong> se produit lorsque l'infection se propage dans le sang, suite à une peste
                    bubonique ou pulmonaire.
                    </p>
                </div>
                <div>
                    <h3>Quels sont les symptômes de la peste ?</h3>
                    <p>Les symptômes comprennent généralement l'apparition soudaine de fièvre, des frissons, des
                    douleurs corporelles et à la tête, de la faiblesse, des vomissements et de la nausée. Dans le cas de la
                    forme bubonique, les ganglions enflammés et douloureux peuvent aussi apparaitre. La forme
                    pulmonaire possède une période d’incubation plus courte (parfois moins de 24 heures), et comprend
                    des symptômes de problèmes respiratoires sévères tels que de l’essoufflement et de la toux, avec des
                    traces de sang.</p>
                </div>
            </div>

        </div>
    );
}

export default Faq;
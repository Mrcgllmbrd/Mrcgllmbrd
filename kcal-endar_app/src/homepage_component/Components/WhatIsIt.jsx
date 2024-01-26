import Card from 'react-bootstrap/Card';
import '../Style/WhatIsIt.css';
import image from '../../-assets/media/image1.png';
import '../../-common/colors.css';
import '../../-common/global.css';
import '../../-common/media-query.css';

export function WhatIsIt() {
    return (
        <div className='whatisit-container'>
            <Card bsPrefix='card' id='whatisit-card'>
                <Card.Body className='whatisit-card-body'>
                    <div className='whatisit-image'>
                        <img src={image} alt='KCALendar' />
                    </div>
                    <div className='whatisit-text'>
                        <Card.Title className='whatisit-title'>Che cos'è KCALendar?</Card.Title>
                        <Card.Text>
                            <p>
                                KCALendar è una web app che ti accompagna nel tuo viaggio verso un il tuo benessere.
                            </p>
                            <p>
                                Questa innovativa piattaforma non solo ti offre un modo intelligente e digitale per monitorare 
                                la tua alimentazione, ma ti connette anche con gli esperti disponibili h24.
                            </p>
                            <p>
                                Dimentica il quadernino cartaceo, perché con KCALendar, hai un diario alimentare smart, 
                                un supporto continuo e la libertà di plasmare il tuo percorso di salute in modo unico. 
                            </p>
                            <p>
                                Semplicità, connessione e risultati tangibili saranno i goal del tuo percorso nella 
                                gestione delle calorie e del tuo benessere. 
                            </p>
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}
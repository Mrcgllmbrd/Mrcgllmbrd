import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './profSection_style.css';
import '../-common/colors.css';
import '../-common/media-query.css'
import doctor from '../-assets/media/doctor.jpg';
import doc1 from '../-assets/media/doc1.jpeg';
import doc2 from '../-assets/media/doc2.jpg';
import doc3 from '../-assets/media/doc3.jpg';
import doc4 from '../-assets/media/doc4.jpg';
import doc5 from '../-assets/media/doc5.jpg';
import doc6 from '../-assets/media/doc6.jpg';

export function ProfSection() {

    return (
        <div className='prof-section-container'>
            <h1 className='prof-section-h1'>
                I nostri professionisti
            </h1>
            <div className='prof-section-p'>
                <div>
                    <p>
                        I nostri esperti nutrizionisti e dietologi sono il <b>cuore</b> pulsante di KCALendar.
                    </p>
                    <p>
                        Siamo il vostro collegamento diretto a un team dedicato a ridefinire il vostro 
                        rapporto con il cibo. <br />
                        Immaginate di avere un partner di fiducia per interpretare i dati e pianificare
                        un <b>percorso alimentare</b> su misura per voi.
                    </p>
                    <p>
                        Con KCALendar, trasformiamo ogni scelta alimentare in un passo sicuro verso il vostro benessere. <br />
                        <b>Contattate</b> i nostri esperti oggi stesso e iniziate il vostro viaggio verso
                        una vita più sana e appagante.
                    </p>
                </div>
                <img className='prof-section-img' src={doctor} alt="Doctor" />
            </div>

            <div className='prof-section-cards'>
                {/* Card 1 */}
                <div>
                    <Card bsPrefix='card' className='prof-section-card-sample'>
                        <Card.Body className='prof-section-card-body'>
                            <img className='prof-section-card-img' src={doc1} alt='Doctor' />
                            <Card.Title>
                                Rossi Carla
                            </Card.Title>
                            <Card.Text className='prof-section-card-profession'>
                                Nutrizionista
                            </Card.Text>
                            <Card.Text className='prof-section-card-contact'>
                                <p>
                                    Contatti:
                                </p>
                                <a href='#cellular'>
                                    +39 322 xxx xxx3
                                </a>
                                <a href='#email'>
                                    carla.rossi78@email.com
                                </a>
                            </Card.Text>
                            <Button variant='primary' className='prof-section-card-button'>
                                Contattami...
                            </Button>
                        </Card.Body>
                    </Card>
                </div>

                {/* Card 2 */}
                <div>
                    <Card bsPrefix='card' className='prof-section-card-sample'>
                        <Card.Body className='prof-section-card-body'>
                            <img className='prof-section-card-img' src={doc2} alt='Doctor' />
                            <Card.Title>
                                Motta Enrico
                            </Card.Title>
                            <Card.Text className='prof-section-card-profession'>
                                Dietologo
                            </Card.Text>
                            <Card.Text className='prof-section-card-contact'>
                                <p>
                                    Contatti:
                                </p>
                                <a href='#cellular'>
                                    +39 340 xxx xxx7
                                </a>
                                <a href='#email'>
                                    mottaenrico3005@email.com
                                </a>
                            </Card.Text>
                            <Button variant='primary' className='prof-section-card-button'>
                                Contattami...
                            </Button>
                        </Card.Body>
                    </Card>
                </div>

                {/* Card 3 */}
                <div>
                    <Card bsPrefix='card' className='prof-section-card-sample'>
                        <Card.Body className='prof-section-card-body'>
                            <img className='prof-section-card-img' src={doc3} alt='Doctor' />
                            <Card.Title>
                                Coppola Silvia
                            </Card.Title>
                            <Card.Text className='prof-section-card-profession'>
                                Dietologa <br />
                                specializzazione: <br />
                                dieta sportiva
                            </Card.Text>
                            <Card.Text className='prof-section-card-contact'>
                                <p>
                                    Contatti:
                                </p>
                                <a href='#cellular'>
                                    +39 358 xxx xxx7
                                </a>
                                <a href='#email'>
                                    coppola.silvia@email.com
                                </a>
                            </Card.Text>
                            <Button variant='primary' className='prof-section-card-button'>
                                Contattami...
                            </Button>
                        </Card.Body>
                    </Card>
                </div>

                {/* Card 4 */}
                <div>
                    <Card bsPrefix='card' className='prof-section-card-sample'>
                        <Card.Body className='prof-section-card-body'>
                            <img className='prof-section-card-img' src={doc4} alt='Doctor' />
                            <Card.Title>
                                Johnson Laura
                            </Card.Title>
                            <Card.Text className='prof-section-card-profession'>
                                Nutrizionista <br />
                                specializzazione: <br />
                                dieta low-carb
                            </Card.Text>
                            <Card.Text className='prof-section-card-contact'>
                                <p>
                                    Contatti:
                                </p>
                                <a href='#cellular'>
                                    +39 333 xxx xxx9
                                </a>
                                <a href='#email'>
                                    laura.johnson15@email.com
                                </a>
                            </Card.Text>
                            <Button variant='primary' className='prof-section-card-button'>
                                Contattami...
                            </Button>
                        </Card.Body>
                    </Card>
                </div>

                {/* Card 5 */}
                <div>
                    <Card bsPrefix='card' className='prof-section-card-sample'>
                        <Card.Body className='prof-section-card-body'>
                            <img className='prof-section-card-img' src={doc5} alt='Doctor' />
                            <Card.Title>
                                Albiero Luigi
                            </Card.Title>
                            <Card.Text className='prof-section-card-profession'>
                                Dietologo <br />
                                specializzazione: <br />
                                dieta chetogenica
                            </Card.Text>
                            <Card.Text className='prof-section-card-contact'>
                                <p>
                                    Contatti:
                                </p>
                                <a href='#cellular'>
                                    +39 311 xxx xxx4
                                </a>
                                <a href='#email'>
                                    luigi.albiero@email.com
                                </a>
                            </Card.Text>
                            <Button variant='primary' className='prof-section-card-button'>
                                Contattami...
                            </Button>
                        </Card.Body>
                    </Card>
                </div>

                {/* Card 6 */}
                <div>
                    <Card bsPrefix='card' className='prof-section-card-sample'>
                        <Card.Body className='prof-section-card-body'>
                            <img className='prof-section-card-img' src={doc6} alt='Doctor' />
                            <Card.Title>
                                Zaccaria Rebecca
                            </Card.Title>
                            <Card.Text className='prof-section-card-profession'>
                                Nutrizionista <br />
                            </Card.Text>
                            <Card.Text className='prof-section-card-contact'>
                                <p>
                                    Contatti:
                                </p>
                                <a href='#cellular'>
                                    +39 336 xxx xxx4
                                </a>
                                <a href='#email'>
                                    zac.rebecca7@email.com
                                </a>
                            </Card.Text>
                            <Button variant='primary' className='prof-section-card-button'>
                                Contattami...
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            <Link to="/professionisti" />
        </div>
    )

}
import { Link } from "react-router-dom";
import "./chiSiamo_style.css";
import teamWork from "../-assets/media/teamWork.jpg";
import healthy from "../-assets/media/healthy.jpg";
import stepByStep from "../-assets/media/step-by-step.jpg";

export function ChiSiamo() {

    return (
        <div className="chi-siamo-container">
            <h1 className="chi-siamo-h1">
                Chi siamo
            </h1>
            <div className="chi-siamo-p-img">
                <div className="chi-siamo-p">
                    <h3>Che cos'è KCALendar?</h3>
                    <p>
                        Questa idea è nata dall'unione delle parole: <br />
                        "<b>KCAL</b>" l'unità di misura che indica l'<b>apporto energetico medio</b> di un alimento e
                        "<b>Calendar</b>" termine inglese per "<b>Calendario</b>".
                    </p>
                    <p>
                        Dietro <b>KCALendar</b> c'è l'idea di contribuire al <b>benessere</b> delle persone. <br />
                        Uniti da una missione comune, il nostro team vuole rendere la <b>gestione</b> delle calorie e
                        la salute <b>personale</b> accessibile e personalizzabile per tutti.
                    </p>
                    <p>
                        KCALendar non è solo una web app per la registrazione delle calorie,
                        ma un <b>progetto</b> che abbraccia l'innovazione,
                        la trasparenza e l'impegno verso il <b>benessere</b>.
                    </p>
                </div>
                <img className="chi-siamo-image" src={teamWork} alt="Working team" />
            </div>

            <div className="chi-siamo-p-img-rev">
                <div className="chi-siamo-p">
                    <h3>Il tuo benessere prima di tutto!</h3>
                    <p>
                        Abbiamo sviluppato KCALendar con l'<b>obiettivo</b> di semplificare il tuo percorso verso uno stile di vita più sano.
                    </p>
                    <p>
                        La nostra app <b>offre</b> un'esperienza di registrazione delle calorie intuitiva e connessa. 
                    </p>
                    <p>
                        Oltre a fornirti gli strumenti per <b>monitorare</b> la tua alimentazione,
                        mettiamo a tua disposizione un supporto costante da parte di <b>esperti</b> in salute e nutrizione.
                    </p>
                </div>
                <img className="chi-siamo-image" src={healthy} alt="Healthy" />
            </div>

            <div className="chi-siamo-p-img">
                <div className="chi-siamo-p">
                    <h3>Ti accompagnamo passo dopo passo...</h3>
                    <p>
                        La nostra visione è quella di trasformare la salute in un viaggio
                        personalizzato e accessibile a tutti. 
                    </p>
                    <p>
                        <b>Unisciti</b> a noi nella nostra <b>missione</b> di rivoluzionare il concetto di benessere e di rendere ogni scelta alimentare
                        un <b>passo</b> verso una vita più sana. 
                    </p>
                    <p>
                        Siamo qui per te, per guidarti e ispirarti
                        nel tuo <b>percorso</b> di salute.
                    </p>
                </div>
                <img className="chi-siamo-image" src={stepByStep} alt="Step by step" />
            </div>

            <Link to="/chi-siamo" />
        </div>
    )
};
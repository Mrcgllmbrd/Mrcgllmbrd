import Carousel from 'react-bootstrap/Carousel';
import image0 from '../../-assets/media/image0.png';
import image1 from '../../-assets/media/video_1.gif';
import image2 from '../../-assets/media/video_2.gif';
import '../Style/CarouselLandingpage.css';
import '../../-common/colors.css';
import '../../-common/media-query.css';
import '../../-common/global.css';

export function CarouselLandingpage() {
    return (
        <Carousel bsPrefix='carousel'className='carousel-container'>
            <Carousel.Item interval={7000} bsPrefix='carousel-item' className='carousel-item'>
                <img src={image0} alt='' className="carousel-image" />
                <Carousel.Caption id='carousel-box-text'>
                    <div id='carousel-text'>
                        Con KCALendar, ogni caloria conta e ogni passo verso la salute è un successo!
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={7000} bsPrefix='carousel-item' id="carousel-style">
                <img src={image1} alt="Kcalendar" className="carousel-image" />
                <Carousel.Caption id='carousel-box-text1'>
                    <div id='carousel-text'>
                        Dimentica la penna e la carta, il tuo diario alimentare è ora digitale e connesso con i nostri specialisti.
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={7000} bsPrefix='carousel-item' id="carousel-style">
                <img src={image2} alt="Kcalendar" className="carousel-image" />
                <Carousel.Caption id='carousel-box-text2'>
                    <div id='carousel-text'>
                        Disponibilità h24 dei nostri esperti, per guidarti in ogni passo del tuo percorso alimentare.
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}
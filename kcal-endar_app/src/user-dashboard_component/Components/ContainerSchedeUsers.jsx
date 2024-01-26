import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/controller";
import "swiper/css/scrollbar";
import { ButtonScheda } from "../../-shared/ButtonScheda";
import axios from "axios";
import { useEffect, useState } from "react";

/* css */
import "../../-shared/components_styles/containerSchede.css";

export function ContainerSchedeUsers() {
  const [cardForRow, setCardForRow] = useState([]);

  //logica fetch pazienti dal database
  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get("http://localhost:3000/doc/1");
        if (response.data.user) {
          const doc = response.data.user;
             console.log(doc);
          const repeatCount = 8;
          const repeatedDoc =  Array.from({ length: repeatCount }, () => doc);
             console.log(repeatedDoc);
          const cardRowIndex = 1;
          for (let i = 0; i < repeatedDoc.length; i += cardRowIndex) {
            setCardForRow((prev) => [
              ...prev,
              repeatedDoc.slice(i, i + cardRowIndex),
            ]);
          }
        } else {
          throw new Error ('uffa')
         
        }
      } catch (error) {
        console.error(error.response.data.message, "Errore durante la richiesta");
      }
    };
    fetchDoctor();
  }, []);

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        breakpoints={{
          2540: {
            slidesPerView: 9,
          },
          1920: {
            slidesPerView: 7,
          },

          1440: {
            slidesPerView: 6,
          },

          1280: {
            slidesPerView: 5,
          },

          1000: {
            slidesPerView: 4,
          },

          600: {
            slidesPerView: 3,
          },
          480: {
            slidesPerView: 2,
          },

          0: {
            slidesPerView: 1,
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {cardForRow.map((card) => (
          <SwiperSlide key={card[0].id} tag="div" slot="content-start">
            {card.map((utente) => (
              <ButtonScheda
                key={utente.id}
                name={`👨‍⚕️ ${utente.name}`}
                surname={utente.surname}
              />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

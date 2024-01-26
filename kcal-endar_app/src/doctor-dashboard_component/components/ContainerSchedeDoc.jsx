import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/controller";
import "swiper/css/scrollbar";
import { ButtonScheda } from "../../-shared/ButtonScheda";
import axios from "axios";
import { useEffect, useState } from "react";
import { useUser } from "../../-shared/UserIdContext";

/* css */
import "../../-shared/components_styles/containerSchede.css";

export function ContainerSchedeDoc() {
  const [cardForRow, setCardForRow] = useState([]);
const { selectedUserId, setSelectedUserId } = useUser();
  //logica fetch pazienti dal database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        console.log(response.data.users);

        if (response.data.users.length > 0) {
          const cardRowIndex = 1;
          const newCards = [];

          for (let i = 0; i < response.data.users.length; i += cardRowIndex) {
            const currentUser = response.data.users[i];

            // Verifica se l'ID dell'utente non è già presente nell'array cardForRow
            if (!cardForRow.some((user) => user.id === currentUser.id)) {
              newCards.push(response.data.users.slice(i, i + cardRowIndex));
            }
          }
          setCardForRow((prevCards) => [...prevCards, ...newCards]);
        } else {
          console.log("array vuoto");
        }
      } catch (error) {
        console.error(
          error.response.data.message,
          ": Errore durante la richiesta"
        );
      }
    };

    fetchData();
  }, []);


  const onClickRelationship = async (userId) => {
    const docId = localStorage.getItem("docId");
    localStorage.setItem('userId', userId)   
     setSelectedUserId(userId)

    try {
      await axios.post(`http://localhost:3000/relationship`, {
        userId: userId,
        doctorId: docId,
      });

    } catch (error) {
      console.log(
        error.message,
        "errore nell'associazione tra id user e id doctor"
      );
    }
   
  };

  return (
    <>
      {cardForRow.length > 0 && (
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
        >
          {cardForRow.map((card) => (
            <SwiperSlide key={card[0].id} tag="div" slot="content-start">
              {card.map((utente) => (
                <ButtonScheda

                  key={utente.id}
                  email={utente.email}
                  name={utente.name}
                  surname={utente.surname}
                  onClickRelationship={() => onClickRelationship(utente.id)}
                />
              ))}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}

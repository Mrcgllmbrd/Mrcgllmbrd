import React from "react";
import axios from "axios";
import "../Style/UserDashboardCalendar.css";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import {
  Eventcalendar,
  snackbar,
  setOptions,
  Popup,
  Button,
  Input,
  Textarea,
  formatDate,
  SegmentedGroup,
  SegmentedItem,
} from "@mobiscroll/react";

setOptions({
  theme: "windows",
  themeVariant: "light",
});

const types = [
  {
    id: 1,
    name: "Colazione",
    color: "#e20f0f",
    kcal: "300 - 400 kcal",
    icon: "🍳",
  },
  {
    id: 2,
    name: "Snack 1",
    color: "#157d13",
    kcal: "100 - 200 kcal",
    icon: "🍌",
  },
  {
    id: 3,
    name: "Pranzo",
    color: "#32a6de",
    kcal: "500 - 700 kcal",
    icon: "🍜",
  },
  {
    id: 4,
    name: "Snack 2",
    color: "#68169c",
    kcal: "100 - 200 kcal",
    icon: "🥨",
  },
  {
    id: 5,
    name: "Cena",
    color: "#e29d1d",
    kcal: "400 - 600 kcal",
    icon: "🥙",
  },
];

const viewSettings = {
  timeline: {
    type: "week",
    eventList: true,
  },
};

const responsivePopup = {
  medium: {
    display: "center",
    width: 400,
    fullScreen: false,
    touchUi: false,
    showOverlay: false,
  },
};

export function UserDashboardCalendar() {
  const [myMeals, setMyMeals] = React.useState([]);
  const [tempMeal, setTempMeal] = React.useState(null);
  const [isOpen, setOpen] = React.useState(false);
  const [isEdit, setEdit] = React.useState(false);
  const [name, setName] = React.useState("");
  const [calories, setCalories] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const [headerText, setHeader] = React.useState("");
  const [type, setType] = React.useState(1);

  // ...
  const storedUserId = localStorage.getItem("userId");

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/meals/${storedUserId}`);
        console.log(storedUserId, "storeUserId stampato con successo")
        setMyMeals(response.data.meals);
        console.log(response.data.meals);
      } catch (error) {
        console.error(
          "Errore nel recupero degli eventi:",
          error.response.data.message
        );
      }
    };

    fetchData();
  }, []); 

  const addMeal = async (newMeal) => {
    try {
      newMeal.start = new Date(newMeal.start);
      newMeal.eend = new Date(newMeal.eend);
      newMeal.start.setDate(newMeal.start.getDate() + 1);
      newMeal.eend.setDate(newMeal.eend.getDate() + 1);
      const response = await axios.post(
        `http://localhost:3000/meals/${storedUserId}`,
        newMeal
      );

      // Aggiorna immediatamente lo stato con il nuovo pasto
      setMyMeals((prevMeals) => [...prevMeals, response.data]);

      setOpen(false);
    } catch (error) {
      console.error("Errore nell'aggiunta del pasto:", error);
    }
  };

  

  const updateMeal = async (updatedMeal) => {
    try {
      await axios.put(
        `http://localhost:3000/meals/${storedUserId}/${updatedMeal.id}`,
        updatedMeal
      );
      console.log(storedUserId, 'userid di calendar')
      const updatedMeals = myMeals.map((meal) =>
        meal.id === updatedMeal.id ? updatedMeal : meal
      );
      setMyMeals(updatedMeals);
      setOpen(false);
    } catch (error) {
      console.error("Errore nell'aggiornamento del pasto:", error.message);
    }
  };

  const deleteMeal = async (mealId) => {
    try {
      await axios.delete(`http://localhost:3000/meals/${storedUserId}/${mealId.id}`);
      setMyMeals((prevMeals) => prevMeals.filter((meal) => meal.id !== mealId));
      setOpen(false);
    } catch (error) {
      console.error("Errore nell'eliminazione del pasto:", error.message);
    }
  };

  const saveEvent = React.useCallback(() => {
    const newEvent = {
      id: tempMeal.id,
      title: name,
      calories: calories,
      notes: notes,
      start: tempMeal.start,
      eend: tempMeal.end,
      resource: tempMeal.resource,
    };

    const setDate = (newMeal) => {
      newMeal.start = new Date(newMeal.start);
      newMeal.eend = new Date(newMeal.eend);
      newMeal.start.setDate(newMeal.start.getDate() - 1);
      newMeal.eend.setDate(newMeal.eend.getDate() - 1);
    };

    if (isEdit) {
      // update the event in the list
      const index = myMeals.findIndex((x) => x.id === tempMeal.id);
      const newEventList = [...myMeals];

      newEventList.splice(index, 1, newEvent);
      setMyMeals(newEventList);
      updateMeal(newEvent);
    } else {
      // add the new event to the list
      setMyMeals([...myMeals, newEvent]);
      addMeal(newEvent);
      setDate(newEvent);
     
    }
    // close the popup
    setOpen(false);
  }, [isEdit, myMeals, calories, notes, name, tempMeal, updateMeal]);

  const deleteEvent = React.useCallback(
    async (event) => {
      setMyMeals(myMeals.filter((item) => item.id !== event.id));
      setTimeout(() => {
        snackbar({
          button: {
            action: () => {
              setMyMeals((prevEvents) => [...prevEvents, event]);
            },
            text: "Undo",
          },
          message: "Event deleted",
        });
      });
      deleteMeal(event);
    },
    [myMeals]
  );

  const loadPopupForm = React.useCallback((event) => {
    setName(event.title);
    setCalories(event.calories);
    setNotes(event.notes);
  }, []);

  // handle popup form changes
  const nameChange = React.useCallback((ev) => {
    setName(ev.target.value);
  }, []);

  const caloriesChange = React.useCallback((ev) => {
    setCalories(ev.target.value);
  }, []);

  const notesChange = React.useCallback((ev) => {
    setNotes(ev.target.value);
  }, []);

  const onDeleteClick = React.useCallback(() => {
    deleteEvent(tempMeal);
    setOpen(false);
  }, [deleteEvent, tempMeal]);

  // scheduler options
  const onEventClick = React.useCallback(
    (args) => {
      const event = args.event;
      setHeader(
        '<div>New meal</div><div class="md-meal-type">' +
          formatDate("DDDD, DD MMMM YYYY", new Date(event.start)) +
          "</div>"
      );
      setType(event.resource);
      setEdit(true);
      setTempMeal({ ...event });
      // fill popup form with event data
      loadPopupForm(event);
      setOpen(true);
    },
    [loadPopupForm]
  );

  const onEventCreated = React.useCallback(
    (args) => {
      const event = args.event;
      const resource = types.find((obj) => {
        return obj.id === event.resource;
      });
      setHeader(
        "<div>" +
          resource.name +
          '</div><div class="md-meal-type">' +
          formatDate("DDDD, DD MMMM YYYY", new Date(event.start)) +
          "</div>"
      );
      setType(event.resource);
      setEdit(false);
      setTempMeal(event);
      // fill popup form with event data
      loadPopupForm(event);
      // open the popup
      setOpen(true);
    },
    [loadPopupForm]
  );

  const typeChange = React.useCallback(
    (ev) => {
      const value = +ev.target.value;
      setType(value);
      setTempMeal({ ...tempMeal, resource: value });
    },
    [tempMeal]
  );

  const onEventDeleted = React.useCallback(
    (args) => {
      deleteEvent(args.event);
    },
    [deleteEvent]
  );

  // popup options
  const popupButtons = React.useMemo(() => {
    if (isEdit) {
      return [
        "cancel",
        {
          handler: () => {
            saveEvent();
          },
          keyCode: "enter",
          text: "Save",
          cssClass: "mbsc-popup-button-primary",
        },
      ];
    } else {
      return [
        "cancel",
        {
          handler: () => {
            saveEvent();
          },
          keyCode: "enter",
          text: "Add",
          cssClass: "mbsc-popup-button-primary",
        },
      ];
    }
  }, [isEdit, saveEvent]);

  const onClose = React.useCallback(() => {
    if (!isEdit) {
      // refresh the list, if add popup was canceled, to remove the temporary event
      setMyMeals([...myMeals]);
    }
    setOpen(false);
  }, [isEdit, myMeals]);

  const extendDefaultEvent = React.useCallback((args) => {
    return {
      title: "New meal",
      allDay: true,
    };
  }, []);

  const renderMyResource = (resource) => {
    return (
      <div className="md-meal-planner-cont">
        <div
          className="md-meal-planner-title"
          style={{ color: resource.color }}
        >
          <span
            className="md-meal-planner-icon"
            dangerouslySetInnerHTML={{ __html: resource.icon }}
          ></span>
          {resource.name}
        </div>
        <div className="md-meal-planner-kcal">{resource.kcal}</div>
      </div>
    );
  };

  const myScheduleEvent = React.useCallback((args) => {
    const event = args.original;
    return (
      <div className="md-meal-planner-event">
        <div className="md-meal-planner-event-title">{event.title}</div>
        {event.calories && (
          <div className="md-meal-planner-event-desc">
            Calories {event.calories} kcal
          </div>
        )}
      </div>
    );
  }, []);

  return (
    <div className="user-dashboard-calendar-container">
      <Eventcalendar
        view={viewSettings}
        data={myMeals}
        resources={types}
        dragToCreate={false}
        dragToResize={false}
        dragToMove={true}
        clickToCreate={true}
        extendDefaultEvent={extendDefaultEvent}
        onEventClick={onEventClick}
        onEventCreated={onEventCreated}
        onEventDeleted={onEventDeleted}
        renderResource={renderMyResource}
        renderScheduleEventContent={myScheduleEvent}
        cssClass="md-meal-planner-calendar"
      />

      <Popup
        display="bottom"
        fullScreen={true}
        contentPadding={false}
        headerText={headerText}
        buttons={popupButtons}
        isOpen={isOpen}
        onClose={onClose}
        responsive={responsivePopup}
        cssClass="md-meal-planner-popup"
      >
        <SegmentedGroup onChange={typeChange} value={type}>
          {types.map((type) => {
            return (
              <SegmentedItem value={type.id} key={type.id}>
                {type.name}
              </SegmentedItem>
            );
          })}
        </SegmentedGroup>
        <div className="mbsc-form-group">
          <Input label="Name" value={name} onChange={nameChange} />
          <Input label="Calories" value={calories} onChange={caloriesChange} />
          <Textarea label="Notes" value={notes} onChange={notesChange} />
        </div>
        {isEdit && (
          <div className="mbsc-button-group">
            <Button
              className="mbsc-button-block"
              color="danger"
              variant="outline"
              onClick={onDeleteClick}
            >
              Delete meal
            </Button>
          </div>
        )}
      </Popup>
    </div>
  );
}

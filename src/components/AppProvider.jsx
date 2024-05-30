import React from 'react'

export const AppContext = React.createContext()

export const AppProvider = (props) => {

  
        const fields = [
              {
                  id: 1,
                  order: 6,
                  play: {
                      time: "16:00",
                      name: "Лидер Великанова С.Г.",
                      lockerRooms: [1]
                  },
                  ready: {
                      time: "19:00",
                      name: "Федерация спорта глухих",
                      lockerRooms: [2, 10]
                  },
                  fieldType: 2,
              },
              {
                  id: 2,
                  order: 3,
                  play: {
                      time: "16:00",
                      name: "Гандбол",
                      lockerRooms: [12, 13]
                  },
                  ready: {
                      time: "",
                      name: "",
                      lockerRooms: []
                  },
                  fieldType: 2,
              },
              {
                  id: 3,
                  order: 5,
                  play: {
                      time: "16:00",
                      name: "ФАС Кипрушов В.В.",
                      lockerRooms: [11]
                  },
                  ready: {
                      time: "17:30",
                      name: "СМЕНА СПБ",
                      lockerRooms: [11]
                  },
                  fieldType: 1,
              },
              {
                  id: 4,
                  order: 2,
                  play: {
                      time: "16:30",
                      name: "Лидер Веселов В.В.",
                      lockerRooms: [11]
                  },
                  ready: {
                      time: "18:00",
                      name: "Федерация футбола лиц с заболеванием ДЦП ",
                      lockerRooms: [11]
                  },
                  fieldType: 1,
              },
              {
                  id: 5,
                  order: 4,
                  play: {
                      time: "16:30",
                      name: "Лидер Кулишкин Н.Г.",
                      lockerRooms: [11]
                  },
                  ready: {
                      time: "18:00",
                      name: "Лидер рэгби",
                      lockerRooms: [11]
                  },
                  fieldType: 1,
              },
              {
                  id: 6,
                  order: 1,
                  play: {
                      time: "16:30",
                      name: "ФУТБОЛИКА",
                      lockerRooms: [11]
                  },
                  ready: {
                      time: "18:00",
                      name: "ЮНИОР",
                      lockerRooms: [11]
                  },
                  fieldType: 1,
              },
           ]

  return (
    <AppContext.Provider 
        value={fields}
    >
        {props.children}
    </AppContext.Provider>
    
  )
}


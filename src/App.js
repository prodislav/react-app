import React from 'react';
import './App.css';
import {students} from "./students.js";
import {SimpleCard} from "./simpleCard.js";

export class App extends React.Component{
  render () {
      return (
          <div className="my-app-content">
              {students.map(el => {
                  return (
                      <div className="my-app-item">
                          <SimpleCard
                              name={el.name}
                              secondName={el.secondName}
                              pictureSrc={`${el.name}.jpg`}
                              skills={el.skills}
                              city={el.city}
                          />
                      </div>
                  )
              })}
          </div>
  )
      ;
  }
}

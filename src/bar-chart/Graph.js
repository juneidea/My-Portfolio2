import * as React from 'react'

import './App.css';
import { scale } from './data'

function Graph({selected, data}) {
    const sortData = data.sort((a, b) => (a[selected] > b[selected]) ? -1 : 1)
    const ratio = scale[selected].ratio

    function k(num) {
        return num < 1000 ? num.toString() : `${num/1000}k` 
    }

    return (
      <div className="Graph">
        <div className="Graph-border">
          <span className="Graph-name"></span>
          <div className="Graph-bar">
            {Array(10).fill(1).map((n, i) => {
              return i === 9 ? <span key="10"></span> : <span key={i.toString()}>{k((i+1)*scale[selected].max/10)}</span>
            })}
          </div>
        </div>
        {sortData.map(person => {
            return (
            <div className="Graph-border" key={person.name}>
                <span className="Graph-name">{person.name}</span>
                <div className="Graph-bar"><div className="Bar" style={{width: `${person[selected]*ratio}%`, backgroundColor: person.color ? person.color : '#61dafb'}}></div></div>
            </div>)
        })}
      </div>
    );
  }
  
  export default Graph;
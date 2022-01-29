import grid from './grid.png';
import React, { useState } from 'react'
import './App.css';
import robot from './robot.png'
import { waitFor } from '@testing-library/react';
function App() {
  let [x, setX] = useState(400)
  let [y, setY] = useState(400)
  let [rotation, setRotation] = useState(180)
  let [tempX, setTempX] = useState(0)
  let [tempY, setTempY] = useState(0)
  let [text, setText] = useState('')


  function handlePlacement(event) {
    event.preventDefault()
    console.log('triggeredPlacement')

    console.log(x, y)

    setX(x = 0)
    setY(y = 0)
    setX(x = tempX)
    setY(y = tempY)
    // without the extra set x,y below it doesn't work?
    setX(x = tempX - 0)
    setY(y = tempY - 0)

    console.log(tempX, tempY)
  }
  function handleXTempPosition(event) {
    event.preventDefault()
    console.log('handleTempX')
    console.log(event.target.value)
    setTempX(event.target.value)
  }
  function handleYTempPosition(event) {
    event.preventDefault()
    console.log('handleTempY')
    console.log(event.target.value)
    setTempY(event.target.value)
  }
  function onMove() {
    console.log('triggeredMove')
    console.log(rotation)
    if (rotation === 180 || rotation === -180) {
      console.log('triggeredMoveN')
      if (y >= 1 || y === 400) {
        setY(y - 80)
      }
      console.log(y)
    }
    if (rotation === 0 || rotation === 360 || rotation === -360) {
      console.log('triggeredMoveS')
      if (y <= 240 || y === 400) {
        setY(y + 80)
        console.log(y)
      }
    }
    if (rotation === 270 || rotation === -90) {
      console.log('triggeredMoveE')
      if (x <= 240 || x === 400) {
        setX(x + 80)
      }
    }
    if (rotation === -270 || rotation === 90) {
      console.log('triggeredMoveW')
      if (x >= 1 || x === 400) {
        setX(x - 80)
      }
    }

  }
  function rotateLeft() {
    console.log(rotation)
    console.log('triggeredRotateLeft')
    setRotation(rotation - 90)
    if (rotation === -360) {
      console.log('set to 0')
      setRotation(rotation = 0)
      setRotation(rotation - 90)
    }
  }
  function rotateRight() {
    console.log('triggeredRotateRight')
    console.log(rotation)
    setRotation(rotation + 90)
    if (rotation === 360) {
      console.log('set to 0')
      setRotation(rotation = 0)
      setRotation(rotation + 90)
    }

  }
  function report(event) {
    event.preventDefault()
    console.log('triggeredReport')
    setText(`X${x} Y${y}`)
  }
  function setDirection(event) {
    console.log('setDirection')
    console.log(event.target.value)
    console.log('to above value')

    switch (event.target.value) {
      case 'South':
        setRotation(0)

        break;
      case 'North':
        setRotation(180)

        break;
      case 'West':
        setRotation(90)

        break;
      case 'East':
        setRotation(270)

        break;
    }

  }

  return (

    < div className="App" >
      <img className='robot' src={robot} style={{ left: x, top: y, transform: `rotate(${rotation}deg)` }}></img>
      <img className='grid' src={grid} ></img>
      <div className='form'>
        <form onSubmit={handlePlacement}>
          <label>x</label>
          <select onChange={handleXTempPosition}>
            <option value={0} >1</option>
            <option value={80} >2</option>
            <option value={160} >3</option>
            <option value={240} >4</option>
            <option value={320} >5</option>
          </select>
          <label>y</label>
          <select onChange={handleYTempPosition}>
            <option value={0} >1</option>
            <option value={80} >2</option>
            <option value={160} >3</option>
            <option value={240} >4</option>
            <option value={320} >5</option>
          </select>
          <label>f</label>
          <select onChange={setDirection}>
            <option value='North' >North</option>
            <option value='South' >South</option>
            <option value='West' >West</option>
            <option value='East' >East</option>

          </select>
          <button >Place</button>

        </form>
        <p>{text}</p>
        <button onClick={onMove}>Move</button>
        <button onClick={rotateLeft}>Left</button>
        <button onClick={rotateRight}>Right</button>
        <button onClick={report}>Report</button>

      </div>
    </div >

  );
}

export default App;

import React from 'react'
import {Fname} from '../App';

const C = () => {
  return (
    <>
    <Fname.Consumer>
        {(fName) => {
            return <h1>{fName}</h1>
        }}
    </Fname.Consumer>
    </>
  )
}

export default C
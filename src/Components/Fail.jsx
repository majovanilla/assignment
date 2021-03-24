import React from 'react'

export default function Fail(props) {
  const {data} = props;
  return (
    <div className='card'>
      <h1 className='title'>Change Fail Percentage</h1>
      <p  className='data'>{Math.round(data)}%</p>
    </div>
  )
}

import React from 'react'

export default function Lead(props) {
  const {data} = props;
  return (
    <div className='card'>
      <h1 className='title'>Lead Time for Changes</h1>
      <p className='data'>2 hrs</p>
    </div>
  )
}

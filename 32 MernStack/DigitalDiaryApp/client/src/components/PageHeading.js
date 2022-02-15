import React from 'react'

function PageHeading({title, childern}) {
  return (
    title && (
      <>
        <h1>{title}</h1>
        <hr></hr>
        {childern}
      </>
    )
  );
}

export default PageHeading
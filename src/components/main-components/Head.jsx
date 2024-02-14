import { Partytown } from '@builder.io/partytown/react';

function Head() {
  return (
    <>
    <Partytown debug={true} forward={['dataLayer.push']} />
    </>
  )
}

export default Head
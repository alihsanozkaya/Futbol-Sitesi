import React from 'react'
import Kart from './Kart'

const KadroListe = ({eklenenFutbolcular}) => {
  return (
    <>{eklenenFutbolcular.map((futbolcu) => (
        <Kart key = {futbolcu.id} futbolcu={futbolcu}/>
    ))}</>
  )
}

export default KadroListe
import React from "react";
import Kart from "./Kart";

const FutbolcuListe = (props) => {
  return (
    <div className="row">{
      props.arama !== "" ? props.futbolcuFiltreleme.map((futbolcu) => (
        <Kart key={futbolcu.id} futbolcu = {futbolcu} futbolcuEkleme = {props.futbolcuEkleme} futbolcuSilme = {props.futbolcuSilme} futbolcuFiltreleme = {props.futbolcuFiltreleme}/>
      )): props.futbolcular.map((futbolcu) => (
        <Kart key={futbolcu.id} futbolcu = {futbolcu} futbolcuEkleme = {props.futbolcuEkleme} futbolcuSilme = {props.futbolcuSilme} futbolcuFiltreleme = {props.futbolcuFiltreleme}/>
      ))
    }
    </div>
  );
};
export default FutbolcuListe;

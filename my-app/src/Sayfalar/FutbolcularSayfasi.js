import Arama from "../Bilesenler/Arama";
import FutbolcuListe from "../Bilesenler/FutbolcuListe";
import React, { useState } from "react";
import Layout from "../Bilesenler/Layout";
import Futbolcular from "../Sabitler/Futbolcular";

const FutbolcularSayfasi = (props) => {
  const [futbolcular, setFutbolcular] = useState(Futbolcular);
  const [arama, setArama] = useState("");
  const [eklenenFutbolcular, setEklenenFutbolcular] = useState([]);
  const veri = eklenenFutbolcular;

  const futbolcuSilme = (futbolcu) => {
    const yeniFutbolcu = futbolcular.filter((i) => i.id !== futbolcu.id);
    setFutbolcular(yeniFutbolcu);
  };

  const futbolcuArama = (event) => {
    setArama(event.target.value);
  };

  const futbolcuEkleme = (futbolcu) => {
    setEklenenFutbolcular((onceEklenenFutbolcular) => [
      ...onceEklenenFutbolcular,
      futbolcu
    ]);
  };
  const futbolcuFiltreleme = Futbolcular.filter((futbolcu) => {
    return (
      futbolcu.adi.toLowerCase().indexOf(arama.toLowerCase()) !== -1 ||
      futbolcu.soyadi.toLowerCase().indexOf(arama.toLowerCase()) !== -1
    );
  });
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <button onClick={console.log(veri)}>Buton</button>
            <Arama
              futbolcuFiltrelemeProp={futbolcuArama}
              futbolcuSayisi={futbolcuFiltreleme.length}
            />
          </div>
        </div>
        <FutbolcuListe
          futbolcular={futbolcular}
          arama = {arama}
          futbolcuFiltreleme = {futbolcuFiltreleme}
          futbolcuListe={futbolcular}
          futbolcuSilme={futbolcuSilme}
          futbolcuEkleme={futbolcuEkleme}
        />
      </div>
      <h1>Eklenen</h1>
      {eklenenFutbolcular.map((futbolcu) => (
        <h2 key={futbolcu.id}>#{futbolcu.formaNumarasi} {futbolcu.adi} {futbolcu.soyadi}</h2>
      ))}
    </Layout>
  );
};
export default FutbolcularSayfasi;
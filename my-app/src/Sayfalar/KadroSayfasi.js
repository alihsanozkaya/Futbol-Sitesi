import React, { useState } from "react";
import KadroListe from "../Bilesenler/KadroListe";
import Layout from "../Bilesenler/Layout";

const KadroSayfasi = ({eklenenFutbolcular}) => {

  return (
    <Layout>
      <div className="container">
        <div className="d-flex justify-content-center">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Boisko.svg/1200px-Boisko.svg.png"
              alt="."
              style={{width: "440px", height: "660px"}}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};


export default KadroSayfasi;

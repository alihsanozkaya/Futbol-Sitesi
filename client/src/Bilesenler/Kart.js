import React from "react";
import { toast } from "react-toastify";

const Kart = ({ futbolcu, futbolcuEkleme, futbolcuSilme}) => {
  const notify = () => toast.success("Başarıyla silindi.");
  const notify2 = () => toast.success("Başarıyla eklendi.");
  return (
    <div className="col-lg-3" key={futbolcu.id}>
      <div className="card mb-4 shadow-sm">
        <img src={futbolcu.resim} className="card-img-top" alt="."></img>
        <div className="card-body">
          <h5 className="card-title">
            #{futbolcu.formaNumarasi} {futbolcu.adi} {futbolcu.soyadi}
          </h5>
          <p className="card-text">
            Doğum Tarihi: {futbolcu.dogumTarihi}
            <br />
            Doğum Yeri: {futbolcu.dogumYeri}
            <br />
            Uyruk: {futbolcu.uyruk}
            <br />
            Boy: {futbolcu.boy}
            <br />
            Mevki: {futbolcu.mevki}
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <button
              type="button"
              className="btn btn-md btn-outline-danger"
              onClick={() => {
                futbolcuSilme(futbolcu);
                notify();
              }}
            >
              Sil
            </button>
            <button
              className="btn btn-md btn-outline-success"
              onClick={() => {
                futbolcuEkleme(futbolcu);
                notify2();
              }}
            >
              Ekle
            </button>
            <h5>
              Rating:{" "}
              <span className="badge badge-success">{futbolcu.rating}</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kart;

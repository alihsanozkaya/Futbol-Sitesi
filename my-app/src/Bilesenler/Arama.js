import React from "react";

const Arama = (props) => {
  function kaydet(event) {
    event.preventDefault();
  }
  return (
    <form onSubmit={kaydet}>
      <div className="form-row mb-5">
        <img
          style={{ width: "200px", height: "200px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Logo_of_Be%C5%9Fikta%C5%9F_JK.svg/391px-Logo_of_Be%C5%9Fikta%C5%9F_JK.svg.png"
          alt="."
        ></img>
        <div className="col-12">
          <input
            style={{ marginTop: "20px" }}
            type="text"
            placeholder="Futbolcu ismi giriniz"
            className="form-control"
            onChange={props.futbolcuFiltrelemeProp}
          />
          <p>{props.futbolcuSayisi} tane futbolcu listelendi</p>
        </div>
      </div>
    </form>
  );
};
export default Arama;

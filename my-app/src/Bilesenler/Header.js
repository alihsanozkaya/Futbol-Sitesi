import { Button, Layout } from "antd";
const { Header } = Layout;
const Headerr = () => {
  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
        }}
      >
        {" "}
        <Button className="btn btn-danger justify-content-center" href="/" style={{marginRight: "10px", textAlign: "center", verticalAlign: "middle"}}>
          Futbolcular Sayfası
        </Button>
        <Button
          className="btn btn-danger align-items-center"
          href="/kadrosayfasi"
        >
          Kadro Sayfası
        </Button>
        <div
          style={{
            float: "left",
            width: 120,
            height: 31,
            margin: "16px 24px 16px 0",
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
      </Header>
    </Layout>
  );
};
export default Headerr;

import Alert from "react-bootstrap/Alert";
import NaviBar from "./navbar";
import "./app.css";

const Home = () => {
  return (
    <div className="home">
      <Alert variant="danger">
        {<NaviBar />}
        <h4>Login to your account</h4>

        <p> I Don't have an account, sign up now </p>

        <p className="mb-0"></p>
        <hr />
        <hr />
      </Alert>
    </div>
  );
};

export default Home;

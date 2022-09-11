import Alert from "react-bootstrap/Alert";

import "./app.css";

const Welcome = () => {
  return (
    <Alert variant="danger">
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <div className="welcome">
        <p>Welcome to your account</p>
      </div>

      <hr />

      <p className="mb-0">Have a nice and wonderfull day</p>
    </Alert>
  );
};

export default Welcome;

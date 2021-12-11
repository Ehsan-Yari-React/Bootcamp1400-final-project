import { Alert } from "antd";

const Custom404 = () => {
  return (
    <Alert
      message="Error"
      description="Sorry, Page Not Found"
      type="error"
      showIcon
      style={{ width: "50%", margin: "15px auto" }}
    />
  );
};

export default Custom404;

import { Layout } from "antd";

const Content = ({ children }) => {
  const { Content } = Layout;
  return (
    <Content
      style={{
        textAlign: "center",
        padding: 24,
        minHeight: 280,
        width: "100%",
      }}
    >
      {children}
    </Content>
  );
};

export default Content;

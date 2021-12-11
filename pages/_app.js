import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Sidebar from "../components/Sidebar/Sidebar";
import { Layout } from "antd";
import Content from "../components/Content/Content";

function MyApp({ Component, pageProps }) {
  const { Sider } = Layout;
  return (
    <Provider store={store}>
      <Layout
        style={{
          height: "100vh",
          overflow: "hidden",
          display: "flex",
        }}
      >
        <Sider>
          <Sidebar />
        </Sider>
        <Layout>
          <Content>
            <Component {...pageProps} />
          </Content>
        </Layout>
      </Layout>
    </Provider>
  );
}

export default MyApp;

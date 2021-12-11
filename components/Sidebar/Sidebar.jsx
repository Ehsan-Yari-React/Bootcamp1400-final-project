import { Layout, Menu } from "antd";
import Link from "next/link";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { Sider } = Layout;
  const users = useSelector((state) => state["users"]);
  return (
    <Sider style={{ height: "100vh" }}>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["0"]}
        style={{ marginTop: 24 }}
      >
        <Menu.Item key="0">
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Item>
        {users.map((user) => (
          <Menu.Item key={user.id}>
            <Link href={`${user.route}/home`}>
              <a>{user.name}</a>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default Sidebar;

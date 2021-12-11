import { Empty } from "antd";
import Link from "next/link";

const Home = () => {
  return (
    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{
        height: 240,
      }}
      description={
        <span style={{ fontWeight: "bold", fontSize: 24 }}>
          Created by
          <Link href="https://github.com/Ehsan-Yari-React">
            <a target="_blank"> Ehsan Yari</a>
          </Link>
        </span>
      }
    />
  );
};

export default Home;

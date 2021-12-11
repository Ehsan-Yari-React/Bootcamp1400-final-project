import { Card, Col, Row } from "antd";
import Link from "next/link";
const index = () => {
  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <Link href="/users/arghun/Test/Test">
          <a>
            <Card
              title="Test Component"
              hoverable
            >
              Just a Simple Form
            </Card>
          </a>
        </Link>
      </Col>
      <Col span={24}>
        <Card title={"Component Title"} hoverable>
          Your first component...
        </Card>
      </Col>
      <Col span={24}>
        <Card title={"Component Title"} hoverable>
          Your first component...
        </Card>
      </Col>
      <Col span={24}>
        <Card title={"Component Title"} hoverable>
          Your first component...
        </Card>
      </Col>
      <Col span={24}>
        <Card title={"Component Title"} hoverable>
          Your first component...
        </Card>
      </Col>
    </Row>
  );
};

export default index;

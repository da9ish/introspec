import React from "react";
import { Card } from "../components/Card";
import Clickable from "../components/Clickable";
import Flex from "../components/Flex";
import { Text } from "../components/Text";

const Overview: React.FC = () => {
  return (
    <Flex alignItems="center" justifyContent="center" css={{ width: '100%', height: 'calc(100vh - 60px)', flexGrow: 1, padding: '0 24px 0 36px', overflow: 'auto' }}>
      <Card gap="md">
        <Text type="title1">Hello Danish!</Text>
        <Text type="title3">Welcome to your workspace</Text>
        <Text color="muted">You'll see metrics of all the services you'll be using over here</Text>
        <Text color="muted">Currently no services are created, start by adding one</Text>
        <Flex gap="md">
          <Clickable>
            <Text type="title4">Authentication</Text>
          </Clickable>
          <Clickable>
            <Text type="title4">Database</Text>
          </Clickable>
          <Clickable>
            <Text type="title4">Storage</Text>
          </Clickable>
        </Flex>
      </Card>
    </Flex>
  )
}

export default Overview
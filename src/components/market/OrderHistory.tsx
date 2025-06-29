import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Text,
  Button,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface Order {
  date: string;
  pair: string;
  price: number;
  side: "Buy" | "Sell";
  orderType: string;
  amount: number;
  total: number;
}

const mockOrders: Order[] = [
  {
    date: "28-05-2024 12:26:44",
    pair: "BNB/USDT",
    price: 601.8,
    side: "Buy",
    orderType: "Limit",
    amount: 187.2555562,
    total: 187651265,
  },
  {
    date: "28-05-2024 12:26:44",
    pair: "BNB/USDT",
    price: 601.8,
    side: "Buy",
    orderType: "Limit",
    amount: 187.2555562,
    total: 187651265,
  },
  {
    date: "28-05-2024 12:26:44",
    pair: "BNB/USDT",
    price: 601.8,
    side: "Buy",
    orderType: "Limit",
    amount: 187.2555562,
    total: 187651265,
  },
];

const OrderHistory = () => {
  return (
    <Box bg="#161616" borderRadius="md" overflow="hidden">
      <Tabs variant="unstyled">
        <TabList borderBottom="1px solid #282828" px={4}>
          <Tab
            _selected={{ color: "#00C087" }}
            color="gray.500"
            fontSize="14px"
            fontWeight="500"
            py={3}
            px={0}
            mr={6}
            position="relative"
            _after={{
              content: '""',
              position: "absolute",
              bottom: "-1px",
              left: 0,
              right: 0,
              height: "2px",
              bg: "currentColor",
              display: "none",
              _selected: {
                display: "block",
              },
            }}
          >
            Open Orders(3)
          </Tab>
          <Tab
            _selected={{ color: "#00C087" }}
            color="gray.500"
            fontSize="14px"
            fontWeight="500"
            py={3}
            px={0}
            mr={6}
            position="relative"
            _after={{
              content: '""',
              position: "absolute",
              bottom: "-1px",
              left: 0,
              right: 0,
              height: "2px",
              bg: "currentColor",
              display: "none",
              _selected: {
                display: "block",
              },
            }}
          >
            Order History
          </Tab>
          <Tab
            _selected={{ color: "#00C087" }}
            color="gray.500"
            fontSize="14px"
            fontWeight="500"
            py={3}
            px={0}
            position="relative"
            _after={{
              content: '""',
              position: "absolute",
              bottom: "-1px",
              left: 0,
              right: 0,
              height: "2px",
              bg: "currentColor",
              display: "none",
              _selected: {
                display: "block",
              },
            }}
          >
            Cancel History
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel p={0}>
            <Box overflowX="auto">
              <Table variant="unstyled" size="sm">
                <Thead>
                  <Tr borderBottom="1px solid #282828">
                    <Th color="gray.500" fontWeight="normal" fontSize="12px">
                      Date
                    </Th>
                    <Th color="gray.500" fontWeight="normal" fontSize="12px">
                      Pair
                    </Th>
                    <Th color="gray.500" fontWeight="normal" fontSize="12px">
                      Price
                    </Th>
                    <Th color="gray.500" fontWeight="normal" fontSize="12px">
                      Side
                    </Th>
                    <Th color="gray.500" fontWeight="normal" fontSize="12px">
                      Order Type
                    </Th>
                    <Th color="gray.500" fontWeight="normal" fontSize="12px">
                      Amount
                    </Th>
                    <Th color="gray.500" fontWeight="normal" fontSize="12px">
                      Total
                    </Th>
                    <Th color="gray.500" fontWeight="normal" fontSize="12px">
                      Action
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {mockOrders.map((order, index) => (
                    <Tr key={index} _hover={{ bg: "#1A1A1A" }}>
                      <Td color="gray.300" fontSize="13px">
                        {order.date}
                      </Td>
                      <Td color="gray.300" fontSize="13px">
                        {order.pair}
                      </Td>
                      <Td color="gray.300" fontSize="13px">
                        {order.price.toFixed(8)}
                      </Td>
                      <Td
                        color={order.side === "Buy" ? "#00C087" : "#FF5C5C"}
                        fontSize="13px"
                      >
                        {order.side}
                      </Td>
                      <Td color="gray.300" fontSize="13px">
                        {order.orderType}
                      </Td>
                      <Td color="gray.300" fontSize="13px">
                        {order.amount}
                      </Td>
                      <Td color="gray.300" fontSize="13px">
                        {order.total}
                      </Td>
                      <Td>
                        <Button
                          size="xs"
                          variant="ghost"
                          color="#FF5C5C"
                          _hover={{ bg: "rgba(255, 92, 92, 0.1)" }}
                          fontSize="13px"
                        >
                          Cancel
                        </Button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
            <HStack justify="center" spacing={1} py={4}>
              <IconButton
                aria-label="Previous page"
                icon={<ChevronLeftIcon />}
                size="xs"
                variant="ghost"
                color="gray.500"
              />
              <Button size="xs" variant="ghost" color="#00C087">
                1
              </Button>
              <Button size="xs" variant="ghost" color="gray.500">
                2
              </Button>
              <IconButton
                aria-label="Next page"
                icon={<ChevronRightIcon />}
                size="xs"
                variant="ghost"
                color="gray.500"
              />
            </HStack>
          </TabPanel>
          <TabPanel>
            <Text color="gray.500" p={4}>
              Order History Content
            </Text>
          </TabPanel>
          <TabPanel>
            <Text color="gray.500" p={4}>
              Cancel History Content
            </Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default OrderHistory;

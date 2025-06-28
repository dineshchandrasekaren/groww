import {
  Box,
  HStack,
  Text,
  VStack,
  Table,
  Tbody,
  Tr,
  Td,
} from "@chakra-ui/react";

interface Order {
  price: number;
  amount: number;
  total: number;
}

const sampleOrders: Order[] = [
  { price: 66487.47, amount: 0.26548, total: 0.26548 },
  { price: 66487.47, amount: 0.26548, total: 0.26548 },
  { price: 66487.47, amount: 0.26548, total: 0.26548 },
  { price: 66487.47, amount: 0.26548, total: 0.26548 },
  { price: 66487.47, amount: 0.26548, total: 0.26548 },
  { price: 66487.47, amount: 0.26548, total: 0.26548 },
  { price: 66487.47, amount: 0.26548, total: 0.26548 },
  { price: 66487.47, amount: 0.26548, total: 0.26548 },
  { price: 66487.47, amount: 0.26548, total: 0.26548 },
  { price: 66487.47, amount: 0.26548, total: 0.26548 },
  { price: 66487.47, amount: 0.26548, total: 0.26548 },
  { price: 66487.47, amount: 0.26548, total: 0.26548 },
  { price: 66487.47, amount: 0.26548, total: 0.26548 },
  { price: 66487.47, amount: 0.26548, total: 0.26548 },
  { price: 66487.47, amount: 0.26548, total: 0.26548 },
];

const OrderBook = () => {
  return (
    <Box bg="#141414" borderRadius="md" overflow="hidden">
      <VStack align="stretch" spacing={0}>
        <Box px={2} py={1} borderBottom="1px" borderColor="#1A1A1A">
          <HStack spacing={4}>
            <Text
              fontSize="13px"
              color="#00C087"
              cursor="pointer"
              fontWeight="500"
              letterSpacing="-0.1px"
            >
              Order Book
            </Text>
          </HStack>
        </Box>

        <Box>
          <Table variant="unstyled" size="sm">
            <Tbody>
              {sampleOrders.map((order, index) => (
                <Tr
                  key={index}
                  cursor="pointer"
                  _hover={{ bg: "rgba(255, 255, 255, 0.04)" }}
                >
                  <Td borderBottom="1px" borderColor="#1A1A1A" py={1.5} pl={2}>
                    <Text
                      color="#FF5C5C"
                      fontSize="13px"
                      letterSpacing="-0.1px"
                    >
                      {order.price.toFixed(2)}
                    </Text>
                  </Td>
                  <Td
                    borderBottom="1px"
                    borderColor="#1A1A1A"
                    py={1.5}
                    isNumeric
                  >
                    <Text
                      color="#FFFFFF"
                      fontSize="13px"
                      letterSpacing="-0.1px"
                    >
                      {order.amount.toFixed(5)}
                    </Text>
                  </Td>
                  <Td
                    borderBottom="1px"
                    borderColor="#1A1A1A"
                    py={1.5}
                    pr={2}
                    isNumeric
                  >
                    <Text
                      color="#FFFFFF"
                      fontSize="13px"
                      letterSpacing="-0.1px"
                    >
                      {order.total.toFixed(5)}
                    </Text>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        <Box px={2} py={1} borderTop="1px" borderColor="#1A1A1A">
          <Text
            fontSize="20px"
            color="#FF5C5C"
            fontWeight="500"
            letterSpacing="-0.2px"
          >
            67,012.00
          </Text>
        </Box>

        <Box>
          <Table variant="unstyled" size="sm">
            <Tbody>
              {sampleOrders.map((order, index) => (
                <Tr
                  key={index}
                  cursor="pointer"
                  _hover={{ bg: "rgba(255, 255, 255, 0.04)" }}
                >
                  <Td borderBottom="1px" borderColor="#1A1A1A" py={1.5} pl={2}>
                    <Text
                      color="#00C087"
                      fontSize="13px"
                      letterSpacing="-0.1px"
                    >
                      {order.price.toFixed(2)}
                    </Text>
                  </Td>
                  <Td
                    borderBottom="1px"
                    borderColor="#1A1A1A"
                    py={1.5}
                    isNumeric
                  >
                    <Text
                      color="#FFFFFF"
                      fontSize="13px"
                      letterSpacing="-0.1px"
                    >
                      {order.amount.toFixed(5)}
                    </Text>
                  </Td>
                  <Td
                    borderBottom="1px"
                    borderColor="#1A1A1A"
                    py={1.5}
                    pr={2}
                    isNumeric
                  >
                    <Text
                      color="#FFFFFF"
                      fontSize="13px"
                      letterSpacing="-0.1px"
                    >
                      {order.total.toFixed(5)}
                    </Text>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </VStack>
    </Box>
  );
};

export default OrderBook;

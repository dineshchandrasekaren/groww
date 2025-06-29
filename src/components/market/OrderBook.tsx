import {
  Box,
  HStack,
  Text,
  Table,
  Tbody,
  Tr,
  Td,
  Icon,
  Flex,
  Grid,
} from "@chakra-ui/react";
import { BsArrowDown } from "react-icons/bs";

interface Order {
  price: number;
  amount: number;
  total: number;
}

// Sample sell orders (red)
const sellOrders: Order[] = Array(15).fill({
  price: 66487.47,
  amount: 0.26548,
  total: 0.26548,
});

// Sample buy orders (green)
const buyOrders: Order[] = Array(15).fill({
  price: 66487.47,
  amount: 0.26548,
  total: 0.26548,
});

const OrderBook = () => {
  return (
    <Box bg="#141414" borderRadius="md" overflow="hidden">
      {/* Header with icons */}
      <HStack
        justify="space-between"
        px={3}
        py={2}
        borderBottom="1px solid #1A1A1A"
      >
        <Text fontSize="13px" color="#00C087" fontWeight="500">
          Order Book
        </Text>
        <HStack spacing={2}>
          <Box w="16px" h="16px" bg="#1A1A1A" p={1} cursor="pointer">
            <Grid templateColumns="repeat(3, 1fr)" gap="1px" h="full">
              <Box w="2px" h="8px" bg="#00C087" />
              <Box w="2px" h="12px" bg="#00C087" />
              <Box w="2px" h="6px" bg="#00C087" />
            </Grid>
          </Box>
          <Box w="16px" h="16px" bg="#1A1A1A" p={1} cursor="pointer">
            <Grid templateColumns="repeat(3, 1fr)" gap="1px" h="full">
              <Box w="2px" h="8px" bg="#666666" />
              <Box w="2px" h="12px" bg="#666666" />
              <Box w="2px" h="6px" bg="#666666" />
            </Grid>
          </Box>
          <Box w="16px" h="16px" bg="#1A1A1A" p={1} cursor="pointer">
            <Grid templateColumns="repeat(3, 1fr)" gap="1px" h="full">
              <Box w="2px" h="8px" bg="#666666" />
              <Box w="2px" h="12px" bg="#666666" />
              <Box w="2px" h="6px" bg="#666666" />
            </Grid>
          </Box>
        </HStack>
      </HStack>

      {/* Column Headers */}
      <Grid
        templateColumns="1fr 1fr 1fr"
        px={3}
        py={2}
        borderBottom="1px solid #1A1A1A"
      >
        <Text color="#666666" fontSize="12px">
          Price (USDT)
        </Text>
        <Text color="#666666" fontSize="12px" textAlign="right">
          Amount (BTC)
        </Text>
        <Text color="#666666" fontSize="12px" textAlign="right">
          Total
        </Text>
      </Grid>

      {/* Sell Orders */}
      <Box>
        <Table variant="unstyled" size="sm">
          <Tbody>
            {sellOrders.map((order, index) => (
              <Tr
                key={`sell-${index}`}
                _hover={{ bg: "rgba(255, 255, 255, 0.03)" }}
                cursor="pointer"
              >
                <Td py={1} pl={3} pr={0} borderBottom="1px solid #1A1A1A">
                  <Text color="#FF5C5C" fontSize="13px">
                    {order.price.toFixed(2)}
                  </Text>
                </Td>
                <Td py={1} px={0} borderBottom="1px solid #1A1A1A" isNumeric>
                  <Text color="white" fontSize="13px">
                    {order.amount.toFixed(5)}
                  </Text>
                </Td>
                <Td
                  py={1}
                  pl={0}
                  pr={3}
                  borderBottom="1px solid #1A1A1A"
                  isNumeric
                >
                  <Text color="white" fontSize="13px">
                    {order.total.toFixed(5)}
                  </Text>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      {/* Current Price */}
      <Flex
        justify="space-between"
        align="center"
        px={3}
        py={2}
        borderTop="1px solid #1A1A1A"
        borderBottom="1px solid #1A1A1A"
      >
        <HStack spacing={2}>
          <Text fontSize="20px" color="#FF5C5C" fontWeight="500">
            67,012.00
          </Text>
          <Icon as={BsArrowDown} color="#FF5C5C" boxSize={4} />
        </HStack>
        <Text color="#666666" fontSize="13px">
          $67,580
        </Text>
      </Flex>

      {/* Buy Orders */}
      <Box>
        <Table variant="unstyled" size="sm">
          <Tbody>
            {buyOrders.map((order, index) => (
              <Tr
                key={`buy-${index}`}
                _hover={{ bg: "rgba(255, 255, 255, 0.03)" }}
                cursor="pointer"
              >
                <Td py={1} pl={3} pr={0} borderBottom="1px solid #1A1A1A">
                  <Text color="#00C087" fontSize="13px">
                    {order.price.toFixed(2)}
                  </Text>
                </Td>
                <Td py={1} px={0} borderBottom="1px solid #1A1A1A" isNumeric>
                  <Text color="white" fontSize="13px">
                    {order.amount.toFixed(5)}
                  </Text>
                </Td>
                <Td
                  py={1}
                  pl={0}
                  pr={3}
                  borderBottom="1px solid #1A1A1A"
                  isNumeric
                >
                  <Text color="white" fontSize="13px">
                    {order.total.toFixed(5)}
                  </Text>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default OrderBook;

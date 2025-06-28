import {
  Box,
  HStack,
  Text,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

interface Trade {
  price: number;
  amount: number;
  time: string;
}

const sampleTrades: Trade[] = [
  { price: 12358.47, amount: 0.26548, time: "20:55:36" },
  { price: 12358.47, amount: 0.26548, time: "20:55:36" },
  { price: 12358.47, amount: 0.26548, time: "20:55:36" },
  { price: 12358.47, amount: 0.26548, time: "20:55:36" },
  { price: 12358.47, amount: 0.26548, time: "20:55:36" },
  { price: 12358.47, amount: 0.26548, time: "20:55:36" },
  { price: 12358.47, amount: 0.26548, time: "20:55:36" },
  { price: 12358.47, amount: 0.26548, time: "20:55:36" },
  { price: 12358.47, amount: 0.26548, time: "20:55:36" },
  { price: 12358.47, amount: 0.26548, time: "20:55:36" },
  { price: 12358.47, amount: 0.26548, time: "20:55:36" },
  { price: 12358.47, amount: 0.26548, time: "20:55:36" },
];

const MarketTrades = () => {
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
              Market Trades
            </Text>
            <Text
              fontSize="13px"
              color="#808080"
              cursor="pointer"
              _hover={{ color: "#FFFFFF" }}
              letterSpacing="-0.1px"
            >
              My Trades
            </Text>
          </HStack>
        </Box>

        <Box>
          <Table variant="unstyled" size="sm">
            <Thead>
              <Tr>
                <Th
                  color="#808080"
                  borderBottom="1px"
                  borderColor="#1A1A1A"
                  fontSize="11px"
                  py={2}
                  pl={2}
                  fontWeight="normal"
                  textTransform="none"
                  letterSpacing="-0.1px"
                >
                  Price (USDT)
                </Th>
                <Th
                  color="#808080"
                  borderBottom="1px"
                  borderColor="#1A1A1A"
                  fontSize="11px"
                  py={2}
                  isNumeric
                  fontWeight="normal"
                  textTransform="none"
                  letterSpacing="-0.1px"
                >
                  Amount (BTC)
                </Th>
                <Th
                  color="#808080"
                  borderBottom="1px"
                  borderColor="#1A1A1A"
                  fontSize="11px"
                  py={2}
                  pr={2}
                  isNumeric
                  fontWeight="normal"
                  textTransform="none"
                  letterSpacing="-0.1px"
                >
                  Time
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {sampleTrades.map((trade, index) => (
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
                      {trade.price.toFixed(2)}
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
                      {trade.amount.toFixed(5)}
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
                      color="#808080"
                      fontSize="13px"
                      letterSpacing="-0.1px"
                    >
                      {trade.time}
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

export default MarketTrades;

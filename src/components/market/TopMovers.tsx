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

interface Mover {
  symbol: string;
  change: number;
  time: string;
  isNewHigh?: boolean;
  isNewLow?: boolean;
}

const sampleMovers: Mover[] = [
  { symbol: "PHB/BTC", change: -6.64, time: "12:51:02", isNewLow: true },
  { symbol: "CVX/USDT", change: +6.64, time: "12:51:02", isNewHigh: true },
  { symbol: "PHB/BTC", change: -6.64, time: "12:51:02", isNewLow: true },
  { symbol: "PHB/BTC", change: -6.64, time: "12:51:02", isNewLow: true },
  { symbol: "PHB/BTC", change: -6.64, time: "12:51:02", isNewLow: true },
  { symbol: "PHB/BTC", change: -6.64, time: "12:51:02", isNewLow: true },
];

const TopMovers = () => {
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
              Top Movers
            </Text>
            <Text
              fontSize="13px"
              color="#808080"
              cursor="pointer"
              _hover={{ color: "#FFFFFF" }}
              letterSpacing="-0.1px"
            >
              All
            </Text>
            <Text
              fontSize="13px"
              color="#808080"
              cursor="pointer"
              _hover={{ color: "#FFFFFF" }}
              letterSpacing="-0.1px"
            >
              New High
            </Text>
            <Text
              fontSize="13px"
              color="#808080"
              cursor="pointer"
              _hover={{ color: "#FFFFFF" }}
              letterSpacing="-0.1px"
            >
              New Low
            </Text>
          </HStack>
        </Box>

        <Box>
          <Table variant="unstyled" size="sm">
            <Tbody>
              {sampleMovers.map((mover, index) => (
                <Tr
                  key={index}
                  cursor="pointer"
                  _hover={{ bg: "rgba(255, 255, 255, 0.04)" }}
                >
                  <Td borderBottom="1px" borderColor="#1A1A1A" py={1.5} pl={2}>
                    <Text
                      color="#FFFFFF"
                      fontSize="13px"
                      letterSpacing="-0.1px"
                    >
                      {mover.symbol}
                    </Text>
                  </Td>
                  <Td
                    borderBottom="1px"
                    borderColor="#1A1A1A"
                    py={1.5}
                    isNumeric
                  >
                    <Text
                      color={mover.change >= 0 ? "#00C087" : "#FF5C5C"}
                      fontSize="13px"
                      letterSpacing="-0.1px"
                    >
                      {mover.change >= 0 ? "+" : ""}
                      {mover.change}%
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
                      {mover.isNewHigh
                        ? "New 24hr High"
                        : mover.isNewLow
                        ? "New 24hr Low"
                        : ""}
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

export default TopMovers;

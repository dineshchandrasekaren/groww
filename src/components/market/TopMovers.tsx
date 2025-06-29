import {
  Box,
  HStack,
  Text,
  VStack,
  Table,
  Tbody,
  Tr,
  Td,
  Icon,
  Flex,
} from "@chakra-ui/react";
import { TbChartCandle } from "react-icons/tb";

interface Mover {
  symbol: string;
  change: number;
  time: string;
  type: "24hr_high" | "24hr_low" | "7day_low";
}

const sampleMovers: Mover[] = [
  { symbol: "PHB/BTC", change: -6.64, time: "12:51:02", type: "24hr_low" },
  { symbol: "CVX/USDT", change: 6.64, time: "12:51:02", type: "24hr_high" },
  { symbol: "PHB/BTC", change: -6.64, time: "12:51:02", type: "7day_low" },
  { symbol: "PHB/BTC", change: -6.64, time: "12:51:02", type: "7day_low" },
  { symbol: "PHB/BTC", change: -6.64, time: "12:51:02", type: "7day_low" },
  { symbol: "PHB/BTC", change: -6.64, time: "12:51:02", type: "7day_low" },
];

const TopMovers = () => {
  return (
    <Box bg="#141414" borderRadius="md" overflow="hidden">
      {/* Header with filter tabs */}
      <Box borderBottom="1px solid #1A1A1A">
        <HStack spacing={6} px={4} py={2}>
          <Text fontSize="13px" color="#00C087" fontWeight="500">
            Top Movers
          </Text>
          <HStack spacing={6}>
            <Text fontSize="13px" color="#00C087" cursor="pointer">
              All
            </Text>
            <Text
              fontSize="13px"
              color="#808080"
              cursor="pointer"
              _hover={{ color: "white" }}
            >
              New High
            </Text>
            <Text
              fontSize="13px"
              color="#808080"
              cursor="pointer"
              _hover={{ color: "white" }}
            >
              New Low
            </Text>
          </HStack>
        </HStack>
      </Box>

      {/* Movers List */}
      <Box>
        <Table variant="unstyled" size="sm">
          <Tbody>
            {sampleMovers.map((mover, index) => (
              <Tr
                key={index}
                cursor="pointer"
                _hover={{ bg: "rgba(255, 255, 255, 0.03)" }}
              >
                <Td borderBottom="1px solid #1A1A1A" py={2.5} pl={4}>
                  <VStack align="flex-start" spacing={0}>
                    <Text color="white" fontSize="13px">
                      {mover.symbol}
                    </Text>
                    <Text color="#808080" fontSize="12px">
                      {mover.time}
                    </Text>
                  </VStack>
                </Td>
                <Td borderBottom="1px solid #1A1A1A" py={2.5} isNumeric>
                  <Text
                    color={mover.change >= 0 ? "#00C087" : "#FF5C5C"}
                    fontSize="13px"
                  >
                    {mover.change >= 0 ? "+" : ""}
                    {mover.change}%
                  </Text>
                </Td>
                <Td borderBottom="1px solid #1A1A1A" py={2.5} pr={4}>
                  <Flex justify="space-between" align="center">
                    <Text color="#808080" fontSize="13px">
                      {mover.type === "24hr_high" && "New 24hr High"}
                      {mover.type === "24hr_low" && "New 24hr Low"}
                      {mover.type === "7day_low" && "New 7day Low"}
                    </Text>
                    <Box
                      bg={mover.change >= 0 ? "#00C087" : "#FF5C5C"}
                      p={1}
                      borderRadius="sm"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Icon
                        as={TbChartCandle}
                        color="white"
                        boxSize={3}
                        transform={mover.change < 0 ? "rotate(180deg)" : "none"}
                      />
                    </Box>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default TopMovers;

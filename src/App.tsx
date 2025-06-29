import { Box, Grid, VStack } from "@chakra-ui/react";
import MarketHeader from "./components/market/MarketHeader";
import MarketSearch from "./components/market/MarketSearch";
import MarketTrades from "./components/market/MarketTrades";
import TopMovers from "./components/market/TopMovers";
import OrderBook from "./components/market/OrderBook";
import TradeForm from "./components/market/TradeForm";
import TradingView from "./components/market/TradingView";
import Navbar from "./components/layout/Navbar.layout";
import OrderHistory from "./components/market/OrderHistory";

const marketData = {
  price: 67012.0,
  change: -334.02,
  high: 65777.0,
  low: 68474.55,
  volume: 27306.67,
  volumeUSDT: 1839020199.75,
};

const App = () => {
  return (
    <VStack minH="100vh" bg="#0B0B0B" spacing={0} align="stretch">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Box flex={1}>
        <Grid
          templateColumns={{ base: "1fr", lg: "300px 1fr 300px" }}
          gap={2}
          maxW="1920px"
          mx="auto"
          p={2}
        >
          {/* Left Column */}
          <VStack spacing={2} align="stretch">
            <MarketHeader {...marketData} />
            <OrderBook />
          </VStack>

          {/* Middle Column */}
          <VStack spacing={2} align="stretch">
            <Box
              bg="#141414"
              borderRadius="md"
              minH="500px"
              marginBottom="40px"
              marginTop={100}
            >
              <TradingView symbol="BTCUSDT" />
            </Box>
            <TradeForm />
          </VStack>

          {/* Right Column */}
          <VStack spacing={2} align="stretch">
            <MarketSearch />
            <MarketTrades />
            <TopMovers />
          </VStack>
        </Grid>

        {/* Bottom Section - Order History */}
        <Box maxW="1920px" mx="auto" p={2} mt={2}>
          <OrderHistory />
        </Box>
      </Box>
    </VStack>
  );
};

export default App;

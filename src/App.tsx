import { Box, Grid, GridItem, VStack } from "@chakra-ui/react";
import MarketHeader from "./components/market/MarketHeader";
import MarketSearch from "./components/market/MarketSearch";
import MarketTrades from "./components/market/MarketTrades";
import TopMovers from "./components/market/TopMovers";
import OrderBook from "./components/market/OrderBook";
import TradeForm from "./components/market/TradeForm";
import TradingView from "./components/market/TradingView";
import Navbar from "./components/layout/Navbar.layout";

const marketData = {
  price: 67012.0,
  change: -334.02,
  high: 65777.0,
  low: 68474.55,
  volume: 27306.67,
  volumeUSDT: 1839020199.75,
};

function App() {
  return (
    <Box bg="#0A0A0A" minH="100vh" color="white">
      <Navbar />
      <MarketHeader {...marketData} />
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 2fr 1fr" }}
        templateRows={{ base: "auto", md: "1fr" }}
        gap={2}
        p={2}
        maxW="1920px"
        mx="auto"
        h="calc(100vh - 120px)" // Adjust height based on Navbar and MarketHeader
      >
        <GridItem>
          <OrderBook />
        </GridItem>

        <GridItem>
          <VStack spacing={2} align="stretch" h="100%">
            <Box flex="1" minH="400px">
              <TradingView symbol="BTCUSDT" />
            </Box>
            <TradeForm />
          </VStack>
        </GridItem>

        <GridItem>
          <VStack spacing={2} align="stretch">
            <MarketSearch />
            <MarketTrades />
            <TopMovers />
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;

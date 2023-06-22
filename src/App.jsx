import Header from "./components/ui/Header";
import BusinessList from "./pages/Home/BusinessList";
import HeroBanner from "./pages/Home/HeroBanner";

function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <main className="container">
        <BusinessList />
      </main>
    </>
  );
}

export default App;

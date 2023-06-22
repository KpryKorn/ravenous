import Header from "./components/ui/Header";
import BusinessList from "./pages/Home/BusinessList";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <BusinessList />
      </main>
    </>
  );
}

export default App;

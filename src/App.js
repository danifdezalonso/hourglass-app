import Header from "./components/Header";
import Footer from "./components/Footer";
import Highlights from "./components/Highlights";
import Filter from "./components/Filter";

export default function App() {
  return (
    <div className="App">
      <h1>Test nova branca</h1>
      <Header />
      <Filter />
      <Highlights title="Serveis destacats per la llar" />
      <Highlights title="Serveis destacats per estudiar" />
      <Highlights title="Serveis destacats de mecànica" />
      <Footer />
    </div>
  );
}

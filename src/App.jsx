import "./App.css";
import ContactForm from "./components/ContactForm";
import ContentHeader from "./components/ContentHeader";
import Navigation from "./components/Nav";

function App() {
  return (
    <div>
      <Navigation />
      <main className="main_container">
        <ContentHeader />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
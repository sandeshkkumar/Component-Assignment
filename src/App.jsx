import Header from "./components/Header";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import ExportDemo from "./components/ExportDemo";
import Student from "./components/Student";
import ProductCard from "./components/ProductCard";
import UserProfile from "./components/UserProfile";
import Greeting from "./components/Greeting";
import Result from "./components/Result";
import StudentList from "./components/StudentList";
import ProductList from "./components/ProductList";
import MovieList from "./components/MovieList";
import AlertButton from "./components/AlertButton";
import Counter from "./components/Counter";
import LikeButton from "./components/LikeButton";
import AuthToggle from "./components/AuthToggle";

function Section({ title, children }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Section title="Q1: Welcome Component">
          <Welcome />
        </Section>

        <Section title="Q2: Header & Footer (see top and bottom of page)">
          <p>Header and Footer are separate files imported in App.jsx.</p>
        </Section>

        <Section title="Q3: Default vs Named Export">
          <ExportDemo />
        </Section>

        <Section title="Q4: Student Component (props)">
          <div className="grid">
            <Student name="Aman Kumar" course="B.Tech CSE" age={20} />
            <Student name="Riya Singh" course="BCA" age={19} />
          </div>
        </Section>

        <Section title="Q5: Reusable ProductCard">
          <div className="grid">
            <ProductCard productName="Laptop" price={55000} category="Electronics" />
            <ProductCard productName="Running Shoes" price={2999} category="Footwear" />
            <ProductCard productName="Notebook" price={60} category="Stationery" />
          </div>
        </Section>

        <Section title="Q6: UserProfile">
          <UserProfile
            name="Priya Sharma"
            email="priya@example.com"
            image="https://i.pravatar.cc/150?img=5"
          />
        </Section>

        <Section title="Q7: Conditional Greeting">
          <Greeting isLoggedIn={true} />
          <Greeting isLoggedIn={false} />
        </Section>

        <Section title="Q8: Result Component">
          <Result marks={72} />
          <Result marks={40} />
          <Result marks={35} />
        </Section>

        <Section title="Q9: Student Names using map()">
          <StudentList />
        </Section>

        <Section title="Q10: Product Listing with keys">
          <ProductList />
        </Section>

        <Section title="Q11: Movie List with MovieCard">
          <MovieList />
        </Section>

        <Section title="Q12: Alert Button">
          <AlertButton />
        </Section>

        <Section title="Q13: Counter">
          <Counter />
        </Section>

        <Section title="Q14: Like Button">
          <LikeButton />
        </Section>

        <Section title="Q15: Login / Logout">
          <AuthToggle />
        </Section>
      </main>
      <Footer />
    </>
  );
}

export default App;

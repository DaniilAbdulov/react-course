import "./App.css";
import BookList from "./components/BookList/BookList";
import BookForm from "./components/BookForm/BookForm";
import Filter from "./components/Filter/Filter";
function App() {
    return (
        <div className="App">
            <header className="app-header">
                <h1>App componetnt</h1>
            </header>
            <main className="app-main">
                <div className="app-left-column">
                    <BookForm />
                </div>
                <div className="app-right-column">
                    {/* <Filter /> */}
                    <BookList />
                </div>
            </main>
        </div>
    );
}

export default App;

import data from "./assets/data"
import Card from "./assets/components/Card"

function App() {
  const journal = data;
  const card = journal.map(item => {
    return <Card key={item.id} {...item} />
  })

  return (
    <>
      <nav className="navbar">
        <img src="./earth.png" alt="earth" />
        <h3>my travel journal.</h3>
      </nav>
      <div className="container">
        {card}
      </div> 
    </>
  )
}

export default App

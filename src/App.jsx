import Entry from "./components/Entry"
import Header from "./components/Header"



export default function App() {
    const firstName = "Joe"
    const lastName = "Schmoe"

    const hours = new Date().getHours()
    let timeOfDay
    if (hours < 12) {
        timeOfDay = "morning"
      } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
      } else if (hours < 21) {
        timeOfDay = "evening"
      } else {
        timeOfDay = "night"
      }
    
        
    return (
        <>
           <h1>Good {timeOfDay} {lastName} {firstName }</h1>
        </>
    )
    }
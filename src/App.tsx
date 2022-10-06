import React, {lazy, Suspense} from "react"
import {Route, Routes} from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Loader from "./components/Loader"

const Home = lazy(() => import(/* webpackChunkName: "home" */ "./pages/Home"))
const About = lazy(() => import(/* webpackChunkName: "about" */ "./pages/About"))

function App(): React.ReactElement {
  const [dark, setDark] = React.useState(window.matchMedia("(prefers-color-scheme: dark)").matches)

  React.useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [dark])

  return (
    <div id="all-container" className="flex flex-col min-h-screen justify-between">
      <Header isDark={dark} toggleDark={setDark} />
      <Suspense fallback={<Loader size="8vw" extraStyles={{position: "absolute", top: "45%", left: "45%"}} />}>
        <main className="pb-5 container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </main>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App

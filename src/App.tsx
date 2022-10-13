import React, {lazy, Suspense} from "react"
import {Route, Routes} from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Loader from "./components/Loader"

const Home = lazy(() => import(/* webpackChunkName: "home" */ "./pages/Home"))
const About = lazy(() => import(/* webpackChunkName: "about" */ "./pages/About"))
const Contact = lazy(() => import(/* webpackChunkName: "contact" */ "./pages/Contact"))

function App(): React.ReactElement {
  console.log("color-theme" in localStorage)
  console.log(localStorage.getItem("darkTheme"))
  const [dark, setDark] = React.useState(
    localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  )

  React.useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("color-theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("color-theme", "light")
    }
  }, [dark])

  return (
    <div id="all-container" className="flex flex-col min-h-screen justify-between">
      <Header isDark={dark} toggleDark={setDark} />
      <Suspense fallback={<Loader size="8vw" extraStyles={{position: "absolute", top: "45%", left: "45%"}} />}>
        <main className="pb-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="services" element={<div className="text-center text-4xl">Under Construction...</div>} />
          </Routes>
        </main>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App

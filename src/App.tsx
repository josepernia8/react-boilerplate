import React, {lazy, Suspense} from "react"
import {Route, Routes} from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Loader from "./components/Loader"

const Home = lazy(() => import(/* webpackChunkName: "home" */ "./pages/Home"))
const Other = lazy(() => import(/* webpackChunkName: "other" */ "./pages/Other"))

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
    <div className="flex flex-col min-h-screen justify-between">
      <Header isDark={dark} toggleDark={setDark} />
      <Suspense fallback={<Loader size="8vw" extraStyles={{position: "absolute", top: "45%", left: "45%"}} />}>
        <main className="pb-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="other" element={<Other />} />
          </Routes>
        </main>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App

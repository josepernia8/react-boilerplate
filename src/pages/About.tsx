import {Timeline} from "flowbite-react"
import {Link} from "react-router-dom"
import {ReactComponent as Calendar} from "../assets/calendar.svg"

function Home() {
  return (
    <div className="px-10 flex flex-col gap-12">
      <section>
        <p className="first-line:tracking-widest first-letter:text-xl first-letter:font-bold text-justify mb-3">
          Blazeknot is a team of skilled individuals in different areas like web/mobile engineering and designing which
          makes an excellent team to tackle different kind of projects with different requirements and tech stacks.
        </p>
        <p>
          If you are interested in knowing more about the team feel free to{" "}
          <Link to="/contact" className="underline">
            Contact Us
          </Link>
        </p>
      </section>
      <section>
        <h1 className="text-2xl">Timeline:</h1>
        <hr className="mb-5 mt-1" />
        <Timeline>
          <Timeline.Item>
            <Timeline.Point icon={Calendar} />
            <Timeline.Content>
              <Timeline.Time>June 2020</Timeline.Time>
              <Timeline.Title>Created Blazeknot Concept</Timeline.Title>
              <Timeline.Body>
                As a team of skilled individuals in different technologies we came across with the idea of forming a
                group under a name to allow us to work for different clients as a skilled team of engineers/designers.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={Calendar} />
            <Timeline.Content>
              <Timeline.Time>March 2021</Timeline.Time>
              <Timeline.Title>Miscellaneous Projects</Timeline.Title>
              <Timeline.Body>
                Started working in different small projects with the participation of all members of Blazeknot or fewer.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={Calendar} />
            <Timeline.Content>
              <Timeline.Time>November 2021</Timeline.Time>
              <Timeline.Title>Casamia Real State Website</Timeline.Title>
              <Timeline.Body>
                Made a website an admin panel for a real state company, this was specially developed by Daniel Nuñez
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={Calendar} />
            <Timeline.Content>
              <Timeline.Time>January 2023</Timeline.Time>
              <Timeline.Title>Casamia Real State Website 2.0</Timeline.Title>
              <Timeline.Body>
                The team is going to make a new version of the real state website with latest technologies and trends
                and more important with a change of infraestructure (serverless).
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
      </section>
    </div>
  )
}
export default Home

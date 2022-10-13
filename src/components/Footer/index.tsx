import {Footer} from "flowbite-react"
import {ReactComponent as Facebook} from "../../assets/facebook.svg"
import {ReactComponent as Github} from "../../assets/github.svg"
import {ReactComponent as Instagram} from "../../assets/instagram.svg"
import {ReactComponent as Twitter} from "../../assets/twitter.svg"

const FooterComponent: React.FC = () => (
  <Footer container id="footer">
    <div className="w-full">
      <div className="flex justify-center md:justify-end">
        <Footer.LinkGroup>
          <Footer.Link href="/about">About</Footer.Link>
          <Footer.Link href="https://github.com/Blazeknot">Follow Us</Footer.Link>
          <Footer.Link href="/contact">Contact</Footer.Link>
        </Footer.LinkGroup>
      </div>
      <Footer.Divider />
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright by="Blazeknot" year={2020} />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon href="https://github.com/Blazeknot" icon={Github} />
          <Footer.Icon href="#" icon={Facebook} />
          <Footer.Icon href="#" icon={Instagram} />
          <Footer.Icon href="#" icon={Twitter} />
        </div>
      </div>
    </div>
  </Footer>
)

export default FooterComponent

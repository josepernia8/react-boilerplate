import {Avatar, Dropdown, Navbar} from "flowbite-react"
import ProfileImg from "../../assets/jose-pernia.jpg"
import ThemeSwitcherButton from "../ThemeSwitcher"

interface Props extends React.ComponentProps<"div"> {
  isDark: boolean
  toggleDark: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({isDark, toggleDark}: Props) => (
  <header className="h-24">
    <Navbar border style={{background: "transparent"}}>
      <Navbar.Brand href="https://github.com/Blazeknot">
        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Blazeknot Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Blazeknot</span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-4">
        <ThemeSwitcherButton isDark={isDark} toggleDark={toggleDark} />
        <Dropdown arrowIcon={false} inline label={<Avatar alt="User settings" img={ProfileImg} rounded={true} />}>
          <Dropdown.Header>
            <span className="block text-sm">José Pernía</span>
            <span className="block truncate text-sm font-medium">jose.pernia@test.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/services">Services</Navbar.Link>
        <Navbar.Link href="/contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

export default Header

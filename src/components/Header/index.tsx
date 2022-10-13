import {Avatar, Dropdown, Navbar} from "flowbite-react"
import {useLocation} from "react-router-dom"
import ProfileImg from "../../assets/jose-pernia.jpg"
import ThemeSwitcherButton from "../ThemeSwitcher"

interface Props extends React.ComponentProps<"div"> {
  isDark: boolean
  toggleDark: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({isDark, toggleDark}: Props) => {
  const {pathname} = useLocation()

  return (
    <header className="h-24">
      <Navbar border>
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
          <Navbar.Link href="/" active={pathname === "/"}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/about" active={pathname === "/about"}>
            About
          </Navbar.Link>
          <Navbar.Link href="/services" active={pathname === "/services"}>
            Services
          </Navbar.Link>
          <Navbar.Link href="/contact" active={pathname === "/contact"}>
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header

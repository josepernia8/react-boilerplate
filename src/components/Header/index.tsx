import {Avatar, Dropdown, Navbar} from "flowbite-react"
import ThemeSwitcherButton from "../ThemeSwitcher"

interface Props extends React.ComponentProps<"div"> {
  isDark: boolean
  toggleDark: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({isDark, toggleDark}: Props) => (
  <header className="h-24">
    <Navbar border style={{background: "transparent"}}>
      <Navbar.Brand href="https://flowbite.com/">
        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
      </Navbar.Brand>
      <div className="flex md:order-2 gap-4">
        <ThemeSwitcherButton isDark={isDark} toggleDark={toggleDark} />
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/navbars" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

export default Header

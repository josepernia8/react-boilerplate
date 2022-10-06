import {ButtonProps} from "flowbite-react"
import React from "react"
import Dark from "./Dark"
import Light from "./Light"

interface Props extends ButtonProps {
  isDark: boolean
  toggleDark: React.Dispatch<React.SetStateAction<boolean>>
}

const ThemeSwitcher = ({isDark, toggleDark}: Props) => (
  <button type="button" title="ThemeSwitcher" onClick={() => toggleDark(!isDark)}>
    {isDark ? <Light /> : <Dark />}
  </button>
)

export default ThemeSwitcher

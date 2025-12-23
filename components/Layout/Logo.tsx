import { Anchor } from "@mantine/core"
import { useComputedColorScheme } from "@mantine/core"
import { Link } from "react-router"
// @ts-ignore
import LogoIconDark from "#assets/datapackage-logo-dark.svg?react"
// @ts-ignore
import LogoIconLight from "#assets/datapackage-logo-light.svg?react"
import classes from "./Logo.module.css"

export function Logo() {
  const colorScheme = useComputedColorScheme("light")

  return (
    <Anchor
      mt={7}
      ml={12}
      to="https://datapackage.org"
      component={Link}
      className={classes.color}
      underline="never"
    >
      {colorScheme === "dark" ? (
        <LogoIconDark height="40px" />
      ) : (
        <LogoIconLight height="40px" />
      )}
    </Anchor>
  )
}

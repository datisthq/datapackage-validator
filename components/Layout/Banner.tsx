import { Trans } from "@lingui/react/macro"
import { Anchor, Box, Text } from "@mantine/core"
import { Container } from "@mantine/core"
import { Link } from "react-router"
import classes from "./Banner.module.css"

export function Banner() {
  return (
    <Box className={classes.banner} py={9}>
      <Container size="lg">
        <Text>
          <Trans>
            This <strong>validator</strong> checks only the{" "}
            <strong>metadata of your Data Package</strong>. For data validation
            use one of the{" "}
            <Anchor
              component={Link}
              to="https://github.com/frictionlessdata"
              c="white"
              fw="bold"
              td="underline"
            >
              Frictionless libraries
            </Anchor>
            .
          </Trans>
        </Text>
      </Container>
    </Box>
  )
}

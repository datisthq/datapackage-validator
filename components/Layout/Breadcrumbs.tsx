import { Trans } from "@lingui/react/macro"
import { Breadcrumbs as MantineBreadcrumbs } from "@mantine/core"
import { Anchor, Text } from "@mantine/core"
import { Link } from "react-router"

export function Breadcrumbs() {
  return (
    <MantineBreadcrumbs>
      <Anchor to="https://datapackage.org" component={Link}>
        <Trans>Data Package</Trans>
      </Anchor>
      <Text>
        <Trans>Validator</Trans>
      </Text>
    </MantineBreadcrumbs>
  )
}

import { Trans } from "@lingui/react/macro"
import { Box, Stack, Text, Title } from "@mantine/core"
import type { Route } from "./+types/route.tsx"
import { ValidatePackageDialog } from "./Dialog.tsx"
import { ValidatePackageForm } from "./Form.tsx"

export default function Page(_props: Route.ComponentProps) {
  return (
    <Box>
      <Stack gap="md">
        <Title order={1}>
          <Trans>Data Package Validator</Trans>
        </Title>
        <Text size="lg">
          <Trans>
            Validate metadata of data packages quickly and easily. Free online
            tool for validating metadata of data packages and tabular data
            packages
          </Trans>
          .
        </Text>
        <ValidatePackageForm />
      </Stack>

      <ValidatePackageDialog />
    </Box>
  )
}

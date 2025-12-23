import { Trans } from "@lingui/react/macro"
import { useLingui } from "@lingui/react/macro"
import { Box, Group, Menu, Tooltip, UnstyledButton } from "@mantine/core"
import { useState } from "react"
import { De, Es, Fr, Gb, It, Pt, Ru, Ua } from "react-flags-select"
import { LanguageIdDefault, Languages } from "#constants/language.ts"
import type { LanguageId } from "#constants/language.ts"
import { activateLocal } from "#helpers/locale.ts"
import * as icons from "#icons.ts"
import * as settings from "#settings.ts"
import classes from "./Language.module.css"

const LANGUAGE_FLAGS = {
  de: De,
  en: Gb,
  es: Es,
  fr: Fr,
  it: It,
  pt: Pt,
  ru: Ru,
  uk: Ua,
} as const

export function Language(props: { fullWidth?: boolean }) {
  const { i18n } = useLingui()
  const [opened, setOpened] = useState(false)

  const language =
    Object.values(Languages).find(
      language => language.languageId === i18n.locale,
    ) ?? Languages[LanguageIdDefault]

  const items = Object.values(Languages).map(item => {
    const Flag = LANGUAGE_FLAGS[item.languageId as LanguageId]
    return (
      <Menu.Item
        fz="sm"
        key={item.languageId}
        onClick={() => {
          onLanguageChange(item.languageId)
        }}
      >
        <Group gap={8} wrap="nowrap">
          <Flag fontSize={settings.ICON_SIZE} />
          {item.title}
        </Group>
      </Menu.Item>
    )
  })

  const onLanguageChange = (languageId: LanguageId) => {
    activateLocal(languageId)
  }

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      withinPortal
      shadow="sm"
    >
      <Menu.Target>
        <Tooltip
          openDelay={300}
          label={<Trans>Change Language</Trans>}
          position="left"
        >
          <UnstyledButton
            w={props.fullWidth ? "100%" : undefined}
            className={classes.control}
            data-expanded={opened || undefined}
          >
            <Group gap={4} wrap="nowrap" w="100%" justify="center">
              <icons.Language strokeWidth={settings.ICON_STROKE_WIDTH} />
              <Box className={classes.label} visibleFrom="xl">
                {language.title}
              </Box>
            </Group>
          </UnstyledButton>
        </Tooltip>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  )
}

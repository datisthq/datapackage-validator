import type { validatePackageMetadata } from "@frictionless-ts/metadata"
import { createStore } from "#helpers/store.ts"

export interface State {
  isDialogOpen?: boolean
  isPending?: boolean
  report?: Awaited<ReturnType<typeof validatePackageMetadata>>
  error?: Error
}

export const store = createStore<State>("validatePackage")

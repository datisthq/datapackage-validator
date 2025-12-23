import { validatePackageMetadata } from "@frictionless-ts/metadata"
import { useMutation } from "@tanstack/react-query"
import { store } from "./store.ts"

export function useValidatePackage() {
  return useMutation({
    mutationKey: ["validatePackage"],
    mutationFn: async (
      input: Parameters<typeof validatePackageMetadata>[0],
    ) => {
      return await validatePackageMetadata(input)
    },
    onMutate: () => {
      store.setState({ isDialogOpen: true })
      store.setState({ isPending: true })
    },
    onSettled: () => {
      store.setState({ isPending: false })
    },
    onSuccess: report => {
      store.setState({ report })
    },
    onError: error => {
      console.log(error)
      store.setState({ error })
    },
  })
}

import { IObject } from '../../types/globals'

export const getClassNamesByString = <TOutput extends IObject>(
  inputObject: IObject
): TOutput => {
  const outputObject: IObject = {}

  Object.entries(inputObject).forEach(([key, value]) => {
    outputObject[key] = `.${value}`
  })

  return outputObject as TOutput
}

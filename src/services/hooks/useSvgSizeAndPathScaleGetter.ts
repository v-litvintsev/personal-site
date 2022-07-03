import { useEffect, useState } from 'react'
import { VIEWPORT_WIDTH_VALUES } from '../../constants/viewport-width-values'

interface ISvgSizeData {
  size: {
    width: number
    height: number
  }
  scaleRatio: number
}

export interface ISvgSizeInput {
  svgSize: {
    width: number
    height: number
  }
  sizesInRelativeUnits: {
    mobile: number
    tablet: number
    desktop: number
  }
}

export const useSvgSizeAndPathScaleGetter = ({
  svgSize,
  sizesInRelativeUnits,
}: ISvgSizeInput): ISvgSizeData => {
  const [svgSizeData, setSvgSizeData] = useState<ISvgSizeData>({
    size: { width: 0, height: 0 },
    scaleRatio: 1,
  })

  useEffect(() => {
    let sizeInRelativeUnits: number

    if (window.innerWidth > VIEWPORT_WIDTH_VALUES.DESKTOP) {
      sizeInRelativeUnits = sizesInRelativeUnits.desktop
    } else if (window.innerWidth > VIEWPORT_WIDTH_VALUES.TABLET) {
      sizeInRelativeUnits = sizesInRelativeUnits.tablet
    } else {
      sizeInRelativeUnits = sizesInRelativeUnits.mobile
    }

    const sizeWidth = window.innerWidth * sizeInRelativeUnits
    const scaleRatio = sizeWidth / svgSize.width

    setSvgSizeData({
      size: {
        width: sizeWidth,
        height: svgSize.height * scaleRatio,
      },
      scaleRatio,
    })
  }, [sizesInRelativeUnits, svgSize])

  return svgSizeData
}

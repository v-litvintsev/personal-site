import { FC } from 'react'
import {
  ISvgSizeInput,
  useSvgSizeAndPathScaleGetter,
} from '../../../services/hooks/useSvgSizeAndPathScaleGetter'
import svgStyles from '../Svg.module.scss'

const SVG_DATA: ISvgSizeInput = {
  svgSize: { width: 22, height: 26 },
  sizesInRelativeUnits: {
    mobile: 0.05,
    tablet: 0.0264,
    desktop: 0.01528,
  },
}

export const NotificationBell: FC = () => {
  const { size, scaleRatio } = useSvgSizeAndPathScaleGetter(SVG_DATA)

  return (
    <svg
      width={size.width}
      height={size.height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={svgStyles.path}
        d="M12.5721 1.625V2.53297C16.1325 3.11746 18.8581 6.30703 18.8581 10.1562V11.8523C18.8581 14.1578 19.6193 16.3973 21.0091 18.2L21.7408 19.1445C22.0257 19.5102 22.0797 20.0129 21.8832 20.4344C21.6868 20.8559 21.2743 21.125 20.8225 21.125H1.17864C0.725357 21.125 0.312591 20.8559 0.11635 20.4344C-0.0799414 20.0129 -0.0247422 19.5102 0.258325 19.1445L0.990549 18.2C2.38379 16.3973 3.14302 14.1578 3.14302 11.8523V10.1562C3.14302 6.30703 5.8686 3.11746 9.42905 2.53297V1.625C9.42905 0.727695 10.1313 0 11.0006 0C11.8698 0 12.5721 0.727695 12.5721 1.625ZM10.6077 4.875C7.78879 4.875 5.50028 7.24141 5.50028 10.1562V11.8523C5.50028 14.2848 4.81864 16.6562 3.55112 18.6875H18.4505C17.1834 16.6562 16.5008 14.2848 16.5008 11.8523V10.1562C16.5008 7.24141 14.2123 4.875 11.3934 4.875H10.6077ZM14.1436 22.75C14.1436 23.5676 13.8145 24.441 13.2252 25.0504C12.6359 25.6598 11.7912 26 11.0006 26C10.1657 26 9.3652 25.6598 8.77589 25.0504C8.18657 24.441 7.85754 23.5676 7.85754 22.75H14.1436Z"
        fill="var(--primary)"
        transform={`scale(${scaleRatio})`}
      />
    </svg>
  )
}

import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import {
  ISvgSizeInput,
  useSvgSizeAndPathScaleGetter,
} from '../../../../services/hooks/useSvgSizeAndPathScaleGetter'
import appState from '../../../../services/store/appState'
import svgStyles from '../../Svg.module.scss'
import animationStyles from './StackBgTextAnimations.module.scss'

const SVG_DATA: ISvgSizeInput = {
  svgSize: { width: 1579, height: 91 },
  sizesInRelativeUnits: {
    mobile: 2.415625,
    tablet: 1.88489209,
    desktop: 1.09097222,
  },
}

export const BackendBgTextSvg: FC = observer(() => {
  const { size, scaleRatio } = useSvgSizeAndPathScaleGetter(SVG_DATA)

  const isMobile = appState.viewportWidth === 'mobile'

  return (
    <div className={animationStyles.backendWrapper}>
      <div className={animationStyles.backend}>
        <svg
          width={size.width}
          height={size.height}
          viewBox={`0 0 ${size.width} ${size.height}`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            transform={`scale(${scaleRatio})`}
            className={svgStyles.path}
            d="M74.2105 45.1594C77.8705 46.6234 80.6765 48.8194 82.6285 51.7474C84.6618 54.5941 85.6785 58.0914 85.6785 62.2394C85.6785 71.1047 82.1812 77.8147 75.1865 82.3694C68.1918 86.9241 58.8792 89.2014 47.2485 89.2014H2.47449L19.5545 3.8014H60.7905C69.9812 3.8014 77.0572 5.5094 82.0185 8.9254C86.9798 12.2601 89.4605 17.0587 89.4605 23.3214C89.4605 28.5267 88.0778 33.0001 85.3125 36.7414C82.6285 40.4014 78.9278 43.2074 74.2105 45.1594ZM36.1465 18.6854L32.1205 38.8154H52.2505C57.4558 38.8154 61.4818 37.7987 64.3285 35.7654C67.2565 33.6507 68.7205 30.6414 68.7205 26.7374C68.7205 21.3694 64.5318 18.6854 56.1545 18.6854H36.1465ZM48.4685 74.3174C53.9992 74.3174 58.3098 73.2601 61.4005 71.1454C64.4912 69.0307 66.0365 65.9807 66.0365 61.9954C66.0365 56.1394 61.7665 53.2114 53.2265 53.2114H29.3145L25.1665 74.3174H48.4685ZM156.518 70.9014H116.746L105.644 89.2014H84.5376L139.804 3.8014H159.324L180.308 89.2014H160.544L156.518 70.9014ZM153.224 55.8954L146.026 22.9554L125.896 55.8954H153.224ZM232.872 90.6654C224.332 90.6654 216.85 89.1201 210.424 86.0294C204.08 82.9387 199.2 78.5874 195.784 72.9754C192.368 67.3634 190.66 60.8974 190.66 53.5774C190.66 43.8987 192.856 35.1961 197.248 27.4694C201.722 19.6614 207.984 13.5207 216.036 9.0474C224.088 4.57407 233.32 2.3374 243.73 2.3374C251.376 2.3374 258.126 3.63874 263.982 6.2414C269.838 8.84407 274.271 12.5854 277.28 17.4654L263.006 29.1774C258.452 22.5081 251.579 19.1734 242.388 19.1734C236.126 19.1734 230.595 20.6374 225.796 23.5654C220.998 26.4934 217.256 30.4787 214.572 35.5214C211.97 40.5641 210.668 46.1761 210.668 52.3574C210.668 58.9454 212.742 64.1914 216.89 68.0954C221.12 71.9181 227.016 73.8294 234.58 73.8294C243.608 73.8294 251.172 70.5354 257.272 63.9474L268.984 75.9034C260.526 85.7447 248.488 90.6654 232.872 90.6654ZM329.667 43.3294L359.313 89.2014H337.109L315.149 55.7734L301.363 67.9734L297.093 89.2014H277.451L294.531 3.8014H314.173L306.365 42.9634L350.651 3.8014H374.563L329.667 43.3294ZM474.046 45.1594C477.706 46.6234 480.512 48.8194 482.464 51.7474C484.498 54.5941 485.514 58.0914 485.514 62.2394C485.514 71.1047 482.017 77.8147 475.022 82.3694C468.028 86.9241 458.715 89.2014 447.084 89.2014H402.31L419.39 3.8014H460.626C469.817 3.8014 476.893 5.5094 481.854 8.9254C486.816 12.2601 489.296 17.0587 489.296 23.3214C489.296 28.5267 487.914 33.0001 485.148 36.7414C482.464 40.4014 478.764 43.2074 474.046 45.1594ZM435.982 18.6854L431.956 38.8154H452.086C457.292 38.8154 461.318 37.7987 464.164 35.7654C467.092 33.6507 468.556 30.6414 468.556 26.7374C468.556 21.3694 464.368 18.6854 455.99 18.6854H435.982ZM448.304 74.3174C453.835 74.3174 458.146 73.2601 461.236 71.1454C464.327 69.0307 465.872 65.9807 465.872 61.9954C465.872 56.1394 461.602 53.2114 453.062 53.2114H429.15L425.002 74.3174H448.304ZM556.354 70.9014H516.582L505.48 89.2014H484.374L539.64 3.8014H559.16L580.144 89.2014H560.38L556.354 70.9014ZM553.06 55.8954L545.862 22.9554L525.732 55.8954H553.06ZM632.708 90.6654C624.168 90.6654 616.686 89.1201 610.26 86.0294C603.916 82.9387 599.036 78.5874 595.62 72.9754C592.204 67.3634 590.496 60.8974 590.496 53.5774C590.496 43.8987 592.692 35.1961 597.084 27.4694C601.558 19.6614 607.82 13.5207 615.872 9.0474C623.924 4.57407 633.156 2.3374 643.566 2.3374C651.212 2.3374 657.962 3.63874 663.818 6.2414C669.674 8.84407 674.107 12.5854 677.116 17.4654L662.842 29.1774C658.288 22.5081 651.415 19.1734 642.224 19.1734C635.962 19.1734 630.431 20.6374 625.632 23.5654C620.834 26.4934 617.092 30.4787 614.408 35.5214C611.806 40.5641 610.504 46.1761 610.504 52.3574C610.504 58.9454 612.578 64.1914 616.726 68.0954C620.956 71.9181 626.852 73.8294 634.416 73.8294C643.444 73.8294 651.008 70.5354 657.108 63.9474L668.82 75.9034C660.362 85.7447 648.324 90.6654 632.708 90.6654ZM729.503 43.3294L759.149 89.2014H736.945L714.985 55.7734L701.199 67.9734L696.929 89.2014H677.287L694.367 3.8014H714.009L706.201 42.9634L750.487 3.8014H774.399L729.503 43.3294ZM873.882 45.1594C877.542 46.6234 880.348 48.8194 882.3 51.7474C884.334 54.5941 885.35 58.0914 885.35 62.2394C885.35 71.1047 881.853 77.8147 874.858 82.3694C867.864 86.9241 858.551 89.2014 846.92 89.2014H802.146L819.226 3.8014H860.462C869.653 3.8014 876.729 5.5094 881.69 8.9254C886.652 12.2601 889.132 17.0587 889.132 23.3214C889.132 28.5267 887.75 33.0001 884.984 36.7414C882.3 40.4014 878.6 43.2074 873.882 45.1594ZM835.818 18.6854L831.792 38.8154H851.922C857.128 38.8154 861.154 37.7987 864 35.7654C866.928 33.6507 868.392 30.6414 868.392 26.7374C868.392 21.3694 864.204 18.6854 855.826 18.6854H835.818ZM848.14 74.3174C853.671 74.3174 857.982 73.2601 861.072 71.1454C864.163 69.0307 865.708 65.9807 865.708 61.9954C865.708 56.1394 861.438 53.2114 852.898 53.2114H828.986L824.838 74.3174H848.14ZM956.189 70.9014H916.417L905.315 89.2014H884.209L939.475 3.8014H958.995L979.979 89.2014H960.215L956.189 70.9014ZM952.895 55.8954L945.697 22.9554L925.567 55.8954H952.895ZM1032.54 90.6654C1024 90.6654 1016.52 89.1201 1010.1 86.0294C1003.75 82.9387 998.872 78.5874 995.456 72.9754C992.04 67.3634 990.332 60.8974 990.332 53.5774C990.332 43.8987 992.528 35.1961 996.92 27.4694C1001.39 19.6614 1007.66 13.5207 1015.71 9.0474C1023.76 4.57407 1032.99 2.3374 1043.4 2.3374C1051.05 2.3374 1057.8 3.63874 1063.65 6.2414C1069.51 8.84407 1073.94 12.5854 1076.95 17.4654L1062.68 29.1774C1058.12 22.5081 1051.25 19.1734 1042.06 19.1734C1035.8 19.1734 1030.27 20.6374 1025.47 23.5654C1020.67 26.4934 1016.93 30.4787 1014.24 35.5214C1011.64 40.5641 1010.34 46.1761 1010.34 52.3574C1010.34 58.9454 1012.41 64.1914 1016.56 68.0954C1020.79 71.9181 1026.69 73.8294 1034.25 73.8294C1043.28 73.8294 1050.84 70.5354 1056.94 63.9474L1068.66 75.9034C1060.2 85.7447 1048.16 90.6654 1032.54 90.6654ZM1129.34 43.3294L1158.98 89.2014H1136.78L1114.82 55.7734L1101.03 67.9734L1096.76 89.2014H1077.12L1094.2 3.8014H1113.84L1106.04 42.9634L1150.32 3.8014H1174.23L1129.34 43.3294ZM1273.72 45.1594C1277.38 46.6234 1280.18 48.8194 1282.14 51.7474C1284.17 54.5941 1285.19 58.0914 1285.19 62.2394C1285.19 71.1047 1281.69 77.8147 1274.69 82.3694C1267.7 86.9241 1258.39 89.2014 1246.76 89.2014H1201.98L1219.06 3.8014H1260.3C1269.49 3.8014 1276.57 5.5094 1281.53 8.9254C1286.49 12.2601 1288.97 17.0587 1288.97 23.3214C1288.97 28.5267 1287.59 33.0001 1284.82 36.7414C1282.14 40.4014 1278.44 43.2074 1273.72 45.1594ZM1235.65 18.6854L1231.63 38.8154H1251.76C1256.96 38.8154 1260.99 37.7987 1263.84 35.7654C1266.76 33.6507 1268.23 30.6414 1268.23 26.7374C1268.23 21.3694 1264.04 18.6854 1255.66 18.6854H1235.65ZM1247.98 74.3174C1253.51 74.3174 1257.82 73.2601 1260.91 71.1454C1264 69.0307 1265.54 65.9807 1265.54 61.9954C1265.54 56.1394 1261.27 53.2114 1252.73 53.2114H1228.82L1224.67 74.3174H1247.98ZM1356.03 70.9014H1316.25L1305.15 89.2014H1284.05L1339.31 3.8014H1358.83L1379.82 89.2014H1360.05L1356.03 70.9014ZM1352.73 55.8954L1345.53 22.9554L1325.4 55.8954H1352.73ZM1432.38 90.6654C1423.84 90.6654 1416.36 89.1201 1409.93 86.0294C1403.59 82.9387 1398.71 78.5874 1395.29 72.9754C1391.88 67.3634 1390.17 60.8974 1390.17 53.5774C1390.17 43.8987 1392.36 35.1961 1396.76 27.4694C1401.23 19.6614 1407.49 13.5207 1415.54 9.0474C1423.6 4.57407 1432.83 2.3374 1443.24 2.3374C1450.88 2.3374 1457.63 3.63874 1463.49 6.2414C1469.35 8.84407 1473.78 12.5854 1476.79 17.4654L1462.51 29.1774C1457.96 22.5081 1451.09 19.1734 1441.9 19.1734C1435.63 19.1734 1430.1 20.6374 1425.3 23.5654C1420.51 26.4934 1416.76 30.4787 1414.08 35.5214C1411.48 40.5641 1410.18 46.1761 1410.18 52.3574C1410.18 58.9454 1412.25 64.1914 1416.4 68.0954C1420.63 71.9181 1426.52 73.8294 1434.09 73.8294C1443.12 73.8294 1450.68 70.5354 1456.78 63.9474L1468.49 75.9034C1460.03 85.7447 1448 90.6654 1432.38 90.6654ZM1529.17 43.3294L1558.82 89.2014H1536.62L1514.66 55.7734L1500.87 67.9734L1496.6 89.2014H1476.96L1494.04 3.8014H1513.68L1505.87 42.9634L1550.16 3.8014H1574.07L1529.17 43.3294Z"
            stroke="var(--bg-text)"
            strokeWidth={isMobile ? 2 : 3}
          />
        </svg>
      </div>
    </div>
  )
})

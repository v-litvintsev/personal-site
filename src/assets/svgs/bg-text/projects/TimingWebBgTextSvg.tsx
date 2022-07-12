import { FC } from 'react'
import {
  ISvgSizeInput,
  useSvgSizeAndPathScaleGetter,
} from '../../../../services/hooks/useSvgSizeAndPathScaleGetter'
import styles from './../BgText.module.scss'
import animationStyles from './ProjectsBgTextAnimations.module.scss'
import svgStyles from '../../Svg.module.scss'
import classNames from 'classnames'

const SVG_DATA: ISvgSizeInput = {
  svgSize: { width: 6736, height: 133 },
  sizesInRelativeUnits: { mobile: 7.01875, tablet: 8.07673861, desktop: 0 },
}

export const TimingWebBgTextSvg: FC = () => {
  const { size, scaleRatio } = useSvgSizeAndPathScaleGetter(SVG_DATA)

  return (
    <div className={classNames(styles.wrapper, animationStyles.timingweb)}>
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
          d="M42.7428 27.6964H2.42188L7.28199 3.99478H117.085L112.224 27.6964H72.0835L51.563 129.685H22.4023L42.7428 27.6964ZM132.774 3.99478H162.115L136.915 129.685H107.574L132.774 3.99478ZM333.682 3.99478L308.661 129.685H281.3L296.061 54.9893L248 116.398H235.039L209.119 54.271L193.998 129.685H166.638L191.838 3.99478H215.599L247.1 82.2821L308.661 3.99478H333.682ZM363.756 3.99478H393.097L367.897 129.685H338.556L363.756 3.99478ZM538.383 3.99478L513.182 129.685H489.242L442.261 51.039L426.42 129.685H397.62L422.82 3.99478H446.941L493.922 82.8207L509.582 3.99478H538.383ZM641.277 64.8649H667.917L657.477 116.578C651.117 121.486 643.737 125.256 635.336 127.89C626.936 130.523 618.236 131.84 609.236 131.84C596.636 131.84 585.655 129.566 576.295 125.017C566.935 120.468 559.675 114.064 554.515 105.804C549.474 97.5445 546.954 88.0279 546.954 77.2544C546.954 63.0095 550.254 50.1412 556.855 38.6495C563.455 27.1578 572.755 18.1799 584.755 11.7158C596.756 5.13199 610.556 1.84009 626.156 1.84009C638.156 1.84009 648.537 3.69552 657.297 7.40638C666.177 11.1172 673.317 16.5638 678.717 23.7462L657.837 40.6246C653.637 35.7167 648.897 32.1854 643.617 30.0307C638.336 27.7563 632.096 26.6191 624.896 26.6191C615.296 26.6191 606.836 28.7738 599.516 33.0832C592.195 37.2729 586.495 43.0786 582.415 50.5003C578.455 57.922 576.475 66.2416 576.475 75.4589C576.475 85.155 579.595 92.876 585.835 98.6219C592.195 104.248 601.256 107.061 613.016 107.061C620.456 107.061 627.416 105.565 633.896 102.572L641.277 64.8649ZM897.69 3.99478L831.088 129.685H799.948L788.967 45.1136L743.426 129.685H712.105L696.085 3.99478H724.886L736.046 92.3373L783.387 3.99478H810.388L821.188 93.0556L868.709 3.99478H897.69ZM938.089 27.3373L932.689 54.6301H991.191L986.691 77.2544H928.009L922.249 106.343H991.011L986.151 129.685H888.588L913.789 3.99478H1009.01L1004.15 27.3373H938.089ZM1115.2 64.8649C1120.6 67.0196 1124.74 70.2517 1127.62 74.5611C1130.62 78.7508 1132.12 83.8981 1132.12 90.0031C1132.12 103.051 1126.96 112.927 1116.64 119.63C1106.32 126.334 1092.57 129.685 1075.41 129.685H1009.35L1034.55 3.99478H1095.39C1108.96 3.99478 1119.4 6.50859 1126.72 11.5362C1134.04 16.4441 1137.7 23.5068 1137.7 32.7241C1137.7 40.3852 1135.66 46.969 1131.58 52.4754C1127.62 57.8622 1122.16 61.992 1115.2 64.8649ZM1059.03 25.9009L1053.09 55.5279H1082.79C1090.47 55.5279 1096.41 54.0316 1100.62 51.039C1104.94 47.9266 1107.1 43.4975 1107.1 37.7517C1107.1 29.8511 1100.91 25.9009 1088.55 25.9009H1059.03ZM1077.21 107.779C1085.37 107.779 1091.73 106.223 1096.29 103.111C1100.85 99.9985 1103.14 95.5095 1103.14 89.644C1103.14 81.0252 1096.83 76.7158 1084.23 76.7158H1048.95L1042.83 107.779H1077.21ZM1159.03 131.122C1154.23 131.122 1150.27 129.626 1147.15 126.633C1144.03 123.521 1142.47 119.63 1142.47 114.962C1142.47 109.455 1144.27 104.966 1147.87 101.495C1151.47 98.0233 1155.91 96.2876 1161.19 96.2876C1165.99 96.2876 1169.89 97.7839 1172.89 100.777C1176.01 103.769 1177.57 107.66 1177.57 112.448C1177.57 117.835 1175.71 122.324 1171.99 125.915C1168.39 129.386 1164.07 131.122 1159.03 131.122ZM1257.88 131.84C1245.28 131.84 1234.24 129.566 1224.76 125.017C1215.4 120.468 1208.2 114.064 1203.16 105.804C1198.12 97.5445 1195.6 88.0279 1195.6 77.2544C1195.6 63.0095 1198.84 50.201 1205.32 38.829C1211.92 27.3373 1221.16 18.2996 1233.04 11.7158C1244.92 5.13199 1258.54 1.84009 1273.9 1.84009C1285.18 1.84009 1295.14 3.75537 1303.78 7.58595C1312.43 11.4165 1318.97 16.923 1323.41 24.1053L1302.34 41.3428C1295.62 31.527 1285.48 26.6191 1271.92 26.6191C1262.68 26.6191 1254.52 28.7738 1247.44 33.0832C1240.36 37.3926 1234.84 43.2581 1230.88 50.6799C1227.04 58.1016 1225.12 66.3613 1225.12 75.4589C1225.12 85.155 1228.18 92.876 1234.3 98.6219C1240.54 104.248 1249.24 107.061 1260.4 107.061C1273.72 107.061 1284.88 102.213 1293.88 92.5169L1311.17 110.114C1298.68 124.598 1280.92 131.84 1257.88 131.84ZM1386.36 131.84C1373.76 131.84 1362.84 129.566 1353.6 125.017C1344.36 120.468 1337.28 114.064 1332.36 105.804C1327.44 97.5445 1324.98 88.0279 1324.98 77.2544C1324.98 63.0095 1328.22 50.201 1334.7 38.829C1341.3 27.3373 1350.48 18.2996 1362.24 11.7158C1374.12 5.13199 1387.68 1.84009 1402.92 1.84009C1415.52 1.84009 1426.44 4.11449 1435.68 8.66329C1444.92 13.2121 1452 19.6163 1456.92 27.876C1461.84 36.1357 1464.3 45.6522 1464.3 56.4257C1464.3 70.6707 1461 83.539 1454.4 95.0307C1447.92 106.403 1438.74 115.381 1426.86 121.964C1415.1 128.548 1401.6 131.84 1386.36 131.84ZM1388.88 107.061C1398.12 107.061 1406.22 104.847 1413.18 100.417C1420.14 95.9883 1425.48 90.0629 1429.2 82.6412C1432.92 75.2195 1434.78 67.0196 1434.78 58.0417C1434.78 48.4653 1431.78 40.864 1425.78 35.2379C1419.78 29.492 1411.32 26.6191 1400.4 26.6191C1391.16 26.6191 1383.06 28.8336 1376.1 33.2627C1369.14 37.6918 1363.8 43.6173 1360.08 51.039C1356.36 58.4607 1354.5 66.6605 1354.5 75.6384C1354.5 85.2149 1357.5 92.876 1363.5 98.6219C1369.5 104.248 1377.96 107.061 1388.88 107.061ZM1639.94 3.99478L1614.92 129.685H1587.56L1602.32 54.9893L1554.26 116.398H1541.3L1515.38 54.271L1500.26 129.685H1472.9L1498.1 3.99478H1521.86L1553.36 82.2821L1614.92 3.99478H1639.94ZM1742.24 27.6964H1701.91L1706.78 3.99478H1816.58L1811.72 27.6964H1771.58L1751.06 129.685H1721.9L1742.24 27.6964ZM1832.27 3.99478H1861.61L1836.41 129.685H1807.07L1832.27 3.99478ZM2033.17 3.99478L2008.15 129.685H1980.79L1995.55 54.9893L1947.49 116.398H1934.53L1908.61 54.271L1893.49 129.685H1866.13L1891.33 3.99478H1915.09L1946.59 82.2821L2008.15 3.99478H2033.17ZM2063.25 3.99478H2092.59L2067.39 129.685H2038.05L2063.25 3.99478ZM2237.88 3.99478L2212.68 129.685H2188.73L2141.75 51.039L2125.91 129.685H2097.11L2122.31 3.99478H2146.43L2193.41 82.8207L2209.08 3.99478H2237.88ZM2340.77 64.8649H2367.41L2356.97 116.578C2350.61 121.486 2343.23 125.256 2334.83 127.89C2326.43 130.523 2317.73 131.84 2308.73 131.84C2296.13 131.84 2285.15 129.566 2275.79 125.017C2266.43 120.468 2259.17 114.064 2254.01 105.804C2248.97 97.5445 2246.45 88.0279 2246.45 77.2544C2246.45 63.0095 2249.75 50.1412 2256.35 38.6495C2262.95 27.1578 2272.25 18.1799 2284.25 11.7158C2296.25 5.13199 2310.05 1.84009 2325.65 1.84009C2337.65 1.84009 2348.03 3.69552 2356.79 7.40638C2365.67 11.1172 2372.81 16.5638 2378.21 23.7462L2357.33 40.6246C2353.13 35.7167 2348.39 32.1854 2343.11 30.0307C2337.83 27.7563 2331.59 26.6191 2324.39 26.6191C2314.79 26.6191 2306.33 28.7738 2299.01 33.0832C2291.69 37.2729 2285.99 43.0786 2281.91 50.5003C2277.95 57.922 2275.97 66.2416 2275.97 75.4589C2275.97 85.155 2279.09 92.876 2285.33 98.6219C2291.69 104.248 2300.75 107.061 2312.51 107.061C2319.95 107.061 2326.91 105.565 2333.39 102.572L2340.77 64.8649ZM2597.18 3.99478L2530.58 129.685H2499.44L2488.46 45.1136L2442.92 129.685H2411.6L2395.58 3.99478H2424.38L2435.54 92.3373L2482.88 3.99478H2509.88L2520.68 93.0556L2568.2 3.99478H2597.18ZM2637.58 27.3373L2632.18 54.6301H2690.68L2686.18 77.2544H2627.5L2621.74 106.343H2690.5L2685.64 129.685H2588.08L2613.28 3.99478H2708.5L2703.64 27.3373H2637.58ZM2814.69 64.8649C2820.09 67.0196 2824.23 70.2517 2827.11 74.5611C2830.11 78.7508 2831.61 83.8981 2831.61 90.0031C2831.61 103.051 2826.45 112.927 2816.13 119.63C2805.81 126.334 2792.07 129.685 2774.91 129.685H2708.85L2734.05 3.99478H2794.89C2808.45 3.99478 2818.89 6.50859 2826.21 11.5362C2833.53 16.4441 2837.19 23.5068 2837.19 32.7241C2837.19 40.3852 2835.15 46.969 2831.07 52.4754C2827.11 57.8622 2821.65 61.992 2814.69 64.8649ZM2758.53 25.9009L2752.59 55.5279H2782.29C2789.97 55.5279 2795.91 54.0316 2800.11 51.039C2804.43 47.9266 2806.59 43.4975 2806.59 37.7517C2806.59 29.8511 2800.41 25.9009 2788.05 25.9009H2758.53ZM2776.71 107.779C2784.87 107.779 2791.23 106.223 2795.79 103.111C2800.35 99.9985 2802.63 95.5095 2802.63 89.644C2802.63 81.0252 2796.33 76.7158 2783.73 76.7158H2748.45L2742.33 107.779H2776.71ZM2858.52 131.122C2853.72 131.122 2849.76 129.626 2846.64 126.633C2843.52 123.521 2841.96 119.63 2841.96 114.962C2841.96 109.455 2843.76 104.966 2847.36 101.495C2850.96 98.0233 2855.4 96.2876 2860.68 96.2876C2865.48 96.2876 2869.38 97.7839 2872.38 100.777C2875.5 103.769 2877.06 107.66 2877.06 112.448C2877.06 117.835 2875.2 122.324 2871.48 125.915C2867.88 129.386 2863.56 131.122 2858.52 131.122ZM2957.38 131.84C2944.78 131.84 2933.74 129.566 2924.26 125.017C2914.9 120.468 2907.7 114.064 2902.66 105.804C2897.62 97.5445 2895.1 88.0279 2895.1 77.2544C2895.1 63.0095 2898.34 50.201 2904.82 38.829C2911.42 27.3373 2920.66 18.2996 2932.54 11.7158C2944.42 5.13199 2958.04 1.84009 2973.4 1.84009C2984.68 1.84009 2994.64 3.75537 3003.28 7.58595C3011.92 11.4165 3018.46 16.923 3022.9 24.1053L3001.84 41.3428C2995.12 31.527 2984.98 26.6191 2971.42 26.6191C2962.18 26.6191 2954.02 28.7738 2946.94 33.0832C2939.86 37.3926 2934.34 43.2581 2930.38 50.6799C2926.54 58.1016 2924.62 66.3613 2924.62 75.4589C2924.62 85.155 2927.68 92.876 2933.8 98.6219C2940.04 104.248 2948.74 107.061 2959.9 107.061C2973.22 107.061 2984.38 102.213 2993.38 92.5169L3010.66 110.114C2998.18 124.598 2980.42 131.84 2957.38 131.84ZM3085.85 131.84C3073.25 131.84 3062.33 129.566 3053.09 125.017C3043.85 120.468 3036.77 114.064 3031.85 105.804C3026.93 97.5445 3024.47 88.0279 3024.47 77.2544C3024.47 63.0095 3027.71 50.201 3034.19 38.829C3040.79 27.3373 3049.97 18.2996 3061.73 11.7158C3073.61 5.13199 3087.17 1.84009 3102.42 1.84009C3115.02 1.84009 3125.94 4.11449 3135.18 8.66329C3144.42 13.2121 3151.5 19.6163 3156.42 27.876C3161.34 36.1357 3163.8 45.6522 3163.8 56.4257C3163.8 70.6707 3160.5 83.539 3153.9 95.0307C3147.42 106.403 3138.24 115.381 3126.36 121.964C3114.6 128.548 3101.1 131.84 3085.85 131.84ZM3088.37 107.061C3097.62 107.061 3105.72 104.847 3112.68 100.417C3119.64 95.9883 3124.98 90.0629 3128.7 82.6412C3132.42 75.2195 3134.28 67.0196 3134.28 58.0417C3134.28 48.4653 3131.28 40.864 3125.28 35.2379C3119.28 29.492 3110.82 26.6191 3099.9 26.6191C3090.66 26.6191 3082.55 28.8336 3075.59 33.2627C3068.63 37.6918 3063.29 43.6173 3059.57 51.039C3055.85 58.4607 3053.99 66.6605 3053.99 75.6384C3053.99 85.2149 3056.99 92.876 3062.99 98.6219C3068.99 104.248 3077.45 107.061 3088.37 107.061ZM3339.44 3.99478L3314.42 129.685H3287.05L3301.82 54.9893L3253.75 116.398H3240.79L3214.87 54.271L3199.75 129.685H3172.39L3197.59 3.99478H3221.35L3252.85 82.2821L3314.42 3.99478H3339.44ZM3441.73 27.6964H3401.41L3406.27 3.99478H3516.07L3511.21 27.6964H3471.07L3450.55 129.685H3421.39L3441.73 27.6964ZM3531.76 3.99478H3561.1L3535.9 129.685H3506.56L3531.76 3.99478ZM3732.67 3.99478L3707.65 129.685H3680.29L3695.05 54.9893L3646.99 116.398H3634.03L3608.1 54.271L3592.98 129.685H3565.62L3590.82 3.99478H3614.59L3646.09 82.2821L3707.65 3.99478H3732.67ZM3762.74 3.99478H3792.08L3766.88 129.685H3737.54L3762.74 3.99478ZM3937.37 3.99478L3912.17 129.685H3888.23L3841.25 51.039L3825.41 129.685H3796.61L3821.81 3.99478H3845.93L3892.91 82.8207L3908.57 3.99478H3937.37ZM4040.26 64.8649H4066.9L4056.46 116.578C4050.1 121.486 4042.72 125.256 4034.32 127.89C4025.92 130.523 4017.22 131.84 4008.22 131.84C3995.62 131.84 3984.64 129.566 3975.28 125.017C3965.92 120.468 3958.66 114.064 3953.5 105.804C3948.46 97.5445 3945.94 88.0279 3945.94 77.2544C3945.94 63.0095 3949.24 50.1412 3955.84 38.6495C3962.44 27.1578 3971.74 18.1799 3983.74 11.7158C3995.74 5.13199 4009.54 1.84009 4025.14 1.84009C4037.14 1.84009 4047.52 3.69552 4056.28 7.40638C4065.16 11.1172 4072.3 16.5638 4077.7 23.7462L4056.82 40.6246C4052.62 35.7167 4047.88 32.1854 4042.6 30.0307C4037.32 27.7563 4031.08 26.6191 4023.88 26.6191C4014.28 26.6191 4005.82 28.7738 3998.5 33.0832C3991.18 37.2729 3985.48 43.0786 3981.4 50.5003C3977.44 57.922 3975.46 66.2416 3975.46 75.4589C3975.46 85.155 3978.58 92.876 3984.82 98.6219C3991.18 104.248 4000.24 107.061 4012 107.061C4019.44 107.061 4026.4 105.565 4032.88 102.572L4040.26 64.8649ZM4296.68 3.99478L4230.07 129.685H4198.93L4187.95 45.1136L4142.41 129.685H4111.09L4095.07 3.99478H4123.87L4135.03 92.3373L4182.37 3.99478H4209.37L4220.17 93.0556L4267.7 3.99478H4296.68ZM4337.08 27.3373L4331.68 54.6301H4390.18L4385.68 77.2544H4327L4321.24 106.343H4390L4385.14 129.685H4287.57L4312.78 3.99478H4408L4403.14 27.3373H4337.08ZM4514.18 64.8649C4519.58 67.0196 4523.72 70.2517 4526.6 74.5611C4529.6 78.7508 4531.1 83.8981 4531.1 90.0031C4531.1 103.051 4525.94 112.927 4515.62 119.63C4505.3 126.334 4491.56 129.685 4474.4 129.685H4408.34L4433.54 3.99478H4494.38C4507.94 3.99478 4518.38 6.50859 4525.7 11.5362C4533.02 16.4441 4536.68 23.5068 4536.68 32.7241C4536.68 40.3852 4534.64 46.969 4530.56 52.4754C4526.6 57.8622 4521.14 61.992 4514.18 64.8649ZM4458.02 25.9009L4452.08 55.5279H4481.78C4489.46 55.5279 4495.4 54.0316 4499.6 51.039C4503.92 47.9266 4506.08 43.4975 4506.08 37.7517C4506.08 29.8511 4499.9 25.9009 4487.54 25.9009H4458.02ZM4476.2 107.779C4484.36 107.779 4490.72 106.223 4495.28 103.111C4499.84 99.9985 4502.12 95.5095 4502.12 89.644C4502.12 81.0252 4495.82 76.7158 4483.22 76.7158H4447.94L4441.82 107.779H4476.2ZM4558.01 131.122C4553.21 131.122 4549.25 129.626 4546.13 126.633C4543.01 123.521 4541.45 119.63 4541.45 114.962C4541.45 109.455 4543.25 104.966 4546.85 101.495C4550.45 98.0233 4554.89 96.2876 4560.17 96.2876C4564.97 96.2876 4568.87 97.7839 4571.87 100.777C4574.99 103.769 4576.55 107.66 4576.55 112.448C4576.55 117.835 4574.69 122.324 4570.97 125.915C4567.37 129.386 4563.05 131.122 4558.01 131.122ZM4656.87 131.84C4644.27 131.84 4633.23 129.566 4623.75 125.017C4614.39 120.468 4607.19 114.064 4602.15 105.804C4597.11 97.5445 4594.59 88.0279 4594.59 77.2544C4594.59 63.0095 4597.83 50.201 4604.31 38.829C4610.91 27.3373 4620.15 18.2996 4632.03 11.7158C4643.91 5.13199 4657.53 1.84009 4672.89 1.84009C4684.17 1.84009 4694.13 3.75537 4702.77 7.58595C4711.41 11.4165 4717.95 16.923 4722.39 24.1053L4701.33 41.3428C4694.61 31.527 4684.47 26.6191 4670.91 26.6191C4661.67 26.6191 4653.51 28.7738 4646.43 33.0832C4639.35 37.3926 4633.83 43.2581 4629.87 50.6799C4626.03 58.1016 4624.11 66.3613 4624.11 75.4589C4624.11 85.155 4627.17 92.876 4633.29 98.6219C4639.53 104.248 4648.23 107.061 4659.39 107.061C4672.71 107.061 4683.87 102.213 4692.87 92.5169L4710.15 110.114C4697.67 124.598 4679.91 131.84 4656.87 131.84ZM4785.35 131.84C4772.75 131.84 4761.83 129.566 4752.59 125.017C4743.35 120.468 4736.27 114.064 4731.35 105.804C4726.43 97.5445 4723.97 88.0279 4723.97 77.2544C4723.97 63.0095 4727.21 50.201 4733.69 38.829C4740.29 27.3373 4749.47 18.2996 4761.23 11.7158C4773.11 5.13199 4786.67 1.84009 4801.91 1.84009C4814.51 1.84009 4825.43 4.11449 4834.67 8.66329C4843.91 13.2121 4850.99 19.6163 4855.91 27.876C4860.83 36.1357 4863.29 45.6522 4863.29 56.4257C4863.29 70.6707 4859.99 83.539 4853.39 95.0307C4846.91 106.403 4837.73 115.381 4825.85 121.964C4814.09 128.548 4800.59 131.84 4785.35 131.84ZM4787.87 107.061C4797.11 107.061 4805.21 104.847 4812.17 100.417C4819.13 95.9883 4824.47 90.0629 4828.19 82.6412C4831.91 75.2195 4833.77 67.0196 4833.77 58.0417C4833.77 48.4653 4830.77 40.864 4824.77 35.2379C4818.77 29.492 4810.31 26.6191 4799.39 26.6191C4790.15 26.6191 4782.05 28.8336 4775.09 33.2627C4768.13 37.6918 4762.79 43.6173 4759.07 51.039C4755.35 58.4607 4753.49 66.6605 4753.49 75.6384C4753.49 85.2149 4756.49 92.876 4762.49 98.6219C4768.49 104.248 4776.95 107.061 4787.87 107.061ZM5038.93 3.99478L5013.91 129.685H4986.55L5001.31 54.9893L4953.25 116.398H4940.29L4914.37 54.271L4899.25 129.685H4871.88L4897.09 3.99478H4920.85L4952.35 82.2821L5013.91 3.99478H5038.93ZM5141.22 27.6964H5100.9L5105.76 3.99478H5215.56L5210.7 27.6964H5170.56L5150.04 129.685H5120.88L5141.22 27.6964ZM5231.25 3.99478H5260.59L5235.39 129.685H5206.05L5231.25 3.99478ZM5432.16 3.99478L5407.14 129.685H5379.78L5394.54 54.9893L5346.48 116.398H5333.52L5307.6 54.271L5292.48 129.685H5265.12L5290.32 3.99478H5314.08L5345.58 82.2821L5407.14 3.99478H5432.16ZM5462.24 3.99478H5491.58L5466.38 129.685H5437.03L5462.24 3.99478ZM5636.86 3.99478L5611.66 129.685H5587.72L5540.74 51.039L5524.9 129.685H5496.1L5521.3 3.99478H5545.42L5592.4 82.8207L5608.06 3.99478H5636.86ZM5739.76 64.8649H5766.4L5755.96 116.578C5749.6 121.486 5742.22 125.256 5733.82 127.89C5725.42 130.523 5716.72 131.84 5707.72 131.84C5695.11 131.84 5684.13 129.566 5674.77 125.017C5665.41 120.468 5658.15 114.064 5652.99 105.804C5647.95 97.5445 5645.43 88.0279 5645.43 77.2544C5645.43 63.0095 5648.73 50.1412 5655.33 38.6495C5661.93 27.1578 5671.23 18.1799 5683.23 11.7158C5695.23 5.13199 5709.03 1.84009 5724.64 1.84009C5736.64 1.84009 5747.02 3.69552 5755.78 7.40638C5764.66 11.1172 5771.8 16.5638 5777.2 23.7462L5756.32 40.6246C5752.12 35.7167 5747.38 32.1854 5742.1 30.0307C5736.82 27.7563 5730.58 26.6191 5723.38 26.6191C5713.77 26.6191 5705.31 28.7738 5697.99 33.0832C5690.67 37.2729 5684.97 43.0786 5680.89 50.5003C5676.93 57.922 5674.95 66.2416 5674.95 75.4589C5674.95 85.155 5678.07 92.876 5684.31 98.6219C5690.67 104.248 5699.73 107.061 5711.49 107.061C5718.94 107.061 5725.9 105.565 5732.38 102.572L5739.76 64.8649ZM5996.17 3.99478L5929.57 129.685H5898.43L5887.45 45.1136L5841.91 129.685H5810.58L5794.56 3.99478H5823.36L5834.53 92.3373L5881.87 3.99478H5908.87L5919.67 93.0556L5967.19 3.99478H5996.17ZM6036.57 27.3373L6031.17 54.6301H6089.67L6085.17 77.2544H6026.49L6020.73 106.343H6089.49L6084.63 129.685H5987.07L6012.27 3.99478H6107.49L6102.63 27.3373H6036.57ZM6213.67 64.8649C6219.07 67.0196 6223.21 70.2517 6226.09 74.5611C6229.09 78.7508 6230.59 83.8981 6230.59 90.0031C6230.59 103.051 6225.43 112.927 6215.11 119.63C6204.79 126.334 6191.05 129.685 6173.89 129.685H6107.83L6133.03 3.99478H6193.87C6207.43 3.99478 6217.87 6.50859 6225.19 11.5362C6232.52 16.4441 6236.18 23.5068 6236.18 32.7241C6236.18 40.3852 6234.14 46.969 6230.05 52.4754C6226.09 57.8622 6220.63 61.992 6213.67 64.8649ZM6157.51 25.9009L6151.57 55.5279H6181.27C6188.95 55.5279 6194.89 54.0316 6199.09 51.039C6203.41 47.9266 6205.57 43.4975 6205.57 37.7517C6205.57 29.8511 6199.39 25.9009 6187.03 25.9009H6157.51ZM6175.69 107.779C6183.85 107.779 6190.21 106.223 6194.77 103.111C6199.33 99.9985 6201.61 95.5095 6201.61 89.644C6201.61 81.0252 6195.31 76.7158 6182.71 76.7158H6147.43L6141.31 107.779H6175.69ZM6257.51 131.122C6252.71 131.122 6248.75 129.626 6245.63 126.633C6242.51 123.521 6240.95 119.63 6240.95 114.962C6240.95 109.455 6242.75 104.966 6246.35 101.495C6249.95 98.0233 6254.39 96.2876 6259.67 96.2876C6264.47 96.2876 6268.37 97.7839 6271.37 100.777C6274.49 103.769 6276.05 107.66 6276.05 112.448C6276.05 117.835 6274.19 122.324 6270.47 125.915C6266.87 129.386 6262.55 131.122 6257.51 131.122ZM6356.36 131.84C6343.76 131.84 6332.72 129.566 6323.24 125.017C6313.88 120.468 6306.68 114.064 6301.64 105.804C6296.6 97.5445 6294.08 88.0279 6294.08 77.2544C6294.08 63.0095 6297.32 50.201 6303.8 38.829C6310.4 27.3373 6319.64 18.2996 6331.52 11.7158C6343.4 5.13199 6357.02 1.84009 6372.38 1.84009C6383.66 1.84009 6393.62 3.75537 6402.26 7.58595C6410.9 11.4165 6417.44 16.923 6421.88 24.1053L6400.82 41.3428C6394.1 31.527 6383.96 26.6191 6370.4 26.6191C6361.16 26.6191 6353 28.7738 6345.92 33.0832C6338.84 37.3926 6333.32 43.2581 6329.36 50.6799C6325.52 58.1016 6323.6 66.3613 6323.6 75.4589C6323.6 85.155 6326.66 92.876 6332.78 98.6219C6339.02 104.248 6347.72 107.061 6358.88 107.061C6372.2 107.061 6383.36 102.213 6392.36 92.5169L6409.64 110.114C6397.16 124.598 6379.4 131.84 6356.36 131.84ZM6484.84 131.84C6472.24 131.84 6461.32 129.566 6452.08 125.017C6442.84 120.468 6435.76 114.064 6430.84 105.804C6425.92 97.5445 6423.46 88.0279 6423.46 77.2544C6423.46 63.0095 6426.7 50.201 6433.18 38.829C6439.78 27.3373 6448.96 18.2996 6460.72 11.7158C6472.6 5.13199 6486.16 1.84009 6501.4 1.84009C6514 1.84009 6524.92 4.11449 6534.16 8.66329C6543.4 13.2121 6550.48 19.6163 6555.4 27.876C6560.32 36.1357 6562.78 45.6522 6562.78 56.4257C6562.78 70.6707 6559.48 83.539 6552.88 95.0307C6546.4 106.403 6537.22 115.381 6525.34 121.964C6513.58 128.548 6500.08 131.84 6484.84 131.84ZM6487.36 107.061C6496.6 107.061 6504.7 104.847 6511.66 100.417C6518.62 95.9883 6523.96 90.0629 6527.68 82.6412C6531.4 75.2195 6533.26 67.0196 6533.26 58.0417C6533.26 48.4653 6530.26 40.864 6524.26 35.2379C6518.26 29.492 6509.8 26.6191 6498.88 26.6191C6489.64 26.6191 6481.54 28.8336 6474.58 33.2627C6467.62 37.6918 6462.28 43.6173 6458.56 51.039C6454.84 58.4607 6452.98 66.6605 6452.98 75.6384C6452.98 85.2149 6455.98 92.876 6461.98 98.6219C6467.98 104.248 6476.44 107.061 6487.36 107.061ZM6738.42 3.99478L6713.4 129.685H6686.04L6700.8 54.9893L6652.74 116.398H6639.78L6613.86 54.271L6598.74 129.685H6571.38L6596.58 3.99478H6620.34L6651.84 82.2821L6713.4 3.99478H6738.42Z"
          stroke="var(--bg-text)"
          strokeWidth="3"
        />
      </svg>
    </div>
  )
}
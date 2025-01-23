'use client';
// @refresh reset
import { useEffect } from 'react';
import { motion, useAnimate } from 'motion/react';
import styles from './svgBg.module.scss';


const SvgBackground = () => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(scope.current,
            {
                rotate: 360,
                // x: [0, 100, 0],
                // y: [0, -200, 0],
                // scale: [1, 2, 1],
                skewX: [0, -10, 2, 10, 0],
                skewY: [0, 6, 1, 4, 0],
                opacity: 1,
            },
            {
                rotate: {
                    duration: 150,
                    ease: "easeInOut",
                    delay: 4,
                },
                // x: {
                //     repeat: Infinity,
                //     duration: 10,
                //     ease: "easeInOut",
                //     delay: 5,
                // },
                // y: {
                //     repeat: Infinity,
                //     duration: 8,
                //     ease: "easeInOut",
                //     delay: 5,
                // },
                // scale: {
                //     repeat: Infinity,
                //     duration: 18,
                //     ease: "easeInOut",
                //     delay: 3,
                // },
                skewX: {
                    repeat: Infinity,
                    duration: 22,
                    ease: "easeInOut",
                    delay: 5,
                },
                skewY: {
                    repeat: Infinity,
                    duration: 18,
                    ease: "easeInOut",
                    delay: 7,
                },
                opacity: {
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: 3,
                }
            });
    }, []);

    return (
        <svg
            className={`${styles.svgBg} fixed inset-0 w-screen h-screen`}
            viewBox="0 0 4066 2348"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
        >
            <motion.g
                className={styles.svgBg_lines}
                ref={scope}
                initial={{ rotate: 0, x: 0, y: 0, scale: 1, skewX: 0, opacity: 0 }}
            >
                <g id="BottomWall">
                    <path className="BottomWall Vector_1" d="M1577.81 1437L0.999945 2347.37" />
                    <path className="BottomWall Vector_2" d="M1609.21 1437L266.505 2347.37" />
                    <path className="BottomWall Vector_3" d="M1640.6 1437L486.866 2347.37" />
                    <path className="BottomWall Vector_4" d="M1671.99 1437L675.485 2347.37" />
                    <path className="BottomWall Vector_5" d="M1703.38 1437L841.03 2347.37" />
                    <path className="BottomWall Vector_6" d="M1734.77 1437L989.368 2347.37" />
                    <path className="BottomWall Vector_7" d="M1766.17 1437L1124.62 2347.37" />
                    <path className="BottomWall Vector_8" d="M1797.56 1437L1249.8 2347.37" />
                    <path className="BottomWall Vector_9" d="M1828.95 1437L1367.16 2347.37" />
                    <path className="BottomWall Vector_10" d="M1860.34 1437L1478.43 2347.37" />
                    <path className="BottomWall Vector_11" d="M1891.74 1437L1584.99 2347.37" />
                    <path className="BottomWall Vector_12" d="M1923.13 1437L1687.98 2347.37" />
                    <path className="BottomWall Vector_13" d="M1954.52 1437L1788.34 2347.37" />
                    <path className="BottomWall Vector_14" d="M1985.91 1437L1886.9 2347.37" />
                    <path className="BottomWall Vector_15" d="M2017.3 1437L1984.42 2347.37" />
                    <path className="BottomWall Vector_16" d="M2048.7 1437L2081.58 2347.37" />
                    <path className="BottomWall Vector_17" d="M2080.09 1437L2179.1 2347.37" />
                    <path className="BottomWall Vector_18" d="M2111.48 1437L2277.66 2347.37" />
                    <path className="BottomWall Vector_19" d="M2142.87 1437L2378.02 2347.37" />
                    <path className="BottomWall Vector_20" d="M2174.27 1437L2481.01 2347.37" />
                    <path className="BottomWall Vector_21" d="M2205.66 1437L2587.57 2347.37" />
                    <path className="BottomWall Vector_22" d="M2237.05 1437L2698.84 2347.37" />
                    <path className="BottomWall Vector_23" d="M2268.44 1437L2816.2 2347.37" />
                    <path className="BottomWall Vector_24" d="M2299.83 1437L2941.38 2347.37" />
                    <path className="BottomWall Vector_25" d="M2331.23 1437L3076.63 2347.37" />
                    <path className="BottomWall Vector_26" d="M2362.62 1437L3224.97 2347.37" />
                    <path className="BottomWall Vector_27" d="M2394.01 1437L3390.51 2347.37" />
                    <path className="BottomWall Vector_28" d="M2425.4 1437L3579.13 2347.37" />
                    <path className="BottomWall Vector_29" d="M2456.79 1437L3799.49 2347.37" />
                    <path className="BottomWall Vector_30" d="M2488.19 1437L4065 2347.37" />
                </g>
                <g id="TopWall">
                    <path className="TopWall Vector_31" d="M1577.81 911.374L0.999945 1.00006" />
                    <path className="TopWall Vector_32" d="M1609.21 911.374L266.505 1.00006" />
                    <path className="TopWall Vector_33" d="M1640.6 911.374L486.866 1.00004" />
                    <path className="TopWall Vector_34" d="M1671.99 911.374L675.485 1.0001" />
                    <path className="TopWall Vector_35" d="M1703.38 911.374L841.03 1.00011" />
                    <path className="TopWall Vector_36" d="M1734.77 911.374L989.368 1.0001" />
                    <path className="TopWall Vector_37" d="M1766.17 911.374L1124.62 1.0002" />
                    <path className="TopWall Vector_38" d="M1797.56 911.374L1249.8 1.00004" />
                    <path className="TopWall Vector_39" d="M1828.95 911.374L1367.16 1.00012" />
                    <path className="TopWall Vector_40" d="M1860.34 911.374L1478.43 1.00004" />
                    <path className="TopWall Vector_41" d="M1891.74 911.374L1584.99 1.00003" />
                    <path className="TopWall Vector_42" d="M1923.13 911.374L1687.98 1.00004" />
                    <path className="TopWall Vector_43" d="M1954.52 911.374L1788.34 1.00015" />
                    <path className="TopWall Vector_44" d="M1985.91 911.374L1886.9 1.00008" />
                    <path className="TopWall Vector_45" d="M2017.3 911.374L1984.42 1.00007" />
                    <path className="TopWall Vector_46" d="M2048.7 911.374L2081.58 1.00007" />
                    <path className="TopWall Vector_47" d="M2080.09 911.374L2179.1 1.00008" />
                    <path className="TopWall Vector_48" d="M2111.48 911.374L2277.66 1.00015" />
                    <path className="TopWall Vector_49" d="M2142.87 911.374L2378.02 1.00004" />
                    <path className="TopWall Vector_50" d="M2174.27 911.374L2481.01 1.00003" />
                    <path className="TopWall Vector_51" d="M2205.66 911.374L2587.57 1.00004" />
                    <path className="TopWall Vector_52" d="M2237.05 911.374L2698.84 1.00012" />
                    <path className="TopWall Vector_53" d="M2268.44 911.374L2816.2 1.00004" />
                    <path className="TopWall Vector_54" d="M2299.83 911.374L2941.38 1.0002" />
                    <path className="TopWall Vector_55" d="M2331.23 911.374L3076.63 1.0001" />
                    <path className="TopWall Vector_56" d="M2362.62 911.374L3224.97 1.00011" />
                    <path className="TopWall Vector_57" d="M2394.01 911.374L3390.51 1.0001" />
                    <path className="TopWall Vector_58" d="M2425.4 911.374L3579.13 1.00004" />
                    <path className="TopWall Vector_59" d="M2456.79 911.374L3799.49 1.00006" />
                    <path className="TopWall Vector_60" d="M2488.19 911.374L4065 1.00006" />
                </g>
                <g id="RightWall">
                    <path className="RightWall Vector_62" d="M2488 1418.64L4062.59 2192.55" />
                    <path className="RightWall Vector_63" d="M2488 1400.52L4062.45 2065.45" />
                    <path className="RightWall Vector_64" d="M2488 1382.4L4062.35 1956.68" />
                    <path className="RightWall Vector_65" d="M2488 1364.28L4062.27 1861.22" />
                    <path className="RightWall Vector_66" d="M2488 1346.15L4062.21 1775.69" />
                    <path className="RightWall Vector_67" d="M2488 1328.03L4062.15 1697.7" />
                    <path className="RightWall Vector_68" d="M2488 1309.91L4062.11 1625.53" />
                    <path className="RightWall Vector_69" d="M2488 1291.79L4062.02 1558.2" />
                    <path className="RightWall Vector_70" d="M2488 1273.67L4062.05 1493.72" />
                    <path className="RightWall Vector_71" d="M2488 1255.55L4062.03 1432.28" />
                    <path className="RightWall Vector_72" d="M2488 1237.43L4062.02 1372.91" />
                    <path className="RightWall Vector_73" d="M2488 1219.3L4062.01 1315.05" />
                    <path className="RightWall Vector_74" d="M2488 1201.18L4062 1258.23" />
                    <path className="RightWall Vector_75" d="M2488 1183.06L4062 1202.01" />
                    <path className="RightWall Vector_76" d="M2488 1164.94L4062 1145.99" />
                    <path className="RightWall Vector_77" d="M2488 1146.82L4062 1089.77" />
                    <path className="RightWall Vector_78" d="M2488 1128.7L4062.01 1032.95" />
                    <path className="RightWall Vector_79" d="M2488 1110.57L4062.02 975.09" />
                    <path className="RightWall Vector_80" d="M2488 1092.45L4062.03 915.716" />
                    <path className="RightWall Vector_81" d="M2488 1074.33L4062.05 854.279" />
                    <path className="RightWall Vector_82" d="M2488 1056.21L4062.02 789.799" />
                    <path className="RightWall Vector_83" d="M2488 1038.09L4062.11 722.469" />
                    <path className="RightWall Vector_84" d="M2488 1019.97L4062.15 650.296" />
                    <path className="RightWall Vector_85" d="M2488 1001.84L4062.21 572.311" />
                    <path className="RightWall Vector_86" d="M2488 983.723L4062.27 486.781" />
                    <path className="RightWall Vector_87" d="M2488 965.602L4062.35 391.322" />
                    <path className="RightWall Vector_88" d="M2488 947.48L4062.45 282.547" />
                    <path className="RightWall Vector_89" d="M2488 929.359L4062.59 155.453" />
                </g>
                <g id="LeftWall">
                    <path className="LeftWall Vector_92" d="M1577.75 1418.64L3.16778 2192.55" />
                    <path className="LeftWall Vector_93" d="M1577.75 1400.52L3.29844 2065.45" />
                    <path className="LeftWall Vector_94" d="M1577.75 1382.4L3.40169 1956.68" />
                    <path className="LeftWall Vector_95" d="M1577.75 1364.28L3.48319 1861.22" />
                    <path className="LeftWall Vector_96" d="M1577.75 1346.15L3.54772 1775.69" />
                    <path className="LeftWall Vector_97" d="M1577.75 1328.03L3.59978 1697.7" />
                    <path className="LeftWall Vector_98" d="M1577.75 1309.91L3.64082 1625.53" />
                    <path className="LeftWall Vector_99" d="M1577.75 1291.79L3.73071 1558.2" />
                    <path className="LeftWall Vector_100" d="M1577.75 1273.67L3.70024 1493.72" />
                    <path className="LeftWall Vector_101" d="M1577.75 1255.55L3.72071 1432.28" />
                    <path className="LeftWall Vector_102" d="M1577.75 1237.43L3.73637 1372.91" />
                    <path className="LeftWall Vector_103" d="M1577.75 1219.3L3.74772 1315.05" />
                    <path className="LeftWall Vector_104" d="M1577.75 1201.18L3.7549 1258.23" />
                    <path className="LeftWall Vector_105" d="M1577.75 1183.06L3.75806 1202.01" />
                    <path className="LeftWall Vector_106" d="M1577.75 1164.94L3.75806 1145.99" />
                    <path className="LeftWall Vector_107" d="M1577.75 1146.82L3.7549 1089.77" />
                    <path className="LeftWall Vector_108" d="M1577.75 1128.7L3.74772 1032.95" />
                    <path className="LeftWall Vector_109" d="M1577.75 1110.57L3.73637 975.09" />
                    <path className="LeftWall Vector_110" d="M1577.75 1092.45L3.72081 915.716" />
                    <path className="LeftWall Vector_111" d="M1577.75 1074.33L3.70034 854.279" />
                    <path className="LeftWall Vector_112" d="M1577.75 1056.21L3.73071 789.799" />
                    <path className="LeftWall Vector_113" d="M1577.75 1038.09L3.64104 722.469" />
                    <path className="LeftWall Vector_114" d="M1577.75 1019.97L3.59989 650.296" />
                    <path className="LeftWall Vector_115" d="M1577.75 1001.84L3.54772 572.311" />
                    <path className="LeftWall Vector_116" d="M1577.75 983.723L3.48332 486.781" />
                    <path className="LeftWall Vector_117" d="M1577.75 965.602L3.40199 391.322" />
                    <path className="LeftWall Vector_118" d="M1577.75 947.48L3.29875 282.547" />
                    <path className="LeftWall Vector_119" d="M1577.75 929.359L3.16778 155.453" />
                </g>
                <g id="BackWall">
                    <path className="BackWall Vector_121" d="M1578 911V1437" />
                    <path className="BackWall Vector_122" d="M1609.38 911V1437" />
                    <path className="BackWall Vector_123" d="M1640.76 911V1437" />
                    <path className="BackWall Vector_124" d="M1672.14 911V1437" />
                    <path className="BackWall Vector_125" d="M1703.52 911V1437" />
                    <path className="BackWall Vector_126" d="M1734.9 911V1437" />
                    <path className="BackWall Vector_127" d="M1766.28 911V1437" />
                    <path className="BackWall Vector_128" d="M1797.65 911V1437" />
                    <path className="BackWall Vector_129" d="M1829.03 911V1437" />
                    <path className="BackWall Vector_130" d="M1860.41 911V1437" />
                    <path className="BackWall Vector_131" d="M1891.79 911V1437" />
                    <path className="BackWall Vector_132" d="M1923.17 911V1437" />
                    <path className="BackWall Vector_133" d="M1954.55 911V1437" />
                    <path className="BackWall Vector_134" d="M1985.93 911V1437" />
                    <path className="BackWall Vector_135" d="M2017.31 911V1437" />
                    <path className="BackWall Vector_136" d="M2048.69 911V1437" />
                    <path className="BackWall Vector_137" d="M2080.07 911V1437" />
                    <path className="BackWall Vector_138" d="M2111.45 911V1437" />
                    <path className="BackWall Vector_139" d="M2142.83 911V1437" />
                    <path className="BackWall Vector_140" d="M2174.21 911V1437" />
                    <path className="BackWall Vector_141" d="M2205.59 911V1437" />
                    <path className="BackWall Vector_142" d="M2236.97 911V1437" />
                    <path className="BackWall Vector_143" d="M2268.34 911V1437" />
                    <path className="BackWall Vector_144" d="M2299.72 911V1437" />
                    <path className="BackWall Vector_145" d="M2331.1 911V1437" />
                    <path className="BackWall Vector_146" d="M2362.48 911V1437" />
                    <path className="BackWall Vector_147" d="M2393.86 911V1437" />
                    <path className="BackWall Vector_148" d="M2425.24 911V1437" />
                    <path className="BackWall Vector_149" d="M2456.62 911V1437" />
                    <path className="BackWall Vector_150" d="M2488 911V1437" />
                </g>

            </motion.g>

        </svg>
    );
};

export default SvgBackground;
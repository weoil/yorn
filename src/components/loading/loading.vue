<template>
    <div class="loading">
        <transition>
            <div class="animation" v-if="type===1">
                <svg class="lds-dna" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <circle cx="6.451612903225806" cy="56.8838" r="3.48032">
                        <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-0.5s"></animate>
                        <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="0s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
                        <animate attributeName="fill" keyTimes="0;0.5;1" values="#941946;#fbacc9;#941946" dur="2s" repeatCount="indefinite" begin="-0.5s"></animate>
                    </circle>
                    <circle cx="6.451612903225806" cy="43.1162" r="2.51968">
                        <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-1.5s"></animate>
                        <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-1s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
                        <animate attributeName="fill" keyTimes="0;0.5;1" values="#a2f0fb;#164ba3;#a2f0fb" dur="2s" repeatCount="indefinite" begin="-0.5s"></animate>
                    </circle>
                    <circle cx="16.129032258064512" cy="65.7247" r="3.24032">
                        <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-0.7s"></animate>
                        <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-0.2s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
                        <animate attributeName="fill" keyTimes="0;0.5;1" values="#941946;#fbacc9;#941946" dur="2s" repeatCount="indefinite" begin="-0.7s"></animate>
                    </circle>
                    <circle cx="16.129032258064512" cy="34.2753" r="2.75968">
                        <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-1.7s"></animate>
                        <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-1.2s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
                        <animate attributeName="fill" keyTimes="0;0.5;1" values="#a2f0fb;#164ba3;#a2f0fb" dur="2s" repeatCount="indefinite" begin="-0.7s"></animate>
                    </circle>
                    <circle cx="25.806451612903224" cy="68" r="3.00032">
                        <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-0.9s"></animate>
                        <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-0.4s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
                        <animate attributeName="fill" keyTimes="0;0.5;1" values="#941946;#fbacc9;#941946" dur="2s" repeatCount="indefinite" begin="-0.9s"></animate>
                    </circle>
                    <circle cx="25.806451612903224" cy="32" r="2.99968">
                        <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-1.9s"></animate>
                        <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-1.4s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
                        <animate attributeName="fill" keyTimes="0;0.5;1" values="#a2f0fb;#164ba3;#a2f0fb" dur="2s" repeatCount="indefinite" begin="-0.9s"></animate>
                    </circle>
                    <circle cx="35.48387096774193" cy="65.738" r="2.76032">
                        <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-1.1s"></animate>
                        <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-0.6s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
                        <animate attributeName="fill" keyTimes="0;0.5;1" values="#941946;#fbacc9;#941946" dur="2s" repeatCount="indefinite" begin="-1.1s"></animate>
                    </circle>
                    <circle cx="35.48387096774193" cy="34.262" r="3.23968">
                        <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-2.1s"></animate>
                        <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-1.6s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
                        <animate attributeName="fill" keyTimes="0;0.5;1" values="#a2f0fb;#164ba3;#a2f0fb" dur="2s" repeatCount="indefinite" begin="-1.1s"></animate>
                    </circle>
                    <circle cx="45.16129032258064" cy="56.9172" r="2.52032">
                        <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-1.3s"></animate>
                        <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-0.8s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
                        <animate attributeName="fill" keyTimes="0;0.5;1" values="#941946;#fbacc9;#941946" dur="2s" repeatCount="indefinite" begin="-1.3s"></animate>
                    </circle>
                    <circle cx="45.16129032258064" cy="43.0828" r="3.47968">
                        <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-2.3s"></animate>
                        <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-1.8s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
                        <animate attributeName="fill" keyTimes="0;0.5;1" values="#a2f0fb;#164ba3;#a2f0fb" dur="2s" repeatCount="indefinite" begin="-1.3s"></animate>
                    </circle>
                    <circle cx="54.838709677419345" cy="43.1162" r="2.51968">
                        <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-1.5s"></animate>
                        <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-1s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
                        <animate attributeName="fill" keyTimes="0;0.5;1" values="#941946;#fbacc9;#941946" dur="2s" repeatCount="indefinite" begin="-1.5s"></animate>
                    </circle>
                    <circle cx="54.838709677419345" cy="56.8838" r="3.48032">
                        <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-2.5s"></animate>
                        <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-2s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
                        <animate attributeName="fill" keyTimes="0;0.5;1" values="#a2f0fb;#164ba3;#a2f0fb" dur="2s" repeatCount="indefinite" begin="-1.5s"></animate>
                    </circle>
                    <circle cx="64.51612903225805" cy="34.2753" r="2.75968">
                        <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-1.7s"></animate>
                        <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-1.2s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
                        <animate attributeName="fill" keyTimes="0;0.5;1" values="#941946;#fbacc9;#941946" dur="2s" repeatCount="indefinite" begin="-1.7s"></animate>
                    </circle>
                    <circle cx="64.51612903225805" cy="65.7247" r="3.24032">
                        <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-2.7s"></animate>
                        <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-2.2s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
                        <animate attributeName="fill" keyTimes="0;0.5;1" values="#a2f0fb;#164ba3;#a2f0fb" dur="2s" repeatCount="indefinite" begin="-1.7s"></animate>
                    </circle>
                    <circle cx="74.19354838709677" cy="32" r="2.99968">
                        <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-1.9s"></animate>
                        <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-1.4s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
                        <animate attributeName="fill" keyTimes="0;0.5;1" values="#941946;#fbacc9;#941946" dur="2s" repeatCount="indefinite" begin="-1.9s"></animate>
                    </circle>
                    <circle cx="74.19354838709677" cy="68" r="3.00032">
                        <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-2.9s"></animate>
                        <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-2.4s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
                        <animate attributeName="fill" keyTimes="0;0.5;1" values="#a2f0fb;#164ba3;#a2f0fb" dur="2s" repeatCount="indefinite" begin="-1.9s"></animate>
                    </circle>
                    <circle cx="83.87096774193547" cy="34.262" r="3.23968">
                        <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-2.1s"></animate>
                        <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-1.6s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
                        <animate attributeName="fill" keyTimes="0;0.5;1" values="#941946;#fbacc9;#941946" dur="2s" repeatCount="indefinite" begin="-2.1s"></animate>
                    </circle>
                    <circle cx="83.87096774193547" cy="65.738" r="2.76032">
                        <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-3.1s"></animate>
                        <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-2.6s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
                        <animate attributeName="fill" keyTimes="0;0.5;1" values="#a2f0fb;#164ba3;#a2f0fb" dur="2s" repeatCount="indefinite" begin="-2.1s"></animate>
                    </circle>
                    <circle cx="93.54838709677418" cy="43.0828" r="3.47968">
                        <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-2.3s"></animate>
                        <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-1.8s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
                        <animate attributeName="fill" keyTimes="0;0.5;1" values="#941946;#fbacc9;#941946" dur="2s" repeatCount="indefinite" begin="-2.3s"></animate>
                    </circle>
                    <circle cx="93.54838709677418" cy="56.9172" r="2.52032">
                        <animate attributeName="r" times="0;0.5;1" values="2.4000000000000004;3.5999999999999996;2.4000000000000004" dur="2s" repeatCount="indefinite" begin="-3.3s"></animate>
                        <animate attributeName="cy" keyTimes="0;0.5;1" values="32;68;32" dur="2s" repeatCount="indefinite" begin="-2.8s" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" calcMode="spline"></animate>
                        <animate attributeName="fill" keyTimes="0;0.5;1" values="#a2f0fb;#164ba3;#a2f0fb" dur="2s" repeatCount="indefinite" begin="-2.3s"></animate>
                    </circle>
                </svg>
            </div>
            <div class="animation" v-else-if="type===2">
                <svg class="lds-flask" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <defs>
                        <clipPath id="lds-flask-cpid-e5ae9550b13bf" clipPathUnits="userSpaceOnUse">
                            <rect x="0" y="50" width="100" height="50"></rect>
                        </clipPath>
                        <pattern id="lds-flask-patid-1e22a03d59de3" patternUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
                            <rect x="0" y="0" width="100" height="100" fill="#1aafd0"></rect>
                            <circle cx="85" cy="0" r="3" fill="#3be8b0" transform="translate(0 119.511)">
                                <animateTransform attributeName="transform" type="translate" values="0 121;0 -21" keyTimes="0;1" dur="3s" begin="-1.59s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="1" cy="0" r="3" fill="#3be8b0" transform="translate(0 66.0149)">
                                <animateTransform attributeName="transform" type="translate" values="0 117;0 -17" keyTimes="0;1" dur="3s" begin="-2.7s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="6" cy="0" r="3" fill="#3be8b0" transform="translate(0 18.6237)">
                                <animateTransform attributeName="transform" type="translate" values="0 108;0 -8" keyTimes="0;1" dur="3s" begin="-0.87s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="86" cy="0" r="2" fill="#3be8b0" transform="translate(0 26.2481)">
                                <animateTransform attributeName="transform" type="translate" values="0 124;0 -24" keyTimes="0;1" dur="3s" begin="-0.54s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="29" cy="0" r="2" fill="#3be8b0" transform="translate(0 -1.09634)">
                                <animateTransform attributeName="transform" type="translate" values="0 108;0 -8" keyTimes="0;1" dur="3s" begin="-1.38s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="25" cy="0" r="3" fill="#3be8b0" transform="translate(0 99.4038)">
                                <animateTransform attributeName="transform" type="translate" values="0 149;0 -49" keyTimes="0;1" dur="3s" begin="-2.31s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="4" cy="0" r="3" fill="#3be8b0" transform="translate(0 5.71493)">
                                <animateTransform attributeName="transform" type="translate" values="0 117;0 -17" keyTimes="0;1" dur="3s" begin="-1.05s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="27" cy="0" r="3" fill="#3be8b0" transform="translate(0 0.924637)">
                                <animateTransform attributeName="transform" type="translate" values="0 107;0 -7" keyTimes="0;1" dur="3s" begin="-1.35s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="54" cy="0" r="2" fill="#3be8b0" transform="translate(0 74.8335)">
                                <animateTransform attributeName="transform" type="translate" values="0 139;0 -39" keyTimes="0;1" dur="3s" begin="-2.64s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="99" cy="0" r="2" fill="#3be8b0" transform="translate(0 8.34949)">
                                <animateTransform attributeName="transform" type="translate" values="0 102;0 -2" keyTimes="0;1" dur="3s" begin="-1.26s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="13" cy="0" r="3" fill="#3be8b0" transform="translate(0 93.6027)">
                                <animateTransform attributeName="transform" type="translate" values="0 109;0 -9" keyTimes="0;1" dur="3s" begin="-1.95s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="22" cy="0" r="3" fill="#3be8b0" transform="translate(0 125.385)">
                                <animateTransform attributeName="transform" type="translate" values="0 127;0 -27" keyTimes="0;1" dur="3s" begin="-1.59s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="12" cy="0" r="2" fill="#3be8b0" transform="translate(0 41.2155)">
                                <animateTransform attributeName="transform" type="translate" values="0 137;0 -37" keyTimes="0;1" dur="3s" begin="-0.21s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="89" cy="0" r="3" fill="#3be8b0" transform="translate(0 62.3736)">
                                <animateTransform attributeName="transform" type="translate" values="0 139;0 -39" keyTimes="0;1" dur="3s" begin="-2.85s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="70" cy="0" r="2" fill="#3be8b0" transform="translate(0 32.5149)">
                                <animateTransform attributeName="transform" type="translate" values="0 117;0 -17" keyTimes="0;1" dur="3s" begin="-0.45s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="51" cy="0" r="2" fill="#3be8b0" transform="translate(0 42.9555)">
                                <animateTransform attributeName="transform" type="translate" values="0 137;0 -37" keyTimes="0;1" dur="3s" begin="-0.18s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="4" cy="0" r="2" fill="#3be8b0" transform="translate(0 96.3565)">
                                <animateTransform attributeName="transform" type="translate" values="0 136;0 -36" keyTimes="0;1" dur="3s" begin="-2.25s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="46" cy="0" r="2" fill="#3be8b0" transform="translate(0 95.2784)">
                                <animateTransform attributeName="transform" type="translate" values="0 134;0 -34" keyTimes="0;1" dur="3s" begin="-2.25s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="22" cy="0" r="3" fill="#3be8b0" transform="translate(0 46.4765)">
                                <animateTransform attributeName="transform" type="translate" values="0 136;0 -36" keyTimes="0;1" dur="3s" begin="-0.12s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="74" cy="0" r="3" fill="#3be8b0" transform="translate(0 92.5833)">
                                <animateTransform attributeName="transform" type="translate" values="0 129;0 -29" keyTimes="0;1" dur="3s" begin="-2.25s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="5" cy="0" r="2" fill="#3be8b0" transform="translate(0 26.8139)">
                                <animateTransform attributeName="transform" type="translate" values="0 118;0 -18" keyTimes="0;1" dur="3s" begin="-0.57s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="56" cy="0" r="3" fill="#3be8b0" transform="translate(0 49.9106)">
                                <animateTransform attributeName="transform" type="translate" values="0 142;0 -42" keyTimes="0;1" dur="3s" begin="-0.06s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="75" cy="0" r="3" fill="#3be8b0" transform="translate(0 117.934)">
                                <animateTransform attributeName="transform" type="translate" values="0 118;0 -18" keyTimes="0;1" dur="3s" begin="-1.56s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="36" cy="0" r="3" fill="#3be8b0" transform="translate(0 74.7491)">
                                <animateTransform attributeName="transform" type="translate" values="0 123;0 -23" keyTimes="0;1" dur="3s" begin="-2.55s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="8" cy="0" r="3" fill="#3be8b0" transform="translate(0 -26.5284)">
                                <animateTransform attributeName="transform" type="translate" values="0 141;0 -41" keyTimes="0;1" dur="3s" begin="-1.32s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="38" cy="0" r="2" fill="#3be8b0" transform="translate(0 104.875)">
                                <animateTransform attributeName="transform" type="translate" values="0 117;0 -17" keyTimes="0;1" dur="3s" begin="-1.83s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="10" cy="0" r="2" fill="#3be8b0" transform="translate(0 66.0149)">
                                <animateTransform attributeName="transform" type="translate" values="0 117;0 -17" keyTimes="0;1" dur="3s" begin="-2.7s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="94" cy="0" r="3" fill="#3be8b0" transform="translate(0 108.654)">
                                <animateTransform attributeName="transform" type="translate" values="0 139;0 -39" keyTimes="0;1" dur="3s" begin="-2.07s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="49" cy="0" r="3" fill="#3be8b0" transform="translate(0 -26.5352)">
                                <animateTransform attributeName="transform" type="translate" values="0 148;0 -48" keyTimes="0;1" dur="3s" begin="-1.23s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="77" cy="0" r="2" fill="#3be8b0" transform="translate(0 -25.2777)">
                                <animateTransform attributeName="transform" type="translate" values="0 130;0 -30" keyTimes="0;1" dur="3s" begin="-1.47s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="85" cy="0" r="2" fill="#3be8b0" transform="translate(0 110.398)">
                                <animateTransform attributeName="transform" type="translate" values="0 134;0 -34" keyTimes="0;1" dur="3s" begin="-1.98s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="20" cy="0" r="2" fill="#3be8b0" transform="translate(0 89.1456)">
                                <animateTransform attributeName="transform" type="translate" values="0 106;0 -6" keyTimes="0;1" dur="3s" begin="-2.01s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="3" cy="0" r="2" fill="#3be8b0" transform="translate(0 112.494)">
                                <animateTransform attributeName="transform" type="translate" values="0 118;0 -18" keyTimes="0;1" dur="3s" begin="-1.68s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="86" cy="0" r="3" fill="#3be8b0" transform="translate(0 -40.7401)">
                                <animateTransform attributeName="transform" type="translate" values="0 153;0 -53" keyTimes="0;1" dur="3s" begin="-1.38s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="18" cy="0" r="2" fill="#3be8b0" transform="translate(0 25.8365)">
                                <animateTransform attributeName="transform" type="translate" values="0 136;0 -36" keyTimes="0;1" dur="3s" begin="-0.48s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="59" cy="0" r="2" fill="#3be8b0" transform="translate(0 112.494)">
                                <animateTransform attributeName="transform" type="translate" values="0 118;0 -18" keyTimes="0;1" dur="3s" begin="-1.68s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="41" cy="0" r="2" fill="#3be8b0" transform="translate(0 38.2658)">
                                <animateTransform attributeName="transform" type="translate" values="0 147;0 -47" keyTimes="0;1" dur="3s" begin="-0.24s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="33" cy="0" r="3" fill="#3be8b0" transform="translate(0 98.0594)">
                                <animateTransform attributeName="transform" type="translate" values="0 133;0 -33" keyTimes="0;1" dur="3s" begin="-2.19s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="81" cy="0" r="2" fill="#3be8b0" transform="translate(0 100.248)">
                                <animateTransform attributeName="transform" type="translate" values="0 124;0 -24" keyTimes="0;1" dur="3s" begin="-2.04s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="6" cy="0" r="2" fill="#3be8b0" transform="translate(0 -1.75382)">
                                <animateTransform attributeName="transform" type="translate" values="0 126;0 -26" keyTimes="0;1" dur="3s" begin="-1.08s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="60" cy="0" r="2" fill="#3be8b0" transform="translate(0 13.3755)">
                                <animateTransform attributeName="transform" type="translate" values="0 137;0 -37" keyTimes="0;1" dur="3s" begin="-0.69s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="67" cy="0" r="3" fill="#3be8b0" transform="translate(0 -32.0971)">
                                <animateTransform attributeName="transform" type="translate" values="0 150;0 -50" keyTimes="0;1" dur="3s" begin="-1.29s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="97" cy="0" r="3" fill="#3be8b0" transform="translate(0 112.324)">
                                <animateTransform attributeName="transform" type="translate" values="0 128;0 -28" keyTimes="0;1" dur="3s" begin="-1.86s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="100" cy="0" r="2" fill="#3be8b0" transform="translate(0 104.464)">
                                <animateTransform attributeName="transform" type="translate" values="0 108;0 -8" keyTimes="0;1" dur="3s" begin="-1.65s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="8" cy="0" r="2" fill="#3be8b0" transform="translate(0 19.5759)">
                                <animateTransform attributeName="transform" type="translate" values="0 116;0 -16" keyTimes="0;1" dur="3s" begin="-0.75s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="37" cy="0" r="3" fill="#3be8b0" transform="translate(0 135.47)">
                                <animateTransform attributeName="transform" type="translate" values="0 143;0 -43" keyTimes="0;1" dur="3s" begin="-1.68s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="82" cy="0" r="3" fill="#3be8b0" transform="translate(0 101.379)">
                                <animateTransform attributeName="transform" type="translate" values="0 133;0 -33" keyTimes="0;1" dur="3s" begin="-2.13s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="12" cy="0" r="2" fill="#3be8b0" transform="translate(0 7.36617)">
                                <animateTransform attributeName="transform" type="translate" values="0 126;0 -26" keyTimes="0;1" dur="3s" begin="-0.9s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="35" cy="0" r="2" fill="#3be8b0" transform="translate(0 28.3126)">
                                <animateTransform attributeName="transform" type="translate" values="0 140;0 -40" keyTimes="0;1" dur="3s" begin="-0.42s" repeatCount="indefinite"></animateTransform>
                            </circle>
                            <circle cx="71" cy="0" r="3" fill="#3be8b0" transform="translate(0 52.3807)">
                                <animateTransform attributeName="transform" type="translate" values="0 111;0 -11" keyTimes="0;1" dur="3s" begin="0s" repeatCount="indefinite"></animateTransform>
                            </circle>
                        </pattern>
                    </defs>

                    <path fill="url(#lds-flask-patid-1e22a03d59de3)" clip-path="url(#lds-flask-cpid-e5ae9550b13bf)" d="M59,37.3V18.9c3-0.8,5.1-3.6,5.1-6.8C64.1,8.2,61,5,57.1,5H42.9c-3.9,0-7.1,3.2-7.1,7.1c0,3.2,2.2,6,5.1,6.8v18.4c-11.9,3.8-20.6,15-20.6,28.2C20.4,81.8,33.7,95,50,95s29.6-13.2,29.6-29.6C79.6,52.2,70.9,41.1,59,37.3z"></path>

                    <path fill="none" stroke="#6a67ce" stroke-width="5" d="M59,37.3V18.9c3-0.8,5.1-3.6,5.1-6.8C64.1,8.2,61,5,57.1,5H42.9c-3.9,0-7.1,3.2-7.1,7.1c0,3.2,2.2,6,5.1,6.8v18.4c-11.9,3.8-20.6,15-20.6,28.2C20.4,81.8,33.7,95,50,95s29.6-13.2,29.6-29.6C79.6,52.2,70.9,41.1,59,37.3z"></path>
                </svg>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
  name: "loading",
  props: {
    type: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {};
  },
  methods: {},
  components: {},
  computed: {},
  mounted() {}
};
</script>

<style scoped lang="css">
.loading {
  height: 100px;
}
.animation {
  height: 150px;
}
</style>

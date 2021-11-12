import React from 'react';

const ChartJS = ({ className, width, height }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -50 500 630"
    >
      <title>Chart js skill icon</title>
      <defs>
        <linearGradient id="gradient" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#4cf3c6" />
          <stop offset="1" stopColor="#0aa2e7" />
        </linearGradient>
      </defs>
      <path d="M93.7733383,383.3009949l-37.588623-23.4613342c7.174324-23.2473755,66.0021667-128.7017517,101.1509018-125.7351532C136.9578857,287.4173889,125.5402908,334.9146118,93.7733383,383.3009949z M167.6716766,257.4261169c-16.8242798,50.2639771-35.684906,96.8053589-59.4300461,134.417511l113.7698746,65.8455811l179.7962646-103.5905457v-96.0539246c-17.4086304,1.8987732-28.0395508,11.7143555-33.8562622,27.6247864c-8.9650574,24.5220642-45.0889282,53.5266418-74.2076721,14.4343262C247.4503632,373.9208984,204.0526428,361.2354126,167.6716766,257.4261169z M151.6961823,219.9255219c-29.7174606-63.5350342-86.1285858-64.3585663-110.2877045,30.382431v99.3651428C58.1602402,319.5907593,110.9031754,223.6435089,151.6961823,219.9255219z M393.2472534,243.2098846c-30.1818542-22.6328278-75.2782288,4.9260864-92.6665344,44.7718048c16.2728271,26.8457031,32.6260071,21.3126831,46.4331665,8.3146973C358.1294556,285.8322449,362.0010681,253.9144135,393.2472534,243.2098846z M261.9285278,244.950882c-28.1663666-53.9352264-52.0266418-95.9476776-82.7436218-17.2023468C204.6313324,247.6928864,235.1222534,267.8977051,261.9285278,244.950882z M286.1252136,289.3045959c-6.0588989-9.2062378-12.0392761-20.2755737-17.6111145-31.4589539c-26.7772369,21.1087952-60.7082062,10.8710022-94.6219788-16.6014252c20.7817535,53.4997101,37.0730133,83.2093658,53.3447723,91.2517548C245.6233368,341.5834961,270.4412231,320.5259399,286.1252136,289.3045959z M30.2221909,145.2772369v221.4455109L222,477.4455261l191.7778015-110.7227783V145.2772369L222,34.5544739L30.2221909,145.2772369z M444,128v256L222,512L0,384V128l222-128L444,128z M401.8077698,224.8550262c-33.024231-49.8251343-60.827301-52.7593842-81.1879883-38.3804016c-18.5274658,13.0841827-31.1453552,44.2569122-41.2397766,60.6603699c4.4847412,10.0633698,8.7099609,15.6719208,13.6134949,24.9513702c23.6547546-45.0139923,67.62146-71.4070129,108.81427-40.747879V224.8550262z" />
    </svg>
  );
};

export { ChartJS };

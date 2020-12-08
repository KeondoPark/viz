// 얘로 bar chart 하나 넣자
const YJ2data =
{
  'Computer Science': 2868,
  'Economics': 783,
  'Business': 921,
  'Electrical Engineering': 550,
  'Marketing': 385,
  'Finance': 499,
  'Management': 332,
  'Engineering': 496,
  'Mathematics': 240,
  'Mechanical Engineering': 200,
  'Physics': 177,
  'Accounting': 110,
  'Psychology': 141,
  'Law': 198,
  'Biomedical': 191,
  'Accounting': 95,
  'History': 110,
  'Information Technology': 269,
  'Chemistry': 116,
  'Communication': 127,
  'etc': 1450
};

const YJ2data1 =
{
  'Engineering': 4574,
  'Economics': 1392,
  'Business': 1638,
  'Natural Science': 533,
  'etc': 2026
};

const YJ2data2 =
{
  'Engineering': 303,
  'Economics': 48,
  'Business': 85,
  'Natural Science': 46,
  'etc': 93
}
  ;

const YJ2data3 =
{
  'Engineering': 490,
  'Economics': 152,
  'Business': 184,
  'Natural Science': 56,
  'etc': 246
}
  ;

const YJ2data4 =
{
  'Engineering': 74,
  'Economics': 25,
  'Business': 29,
  'Natural Science': 7,
  //  'Psychology': 6, 
  //  'Communication': 5, 
  //  'Design': 3, 
  //  'Education': 3, 
  //  'History': 2, 
  //  'Law': 2, 
  //  'Philosophy': 2, 
  'etc': 42
}
  ;

const YJ2data5 =
{
  'Business': 41,
  'Engineering': 26,
  'Economics': 14,
  'Natural Science': 5,
  //  'Psychology': 3, 
  //  'Design': 2, 
  'etc': 16
}
  ;

const YJ2data6 =
{
  'Engineering': 400,
  'Economics': 403,
  'Business': 255,
  //  'Law': 45, 
  'Natural Science': 88,
  //  'History': 18, 
  //  'Psychology': 18, 
  'etc': 255
};

const YJ2data7 =
{
  'Engineering': 114,
  'Economics': 39,
  'Business': 47,
  //  'Medicine': 11,
  'Natural Science': 72,
  //  'Design': 5,
  //  'Law': 7,
  //  'Psychology': 8,
  'etc': 86
}
  ;

const YJ2data8 =
{
  'Engineering': 926,
  'Economics': 123,
  'Business': 245,
  //  'Communication': 26, 
  'Natural Science': 120,
  //  'Design': 26, 
  //  'Law': 24, 
  //  'Psychology': 22, 
  'etc': 351
}
  ;

const YJ2data9 =
{
  'Engineering': 249,
  'Economics': 83,
  'Business': 81,
  'Natural Science': 30,
  //  'English': 6, 
  //  'Communication': 6, 
  //  'Design': 4, 
  //  'Law': 14, 
  //  'Psychology': 7, 
  'etc': 88
}
  ;

const YJ2data10 =
{
  'Engineering': 1584,
  'Economics': 351,
  'Business': 424,
  // 'Communication': 49,
  'Natural Science': 113,
  //  'History': 35,  
  // 'Law': 54,
  // 'Design': 67,
  //  'Psychology': 43, 
  'etc': 510 + 49 + 35 + 54 + 67
}
  ;

const YJ2data11 =
{
  'Engineering': 217,
  'Economics': 60,
  'Business': 93,
  'Natural Science': 25,
  //  'Communication': 8, 
  //  'Law': 7, 
  //  'Robotics': 6, 
  //  'Design': 5, 
  //  'Philosophy': 5, 
  //  'Psychology': 8, 
  'etc': 103
}
;


const YJ1data1 = [
  { name: 'Stanford', value: 682, color: '#5487b1', ind_list: 'AllIndustries' },
  { name: 'Harvard', value: 517, color: '#63a1af', ind_list: 'AllIndustries' },
  { name: 'MIT', value: 336, color: '#7ab8aa', ind_list: 'AllIndustries' },
  { name: 'UPENN', value: 294, color: '#93caa8', ind_list: 'AllIndustries' },
  { name: 'UC Berkeley', value: 287, color: '#add7a8', ind_list: 'AllIndustries' },
  { name: 'Cornell', value: 153, color: '#c6e3a7', ind_list: 'AllIndustries' },
  { name: 'CMU', value: 145, color: '#c6e3a7', ind_list: 'AllIndustries' },
  { name: 'Columbia', value: 119, color: '#c6e3a7', ind_list: 'AllIndustries' },
  { name: 'UMich', value: 109, color: '#c6e3a7', ind_list: 'AllIndustries' },
  { name: 'Oxford', value: 108, color: '#c6e3a7', ind_list: 'AllIndustries' },
  { name: 'UW', value: 108, color: '#c6e3a7', ind_list: 'AllIndustries' },
  { name: 'UCLA', value: 100, color: '#c6e3a7', ind_list: 'AllIndustries' },
  { name: 'NU', value: 95, color: '#c6e3a7', ind_list: 'AllIndustries' },
  { name: 'Cambridge', value: 94, color: '#c6e3a7', ind_list: 'AllIndustries' },
  { name: 'NYU', value: 93, color: '#c6e3a7', ind_list: 'AllIndustries' },
  { name: 'USC', value: 93, color: '#c6e3a7', ind_list: 'AllIndustries' },
  { name: 'UIUC', value: 92, color: '#c6e3a7', ind_list: 'AllIndustries' },
  { name: 'Tel Aviv', value: 86, color: '#c6e3a7', ind_list: 'AllIndustries' },
  { name: 'UT Austin', value: 85, color: '#c6e3a7', ind_list: 'AllIndustries' },
  { name: 'SNU', value: 6, color: '#E7846F', ind_list: 'AllIndustries' },
  { name: 'KAIST', value: 4, color: '#E7846F', ind_list: 'AllIndustries' },
  { name: 'Yonsei', value: 3, color: '#E7846F', ind_list: 'AllIndustries' }
];

const YJ1data2 = [
  { name: 'Stanford', value: 31, color: '#5487b1', ind_list: 'AI' },
  { name: 'Harvard', value: 22, color: '#63a1af', ind_list: 'AI' },
  { name: 'MIT', value: 19, color: '#7ab8aa', ind_list: 'AI' },
  { name: 'UPENN', value: 5, color: '#93caa8', ind_list: 'AI' },
  { name: 'UC Berkeley', value: 24, color: '#add7a8', ind_list: 'AI' },
  { name: 'Cornell', value: 10, color: '#c6e3a7', ind_list: 'AI' },
  { name: 'CMU', value: 5, color: '#c6e3a7', ind_list: 'AI' },
  { name: 'Columbia', value: 6, color: '#c6e3a7', ind_list: 'AI' },
  { name: 'UMich', value: 3, color: '#c6e3a7', ind_list: 'AI' },
  { name: 'Oxford', value: 5, color: '#c6e3a7', ind_list: 'AI' },
  { name: 'UW', value: 3, color: '#c6e3a7', ind_list: 'AI' },
  { name: 'UCLA', value: 9, color: '#c6e3a7', ind_list: 'AI' },
  { name: 'NU', value: 7, color: '#c6e3a7', ind_list: 'AI' },
  { name: 'Cambridge', value: 3, color: '#c6e3a7', ind_list: 'AI' },
  { name: 'NYU', value: 8, color: '#c6e3a7', ind_list: 'AI' },
  { name: 'USC', value: 3, color: '#c6e3a7', ind_list: 'AI' },
  { name: 'UIUC', value: 7, color: '#c6e3a7', ind_list: 'AI' },
  { name: 'Tel Aviv', value: 6, color: '#c6e3a7', ind_list: 'AI' },
  { name: 'UT Austin', value: 4, color: '#c6e3a7', ind_list: 'AI' }
];

const YJ1data3 = [
  { name: 'Stanford', value: 94, color: '#5487b1', ind_list: 'Ecommerce' },
  { name: 'Harvard', value: 56, color: '#63a1af', ind_list: 'Ecommerce' },
  { name: 'MIT', value: 25, color: '#7ab8aa', ind_list: 'Ecommerce' },
  { name: 'UPENN', value: 19, color: '#93caa8', ind_list: 'Ecommerce' },
  { name: 'UC Berkeley', value: 30, color: '#add7a8', ind_list: 'Ecommerce' },
  { name: 'Cornell', value: 21, color: '#c6e3a7', ind_list: 'Ecommerce' },
  { name: 'CMU', value: 20, color: '#c6e3a7', ind_list: 'Ecommerce' },
  { name: 'Columbia', value: 11, color: '#c6e3a7', ind_list: 'Ecommerce' },
  { name: 'UMich', value: 15, color: '#c6e3a7', ind_list: 'Ecommerce' },
  { name: 'Oxford', value: 11, color: '#c6e3a7', ind_list: 'Ecommerce' },
  { name: 'UW', value: 17, color: '#c6e3a7', ind_list: 'Ecommerce' },
  { name: 'UCLA', value: 7, color: '#c6e3a7', ind_list: 'Ecommerce' },
  { name: 'NU', value: 12, color: '#c6e3a7', ind_list: 'Ecommerce' },
  { name: 'Cambridge', value: 11, color: '#c6e3a7', ind_list: 'Ecommerce' },
  { name: 'NYU', value: 12, color: '#c6e3a7', ind_list: 'Ecommerce' },
  { name: 'USC', value: 25, color: '#c6e3a7', ind_list: 'Ecommerce' },
  { name: 'UIUC', value: 7, color: '#c6e3a7', ind_list: 'Ecommerce' },
  { name: 'Tel Aviv', value: 6, color: '#c6e3a7', ind_list: 'Ecommerce' },
  { name: 'UT Austin', value: 13, color: '#c6e3a7', ind_list: 'Ecommerce' }
];

const YJ1data4 = [
  { name: 'Stanford', value: 26, color: '#5487b1', ind_list: 'Education' },
  { name: 'Harvard', value: 11, color: '#63a1af', ind_list: 'Education' },
  { name: 'MIT', value: 6, color: '#7ab8aa', ind_list: 'Education' },
  { name: 'UPENN', value: 7, color: '#93caa8', ind_list: 'Education' },
  { name: 'UC Berkeley', value: 5, color: '#add7a8', ind_list: 'Education' },
  { name: 'Cornell', value: 3, color: '#c6e3a7', ind_list: 'Education' },
  { name: 'CMU', value: 1, color: '#c6e3a7', ind_list: 'Education' },
  { name: 'Columbia', value: 1, color: '#c6e3a7', ind_list: 'Education' },
  { name: 'UMich', value: 0, color: '#c6e3a7', ind_list: 'Education' },
  { name: 'Oxford', value: 1, color: '#c6e3a7', ind_list: 'Education' },
  { name: 'UW', value: 0, color: '#c6e3a7', ind_list: 'Education' },
  { name: 'UCLA', value: 1, color: '#c6e3a7', ind_list: 'Education' },
  { name: 'NU', value: 1, color: '#c6e3a7', ind_list: 'Education' },
  { name: 'Cambridge', value: 2, color: '#c6e3a7', ind_list: 'Education' },
  { name: 'NYU', value: 5, color: '#c6e3a7', ind_list: 'Education' },
  { name: 'USC', value: 0, color: '#c6e3a7', ind_list: 'Education' },
  { name: 'UIUC', value: 0, color: '#c6e3a7', ind_list: 'Education' },
  { name: 'Tel Aviv', value: 3, color: '#c6e3a7', ind_list: 'Education' },
  { name: 'UT Austin', value: 0, color: '#c6e3a7', ind_list: 'Education' }
];

const YJ1data5 = [
  { name: 'Stanford', value: 3, color: '#5487b1', ind_list: 'F&B' },
  { name: 'Harvard', value: 14, color: '#63a1af', ind_list: 'F&B' },
  { name: 'MIT', value: 0, color: '#7ab8aa', ind_list: 'F&B' },
  { name: 'UPENN', value: 4, color: '#93caa8', ind_list: 'F&B' },
  { name: 'UC Berkeley', value: 1, color: '#add7a8', ind_list: 'F&B' },
  { name: 'Cornell', value: 1, color: '#c6e3a7', ind_list: 'F&B' },
  { name: 'CMU', value: 1, color: '#c6e3a7', ind_list: 'F&B' },
  { name: 'Columbia', value: 0, color: '#c6e3a7', ind_list: 'F&B' },
  { name: 'UMich', value: 0, color: '#c6e3a7', ind_list: 'F&B' },
  { name: 'Oxford', value: 1, color: '#c6e3a7', ind_list: 'F&B' },
  { name: 'UW', value: 0, color: '#c6e3a7', ind_list: 'F&B' },
  { name: 'UCLA', value: 1, color: '#c6e3a7', ind_list: 'F&B' },
  { name: 'NU', value: 3, color: '#c6e3a7', ind_list: 'F&B' },
  { name: 'Cambridge', value: 0, color: '#c6e3a7', ind_list: 'F&B' },
  { name: 'NYU', value: 1, color: '#c6e3a7', ind_list: 'F&B' },
  { name: 'USC', value: 0, color: '#c6e3a7', ind_list: 'F&B' },
  { name: 'UIUC', value: 0, color: '#c6e3a7', ind_list: 'F&B' },
  { name: 'Tel Aviv', value: 0, color: '#c6e3a7', ind_list: 'F&B' },
  { name: 'UT Austin', value: 1, color: '#c6e3a7', ind_list: 'F&B' }
];

const YJ1data6 = [
  { name: 'Stanford', value: 108, color: '#5487b1', ind_list: 'Financial' },
  { name: 'Harvard', value: 95, color: '#63a1af', ind_list: 'Financial' },
  { name: 'MIT', value: 33, color: '#7ab8aa', ind_list: 'Financial' },
  { name: 'UPENN', value: 70, color: '#93caa8', ind_list: 'Financial' },
  { name: 'UC Berkeley', value: 38, color: '#add7a8', ind_list: 'Financial' },
  { name: 'Cornell', value: 20, color: '#c6e3a7', ind_list: 'Financial' },
  { name: 'CMU', value: 16, color: '#c6e3a7', ind_list: 'Financial' },
  { name: 'Columbia', value: 56, color: '#c6e3a7', ind_list: 'Financial' },
  { name: 'UMich', value: 15, color: '#c6e3a7', ind_list: 'Financial' },
  { name: 'Oxford', value: 32, color: '#c6e3a7', ind_list: 'Financial' },
  { name: 'UW', value: 7, color: '#c6e3a7', ind_list: 'Financial' },
  { name: 'UCLA', value: 6, color: '#c6e3a7', ind_list: 'Financial' },
  { name: 'NU', value: 8, color: '#c6e3a7', ind_list: 'Financial' },
  { name: 'Cambridge', value: 6, color: '#c6e3a7', ind_list: 'Financial' },
  { name: 'NYU', value: 18, color: '#c6e3a7', ind_list: 'Financial' },
  { name: 'USC', value: 7, color: '#c6e3a7', ind_list: 'Financial' },
  { name: 'UIUC', value: 13, color: '#c6e3a7', ind_list: 'Financial' },
  { name: 'Tel Aviv', value: 11, color: '#c6e3a7', ind_list: 'Financial' },
  { name: 'UT Austin', value: 4, color: '#c6e3a7', ind_list: 'Financial' }
];

const YJ1data7 = [
  { name: 'Stanford', value: 29, color: '#5487b1', ind_list: 'Healthcare' },
  { name: 'Harvard', value: 35, color: '#63a1af', ind_list: 'Healthcare' },
  { name: 'MIT', value: 21, color: '#7ab8aa', ind_list: 'Healthcare' },
  { name: 'UPENN', value: 22, color: '#93caa8', ind_list: 'Healthcare' },
  { name: 'UC Berkeley', value: 5, color: '#add7a8', ind_list: 'Healthcare' },
  { name: 'Cornell', value: 6, color: '#c6e3a7', ind_list: 'Healthcare' },
  { name: 'CMU', value: 3, color: '#c6e3a7', ind_list: 'Healthcare' },
  { name: 'Columbia', value: 11, color: '#c6e3a7', ind_list: 'Healthcare' },
  { name: 'UMich', value: 4, color: '#c6e3a7', ind_list: 'Healthcare' },
  { name: 'Oxford', value: 3, color: '#c6e3a7', ind_list: 'Healthcare' },
  { name: 'UW', value: 3, color: '#c6e3a7', ind_list: 'Healthcare' },
  { name: 'UCLA', value: 2, color: '#c6e3a7', ind_list: 'Healthcare' },
  { name: 'NU', value: 4, color: '#c6e3a7', ind_list: 'Healthcare' },
  { name: 'Cambridge', value: 1, color: '#c6e3a7', ind_list: 'Healthcare' },
  { name: 'NYU', value: 2, color: '#c6e3a7', ind_list: 'Healthcare' },
  { name: 'USC', value: 4, color: '#c6e3a7', ind_list: 'Healthcare' },
  { name: 'UIUC', value: 9, color: '#c6e3a7', ind_list: 'Healthcare' },
  { name: 'Tel Aviv', value: 0, color: '#c6e3a7', ind_list: 'Healthcare' },
  { name: 'UT Austin', value: 0, color: '#c6e3a7', ind_list: 'Healthcare' }
];

const YJ1data8 = [
  { name: 'Stanford', value: 100, color: '#5487b1', ind_list: 'Manufacturing' },
  { name: 'Harvard', value: 63, color: '#63a1af', ind_list: 'Manufacturing' },
  { name: 'MIT', value: 62, color: '#7ab8aa', ind_list: 'Manufacturing' },
  { name: 'UPENN', value: 35, color: '#93caa8', ind_list: 'Manufacturing' },
  { name: 'UC Berkeley', value: 44, color: '#add7a8', ind_list: 'Manufacturing' },
  { name: 'Cornell', value: 29, color: '#c6e3a7', ind_list: 'Manufacturing' },
  { name: 'CMU', value: 33, color: '#c6e3a7', ind_list: 'Manufacturing' },
  { name: 'Columbia', value: 13, color: '#c6e3a7', ind_list: 'Manufacturing' },
  { name: 'UMich', value: 16, color: '#c6e3a7', ind_list: 'Manufacturing' },
  { name: 'Oxford', value: 7, color: '#c6e3a7', ind_list: 'Manufacturing' },
  { name: 'UW', value: 30, color: '#c6e3a7', ind_list: 'Manufacturing' },
  { name: 'UCLA', value: 16, color: '#c6e3a7', ind_list: 'Manufacturing' },
  { name: 'NU', value: 19, color: '#c6e3a7', ind_list: 'Manufacturing' },
  { name: 'Cambridge', value: 8, color: '#c6e3a7', ind_list: 'Manufacturing' },
  { name: 'NYU', value: 14, color: '#c6e3a7', ind_list: 'Manufacturing' },
  { name: 'USC', value: 10, color: '#c6e3a7', ind_list: 'Manufacturing' },
  { name: 'UIUC', value: 14, color: '#c6e3a7', ind_list: 'Manufacturing' },
  { name: 'Tel Aviv', value: 16, color: '#c6e3a7', ind_list: 'Manufacturing' },
  { name: 'UT Austin', value: 18, color: '#c6e3a7', ind_list: 'Manufacturing' }
];

const YJ1data9 = [
  { name: 'Stanford', value: 27, color: '#5487b1', ind_list: 'Security' },
  { name: 'Harvard', value: 32, color: '#63a1af', ind_list: 'Security' },
  { name: 'MIT', value: 11, color: '#7ab8aa', ind_list: 'Security' },
  { name: 'UPENN', value: 19, color: '#93caa8', ind_list: 'Security' },
  { name: 'UC Berkeley', value: 7, color: '#add7a8', ind_list: 'Security' },
  { name: 'Cornell', value: 6, color: '#c6e3a7', ind_list: 'Security' },
  { name: 'CMU', value: 6, color: '#c6e3a7', ind_list: 'Security' },
  { name: 'Columbia', value: 6, color: '#c6e3a7', ind_list: 'Security' },
  { name: 'UMich', value: 7, color: '#c6e3a7', ind_list: 'Security' },
  { name: 'Oxford', value: 3, color: '#c6e3a7', ind_list: 'Security' },
  { name: 'UW', value: 5, color: '#c6e3a7', ind_list: 'Security' },
  { name: 'UCLA', value: 6, color: '#c6e3a7', ind_list: 'Security' },
  { name: 'NU', value: 3, color: '#c6e3a7', ind_list: 'Security' },
  { name: 'Cambridge', value: 3, color: '#c6e3a7', ind_list: 'Security' },
  { name: 'NYU', value: 3, color: '#c6e3a7', ind_list: 'Security' },
  { name: 'USC', value: 2, color: '#c6e3a7', ind_list: 'Security' },
  { name: 'UIUC', value: 5, color: '#c6e3a7', ind_list: 'Security' },
  { name: 'Tel Aviv', value: 2, color: '#c6e3a7', ind_list: 'Security' },
  { name: 'UT Austin', value: 7, color: '#c6e3a7', ind_list: 'Security' }
];

const YJ1data10 = [
  { name: 'Stanford', value: 187, color: '#5487b1', ind_list: 'Software' },
  { name: 'Harvard', value: 149, color: '#63a1af', ind_list: 'Software' },
  { name: 'MIT', value: 77, color: '#7ab8aa', ind_list: 'Software' },
  { name: 'UPENN', value: 93, color: '#93caa8', ind_list: 'Software' },
  { name: 'UC Berkeley', value: 110, color: '#add7a8', ind_list: 'Software' },
  { name: 'Cornell', value: 48, color: '#c6e3a7', ind_list: 'Software' },
  { name: 'CMU', value: 47, color: '#c6e3a7', ind_list: 'Software' },
  { name: 'Columbia', value: 30, color: '#c6e3a7', ind_list: 'Software' },
  { name: 'UMich', value: 38, color: '#c6e3a7', ind_list: 'Software' },
  { name: 'Oxford', value: 33, color: '#c6e3a7', ind_list: 'Software' },
  { name: 'UW', value: 35, color: '#c6e3a7', ind_list: 'Software' },
  { name: 'UCLA', value: 40, color: '#c6e3a7', ind_list: 'Software' },
  { name: 'NU', value: 36, color: '#c6e3a7', ind_list: 'Software' },
  { name: 'Cambridge', value: 24, color: '#c6e3a7', ind_list: 'Software' },
  { name: 'NYU', value: 24, color: '#c6e3a7', ind_list: 'Software' },
  { name: 'USC', value: 27, color: '#c6e3a7', ind_list: 'Software' },
  { name: 'UIUC', value: 25, color: '#c6e3a7', ind_list: 'Software' },
  { name: 'Tel Aviv', value: 12, color: '#c6e3a7', ind_list: 'Software' },
  { name: 'UT Austin', value: 27, color: '#c6e3a7', ind_list: 'Software' }
];

const YJ1data11 = [
  { name: 'Stanford', value: 48, color: '#5487b1', ind_list: 'Transportation' },
  { name: 'Harvard', value: 19, color: '#63a1af', ind_list: 'Transportation' },
  { name: 'MIT', value: 12, color: '#7ab8aa', ind_list: 'Transportation' },
  { name: 'UPENN', value: 8, color: '#93caa8', ind_list: 'Transportation' },
  { name: 'UC Berkeley', value: 11, color: '#add7a8', ind_list: 'Transportation' },
  { name: 'Cornell', value: 5, color: '#c6e3a7', ind_list: 'Transportation' },
  { name: 'CMU', value: 10, color: '#c6e3a7', ind_list: 'Transportation' },
  { name: 'Columbia', value: 2, color: '#c6e3a7', ind_list: 'Transportation' },
  { name: 'UMich', value: 7, color: '#c6e3a7', ind_list: 'Transportation' },
  { name: 'Oxford', value: 2, color: '#c6e3a7', ind_list: 'Transportation' },
  { name: 'UW', value: 10, color: '#c6e3a7', ind_list: 'Transportation' },
  { name: 'UCLA', value: 7, color: '#c6e3a7', ind_list: 'Transportation' },
  { name: 'NU', value: 3, color: '#c6e3a7', ind_list: 'Transportation' },
  { name: 'Cambridge', value: 2, color: '#c6e3a7', ind_list: 'Transportation' },
  { name: 'NYU', value: 4, color: '#c6e3a7', ind_list: 'Transportation' },
  { name: 'USC', value: 5, color: '#c6e3a7', ind_list: 'Transportation' },
  { name: 'UIUC', value: 6, color: '#c6e3a7', ind_list: 'Transportation' },
  { name: 'Tel Aviv', value: 5, color: '#c6e3a7', ind_list: 'Transportation' },
  { name: 'UT Austin', value: 6, color: '#c6e3a7', ind_list: 'Transportation' }
];


var wc_data_1 = "wc_map/map3_data/map3_dec4_0.csv" // all industries
var wc_data_2 = "wc_map/map3_data/map3_dec4_5.csv" // ai
var wc_data_3 = "wc_map/map3_data/map3_dec4_3.csv" // ecommerce
var wc_data_4 = "wc_map/map3_data/map3_dec4_8.csv" // education
var wc_data_5 = "wc_map/map3_data/map3_dec4_10.csv" //f/b
var wc_data_6 = "wc_map/map3_data/map3_dec4_2.csv" //financial
var wc_data_7 = "wc_map/map3_data/map3_dec4_4.csv" //healthcare
var wc_data_8 = "wc_map/map3_data/map3_dec4_7.csv" //manufacturing
var wc_data_9 = "wc_map/map3_data/map3_dec4_6.csv" //security
var wc_data_10 = "wc_map/map3_data/map3_dec4_1.csv" //software
var wc_data_11 = "wc_map/map3_data/map3_dec4_9.csv" //transportation
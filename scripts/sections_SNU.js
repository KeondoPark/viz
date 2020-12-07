var ind_list = ["AllIndustries", "AI", "Ecommerce", "Education", "F&B", "Financial", "Healthcare", "Manufacturing", "Security", "Software", "Transportation"]
var inTitle = 0, inYB1 = 0, inRBC = 0, inWC1 = 0, inWC2 = 0, inWC3 = 0, inYJ1 = 0, inYJ2 = 0, inKD1 = 0, inKD2 = 0
var funding_order = { 'Seed': 1, "Series A": 2, 'Series B': 3, 'Series C': 4, 'Series D+': 5, 'M&A': 6, 'IPO': 7, 'Others': 8 }
var funding_label = { 1: 'Seed', 2: "Series A", 3: 'Series B', 4: 'Series C', 5: 'Series D+', 6: 'M&A', 7: 'IPO', 8: 'Others' }

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

var width = 1200;
var height = 520;
var margin = { top: 0, left: 20, bottom: 40, right: 10 };



/**
 * scrollVis - encapsulates
 * all the code for the visualization
 * using reusable charts pattern:
 * http://bost.ocks.org/mike/chart/
 */
var scrollVis = function () {
  // constants to define the size
  // and margins of the vis area.

  // Keep track of which visualization
  // we are on and which was the last
  // index activated. When user scrolls
  // quickly, we want to call all the
  // activate functions that they pass.
  var lastIndex = -1;
  var activeIndex = 0;

  // main svg used for visualization
  var svg = null;

  // d3 selection that will be used
  // for displaying visualizations
  var g = null;

  // When scrolling to a new section
  // the activation function for that
  // section is called.
  var activateFunctions = [];
  // If a section has an update function
  // then it is called while scrolling
  // through the section with the current
  // progress through the section.
  var updateFunctions = [];

  /**
   * chart
   *
   * @param selection - the current d3 selection(s)
   *  to draw the visualization in. For this
   *  example, we will be drawing it in #vis
   */
  var chart = function (selection) {
    selection.each(function (data) {

      var KDdata = data.KDdata
      var YB_data = data.YB_data
      var raw_rbc_data = data.raw_rbc_data
      var worldMapData = data.worldMapData
      var WC1data = data.WC1data
      var WC2data = data.WC2data
      var YJPieData = data.YJPieData
      var USMapData = data.USMapData

      // create svg and give it a width and height
      //svg = d3.select(this).selectAll('svg')//.data([YB_data]);
      svg = d3.select("#vis").append("svg")
      //var svgE = svg.enter().append('svg');
      // @v4 use merge to combine enter and existing selection
      //svg = svg.merge(svgE);

      svg.attr('width', width + margin.left + margin.right);
      svg.attr('height', height + margin.top + margin.bottom);

      svg.append('g');

      // this group element will be used to contain all
      // other elements.
      g = svg.select('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      rbc_data = rbcModify(raw_rbc_data)

      setupVis(YB_data, rbc_data, worldMapData, WC1data, USMapData, WC2data, YJPieData, KDdata);

      setupSections();
    });
  };


  /**
   * setupVis - creates initial elements for all
   * sections of the visualization.
   *
   * @param wordData - data object for each word.
   * @param fillerCounts - nested data that includes
   *  element for each filler word type.
   * @param histData - binned histogram data
   */
  var setupVis = function (YB_data, rbc_data, worldMapData, WC1data, USMapData, WC2data, YJPieData, KDdata) {

    //---------------------------------------------------------------------
    // Yoobin's bar chart start
    //---------------------------------------------------------------------
    let xYB = d3.scaleBand().rangeRound([0, width]).padding(0.1);
    let yYB = d3.scaleLinear().rangeRound([height, 0]);

    xYB.domain(YB_data.map(function (d) { return d.type; }));
    maxYYB = d3.max(YB_data, d => +d.value)
    selected = ind_list
    filtered = YB_data.filter(function (d) {
      return selected.includes(d.ind_list)
    })
    yYB.domain([0, d3.max(filtered, function (d) { return +d.value; }) * 1.2]);

    g.append("g")
      .attr("class", "x_axis axis YB")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(xYB));

    g.append("g")
      .attr("class", "axis y_axis YB")
      .call(d3.axisLeft(yYB));

    g.selectAll(".rect")
      .data(filtered)
      .enter().append("rect")
      .attr("id", function (d) {
        return "bar" + ind_list.indexOf(d.ind_list)
      })
      .attr("y", function (d) {
        return yYB(+d.value)
      })
      .attr("x", function (d) { return xYB(d.type) + 8 * ind_list.indexOf(d.ind_list); })
      .attr("height", function (d) { return height - yYB(+d.value); })
      .attr("width", xYB.bandwidth() / 4)
      .attr("class", "rectYB")

    var legendYB = g.selectAll(".legend")
      .data(filtered)
      .enter()
      .append("g")
      .attr("class", "legend YB")

    var legend_keys = ["AllIndustries", "AI", "Ecommerce", "Education", "F&B", "Financial", "Healthcare", "Manufacturing", "Security", "Software", "Transportation"]

    var lineLegend = g.selectAll(".legend").data(legend_keys)
      .enter()
      .append("g")
      .attr("class", "legend YB")

    lineLegend.append("text").text(function (d) { return d; })
      .attr("transform", "translate(15,9")
    lineLegend.append("rect").attr("fill", function (d, i) {
      return "bar" + ind_list.indexOf(d).style("fill")
    })
      .attr("width", 10)
      .attr("height", 10)

    //---------------------------------------------------------------------
    // Yoobin's bar chart end
    //---------------------------------------------------------------------


    //---------------------------------------------------------------------
    // Woochul's racing bar chart start
    //---------------------------------------------------------------------

    let year = 2008;
    var top_n = 4;
    var tickDuration = 500;
    let barPadding = (height - (margin.bottom + margin.top)) / (top_n * 5);

    const halo = function (text, strokeWidth) {
      text.select(function () { return this.parentNode.insertBefore(this.cloneNode(true), this); })
        .style('fill', '#ffffff')
        .style('stroke', '#ffffff')
        .style('stroke-width', strokeWidth)
        .style('stroke-linejoin', 'round')
        .style('opacity', 0)
        .attr('class', 'rbc');

    }

    /*
    let rbcTitle = g
            .append('g')
            .append('text')
            .attr('class', 'rbc')
            //.attr('x', 100)
            .attr('y', 24)
            .attr('text-anchor','start')
            .attr('fill', '#5487b1')
            .html('Footprint of my Successful Business will go on')
            .attr('opacity',0);
            */

    let rbcSubTitle = g.append("text")
      .attr("class", "rbc")
      .attr("y", 40)
      .attr('text-anchor', 'start')
      .html("Total Asset, $m")
      .attr('opacity', 0)
      .attr('fill', '#5487b1')
      ;

    let rbcCaption = g.append('text')
      .attr('class', 'rbc')
      .attr('x', width)
      .attr('y', height - 5)
      .style('text-anchor', 'end')
      .attr('fill', '#5487b1')
      .html('Source: CrunchBase, yChart')
      .attr('opacity', 0);

    let yearSlice = rbc_data.filter(d => d.year == year && !isNaN(d.value))
      .sort((a, b) => b.value - a.value)
      .slice(0, top_n);

    yearSlice.forEach((d, i) => d.rank = i);

    let xRbc = d3.scaleLinear()
      .domain([0, d3.max(yearSlice, d => d.value)])
      .range([margin.left, width - margin.right - 65]);

    let yRbc = d3.scaleLinear()
      .domain([top_n, 0])
      .range([height - margin.bottom, margin.top + 55]);

    let xAxisRbc = d3.axisTop()
      .scale(xRbc)
      .ticks(width > 500 ? 5 : 2)
      .tickSize(-(height - margin.top - margin.bottom))
      .tickFormat(d => d3.format(',')(d))

    g.append('g')
      .attr('class', 'rbc xAxisRbc')
      //.attr('transform', `translate(0, ${margin.top})`)
      .attr('transform', `translate(0, 30)`)
      .call(xAxisRbc)
      .selectAll('.tick line')
      .classed('origin', d => d == 0)
      ;

    g.selectAll('rect.bar')
      .data(yearSlice, d => d.name)
      .enter()
      .append('rect')
      .attr('class', 'barRbc rbc')
      .attr('x', xRbc(0) + 1)
      .attr('width', d => xRbc(d.value) - xRbc(0) - 1)
      .attr('y', d => yRbc(d.rank) + 5)
      .attr('height', yRbc(1) - yRbc(0) - barPadding)
      .style('fill', d => d.colour)
      .attr('opacity', 0)
      ;

    g.selectAll('text.label')
      .data(yearSlice, d => d.name)
      .enter()
      .append('text')
      .attr('class', 'labelRbc rbc')
      .attr('x', d => xRbc(d.value) - 8)
      .attr('y', d => yRbc(d.rank) + 5 + ((yRbc(1) - yRbc(0)) / 2) + 1)
      .style('text-anchor', 'end')
      .html(d => d.name)
      ;

    g.selectAll('.valueLabel')
      .data(yearSlice, d => d.name)
      .enter()
      .append('text')
      .attr('class', 'valueLabel rbc')
      .attr('x', d => xRbc(d.value) + 5)
      .attr('y', d => yRbc(d.rank) + 5 + ((yRbc(1) - yRbc(0)) / 2) + 1)
      .text(d => d3.format(',.0f')(d.lastValue))
      ;

    let yearTextRbc = g.append('text')
      .attr('class', 'yearText rbc')
      .attr('x', width - margin.right)
      .attr('y', height - 25)
      .style('text-anchor', 'end')
      .attr('opacity', 0)
      .html(~~year)
      .call(halo, 10)

    let ticker = d3.interval(e => {

      if (inRBC == 0) {
        ticker.stop();
      } else {
        year = d3.format('.1f')((+year) + 0.1);
        /*
        g.selectAll('.rbc')
        .transition()
        .duration(600)
        .attr('opacity', 0);
        */
        //ticker.start();            
      }
      yearSlice = rbc_data.filter(d => d.year == year && !isNaN(d.value))
        .sort((a, b) => b.value - a.value)
        .slice(0, top_n);

      yearSlice.forEach((d, i) => d.rank = i);

      xRbc.domain([0, d3.max(yearSlice, d => d.value)]);

      g.select('.xAxisRbc')
        .transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .call(xAxisRbc);

      let bars = g.selectAll('.barRbc').data(yearSlice, d => d.name);

      bars.enter()
        .append('rect')
        .attr('class', d => `barRbc ${d.name.replace(/\s/g, '_')}`)
        .classed('rbc', true)
        .attr('x', xRbc(0) + 1)
        .attr('width', d => xRbc(d.value) - xRbc(0) - 1)
        .attr('y', d => yRbc(top_n + 1) + 5)
        .attr('height', yRbc(1) - yRbc(0) - barPadding)
        .style('fill', d => d.colour)
        .transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .attr('y', d => yRbc(d.rank) + 5);

      bars.transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .attr('width', d => xRbc(d.value) - xRbc(0) - 1)
        .attr('y', d => yRbc(d.rank) + 5);

      bars.exit()
        .transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .attr('width', d => xRbc(d.value) - xRbc(0) - 1)
        .attr('y', d => yRbc(top_n + 1) + 5)
        .remove();

      let labels = g.selectAll('.labelRbc')
        .data(yearSlice, d => d.name);

      labels.enter()
        .append('text')
        .attr('class', 'labelRbc rbc')
        .attr('x', d => xRbc(d.value) - 8)
        .attr('y', d => yRbc(top_n + 1) + 5 + ((yRbc(1) - yRbc(0)) / 2))
        .style('text-anchor', 'end')
        .attr('fill', '#000000')
        .style("font-size", "24px")
        .html(d => d.name)
        .transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .attr('y', d => yRbc(d.rank) + 5 + ((yRbc(1) - yRbc(0)) / 2) + 1);

      labels.transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .attr('fill', '#000000')
        .style("font-size", "24px")
        .attr('x', d => xRbc(d.value) - 8)
        .attr('y', d => yRbc(d.rank) + 5 + ((yRbc(1) - yRbc(0)) / 2) + 1);

      labels.exit()
        .transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .attr('x', d => xRbc(d.value) - 8)
        .attr('y', d => yRbc(top_n + 1) + 5)
        .remove();



      let valueLabels = g.selectAll('.valueLabel').data(yearSlice, d => d.name);

      valueLabels.enter()
        .append('text')
        .attr('class', 'valueLabel rbc')
        .attr('x', d => xRbc(d.value) + 5)
        .attr('y', d => yRbc(top_n + 1) + 5)
        .text(function (d) { return d3.format(',.0f')(d.lastValue) })
        .transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .attr('y', d => yRbc(d.rank) + 5 + ((yRbc(1) - yRbc(0)) / 2) + 1)
        .attr('fill', '#000000')
        .style('text-anchor', 'start')
        .style("font-size", "24px");

      valueLabels.transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .attr('x', d => xRbc(d.value) + 5)
        .attr('y', d => yRbc(d.rank) + 5 + ((yRbc(1) - yRbc(0)) / 2) + 1)
        .tween("text", function (d) {
          let i = d3.interpolateRound(d.lastValue, d.value);
          return function (t) {
            this.textContent = d3.format(',')(i(t));
          };
        })
        .attr('fill', '#000000')
        .style("font-size", "24px")
        .style('text-anchor', 'start');

      valueLabels.exit()
        .transition()
        .duration(tickDuration)
        .ease(d3.easeLinear)
        .attr('x', d => xRbc(d.value) + 5)
        .attr('y', d => yRbc(top_n + 1) + 5)
        .remove();


      yearTextRbc.html(~~year);

      if (year >= 2020) ticker.stop();
      year = d3.format('.1f')((+year) + 0.1);
    }, tickDuration);

    //---------------------------------------------------------------------
    // Woochul's racing bar chart end
    //---------------------------------------------------------------------

    //---------------------------------------------------------------------
    // Woochul's map 1 start
    //---------------------------------------------------------------------

    var map = g.append('g').attr("id", "map_WC1").attr("class", "WC1").attr("opacity", 0),
      places = g.append('g').attr("id", "places_WC1").attr("class", "WC1").attr("opacity", 0);

    var projection = d3.geoMercator()
      .translate([width / 2.2, height / 1.5]);

    var path = d3.geoPath()
      .projection(projection);

    var features = topojson.feature(worldMapData, worldMapData.objects.countries).features;

    g.append('g').selectAll("path")
      .data(features)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("fill", "#b8b8b8")
      .attr("class", "WC1")
      .attr('opacity', 0)
      .lower();

    //Define tooltip
    var tooltip_wc1 = d3.select('body').append('div')
      .attr('class', 'tooltip WC1')
      .attr('id', 'tooltipWC1')
      .style('opacity', 0)

    places.selectAll("circle")
      .data(WC1data)
      .enter().append("circle")
      .attr("cx", function (d) { return projection([d.long, d.lat])[0]; })
      .attr("cy", function (d) { return projection([d.long, d.lat])[1]; })
      .attr("r", function (d) { return d.city_count })
      .attr("class", "WC1")
      .attr("opacity", 0)
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut);

    places.selectAll("text")
      .data(WC1data)
      .enter().append("text")
      .attr("x", function (d) { return projection([d.long, d.lat])[0]; })
      .attr("y", function (d) { return projection([d.long, d.lat])[1] + 8; })
      .attr("class", "WC1")
      .attr("opacity", 0)

    function handleMouseOver(d) {  // Add interactivity

      if (inWC1) {
        tooltip_wc1
          .style('opacity', 0.9)
          .attr('width', 200)
          .attr('text-align', 'center')
        //Information to display on tooltip
        tooltip_wc1.html(function () {
          return d.city + d.city_count
        })
          .style('left', d3.event.pageX + 100 + 'px')
          .style('top', d3.event.pageY - 28 + 'px')
      }
    }

    function handleMouseOut(d, i) {
      tooltip_wc1.style('opacity', 0)
    }

    //---------------------------------------------------------------------
    // Woochul's map 1 end
    //---------------------------------------------------------------------

    //---------------------------------------------------------------------
    // Woochul's map 2 start
    //---------------------------------------------------------------------


    var wc2_width = 960,
      wc2_height = 600,
      centered,
      clicked_point;

    var wc_svg = d3.select("body").append("svg")
      .attr("width", wc2_width)
      .attr("height", wc2_height)
      .attr("class", "map")
      .attr("fill", "none")
      .attr("stroke", "#000")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round");

    var map = g.append("g").attr("id", "map_WC2").attr("class", "WC2").attr("opacity", 0),
      places = g.append("g").attr("id", "places_WC2").attr("class", "WC2").attr("opacity", 0);

    var projection = d3.geoAlbersUsa()
      .translate([wc2_width / 2, wc2_height / 2])
      .scale([1200]);

    var path = d3.geoPath();

    g.append("path")
      .attr("stroke", "#aaa")
      .attr("stroke-width", 0.5)
      .attr("d", path(topojson.mesh(USMapData, USMapData.objects.counties, function (a, b) { return a !== b && (a.id / 1000 | 0) === (b.id / 1000 | 0); })))
      .attr('class', 'WC2')
      .attr('opacity', 0);

    g.append("path")
      .attr("stroke-width", 0.1)
      .attr("d", path(topojson.mesh(USMapData, USMapData.objects.states, function (a, b) { return a !== b; })))
      .attr('class', 'WC2')
      .attr('opacity', 0);

    g.append("path")
      .attr("d", path(topojson.feature(USMapData, USMapData.objects.nation)))
      .attr('class', 'WC2')
      .attr('opacity', 0);


    //Define tooltip
    var tooltip_wc2 = d3.select('body').append('div')
      .attr('class', 'tooltip')
      .attr('id', 'tooltip')
      .style('opacity', 0)

    console.log(WC2data)


    places.selectAll("circle")
      .data(WC2data)
      .enter().append("circle")
      .attr("cx", function (d) { return projection([d.long, d.lat])[0]; })
      .attr("cy", function (d) { return projection([d.long, d.lat])[1]; })
      .attr("r", function (d) { return d.city_count })
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut)
      .attr('class', 'WC2')
      .attr('opacity', 0);


    places.selectAll("text")
      .data(WC2data)
      .enter().append("text")
      .attr("x", function (d) { return projection([d.long, d.lat])[0]; })
      .attr("y", function (d) { return projection([d.long, d.lat])[1] + 8; })
    //   .text(function(d) { return d.city});

    function handleMouseOver(d) {  // Add interactivity
      if (inWC2) {
        tooltip_wc2.style('opacity', 0.9)
        //Information to display on tooltip
        tooltip_wc2.html(function () {
          return d.city + "," + d.city_count
        })
          .style('left', d3.event.pageX + 10 + 'px')
          .style('top', d3.event.pageY - 28 + 'px')
      }
    }

    function handleMouseOut(d, i) {
      // Use D3 to select element, change color back to normal
      d3.select(this).attr({
        fill: "black",
      });

      // Select text by id and then remove
      d3.select("#t" + d.x + "-" + d.y + "-" + i).remove();  // Remove text location
    }





    //---------------------------------------------------------------------
    // Woochul's map 2 end
    //---------------------------------------------------------------------


    //---------------------------------------------------------------------
    // Woochul's map 3 start
    //---------------------------------------------------------------------


    //---------------------------------------------------------------------
    // Woochul's map 3 end
    //---------------------------------------------------------------------


    //---------------------------------------------------------------------
    // Youngjun's bar start
    //---------------------------------------------------------------------
    /*
    const YJ1data = [
      { name: 'SNU', value: 119, color: '#5487b1' },
      { name: 'KAIST', value: 52, color: '#63a1af' },
      { name: 'Korea', value: 40, color: '#7ab8aa' },
      { name: 'Yonsei', value: 32, color: '#93caa8' },
      { name: 'Hanyang', value: 23, color: '#add7a8' },
      { name: 'Stanford', value: 14, color: '#c6e3a7' },
      { name: 'POSTECH', value: 10, color: '#c6e3a7' },
      { name: 'Columbia', value: 9, color: '#c6e3a7' },
      { name: 'CMU', value: 8, color: '#c6e3a7' },
      { name: 'SKKU', value: 7, color: '#c6e3a7' },
      { name: 'Columbia', value: 6, color: '#c6e3a7' },
      { name: 'KHU', value: 6, color: '#c6e3a7' },
      { name: 'MIT', value: 6, color: '#c6e3a7' },
      { name: 'PNU', value: 6, color: '#c6e3a7' },
      { name: 'Hongik', value: 6, color: '#c6e3a7' },
      { name: 'UPENN', value: 5, color: '#c6e3a7' },
      { name: 'NU', value: 5, color: '#c6e3a7' },
      { name: 'Kangwon', value: 5, color: '#c6e3a7' },
      { name: 'Harvard', value: 5, color: '#c6e3a7' },
      { name: 'UC Berkley', value: 5, color: '#c6e3a7' },
      { name: 'Ajou', value: 5, color: '#c6e3a7' },
      { name: 'Cornell', value: 5, color: '#c6e3a7' }
    ];


    const xYJ = d3.scaleBand()
      .domain(YJ1data.map(d => d.name))
      .range([margin.left, width - margin.right])
      .padding(0.3);

    const yYJ = d3.scaleLinear()
      .domain([0, d3.max(YJ1data, d => d.value)]).nice()
      .range([height - margin.bottom, margin.top]);

    const xAxisYJ = g => g
      .attr('transform', `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(xYJ).tickSizeOuter(0))
      .call(g => g.select('.domain').remove())
      .call(g => g.selectAll('line').remove())
      .attr('class', 'YJ1');

    const yAxisYJ = g => g
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(yYJ))
      .call(g => g.select('.domain').remove())
      .call(g => g.selectAll('line')
        .attr('x2', width)
        .style('stroke', '#f5f5f5'))
      .attr('class', 'YJ1');


    //const svg = d3.select('#svg-area').append('svg').style('width', width).style('height', height);

    g.call(xAxisYJ);
    g.call(yAxisYJ);
    //svg.append('g')
    g.append('g')
      .selectAll('rect')
      .data(YJ1data)
      .enter()
      .append('rect')
      .attr('x', d => xYJ(d.name))
      .attr('y', d => yYJ(d.value))
      .attr('height', d => yYJ(0) - yYJ(d.value))
      .attr("rx", 15)
      .attr('width', xYJ.bandwidth())
      .attr('fill', d => d.color)
      .attr('data-x', d => d.name)
      .attr('data-y', d => d.value)
      .attr('data-color', d => d.color)
      .attr('class', 'rectYJ YJ1')
      .attr('opacity', 0)

    svg.node();

    const rectEl = document.getElementsByClassName('rectYJ');
    //const tooltop = document.getElementById('tooltip');  

    var tooltip_YJ1 = d3.select('body').append('div')
      .attr('class', 'tooltip YJ1')
      .attr('id', 'tooltipYJ1')
      .style('opacity', 0)

    for (const el of rectEl) {
      el.addEventListener('mouseover', (event) => {
        var tooltip = document.getElementById('tooltipYJ1');

        const target = event.target;
        const positionLeft = Number(target.getAttribute('x')) + Number(xYJ.bandwidth() / 2) - tooltip.clientWidth / 2;
        const positionTop = height - margin.top - target.getAttribute('height') - tooltip.clientHeight - 5;
        const color = target.dataset.color;
        const value = target.dataset.y;

        tooltip.innerText = value;
        tooltip.style.background = color;
        tooltip.style.top = positionTop + 'px';
        tooltip.style.left = positionLeft + 'px';
        tooltip.style.opacity = 1;
      });
    }
    */

    //---------------------------------------------------------------------
    // Youngjun's bar end
    //---------------------------------------------------------------------

    //---------------------------------------------------------------------
    // Youngjun's pie start
    //---------------------------------------------------------------------



    // Initialize the plot with the first dataset
    //updateYJ2(YJ2data1)
    //updateYJ2(YJ2data1)

    //---------------------------------------------------------------------
    // Youngjun's pie end
    //--------------------------------------------------------------------- 

    //---------------------------------------------------------------------
    // Keondo's line chart start
    //---------------------------------------------------------------------
    KDdata.forEach(function (d) {
      d.n = Number(d.Number_of_Employees_Avg)
      d.Last_Funding_Type = Number(funding_order[d.Last_Funding_Type])
    })

    KDdata.sort(function (a, b) { return d3.ascending(a.Last_Funding_Type, b.Last_Funding_Type) })

    // group the data: I want to draw one line per group
    var sumstat = d3.nest() // nest function allows to group the calculation per level of a factor
      .key(function (d) { return d.Industry; })
      .entries(KDdata);

    // What is the list of groups?
    allKeys = sumstat.map(function (d) { return d.key })

    var container = g.append("g")
      .classed("container-group", true);
    var chartgroup = container.append("g").classed("chart-group", true);
    gKD = container.selectAll(".chart-group")
      .data(sumstat)
      .enter()
    //.append('g')    
    //.attr({transform:"translate(100,100)"})//(d, i) => "translate(" + 100*i + "," + 100*i + ")");

    /*
  // Select all bars and bind data:  
  var paths = svg.selectAll(".chart-group")
            .selectAll(".path")
            .data(sumstat);
            */
    /*
    gKD = g.selectAll("uniqueChart")
      .data(sumstat)
      .enter()
      .append('g')
      */

    // Add X axis --> it is a date format
    var xKD = d3.scaleLinear()
      //.domain(d3.extent(data, function(d) { return d.Last_Funding_Type; }))
      .domain([0, 9])
      .range([0, width / 4 - margin.left - margin.right]);

    gKD.append("g")
      .attr("transform", function (d, i) { return "translate(" + (width / 4) * ((i - 1) % 4) + "," + ((height / 3) * (parseInt((i - 1) / 4) + 1) - margin.bottom) + ")" })
      .attr("class", "KD1")
      .call(d3.axisBottom(xKD).ticks(3))
      .attr('opacity', 0);

    //Add Y axis
    var yKD = d3.scaleLinear()
      .domain([0, d3.max(KDdata, function (d) { return +d.n; })])
      .range([height / 3 - margin.top - margin.bottom, 0]);

    gKD.append("g")
      .attr("class", "KD1")
      .attr("transform", function (d, i) { return "translate(" + (width / 4) * ((i - 1) % 4) + "," + (height / 3) * (parseInt((i - 1) / 4)) + ")" })
      .call(d3.axisLeft(yKD).ticks(5))
      .attr('opacity', 0);

    // color palette
    var color = d3.scaleOrdinal()
      .domain(allKeys)
      .range(['#5487b1', '#5487b1', '#63a1af', '#63a1af', '#7ab8aa', '#93caa8', '#add7a8', '#c6e3a7', '#c6e3a7', '#E7846F', '#E7846F'])

    // Draw the line
    gKD//.selectAll("path")
      //.data(sumstat)
      .append('g')
      .append("path")
      .attr("fill", function (d) { return color(d.key) })
      .attr("stroke", "none")
      .attr("d", function (d) {
        console.log(d)
        return d3.area()
          .x(function (d) { return xKD(d.Last_Funding_Type) })
          .y0(yKD(0))
          .y1(function (d) { return yKD(+d.n) })
          (d.values)
      })
      .attr("transform", function (d, i) { return "translate(" + (width / 4) * ((i - 1) % 4) + "," + (height / 3) * (parseInt((i - 1) / 4)) + ")" })
      .attr('class', 'KD1')
      .attr('opacity', 0);

    // Add titles

    gKD.append('g')
      //.selectAll('text')
      //.data(KDdata)
      //.enter()
      .append("text")
      .attr("text-anchor", "start")
      //.attr("y", 0)
      //.attr("x", 0)
      .text(function (d) { return (d.key) })
      .style("fill", function (d) { return color(d.key) })
      .attr("transform", function (d, i) { return "translate(" + ((width / 4) * ((i - 1) % 4) + 100) + "," + ((height / 3) * (parseInt((i - 1) / 4)) + 20) + ")" })
      .attr('class', 'KD1')
      .attr('opacity', 0);


    //---------------------------------------------------------------------
    // Keondo's line chart end
    //---------------------------------------------------------------------
  }

  /**
   * setupSections - each section is activated
   * by a separate function. Here we associate
   * these functions to the sections based on
   * the section's index.
   *
   */
  var setupSections = function () {
    // activateFunctions are called each
    // time the active section changes
    activateFunctions[0] = showTitle;
    //activateFunctions[1] = showFillerTitle;
    activateFunctions[1] = showYooBin;
    activateFunctions[2] = showRbc;
    activateFunctions[3] = showWooChul1;
    activateFunctions[4] = showWooChul2;
    activateFunctions[5] = showWooChul3;
    activateFunctions[6] = showYoungJun1;
    activateFunctions[7] = showYoungJun2;
    activateFunctions[8] = showKeondo1;
    activateFunctions[9] = showHistAll;

    // updateFunctions are called while
    // in a particular section to update
    // the scroll progress in that section.
    // Most sections do not need to be updated
    // for all scrolling and so are set to
    // no-op functions.
    for (var i = 0; i < 9; i++) {
      updateFunctions[i] = function () { };
    }
    updateFunctions[7] = updateCough;
  };

  /**
   * ACTIVATE FUNCTIONS
   *
   * These will be called their
   * section is scrolled to.
   *
   * General pattern is to ensure
   * all content for the current section
   * is transitioned in, while hiding
   * the content for the previous section
   * as well as the next section (as the
   * user may be scrolling up or down).
   *
   */

  /**
   * showTitle - initial title
   *
   * hides: count title
   * (no previous step to hide)
   * shows: intro title
   *
   */
  function showTitle() {

    inTitle = 1
    inYB1 = 0

    g.selectAll('.YB')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    g.selectAll('.rectYB')
      .transition()
      .duration(600)
      .attr('opacity', 0);

    g.selectAll('.rbc')
      .transition()
      .duration(600)
      .attr('opacity', 0);

    $('.YB')
      .css("opacity", 0)

    g.selectAll('.openvis-title')
      .transition()
      .duration(600)
      .attr('opacity', 1.0);
  }

  /**
   * showFillerTitle - filler counts
   *
   * hides: intro title
   * hides: square grid
   * shows: filler count title
   *
   */
  function showYooBin() {

    inTitle = 0
    inYB1 = 1
    inRBC = 0

    g.selectAll('.openvis-title')
      .transition()
      .duration(0)
      .attr('opacity', 0);


    g.selectAll('.YB')
      .transition()
      .duration(600)
      .attr('opacity', 1.0);

    $('.YB')
      .css("opacity", 1)


    g.selectAll('.rectYB')
      .transition()
      .duration(600)
      .attr('opacity', 0.5);

    g.selectAll('.rbc')
      .transition()
      .duration(600)
      .attr('opacity', 0);

  }
  function showRbc() {

    inYB1 = 0
    inRBC = 1
    inWC1 = 0

    g.selectAll('.YB')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    g.selectAll('.rectYB')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    $('.YB')
      .css("opacity", 0)

    g.selectAll('.WC1')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    g.selectAll('.rbc')
      .transition()
      .duration(600)
      .attr('opacity', 1);
  }


  function showWooChul1() {
    inRBC = 0
    inWC1 = 1
    inWC2 = 0

    g.selectAll('.rbc')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    g.selectAll('.WC1')
      .transition()
      .duration(600)
      .attr('opacity', 1);

    g.selectAll('.WC2')
      .transition()
      .duration(0)
      .attr('opacity', 0);
  }

  function showWooChul2() {
    inWC1 = 0
    inWC2 = 1
    inWC3 = 0

    g.selectAll('.WC1')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    g.selectAll('.WC2')
      .transition()
      .duration(600)
      .attr('opacity', 1);

    g.selectAll('.WC3')
      .transition()
      .duration(0)
      .attr('opacity', 0);
  }

  function showWooChul3() {
    inWC2 = 0
    inWC3 = 1
    inYJ1 = 0

    g.selectAll('.WC2')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    g.selectAll('.WC3')
      .transition()
      .duration(600)
      .attr('opacity', 1);

    g.selectAll('.YJ1')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    $('.YJ1')
      .css('opacity',0)
  }

  function showYoungJun1() {

    inWC3 = 0
    inYJ1 = 1
    inYJ2 = 0

    g.selectAll('.WC3')
      .transition()
      .duration(0)
      .attr('opacity', 0);
    $('.YJ1')
      .css('opacity',1)


    YJ1update(YJ1data1)
    YJ1update(YJ1data1)
    /*
    g.selectAll('.YJ1')
      .transition()
      .duration(600)
      .attr('opacity', 1);
      */

    g.selectAll('.YJ2')
      .transition()
      .duration(0)
      .attr('opacity', 0);
    
    $('.YJ2')
      .css('opacity',0)
      
  }



  function showYoungJun2() {

    inYJ1 = 0
    inYJ2 = 1
    inKD1 = 0

    
    updateYJ2(YJ2data1)
    updateYJ2(YJ2data1)   


    g.selectAll('.YJ1')
      .transition()
      .duration(0)
      .attr('opacity', 0);
    
    $('.YJ1')
      .css('opacity',0)

    $('.YJ2')
      .css('opacity',1)

    /*
      g.selectAll('.YJ2')
      .transition()
      .duration(600)
      .attr('opacity', 1);*/

    g.selectAll('.KD1')
      .transition()
      .duration(0)
      .attr('opacity', 0);

  }

  function showKeondo1() {

    inYJ2 = 0
    inKD1 = 1
    inKD2 = 0

    g.selectAll('.YJ2')
      .transition()
      .duration(0)
      .attr('opacity', 0);

    $('.YJ2')
      .css('opacity',0)

    g.selectAll('.KD1')
      .transition()
      .duration(600)
      .attr('opacity', 1);

    g.selectAll('.KD2')
      .transition()
      .duration(0)
      .attr('opacity', 0);

  }

  /**
   * showHistAll - show all histogram
   *
   * hides: cough title and color
   * (previous step is also part of the
   *  histogram, so we don't have to hide
   *  that)
   * shows: all histogram bars
   *
   */
  function showHistAll() {

    g.selectAll('.YJ1')
      .transition()
      .duration(0)
      .attr('opacity', 0);
  }

  /**
   * showCough
   *
   * hides: nothing
   * (previous and next sections are histograms
   *  so we don't have to hide much here)
   * shows: histogram
   *
   */
  function showCough() {
    /*
    // ensure the axis to histogram one
    showAxis(xAxisHist);

    g.selectAll('.hist')
      .transition()
      .duration(600)
      .attr('y', function (d) { return yHistScale(d.length); })
      .attr('height', function (d) { return height - yHistScale(d.length); })
      .style('opacity', 1.0);
      */
  }

  /**
   * showAxis - helper function to
   * display particular xAxis
   *
   * @param axis - the axis to show
   *  (xAxisHist or xAxisBar)
   */
  function showAxis(axis) {
    g.select('.x.axis')
      .call(axis)
      .transition().duration(500)
      .style('opacity', 1);
  }

  /**
   * hideAxis - helper function
   * to hide the axis
   *
   */
  function hideAxis() {
    g.select('.x.axis')
      .transition().duration(500)
      .style('opacity', 0);
  }

  /**
   * UPDATE FUNCTIONS
   *
   * These will be called within a section
   * as the user scrolls through it.
   *
   * We use an immediate transition to
   * update visual elements based on
   * how far the user has scrolled
   *
   */

  /**
   * updateCough - increase/decrease
   * cough text and color
   *
   * @param progress - 0.0 - 1.0 -
   *  how far user has scrolled in section
   */
  function updateCough(progress) {
    g.selectAll('.cough')
      .transition()
      .duration(0)
      .attr('opacity', progress);

    g.selectAll('.hist')
      .transition('cough')
      .duration(0)
      .style('fill', function (d) {
        return (d.x0 >= 14) ? coughColorScale(progress) : '#008080';
      });
  }

  /**
   * DATA FUNCTIONS
   *
   * Used to coerce the data into the
   * formats we need to visualize
   *
   */



  /**
   * groupByWord - group words together
   * using nest. Used to get counts for
   * barcharts.
   *
   * @param words
   */
  function rbcModify(raw_rbc_data) {
    rbc_data = raw_rbc_data.forEach(d => {
      d.value = +d.value,
        d.lastValue = +d.lastValue,
        d.value = isNaN(d.value) ? 0 : d.value,
        d.year = +d.year,
        d.colour = d3.hsl(Math.random() * 360, 0.75, 0.75)
    });

    return raw_rbc_data
  }



  /**
   * activate -
   *
   * @param index - index of the activated section
   */
  chart.activate = function (index) {
    activeIndex = index;
    var sign = (activeIndex - lastIndex) < 0 ? -1 : 1;
    var scrolledSections = d3.range(lastIndex + sign, activeIndex + sign, sign);
    scrolledSections.forEach(function (i) {
      activateFunctions[i]();
    });
    lastIndex = activeIndex;
  };

  /**
   * update
   *
   * @param index
   * @param progress
   */
  chart.update = function (index, progress) {
    updateFunctions[index](progress);
  };

  // return chart function
  return chart;
};


/**
 * display - called once data
 * has been loaded.
 * sets up the scroller and
 * displays the visualization.
 *
 * @param data - loaded tsv data
 */
function display(error, YB_data, raw_rbc_data, worldMapData, WC1data, USMapData, WC2data, YJPieData, KDdata) {

  // create a new plot and
  // display it
  var plot = scrollVis();
  d3.select('#vis')
    //.datum(data)
    .datum({
      "YB_data": YB_data,
      "raw_rbc_data": raw_rbc_data,
      "worldMapData": worldMapData,
      "WC1data": WC1data,
      "USMapData": USMapData,
      "WC2data": WC2data,
      "YJPieData": YJPieData,
      "KDdata": KDdata
    })
    .call(plot);

  // setup scroll functionality
  var scroll = scroller()
    .container(d3.select('#graphic'));

  // pass in .step selection as the steps
  scroll(d3.selectAll('.step'));

  // setup event handling
  scroll.on('active', function (index) {
    // highlight current step text
    d3.selectAll('.step')
      .style('opacity', function (d, i) { return i === index ? 1 : 0.1; });

    // activate current section
    plot.activate(index);
  });

  scroll.on('progress', function (index, progress) {
    plot.update(index, progress);
  });
}

// load data and display
//d3.tsv('data/words.tsv', display);
d3.queue()
  .defer(d3.csv, 'data/final.csv')
  .defer(d3.csv, 'data/rbc_112006.csv')
  .defer(d3.json, "https://unpkg.com/world-atlas@1/world/110m.json")
  .defer(d3.csv, "data/map_1_nov27.csv")
  .defer(d3.json, "https://unpkg.com/us-atlas@1/us/10m.json")
  .defer(d3.csv, 'data/map2_nov30.csv')
  .defer(d3.csv, "data/korea_major_rank.csv")
  .defer(d3.tsv, 'data/crunch_data_grp_NoEmployees2.tsv')

  .await(display)








//---------------------------------------------------------------------
// Yoobin's bar chart filter interactions start
//---------------------------------------------------------------------  

d3.selectAll("filter").on("change", updateBarYB)
updateBarYB()
d3.selectAll(".industry1").on("change", updateBarYB)
updateBarYB()
d3.selectAll(".industry2").on("change", updateBarYB)
updateBarYB()


function updateBarYB() {
  d3.selectAll(".filter").each(function (d) {
    bt = d3.select(this)
    if (bt.property("checked")) {
      svg = d3.select(this).selectAll('svg')
      g = d3.selectAll('svg').select('g')
      console.log(svg)
      g.select("#bar0").transition().attr("opacity", 0)
      g.select("#bar1").transition().attr("opacity", 0)
      g.select("#bar2").transition().attr("opacity", 0)
      g.selectAll("#bar3").transition().attr("opacity", 0)
      g.selectAll("#bar4").transition().attr("opacity", 0)
      g.selectAll("#bar5").transition().attr("opacity", 0)
      g.selectAll("#bar6").transition().attr("opacity", 0)
      g.selectAll("#bar7").transition().attr("opacity", 0)

      d3.selectAll(".industry1").each(function (d) {
        cb = d3.select(this)
        grp = cb.property("value")

        if (cb.property("checked")) {
          num = ind_list.indexOf(cb.property("value"))
          g.selectAll("#bar" + num).transition().attr("opacity", 0.25)
        }
        else {
          num = ind_list.indexOf(cb.property("value"))
          g.selectAll("#bar" + num).transition().attr("opacity", 0)
        }
      })

      d3.selectAll(".industry2").each(function (d) {
        cb = d3.select(this)
        grp = cb.property("value")

        if (cb.property("checked")) {
          console.log(cb.property("value"))
          num = ind_list.indexOf(cb.property("value"))
          g.selectAll("#bar" + num).transition().attr("opacity", 1)
        }
      })
    }
  }
  )
}

//---------------------------------------------------------------------
// END 
//---------------------------------------------------------------------  




// A function that create / update the plot for a given variable:
function updateYJ2(data) {

  if (!inYJ2) return;

  var YJ2width = 650
  YJ2height = 650
  YJ2margin = 40

  // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
  // var radius = Math.min(width, height) / 2 - margin
  var YJ2radius = 200

  // append the svg object to the div called 'my_dataviz'
  /*
  var YJ2svg = d3.select("#YJ2_dataviz")
    .append("svg")
    .attr("width", YJ2width)
    .attr("height", YJ2height)
    .append("g")
    .attr("transform", "translate(" + YJ2width / 2 + "," + YJ2height / 2 + ")")
*/
  svgYJ2 = d3.selectAll('svg')
  gYJ2 = svgYJ2.select('g').append('g').attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
  gYJ2.append("g")
    .attr("class", "slices");
  gYJ2.append("g")
    .attr("class", "labels");
  gYJ2.append("g")
    .attr("class", "lines");


  // set the color scale
  var YJ2color = d3.scaleOrdinal()
    .domain(['Engineering', 'Economics', 'Business', 'Natural Science', 'etc'])
    // .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"]);
    .range(d3.schemeDark2);



  // Compute the position of each group on the pie:
  var YJ2pie = d3.pie()
    .value(function (d) { return d.value; })
  // .sort(null)
  // .sort(function(a, b) { console.log(a) ; return d3.ascending(a.key, b.key);} ) // This make sure that group order remains the same in the pie chart
  var YJ2arc = d3.arc().innerRadius(YJ2radius / 3).outerRadius(YJ2radius);
  var YJ2outerArc = d3.arc()
    .innerRadius(YJ2radius * 0.9)
    .outerRadius(YJ2radius * 0.9);
  var data_ready = YJ2pie(d3.entries(data))

  // map to data
  var YJ2u = gYJ2.selectAll("path")
    .data(data_ready)

  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  YJ2u
    .enter()
    .append('path')
    .merge(YJ2u)
    .transition()
    .duration(500)
    .attr('d', YJ2arc)
    .attr('fill', function (d) { return (YJ2color(d.data.key)) })
    .attr("stroke", "grey")
    .style("stroke-width", "2px")
    .attr('class', 'YJ2')
    .attr("opacity", 0.6)

  // remove the group that is not present anymore
  YJ2u
    .exit()
    .remove();

  var YJ2text = svgYJ2.select(".labels").selectAll("text")
    .data(data_ready);

  YJ2text.enter()
    .append("text")
    .attr("dy", ".35em")
    .text(function (d) {
      return d.data.key;
    })
    .attr('fill','#000000')
    .attr('class', 'YJ2');

  function midAngle(d) {
    return d.startAngle + (d.endAngle - d.startAngle) / 2;
  }

  YJ2text.transition().duration(1000)
    .attrTween("transform", function (d) {            
      this._current = this._current || d;
      var interpolate = d3.interpolate(this._current, d);
      this._current = interpolate(0);
      return function (t) {
        var YJ2d2 = interpolate(t);
        var YJ2pos = YJ2outerArc.centroid(YJ2d2);
        YJ2pos[0] = YJ2radius * (midAngle(YJ2d2) < Math.PI ? 1.3 : -1.3);
        return "translate(" + YJ2pos + ")";
      };
    })
    .styleTween("text-anchor", function (d) {
      this._current = this._current || d;
      var interpolate = d3.interpolate(this._current, d);
      this._current = interpolate(0);
      return function (t) {
        var YJ2d2 = interpolate(t);
        return midAngle(YJ2d2) < Math.PI ? "start" : "end";
      };
    });

  YJ2text.exit()
    .remove();


  var polyline = svgYJ2.select(".lines").selectAll("polyline")
    .data(data_ready);

  polyline.enter()
    .append("polyline")
    .attr('class', 'YJ2')
    .attr('stroke','#000000');

  polyline.transition().duration(1000)
    .attrTween("points", function (d) {
      this._current = this._current || d;
      var interpolate = d3.interpolate(this._current, d);
      this._current = interpolate(0);
      return function (t) {
        var d2 = interpolate(t);
        var pos = YJ2outerArc.centroid(d2);
        pos[0] = YJ2radius * 1.2 * (midAngle(d2) < Math.PI ? 1 : -1);
        return [YJ2arc.centroid(d2), YJ2outerArc.centroid(d2), pos];
      };
    });

  polyline.exit()
    .remove();
}





// A function that create / update the plot for a given variable:
function YJ1update(data) {

  if (!inYJ1) return;

  YJ1svg = d3.selectAll('svg')
  YJ1g = YJ1svg.select('g').append('g')//.attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')

  // Initialize the X axis
  var YJ1x = d3.scaleBand()
  .range([0, width])
  .padding(0.2);

  var YJ1xAxis = YJ1g.append("g")
  .attr("transform", "translate(0," + height + ")")
  .attr("class", "YJ1")


  // Initialize the Y axis
  var YJ1y = d3.scaleLinear()
  .range([height, 0]);

  var YJ1yAxis = YJ1g.append("g")
  .attr("class", "YJ1 YJ1Yaxis")
  .style('font-size', 15)

  // Update the X axis
  YJ1x.domain(data.map(function (d) { return d.name; }))
  YJ1xAxis.call(d3.axisBottom(YJ1x))

  // Update the Y axis
  YJ1y.domain([0, d3.max(data, function (d) { return d.value })]);
  YJ1yAxis.transition().duration(1000).call(d3.axisLeft(YJ1y));


  var YJ1tooltip = d3.select("body").append("div")
    .append('g')  
    .attr("class", "YJ1 YJ1toolTip")    
    ;


  // Create the u variable
  var YJ1u = YJ1g.selectAll("rect")
    .data(data)

    YJ1u
    .enter()
    .append("rect") // Add a new rect for each new elements
    .merge(YJ1u) // get the already existing elements as well
    .transition() // and apply changes to all of them
    .duration(1000)
    .attr("x", function (d) { return YJ1x(d.name); })
    .attr("y", function (d) { return YJ1y(d.value); })
    .attr("width", YJ1x.bandwidth())
    .attr("height", function (d) { return height - YJ1y(d.value); })
    .attr("rx", 10)
    .attr('fill', d => d.color)
    .attr('class','YJ1') ;

    YJ1g.selectAll("rect")
    .on("mouseover", function () { YJ1tooltip.style("display", "block"); })
    .on("mouseout", function () { YJ1tooltip.style("display", "none"); })
    .on("mousemove", function (d) {      
      YJ1tooltip.style("left", (d3.event.pageX + 10) + "px");
      YJ1tooltip.style("top", (d3.event.pageY - 10) + "px");
      YJ1tooltip.style('z-index','999')
      YJ1tooltip.html("<br><p style='font:15px sans-serif'> <strong>" + d.name + "</strong> <br><span style='color:black'>" + d.value + "</span>");
    });
  // If less name in the new dataset, I delete the ones not in use anymore
  YJ1u
    .exit()
    .remove();
}
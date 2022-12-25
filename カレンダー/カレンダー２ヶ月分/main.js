import '../stylesheets/main.scss';


var classNames = new Array('working','closed');
var holyday = new Object();


//設定ここから
//定休日の曜日フラグ　休みは1
var closed_Sun = 0; //日曜日
var closed_Mon = 0; //月曜日
var closed_Tue = 0; //火曜日
var closed_Wed = 1; //水曜日
var closed_Thu = 0; //木曜日
var closed_Fri = 0; //金曜日
var closed_Sat = 0; //土曜日

//その他営業・休業の設定　holyday["日にち"] = n; nに入れる数字は、臨時営業日→0、臨時休業日→1
//臨時営業日
holyday["2022/12/13"] = 1;
holyday["2022/12/20"] = 1;

//臨時休業日
holyday["2023/1/10"] = 0;
holyday["2023/2/10"] = 0;
holyday["2023/3/10"] = 0;
holyday["2023/4/10"] = 0;
holyday["2023/5/10"] = 0;
holyday["2023/6/10"] = 0;
holyday["2023/7/10"] = 0;
holyday["2023/8/10"] = 0;
holyday["2023/9/10"] = 0;
//設定ここまで


var today = new Date();
var cal_year = today.getYear();
var cal_month = today.getMonth() + 1;
var cal_day = today.getDate();
if (cal_year < 1900) { cal_year += 1900; }
var cal = document.getElementById("calendar");

function nextCal(){
cal_month += 1;
if(cal_month > 12){
cal_month = 1;
cal_year += 1;
}
writeCal(cal_year,cal_month,0);
}

function writeCal(year,month,day){
var calendars = new Array(0,31,28,31,30,31,30,31,31,30,31,30,31);
var weeks = new Array("日","月","火","水","木","金","土");
// var monthName = new Array('none','1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月');
var monthName = new Array('none','1','2','3','4','5','6','7','8','9','10','11','12');

var cal_flag = 0;
if(year % 100 == 0 || year % 4 != 0){
if(year % 400 != 0){
cal_flag = 0;
}
else{
cal_flag = 1;
}
}
else if(year % 4 == 0){
cal_flag = 1;
}
else{
cal_flag = 0;
}
calendars[2] += cal_flag;

var cal_start_day = new Date(year,month-1,1).getDay();

var cal_tags = "<table border='0' cellspacing='0' cellpadding='0' class='calendar'>";
cal_tags += "<tr><th colspan='7'>";
// cal_tags += year + "年 " + monthName[month] + "</th></tr>";
cal_tags += year + ". " + monthName[month] + "</th></tr>";
cal_tags += "<tr class='headline'>";
for(var i=0;i<weeks.length;i++){
cal_tags += "<td>" + weeks[i] + "</td>";
}
cal_tags += "</tr><tr>";
for(var i=0;i < cal_start_day;i++){
cal_tags += "<td>&nbsp;</td>";
}

for(var cal_day_cnt = 1;cal_day_cnt <= calendars[month];cal_day_cnt++){
var cal_day_match = year + "/" + month + "/" + cal_day_cnt;
var dayClass = "";

if(holyday[cal_day_match] != undefined){
dayClass = ' class="'+classNames[holyday[cal_day_match]]+'"';
}
else if(cal_start_day == 0 && closed_Sun == 1){
dayClass = ' class="closed"';
}
else if(cal_start_day == 1 && closed_Mon == 1){
dayClass = ' class="closed"';
}
else if(cal_start_day == 2 && closed_Tue == 1){
dayClass = ' class="closed"';
}
else if(cal_start_day == 3 && closed_Wed == 1){
dayClass = ' class="closed"';
}
else if(cal_start_day == 4 && closed_Thu == 1){
dayClass = ' class="closed"';
}
else if(cal_start_day == 5 && closed_Fri == 1){
dayClass = ' class="closed"';
}
else if(cal_start_day == 6 && closed_Sat == 1){
dayClass = ' class="closed"';
}
cal_tags += "<td "+dayClass+">" + cal_day_cnt + "</td>";
if(cal_start_day == 6){
cal_tags += "</tr>";
if(cal_day_cnt < calendars[month]){
cal_tags += "<tr>";
}
cal_start_day = 0;
}
else{
cal_start_day++;
}
}
while(cal_start_day <= 6 && cal_start_day != 0){
cal_tags += "<td>&nbsp;</td>";
if(cal_start_day == 6){
cal_tags += "</tr>";
}
cal_start_day++;
}
cal_tags += "</table>";
cal.innerHTML += cal_tags;
}

writeCal(cal_year,cal_month,cal_day);
nextCal(); // カレンダー１個の場合は削除
//--></SCRIPT>

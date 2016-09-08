/*
	It's been a long time! After a series of interviews, I realized that my 
	fundamental JS skill is not that good.So pick this up agian! Let's deal with
	some easy tests first!
	This one is really easy, I guess it's only a practice of Date APIs.
	Just return the day of a pecific date.
*/

const dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// Will always receive the date in dd-mm-yyyy format. i.e: 01-02-5
function getGoodOldDay(input){
    var arr = input.split('-');
    let myDate = new Date();
    myDate.setFullYear(arr[2], arr[1] - 1 , arr[0]);
    let dayIndex = myDate.getDay();
    return dayArr[dayIndex];
};
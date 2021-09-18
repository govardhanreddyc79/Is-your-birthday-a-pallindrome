const birthdayDate = document.querySelector("#birthday-date")
const checkBtn = document.querySelector(".show-btn")
var displayMessage = document.querySelector(".output-msg")


function reverseDate(dateOfBirth){
    var charList = dateOfBirth.split('');
    var reversedList = charList.reverse()
    var dateOfBirthReverse = reversedList.join('')
    return dateOfBirthReverse
}

function isPallindrome(date){
    var reverse = reverseDate(date)
    return date === reverse
}

function checkPallindromeForAllPatterns(date){
    var allDatePatterns = getAllPatterns(date)
    var pallindromeFlag = false
    for(let i=0; i<allDatePatterns.length; i++){
        if(isPallindrome(allDatePatterns[i])){
            pallindromeFlag = true
            break
        }
    }
    return pallindromeFlag
}

function dateToString(birthdayDate){
    var strDate = {'day':'','month':'',"year":''}
    if(birthdayDate.day<10){
        strDate.day = '0' + birthdayDate.day
    }else{
        strDate.day = birthdayDate.day
    }
    if(birthdayDate.month<10){
        strDate.month = '0' + birthdayDate.month
    }else{
        strDate.month = birthdayDate.month
    }
    strDate.year = birthdayDate.year
    
    return strDate

}

function getAllPatterns(date){
    var dateStr = dateToString(date)

    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year
    var yyyymmdd = dateStr.year + dateStr.month + dateStr.day
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2)
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2)
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd]

}



checkBtn.addEventListener("click",checkPallindrome)
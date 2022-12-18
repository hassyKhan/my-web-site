
function checkPalindrome(string) {

    const len = string.length;
    if(len>=10)
    {
    document.getElementById("demo").innerHTML = "Please Enter String of length less than 10";
    return ;
    }
     for (let i = 0; i < len / 2; i++) {
    
        if (string[i] !== string[len - 1 - i]) {
            // return 'It is not a palindrome';
    document.getElementById("demo").innerHTML = "not a palindrome";
    return '';
        }
    }
    document.getElementById("demo").innerHTML = "palindrome";
    return '';
    }
    
    const string = 'School';
    
    const value = checkPalindrome(string);
    
    console.log(value);
    
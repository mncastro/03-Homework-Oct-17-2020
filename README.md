# 03 JavaScript: Password Generator

## Functions and logic

This application generates a random password based on the safety criteria of the OWASP Foundation (https://www.owasp.org/index.php/Password_special_characters). 

## Use

Accessible application to employees wishing to generate a strong password for greater security.


## How to use it

1. When you click the GENERATE PASSWORD button, the user will receive a prompt asking for the number of 
of characters the password will have. The minimum length is 8 characters and the maximum allowed is 128.

2. If the user inputs a number outside the minimum/maximum length, then the application will repreat the prompt.

3. After, the user will receive confirmation prompts for the special characters that the password will have: they can choose lowercase letters, uppercase letters, numeric values, and/or special characters. At least one criteria has to be filled in order for the password to be stronger.

4. After the criteria is set, the application will generate the password on the page. 

I based the application on a github repository. I rewrite the code with IF statements (instead of WHILE loops) and added an additional prompt that informs the user they need to input a valid number if they input a letter by mistake in the first prompt.
Original credit goes to Tiffany Casey: https://github.com/TiffanyCasey/Password-Generator

You can see the application's functionality in this GIF: ./Password Generator.gif
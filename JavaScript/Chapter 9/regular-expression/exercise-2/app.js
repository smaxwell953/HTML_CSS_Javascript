let re;
// Literal characters, i = case insensitive
re = /hello/;
re = /hello/i;

// Metacharacter symbols
re = /^h/i;          // ^ - Must start with character
re = /d$/i;          // $ - Must end with character
re = /^hello$/i;     // Must begin and end with character
re = /h.llo/i;       // Matches any ONE character - dot
re = /h*llo/i;       // Matches any character 0 or more times
re = /gre?a?y/i;     // Optional character
re = /gre?a?y\?/i;   // Escape character


//  Brackets [] - Character Sets
re = /gr[ae]y/i;          // Must be A or E
re = /[GF]ray/i;          // Must be G or F
re = /[^GF]ray/i;         // Match anything except G or F
re = /^[GF]ray/i;         // Match G or F
re = /[A-Z]ray/;          // Match any uppercase letter
re = /[a-z]ray/;          // Match any lowercase letter
re = /[A-Za-z]ray/;       // Match any letter
re = /[0-9][0-9]ray/;     // March any digit

// Braces {} - quantifiers
re = /Hel{2}o/i;          // Must occur exactly {n} amount of times
re = /Hel{2,4}o/i;        // Must occur exactly {n1} to {n2} amount of times
re = /Hel{2,}o/i;         // Must occur at least {n} amount of times

// Parentheses () - grouping
re = /^([0-9]x){3}$/

// Shorthand character classes
re = /\w/;        // word character - alphanumeric or _
re = /\w+/;       // + = one or more
re = /\W/;        // nonword character
re = /\d/;        // match any digit
re = /\d+/;       // match any digit 0 or more times
re = /\D/;        // match any nondigit
re = /\s/;        // match any whitespace character
re = /\S/;        // match any nonwhitespace character
re = /Hell\b/i;   // word boundary

// Assertions
re = /x(?=y)/;    // match x only if followed by y
re = /x(?!y)/;   // match x only if not followed by y

// String to match
const str = 'dkehekxsafsf';

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if(re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str);
let re;
re = /hello/;
re = /hello/i; // i = case sensitive
// re = /hello/g; // global search - all, not just first

// console.log(re);
// console.log(re.source); //ignores slashes

// exec() - return result in array if match or null if no match
// const result = re.exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - returns true or false
// const result = re.test('Hello');
// console.log(result);

// match() - return result array or null
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

// search() - return index of first match if not found returns -1
// const str = 'Sara Hello There';
// const result = str.search(re);
// console.log(result);

// replace() - return new string with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);
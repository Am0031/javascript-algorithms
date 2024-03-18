# English string to Morse code

This challenge is about morse code translation.
We want you to write a program that converts Morse code to English text and English text to Morse code.

## Basic rules of morse code

As a rule, for every Morse sentence, we should consider a space between morse letters, and three spaces between morse words ("" => " ") (also two spaces in english are equivalent to six spaces in morse).

If the morse code that is going to be translated is not valid or the spacing is not correct, the test should ouput 'Invalid Morse Code Or Spacing'.

If the string that is going to be translated is not valid, the test should output 'Invalid String'.

INPUT
boolean `morseToEnglish`: true if the given input text is in morse and false if it is in english

string `textToTranslate` = a string containing the text to translate

OUTPUT
string `translatedText` = a string containing the input text, translated

## Example

When given these inputs:

```js
const bool = false;
const str = "The wizard quickly jinxed the gnomes before they vaporized.";
```

The expected result is:

```js
const translatedText =
  "- .... .   .-- .. --.. .- .-. -..   --.- ..- .. -.-. -.- .-.. -.--   .--- .. -. -..- . -..   - .... .   --. -. --- -- . ...   -... . ..-. --- .-. .   - .... . -.--   ...- .- .--. --- .-. .. --.. . -.. .-.-.-";
```

When given these inputs:

```js
const bool = true;
const str =
  "- .... .   .-- .. --.. .- .-. -..   --.- ..- .. -.-. -.- .-.. -.--   .--- .. -. -..- . -..   - .... .   --. -. --- -- . ...   -... . ..-. --- .-. .   - .... . -.--   ...- .- .--. --- .-. .. --.. . -.. .-.-.-";
```

The expected result is:

```js
const translatedText =
  "the wizard quickly jinxed the gnomes before they vaporized.";
```

When given these inputs:

```js
const bool = true;
const str = ".-- .. --.. .- .-. -.."; //doesn't end with a dot
```

The expected result is:

```js
const result = "Invalid Morse Code Or Spacing";
```

When given these inputs:

```js
const bool = false;
const str = ""; //empty string
```

The expected result is:

```js
const result = "Invalid String";
```

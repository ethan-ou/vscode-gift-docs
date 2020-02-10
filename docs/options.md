---
id: options
title: Optional Extras
---

The following is adapted from [Moodle's documentation](https://docs.moodle.org/38/en/GIFT_format).

### Comments

A comment is any line that starts with two forward slashes `//`. You can use them to provide headers or more information about questions.

Moodle will hide these lines when reading the question file.

**Format:**

```plain
//Comment
```

**Examples:**

```plain
//German to English Translation
```

### Titles

A title can be added to a question by including it within two pairs of colons `::`.

**Format:**

```plain
::Title::
```

**Examples:**

```plain
::Continents:: { =Asia } is the largest continent in the world.
```

### Feedback

Feedback can be included for questions by adding a hash `#` character next to an answer.

**Format:**

```plain
#Feedback
```

**Examples:**

```plain
Japanese characters originally came from which country? {
    ~India #Sorry.
    =China #Correct!
    ~Korea #Try again.
    ~Egypt #That’s not it.
}
```

For true-false questions, feedback is written slightly differently. The format is as follows:

```plain
Question Text {TRUE #Wrong #Right}
```

Matching and essay questions cannot have feedback for individual answers.

### General Feedback

General feedback can be included at the end of a question block with four hash `#` characters.

**Format:**

```plain
####General Feedback
```

**Examples:**

```plain
How are you? {
    ####We hope you're feeling well.
}
```

### Percentage Weights

You can add percentage weights to answers by adding the weight at the beginning of the answer inside two percentage signs `%`.

**Format:**

```plain
%Weight%
```

**Examples:**

```plain
Jesus Christ was from {
    ~Jerusalem
    ~%25%Bethlehem
    ~%50%Galilee
    =Nazareth
}
```

### Special Characters

If you want to use characters that have special meaning in the GIFT format, such as `~ = # { } :`, you can use a backslash `\` to escape these characters. With the backslash, these characters can be used as a normal character.

Note, the backslash is invisible when displayed on Moodle.

**Format:**

```plain
\~
\=
\#
\{
\}
\:
```

**Example:**

```plain
1 + 2 \= {3}

The largest desert on Earth is\: {
    =Antarctica
    ~Sahara Desert
    ~Australian Desert
    ~Arabian Desert
}
```

### Using HTML, Markdown or Plain Text

If you'd like to use HTML, Markdown or Plain Text inside of a question, you can do so by using the tags `[html]`, `[markdown]` or `[plain]`.

**Format:**

```plain
[html]
[markdown]
[plain]
```

**Example:**

```plain
[markdown]The *American holiday of Thanksgiving* is celebrated on the { ~second ~third =fourth } Thursday of November.

[html]<p>The sun rises in which direction?</p> {
    =<p>The east.</p>#<b>Awesome!</b>
    ~<p>The west.</p>#What planet did <em>you</em> grow up on?
}

[html]Match the <b>activity</b> to the description.{
    =[html]An activity supporting asynchronous discussions. -> Forum
    =[moodle]A teacher asks a question and specifies a choice of multiple responses. -> Choice
    =[plain]A bank of record entries which participants can add to. -> Database
    =[markdown]A collection of web pages that anyone can add to or edit. -> Wiki
```

### Categories

To add categories, you can use the `$CATEGORY:` tag.

**Format:**

```plain
$CATEGORY: Label //OR:
$CATEGORY: Folder1/Folder2/Folder3
```

**Example:**

```plain

```

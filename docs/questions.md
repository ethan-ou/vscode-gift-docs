---
id: questions
title: Question Types
---

The following is adapted from [Moodle's documentation](https://docs.moodle.org/38/en/GIFT_format).

### Multiple Choice

`multiple choice question`, `mcq`, `mc[2-5]`

**Format:**

```plain
Question Text {
    =Correct Answer
    ~Incorrect Answer
    ~Incorrect Answer
    ~Incorrect Answer
}
```

**Examples:**

```plain
What is the largest desert on Earth? {
    =Antarctica
    ~Sahara Desert
    ~Australian Desert
    ~Arabian Desert
}

Japanese characters originally came from which country? {
    ~India
    =China
    ~Korea
    ~Egypt
}
```

### Multiple Choice with Multiple Answers

`multiple choice question multiple`, `mcqm`, `mc[2-5]m`

**Format:**

```plain
Question Text {
    ~%25%Correct Answer
    ~%25%Correct Answer
    ~%25%Correct Answer
    ~%25%Correct Answer
    ~%-100%Incorrect Answer
    ~%-100%Incorrect Answer
}

```

**Examples:**

```plain
Select all world leaders below who were involved in World War II {
    ~%33.33333%Winston Churchill
    ~%33.33333%Adolf Hitler
    ~%33.33333%Joseph Stalin
    ~%-100%Hillary Clinton
    ~%-100%Benjamin Franklin
}
```

Tips:

- To avoid students automatically getting 100% by checking all answers, include negative answer weights for wrong answers.
- Moodle uses 5 decimal places to do math. If you wish to divide percentages in thirds, use %33.33333 instead of %33 or %33.33.

### True-False

`true false question`, `tfq`

**Format:**

```plain
Question Text {T} //OR:
Question Text {TRUE}
```

**Examples:**

```plain
Australia was founded in 1788 {FALSE}

Iceland is covered in ice {F}
```

Tips:

- You can use any of the following in a true-false question: `TRUE`, `T`, `FALSE`, `F`.
- You can also write a true-false question in the multiple-choice question format.
- Feedback in a true-false question has a different format. Refer to the feedback section of the docs to find out more.

### Short Answer

`short answer question`, `saq`, `sa[1-5]`

**Format:**

```plain
Question Text { =Answer =Answer =Answer }
```

**Examples:**

```plain
Japanese characters originally came from which country? {=China}
```

Tips:

- Make sure all answers use an equals sign `=`.

### Missing Word

`missing word question`, `mwq`, `mw[1-5]`

**Format:**

```plain
Sentence Start { =Answer ~Incorrect Answer ~Incorrect Answer } Sentence End.
```

**Examples:**

```plain
The American holiday of Thanksgiving is celebrated on the {~second ~third =fourth} Thursday of November.
```

Tips:

- Only one set of missing words are possible in the GIFT format. If you'd like more, use the Moodle interface.

### Matching

`matching question`, `maq`, `ma[2-5]`

**Format:**

```plain
Question Text {
    =Item 1 -> Match 1
    =Item 2 -> Match 2
    =Item 3 -> Match 3
    =Item 4 -> Match 4
}
```

**Examples:**

```plain
Match the following countries with their corresponding capitals. {
    =Canada -> Ottawa
    =Italy  -> Rome
    =Japan  -> Tokyo
    =India  -> New Delhi
}
```

Tips:

- You cannot use feedback or percentage weights with matching questions. General feedback however, is allowed.
- Make sure all answers use an equals sign `=`.

### Numerical

`numerical question`, `nq`

**Format:**

```plain
Question Text {#Number} //OR:
Question Text {#Number:Range} //OR:
Question Text {#LowestNumber..HighestNumber}
```

**Examples:**

```plain
What's 2 plus 2? {#4}

What is the value of pi (to 3 decimal places)? {#3.1415:0.0005}

What is the value of pi (to 3 decimal places)? {#3.141..3.142}
```

### Essay

`essay question`, `ess`

**Format:**

```plain
Question Text {}
```

**Examples:**

```plain
Write a short explanation of how ocean tides work. {}

How are you? {}
```

---
id: introduction
title: Introduction
---

## What is GIFT?

GIFT or General Import Format Template, is a language used to write and edit question banks for Moodle, without needing to use Moodle's interface.

Instead of clicking through a web page, the GIFT format lets you write questions using plain text, similar to writing in a Word document.

A typical multiple choice question can be written in the following manner:

```plain
What is the largest desert on Earth? {
    =Antarctica
    ~Sahara Desert
    ~Australian Desert
    ~Arabian Desert
}
```

Questions can then be uploaded to Moodle, allowing users to bypass the traditional method of authoring on Moodle.

This approach has a couple of advantages:

- Easy to write questions quickly
- Simple to edit, review and delete existing questions
- Can work offline or in remote places without issue
- Easily share question banks with people who cannot access Moodle

All these benefits lead to faster development times for Moodle question banks and better quality questions for students.

## Motivation

As Moodle users, we regularly encounter courses that need **hundreds of questions** written to accompany course content. Developing these questions from scratch is hard enough. Inputting these questions into Moodle however, takes a lot of time and effort.

In frustration, we tried to look for alternatives and found the that we could use General Import Format Template (GIFT).

The GIFT format allowed us to write **hundreds of questions in half the time**. Instead of writing questions directly in Moodle, we could write straight to plain text, bypassing Moodle until the very end of the process.

The power of this format got us excited. Finally, we could write questions at the speed at which we thought them up.

As we dug deeper, we also realised that using GIFT brought about a whole host of benefits that made our lives easier. There was however one major drawback: writing in GIFT was **difficult** without help.

To make writing in GIFT easier, we wrote **three extensions** for one of the most popular text editors today: [Visual Studio Code](https://code.visualstudio.com/). These extensions allow users to catch errors and preview their questions in real time, making the process of writing in GIFT more intuitive.

We hope these tools help make writing Moodle questions an enjoyable and fun experience⁠—one that will reflect in an engaging experience for your students.

Special thanks to [fuhrmanator](https://github.com/fuhrmanator) for his work on building the GIFT parser. His work was invaluable in turning this project into reality.

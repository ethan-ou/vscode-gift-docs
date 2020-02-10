---
id: getting-started
title: Getting Started
---

In this guide, we'll walk through the process of creating a couple of simple questions using the GIFT Language. We will cover the following topics:

- <a href="#your-first-gift-question">Your First GIFT Question</a>
- <a href="#previewing-gift">Previewing GIFT</a>
- <a href="#finding-and-fixing-errors">Finding and Fixing Errors</a>
- <a href="#uploading-to-moodle">Uploading to Moodle</a>

## Your First GIFT Question

Let's start by writing a simple quiz for a fictional Geography course.

Type in your editor `multiple choice question`.

A dropdown will appear at your text cursor with the text `multiple choice question`. You can navigate through the options by using the `UP` and `DOWN` arrow keys.

When you've selected `multiple choice question`, press `ENTER` to add it to the editor.

You'll see a template for a multiple choice question appear on the screen.

To edit the text in the template, you can cycle through the text fields by using the `TAB` and `SHIFT + TAB` keys.

Try using the `TAB` and `SHIFT + TAB` keys to edit the question to the following:

```plain
Which of the following is the largest ocean in the world? {
    =Pacific
    ~Indian
    ~Atlantic
    ~Arctic
}
```

Congratulations! You've just written your first question in Moodle's GIFT format. Let's review some finer details about what occurred in the previous steps.

When typing in the word `multiple`, you would have seen many different options VSCode could enter into our editor.

These are called **snippets**. They are small templates that have been written to quick start writing questions in GIFT.

In this example, we've already seen the `multiple choice question` snippet. However, many more snippets exist including `short answer question`, `essay question`, `numerical question` and `matching question`.

This is the simplest way to write questions in the GIFT format. Simply type the style of question you're looking to generate in the editor and VSCode will give a snippet for that question type.

You can find the complete set of snippets in the documentation.

## Previewing GIFT

Now that we've written our first question, we can also see an example of how this question will appear on Moodle.

Go to your editor and right click anywhere on the page. You will see an option named `Open Preview to the Side`. Click on it to display a preview of the current document.

Alternatively, use the shortcut `CTRL + K V`.

You should now be able to see the question we wrote displayed on the right of your screen. This preview updates in real-time when you make changes in your editor.

To see the preview in action, let's add another question to our quiz. Add a line break in the editor and type in `numerical question`.

You should find a snippet named `numerical question`. Once selected, press `ENTER`.

Try using `TAB` and `SHIFT + TAB` to edit the question to the following:

```plain
How many oceans are there in the world? {#5:0}
```

If you observe the preview window while writing, you'll see the preview update as the file is being edited.

After editing the question, the preview will display the question in Moodle's styling:

<div style={{position: 'relative', padding: '2rem 1.5rem', marginBottom: '1rem', backgroundColor: '#def2f8', border: 'solid #c7e4e4 1px', borderRadius: '6px'}}>
        <p><b>Numerical</b></p>
        <p>How many oceans are there in the world?</p>
        <div>
          Answer: <input type="text" placeholder="5 ± 0" style={{padding: '0.375rem 0.75rem', fontSize: '0.875rem', lineHeight: '1.5', color: '#495057', border: '1px solid #ced4da', borderRadius: '0.25rem'}} />
        </div>
</div>

This preview becomes very useful when we want to try different question types or rewrite question content.

Let's now imagine that we want to try a multiple choice variation of this same question. We can accomplish this by applying another snippet below our numerical question.

On a new line, try typing `multiple choice question` again or `mcq`, then press `ENTER`.

Again, try using `TAB` and `SHIFT + TAB` to edit the question into the following:

```plain
How many oceans are there in the world? {
    =5 #Correct. The IHO has defined 5 oceans on Earth.
    ~4 #Partially correct. The Arctic Ocean is sometimes viewed as a sea of the Atlantic Ocean.
    ~1 #Technically correct. All of the Earth's oceans can be considered as one big ocean.
    ~6 #Incorrect. There are 5 oceans on Earth.
}
```

And here is how the question will appear on Moodle:

<div style={{position: 'relative', padding: '2rem 1.5rem', marginBottom: '1rem', backgroundColor: '#def2f8', border: 'solid #c7e4e4 1px', borderRadius: '6px'}}>
  <b>Multiple choice </b>
  <p>How many oceans are there in the world?</p>
  Select one:
  <div className="custom-input">
    <label className="correct">
      <input type="radio" name="73ae4ace3d03809cecc1" />
      5 
      [Correct. The IHO has defined 5 oceans on Earth.]
    </label>
  </div>
  <div className="custom-input">
    <label className="wrong">
      <input type="radio" name="73ae4ace3d03809cecc1" />
      4 
      [Partially correct. The Arctic Ocean is sometimes viewed as a sea of the Atlantic Ocean.]
    </label>
  </div>
  <div className="custom-input">
    <label className="wrong">
      <input type="radio" name="73ae4ace3d03809cecc1" />
      1 
      [Technically correct. All of the Earth's oceans can be considered as one big ocean.]
    </label>
  </div>
  <div className="custom-input">
    <label className="wrong">
      <input type="radio" name="73ae4ace3d03809cecc1" />
      6 
      [Incorrect. There are 5 oceans on Earth.]
    </label>
  </div>
</div>

You'll notice we've included feedback for each of the answers by using a hash symbol `#`. The GIFT Language contains many such features to help you translate Moodle features into text including titles, answer weights, numeric ranges and more.

You can find a reference of these features in the documentation.

## Finding and Fixing Errors

The next thing we need to understand is how to find and fix errors in our GIFT questions.

Fixing errors ahead of time will improve the chance that Moodle will accept our questions, allowing us to gain a smoother development experience.

To accomplish this, we're going to try to break a question written in the GIFT Language, read the error message created and figure out how to fix the error.

Let's start with the multiple choice question we wrote in the first part of this tutorial:

```plain
Which of the following is the largest ocean in the world? {
    =Pacific
    ~Indian
    ~Atlantic
    ~Arctic
}
```

When Visual Studio Code reads this block of text, no warnings come up. This is a good sign. No warnings usually means the computer is happy with the text.

Now, let's try to break the question and see how Visual Studio Code responds.

Remove the opening bracket `{` of the above question:

```plain
Which of the following is the largest ocean in the world?
    =Pacific
    ~Indian
    ~Atlantic
    ~Arctic
}
```

A warning should arise, with the message:

```plain
Expected "{" or (single line whitespace) but "=" found.
```

When Visual Studio Code spots an error, it will also highlight the part of the document which contains the error.

Here the error is relatively straightforward. Visual Studio Code saw this block of text, and didn't find an opening bracket `{` or a single line whitespace.

This is exactly what we are missing from our question. We deleted the open bracket `{`, and Visual Studio Code found the error.

Now, let's try something a little more difficult. Copy the following question into your editor:

```plain
2 x 2 = ? {#4}
```

If you've completed this, you might find the result quite strange. It turns out, we get the same warning as before:

```plain
Expected "{" or (single line whitespace) but "=" found.
```

Unlike the previous error however, the message is more cryptic. We want to use an equals sign `=`, yet the message tells us to use an open bracket `{` or a single line whitespace.

In many cases, the error might tell us something is wrong with the question, but it might not locate the best solution. At this point, the best way of finding the solution is by searching the documentation.

For this particular error, you can find the answer in the options section of the documentation.

In the GIFT Language, there are special characters that are used to mark certain features of your question to Moodle.

We've seen a couple already:

- Brackets `{}` mark a block of answers.
- A hash after an open bracket `{#` marks a numerical question.
- Equal signs `=` mark a correct answer.
- Tildes `~` mark an incorrect answer.
- Double colons `::` mark a title.

We cannot use these characters without Moodle interpreting the character. However, if we include a backslash `\` we can use these characters as ordinary symbols. For instance:

- If we want to use a colon `:`, we write: `\:`.

- If we want to use an open bracket `{`, we write: `\{`.

We can use this same backslash `\` to use our equals sign `=` in our question:

```plain
2 x 2 \= ? {#4}
```

Even though it appears as though the backslash `\` would appear on Moodle, if we open our preview this is not the case:

<div style={{position: 'relative', padding: '2rem 1.5rem', marginBottom: '1rem', backgroundColor: '#def2f8', border: 'solid #c7e4e4 1px', borderRadius: '6px'}}>
  <p><b>Numerical</b></p>
  <p>2 x 2 = ?</p>
  <div>
    Answer: <input type="text" placeholder={4} style={{padding: '0.375rem 0.75rem', fontSize: '0.875rem', lineHeight: '1.5', color: '#495057', border: '1px solid #ced4da', borderRadius: '0.25rem'}} />
  </div>
</div>

Encountering errors in our documents is a natural part of working with computer-based languages such as the GIFT Language.

If you encounter one, read the error and try to diagnose the issue. Attempt a couple of different solutions. Refer to our documentation as well as Moodle's guides if you're stuck.

Above all, remember these errors are there to help you, like to an assistant who's always there to check your work. If you're able to understand what the errors are saying, you'll be well on your way to mastering the GIFT Language.

## Uploading to Moodle

The last step of writing in the GIFT Language is uploading your questions to Moodle. Thankfully, this is the most straightforward part of the process.

After completing all the previous sections, your document should look like this:

```plain
Which of the following is the largest ocean in the world? {
    =Pacific
    ~Indian
    ~Atlantic
    ~Arctic
}

How many oceans are there in the world? {#5:0}

How many oceans are there in the world? {
    =5 #Correct. The IHO has defined 5 oceans on Earth.
    ~%50%4 #Partially correct. The Arctic Ocean is sometimes viewed as a sea of the Atlantic Ocean.
    ~%50%1 #Technically correct. All of the Earth's oceans are connected.
    ~6 #Incorrect. There are 5 oceans on Earth.
}

2 x 2 = ? {#4}
```

If this is not the case, feel free to copy and paste the questions above into your editor.

When you're read, save the questions to a new file by going to `File > Save As...` or by using the shortcut `CTRL + SHIFT + S`.

Next, navigate to a Moodle course you'd like to upload your questions into. If you don't have a course, create a new Moodle sandpit.

Once you're inside the course, go to the left side-panel and under the `Settings` tab, select `Question bank`.

Then, go to the import tab at the top of the window. Under `File format`, select `GIFT format`. Then upload the file using the `Choose a file...` button.

In the dialog box, select `Upload a file` and attach the file you recently saved. Then click `Upload this file.`

When you've imported the files, click on the `Import` button at the bottom of the screen.

If successful, you will see a screen saying Moodle imported the questions from the file.

## Conclusion

We've covered a lot in this tutorial. Let's recap what we've just covered:

- How to use snippets to scaffold new questions
- How to navigate snippets using `TAB` and `SHIFT + TAB`
- How to preview GIFT by right-clicking on the editor panel
- How to quickly prototype multiple question types using the preview panel
- How to diagnose and recover from errors while authoring GIFT files
- How to upload GIFT files to Moodle

We hope you enjoy using the GIFT format and our extensions to write, edit and maintain Moodle questions faster than ever. Happy Moodling!

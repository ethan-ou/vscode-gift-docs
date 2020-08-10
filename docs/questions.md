---
id: questions
title: Questions
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
```

<section style={{flexWrap: 'wrap', position: 'relative', padding: '1rem 1rem', marginBottom: '0.5rem', backgroundColor: 'hsl(194, 60%, 96%)', border: 'solid hsl(180, 35%, 89%) 2px', borderRadius: '6px', boxShadow: '0px 1px 3px hsl(0, 0%, 74%)'}}>
  <div style={{display: 'flex', fontWeight: 'bold'}}>
    <span>
      <span style={{color: 'hsl(180, 24%, 60%)'}}>Optional Title...</span>
    </span>
    <span style={{marginLeft: 'auto', paddingLeft: '0.75rem', flex: 'none'}}>
      <span style={{boxShadow: '0px 1px 3px hsl(0, 0%, 74%)', paddingLeft: '0.7rem', paddingRight: '0.7rem', paddingTop: '0.4rem', paddingBottom: '0.4rem', borderRadius: '4px', backgroundColor: 'hsl(194, 55%, 98%)', color: 'hsl(180, 15%, 41%)'}}>Multiple Choice</span>
    </span>
  </div>
  <p style={{color: 'hsl(0, 0%, 0%)'}}>What is the largest desert on Earth?</p><span style={{color: 'hsl(0, 0%, 0%)'}}>Select one:</span>
  <div>
    <input className="gift-input" type="radio" id="idvTwsat" name="idaZriWMYj" />
    <label style={{display: 'inline-block', padding: '0.2em 0 0.2em 0', color: 'hsl(0, 0%, 0%)'}} htmlFor="idvTwsat">
      Antarctica
    </label>
    <svg style={{verticalAlign: 'text-bottom', display: 'inline-block', marginLeft: '0.1rem', marginRight: '0.2rem', width: '1em', color: 'hsl(120, 39%, 54%)'}} role="img" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>
  </div>
  <div>
    <input className="gift-input" type="radio" id="idEgZKET" name="idaZriWMYj" />
    <label style={{display: 'inline-block', padding: '0.2em 0 0.2em 0', color: 'hsl(0, 0%, 0%)'}} htmlFor="idEgZKET">
      Sahara Desert
    </label>
    <svg style={{verticalAlign: 'text-bottom', display: 'inline-block', marginLeft: '0.1rem', marginRight: '0.2rem', width: '0.75em', color: 'hsl(2, 64%, 58%)'}} role="img" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
  </div>
  <div>
    <input className="gift-input" type="radio" id="idgNSLd4" name="idaZriWMYj" />
    <label style={{display: 'inline-block', padding: '0.2em 0 0.2em 0', color: 'hsl(0, 0%, 0%)'}} htmlFor="idgNSLd4">
      Australian Desert
    </label>
    <svg style={{verticalAlign: 'text-bottom', display: 'inline-block', marginLeft: '0.1rem', marginRight: '0.2rem', width: '0.75em', color: 'hsl(2, 64%, 58%)'}} role="img" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
  </div>
  <div>
    <input className="gift-input" type="radio" id="idcIIlDO" name="idaZriWMYj" />
    <label style={{display: 'inline-block', padding: '0.2em 0 0.2em 0', color: 'hsl(0, 0%, 0%)'}} htmlFor="idcIIlDO">
      Arabian Desert
    </label>
    <svg style={{verticalAlign: 'text-bottom', display: 'inline-block', marginLeft: '0.1rem', marginRight: '0.2rem', width: '0.75em', color: 'hsl(2, 64%, 58%)'}} role="img" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
  </div>
</section>


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

<section style={{flexWrap: 'wrap', position: 'relative', padding: '1rem 1rem', marginBottom: '0.5rem', backgroundColor: 'hsl(194, 60%, 96%)', border: 'solid hsl(180, 35%, 89%) 2px', borderRadius: '6px', boxShadow: '0px 1px 3px hsl(0, 0%, 74%)'}}>
  <div style={{display: 'flex', fontWeight: 'bold'}}>
    <span>
      <span style={{color: 'hsl(180, 24%, 60%)'}}>Optional Title...</span>
    </span>
    <span style={{marginLeft: 'auto', paddingLeft: '0.75rem', flex: 'none'}}>
      <span style={{boxShadow: '0px 1px 3px hsl(0, 0%, 74%)', paddingLeft: '0.7rem', paddingRight: '0.7rem', paddingTop: '0.4rem', paddingBottom: '0.4rem', borderRadius: '4px', backgroundColor: 'hsl(194, 55%, 98%)', color: 'hsl(180, 15%, 41%)'}}>Multiple Choice</span>
    </span>
  </div>
  <p style={{color: 'hsl(0, 0%, 0%)'}}>Select all world leaders below who were involved in World War II</p><span style={{color: 'hsl(0, 0%, 0%)'}}>Select one or more:</span>
  <div>
    <input className="gift-input" type="checkbox" id="idQcy6AL" name="idTFeSzWso" />
    <span style={{boxShadow: '0px 1px 1px hsl(0, 0%, 74%)', borderRadius: '3px', paddingLeft: '0.2rem', paddingRight: '0.2rem', paddingTop: '0.05rem', paddingBottom: '0.05rem', color: 'hsl(134, 31%, 32%)', backgroundColor: 'hsl(134, 68%, 95%)'}}>33.33333%</span>
    <label style={{display: 'inline-block', padding: '0.2em 0 0.2em 0', color: 'hsl(0, 0%, 0%)'}} htmlFor="idQcy6AL">
      Winston Churchill
    </label>
    <svg style={{verticalAlign: 'text-bottom', display: 'inline-block', marginLeft: '0.1rem', marginRight: '0.2rem', width: '1em', color: 'hsl(120, 39%, 54%)'}} role="img" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>
  </div>
  <div>
    <input className="gift-input" type="checkbox" id="idPwbQHt" name="idTFeSzWso" />
    <span style={{boxShadow: '0px 1px 1px hsl(0, 0%, 74%)', borderRadius: '3px', paddingLeft: '0.2rem', paddingRight: '0.2rem', paddingTop: '0.05rem', paddingBottom: '0.05rem', color: 'hsl(134, 31%, 32%)', backgroundColor: 'hsl(134, 68%, 95%)'}}>33.33333%</span>
    <label style={{display: 'inline-block', padding: '0.2em 0 0.2em 0', color: 'hsl(0, 0%, 0%)'}} htmlFor="idPwbQHt">
      Adolf Hitler
    </label>
    <svg style={{verticalAlign: 'text-bottom', display: 'inline-block', marginLeft: '0.1rem', marginRight: '0.2rem', width: '1em', color: 'hsl(120, 39%, 54%)'}} role="img" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>
  </div>
  <div>
    <input className="gift-input" type="checkbox" id="idmegEZd" name="idTFeSzWso" />
    <span style={{boxShadow: '0px 1px 1px hsl(0, 0%, 74%)', borderRadius: '3px', paddingLeft: '0.2rem', paddingRight: '0.2rem', paddingTop: '0.05rem', paddingBottom: '0.05rem', color: 'hsl(134, 31%, 32%)', backgroundColor: 'hsl(134, 68%, 95%)'}}>33.33333%</span>
    <label style={{display: 'inline-block', padding: '0.2em 0 0.2em 0', color: 'hsl(0, 0%, 0%)'}} htmlFor="idmegEZd">
      Joseph Stalin
    </label>
    <svg style={{verticalAlign: 'text-bottom', display: 'inline-block', marginLeft: '0.1rem', marginRight: '0.2rem', width: '1em', color: 'hsl(120, 39%, 54%)'}} role="img" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>
  </div>
  <div>
    <input className="gift-input" type="checkbox" id="iddaqPo3" name="idTFeSzWso" />
    <span style={{boxShadow: '0px 1px 1px hsl(0, 0%, 74%)', borderRadius: '3px', paddingLeft: '0.2rem', paddingRight: '0.2rem', paddingTop: '0.05rem', paddingBottom: '0.05rem', color: 'hsl(35, 51%, 33%)', backgroundColor: 'hsl(36, 84%, 93%)'}}>-100%</span>
    <label style={{display: 'inline-block', padding: '0.2em 0 0.2em 0', color: 'hsl(0, 0%, 0%)'}} htmlFor="iddaqPo3">
      Hillary Clinton
    </label>
    <svg style={{verticalAlign: 'text-bottom', display: 'inline-block', marginLeft: '0.1rem', marginRight: '0.2rem', width: '0.75em', color: 'hsl(2, 64%, 58%)'}} role="img" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
  </div>
  <div>
    <input className="gift-input" type="checkbox" id="idEHZQ1w" name="idTFeSzWso" />
    <span style={{boxShadow: '0px 1px 1px hsl(0, 0%, 74%)', borderRadius: '3px', paddingLeft: '0.2rem', paddingRight: '0.2rem', paddingTop: '0.05rem', paddingBottom: '0.05rem', color: 'hsl(35, 51%, 33%)', backgroundColor: 'hsl(36, 84%, 93%)'}}>-100%</span>
    <label style={{display: 'inline-block', padding: '0.2em 0 0.2em 0', color: 'hsl(0, 0%, 0%)'}} htmlFor="idEHZQ1w">
      Benjamin Franklin
    </label>
    <svg style={{verticalAlign: 'text-bottom', display: 'inline-block', marginLeft: '0.1rem', marginRight: '0.2rem', width: '0.75em', color: 'hsl(2, 64%, 58%)'}} role="img" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
  </div>
</section>


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

<section style={{flexWrap: 'wrap', position: 'relative', padding: '1rem 1rem', marginBottom: '0.5rem', backgroundColor: 'hsl(194, 60%, 96%)', border: 'solid hsl(180, 35%, 89%) 2px', borderRadius: '6px', boxShadow: '0px 1px 3px hsl(0, 0%, 74%)'}}>
  <div style={{display: 'flex', fontWeight: 'bold'}}>
    <span>
      <span style={{color: 'hsl(180, 24%, 60%)'}}>Optional Title...</span>
    </span>
    <span style={{marginLeft: 'auto', paddingLeft: '0.75rem', flex: 'none'}}>
      <span style={{boxShadow: '0px 1px 3px hsl(0, 0%, 74%)', paddingLeft: '0.7rem', paddingRight: '0.7rem', paddingTop: '0.4rem', paddingBottom: '0.4rem', borderRadius: '4px', backgroundColor: 'hsl(194, 55%, 98%)', color: 'hsl(180, 15%, 41%)'}}>Multiple Choice</span>
    </span>
  </div>
  <p style={{color: 'hsl(0, 0%, 0%)'}}>Australia was founded in 1788</p><span style={{color: 'hsl(0, 0%, 0%)'}}>Select one:</span>
  <div>
    <input className="gift-input" type="radio" id="id45i_0b" name="idaNhS1K1J" />
    <label style={{display: 'inline-block', padding: '0.2em 0 0.2em 0', color: 'hsl(0, 0%, 0%)'}} htmlFor="id45i_0b">
      True
    </label>
    <svg style={{verticalAlign: 'text-bottom', display: 'inline-block', marginLeft: '0.1rem', marginRight: '0.2rem', width: '0.75em', color: 'hsl(2, 64%, 58%)'}} role="img" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
  </div>
  <div>
    <input className="gift-input" type="radio" id="idhzwkvq" name="idaNhS1K1J" />
    <label style={{display: 'inline-block', padding: '0.2em 0 0.2em 0', color: 'hsl(0, 0%, 0%)'}} htmlFor="idhzwkvq">
      False
    </label>
    <svg style={{verticalAlign: 'text-bottom', display: 'inline-block', marginLeft: '0.1rem', marginRight: '0.2rem', width: '1em', color: 'hsl(120, 39%, 54%)'}} role="img" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>
  </div>
</section>


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

<section style={{flexWrap: 'wrap', position: 'relative', padding: '1rem 1rem', marginBottom: '0.5rem', backgroundColor: 'hsl(194, 60%, 96%)', border: 'solid hsl(180, 35%, 89%) 2px', borderRadius: '6px', boxShadow: '0px 1px 3px hsl(0, 0%, 74%)'}}>
  <div style={{display: 'flex', fontWeight: 'bold'}}>
    <span>
      <span style={{color: 'hsl(180, 24%, 60%)'}}>Optional Title...</span>
    </span>
    <span style={{marginLeft: 'auto', paddingLeft: '0.75rem', flex: 'none'}}>
      <span style={{boxShadow: '0px 1px 3px hsl(0, 0%, 74%)', paddingLeft: '0.7rem', paddingRight: '0.7rem', paddingTop: '0.4rem', paddingBottom: '0.4rem', borderRadius: '4px', backgroundColor: 'hsl(194, 55%, 98%)', color: 'hsl(180, 15%, 41%)'}}>Short Answer</span>
    </span>
  </div>
  <p style={{color: 'hsl(0, 0%, 0%)'}}>Japanese characters originally came from which country?</p>
  <div>
    <span style={{color: 'hsl(0, 0%, 0%)'}}>Answer: </span><input className="gift-input" type="text" style={{display: 'inline-block', padding: '0.375rem 0.75rem', lineHeight: 'inherit', color: 'hsl(0, 0%, 16%)', backgroundColor: 'hsl(0, 0%, 100%)', border: '1px solid hsl(0, 0%, 81%)', borderRadius: '0.25rem', boxShadow: 'varrgba(0, 0, 0, 0.05) 0px 1px 2px 0px', margin: 0, fontFamily: 'inherit', fontSize: 'inherit'}} placeholder="China" />
  </div>
</section>


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

<section style={{flexWrap: 'wrap', position: 'relative', padding: '1rem 1rem', marginBottom: '0.5rem', backgroundColor: 'hsl(194, 60%, 96%)', border: 'solid hsl(180, 35%, 89%) 2px', borderRadius: '6px', boxShadow: '0px 1px 3px hsl(0, 0%, 74%)'}}>
  <div style={{display: 'flex', fontWeight: 'bold'}}>
    <span>
      <span style={{color: 'hsl(180, 24%, 60%)'}}>Optional Title...</span>
    </span>
    <span style={{marginLeft: 'auto', paddingLeft: '0.75rem', flex: 'none'}}>
      <span style={{boxShadow: '0px 1px 3px hsl(0, 0%, 74%)', paddingLeft: '0.7rem', paddingRight: '0.7rem', paddingTop: '0.4rem', paddingBottom: '0.4rem', borderRadius: '4px', backgroundColor: 'hsl(194, 55%, 98%)', color: 'hsl(180, 15%, 41%)'}}>Multiple Choice</span>
    </span>
  </div>
  <p style={{color: 'hsl(0, 0%, 0%)'}}>The American holiday of Thanksgiving is celebrated on the _____ Thursday of November.</p><span style={{color: 'hsl(0, 0%, 0%)'}}>Select one:</span>
  <div>
    <input className="gift-input" type="radio" id="id0fEC_G" name="idTkz9OE-W" />
    <label style={{display: 'inline-block', padding: '0.2em 0 0.2em 0', color: 'hsl(0, 0%, 0%)'}} htmlFor="id0fEC_G">
      second
    </label>
    <svg style={{verticalAlign: 'text-bottom', display: 'inline-block', marginLeft: '0.1rem', marginRight: '0.2rem', width: '0.75em', color: 'hsl(2, 64%, 58%)'}} role="img" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
  </div>
  <div>
    <input className="gift-input" type="radio" id="id-xBwWT" name="idTkz9OE-W" />
    <label style={{display: 'inline-block', padding: '0.2em 0 0.2em 0', color: 'hsl(0, 0%, 0%)'}} htmlFor="id-xBwWT">
      third
    </label>
    <svg style={{verticalAlign: 'text-bottom', display: 'inline-block', marginLeft: '0.1rem', marginRight: '0.2rem', width: '0.75em', color: 'hsl(2, 64%, 58%)'}} role="img" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
  </div>
  <div>
    <input className="gift-input" type="radio" id="idEVGpta" name="idTkz9OE-W" />
    <label style={{display: 'inline-block', padding: '0.2em 0 0.2em 0', color: 'hsl(0, 0%, 0%)'}} htmlFor="idEVGpta">
      fourth
    </label>
    <svg style={{verticalAlign: 'text-bottom', display: 'inline-block', marginLeft: '0.1rem', marginRight: '0.2rem', width: '1em', color: 'hsl(120, 39%, 54%)'}} role="img" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>
  </div>
</section>

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
<section style={{flexWrap: 'wrap', position: 'relative', padding: '1rem 1rem', marginBottom: '0.5rem', backgroundColor: 'hsl(194, 60%, 96%)', border: 'solid hsl(180, 35%, 89%) 2px', borderRadius: '6px', boxShadow: '0px 1px 3px hsl(0, 0%, 74%)'}}>
  <div style={{display: 'flex', fontWeight: 'bold'}}>
    <span>
      <span style={{color: 'hsl(180, 24%, 60%)'}}>Optional Title...</span>
    </span>
    <span style={{marginLeft: 'auto', paddingLeft: '0.75rem', flex: 'none'}}>
      <span style={{boxShadow: '0px 1px 3px hsl(0, 0%, 74%)', paddingLeft: '0.7rem', paddingRight: '0.7rem', paddingTop: '0.4rem', paddingBottom: '0.4rem', borderRadius: '4px', backgroundColor: 'hsl(194, 55%, 98%)', color: 'hsl(180, 15%, 41%)'}}>Matching</span>
    </span>
  </div>
  <p style={{color: 'hsl(0, 0%, 0%)'}}>Match the following countries with their corresponding capitals.</p>
  <div style={{display: 'grid', gridTemplateColumns: 'fit-content(50%) fit-content(50%)', gridGap: '0.25rem', alignItems: 'center'}}>
    <div style={{paddingRight: '1rem', color: 'hsl(0, 0%, 0%)'}}>
      Canada 
    </div>
    <div>
      <select className="gift-select" style={{display: 'inline-block', boxSizing: 'border-box', alignItems: 'center', whiteSpace: 'pre', cursor: 'default', margin: 0, fontFamily: 'inherit', fontSize: 'inherit', lineHeight: '1.5', textTransform: 'none', minWidth: '8rem', color: 'hsl(0, 0%, 16%)', backgroundColor: 'hsl(0, 0%, 100%)', border: '1px solid hsl(0, 0%, 81%)', borderRadius: '0.25rem', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px', padding: '0.375rem 1.75rem 0.375rem 0.75rem', backgroundImage: 'url(data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Ctitle%3Edown-arrow%3C%2Ftitle%3E%3Cg%20fill%3D%22%23000000%22%3E%3Cpath%20d%3D%22M10.293%2C3.293%2C6%2C7.586%2C1.707%2C3.293A1%2C1%2C0%2C0%2C0%2C.293%2C4.707l5%2C5a1%2C1%2C0%2C0%2C0%2C1.414%2C0l5-5a1%2C1%2C0%2C1%2C0-1.414-1.414Z%22%20fill%3D%22%23000%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E)', backgroundSize: '0.6em', backgroundPosition: 'calc(100% - 0.5em) center', backgroundRepeat: 'no-repeat', WebkitAppearance: 'none', MozAppearance: 'none', appearance: 'none', width: 'auto', verticalAlign: 'baseline'}}>
        <option value disabled selected hidden>Choose...</option>
        <option>Ottawa</option><option>Rome</option><option>Tokyo</option><option>New Delhi</option>
      </select>
    </div>
    <div style={{paddingRight: '1rem', color: 'hsl(0, 0%, 0%)'}}>
      Italy 
    </div>
    <div>
      <select className="gift-select" style={{display: 'inline-block', boxSizing: 'border-box', alignItems: 'center', whiteSpace: 'pre', cursor: 'default', margin: 0, fontFamily: 'inherit', fontSize: 'inherit', lineHeight: '1.5', textTransform: 'none', minWidth: '8rem', color: 'hsl(0, 0%, 16%)', backgroundColor: 'hsl(0, 0%, 100%)', border: '1px solid hsl(0, 0%, 81%)', borderRadius: '0.25rem', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px', padding: '0.375rem 1.75rem 0.375rem 0.75rem', backgroundImage: 'url(data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Ctitle%3Edown-arrow%3C%2Ftitle%3E%3Cg%20fill%3D%22%23000000%22%3E%3Cpath%20d%3D%22M10.293%2C3.293%2C6%2C7.586%2C1.707%2C3.293A1%2C1%2C0%2C0%2C0%2C.293%2C4.707l5%2C5a1%2C1%2C0%2C0%2C0%2C1.414%2C0l5-5a1%2C1%2C0%2C1%2C0-1.414-1.414Z%22%20fill%3D%22%23000%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E)', backgroundSize: '0.6em', backgroundPosition: 'calc(100% - 0.5em) center', backgroundRepeat: 'no-repeat', WebkitAppearance: 'none', MozAppearance: 'none', appearance: 'none', width: 'auto', verticalAlign: 'baseline'}}>
        <option value disabled selected hidden>Choose...</option>
        <option>Ottawa</option><option>Rome</option><option>Tokyo</option><option>New Delhi</option>
      </select>
    </div>
    <div style={{paddingRight: '1rem', color: 'hsl(0, 0%, 0%)'}}>
      Japan 
    </div>
    <div>
      <select className="gift-select" style={{display: 'inline-block', boxSizing: 'border-box', alignItems: 'center', whiteSpace: 'pre', cursor: 'default', margin: 0, fontFamily: 'inherit', fontSize: 'inherit', lineHeight: '1.5', textTransform: 'none', minWidth: '8rem', color: 'hsl(0, 0%, 16%)', backgroundColor: 'hsl(0, 0%, 100%)', border: '1px solid hsl(0, 0%, 81%)', borderRadius: '0.25rem', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px', padding: '0.375rem 1.75rem 0.375rem 0.75rem', backgroundImage: 'url(data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Ctitle%3Edown-arrow%3C%2Ftitle%3E%3Cg%20fill%3D%22%23000000%22%3E%3Cpath%20d%3D%22M10.293%2C3.293%2C6%2C7.586%2C1.707%2C3.293A1%2C1%2C0%2C0%2C0%2C.293%2C4.707l5%2C5a1%2C1%2C0%2C0%2C0%2C1.414%2C0l5-5a1%2C1%2C0%2C1%2C0-1.414-1.414Z%22%20fill%3D%22%23000%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E)', backgroundSize: '0.6em', backgroundPosition: 'calc(100% - 0.5em) center', backgroundRepeat: 'no-repeat', WebkitAppearance: 'none', MozAppearance: 'none', appearance: 'none', width: 'auto', verticalAlign: 'baseline'}}>
        <option value disabled selected hidden>Choose...</option>
        <option>Ottawa</option><option>Rome</option><option>Tokyo</option><option>New Delhi</option>
      </select>
    </div>
    <div style={{paddingRight: '1rem', color: 'hsl(0, 0%, 0%)'}}>
      India 
    </div>
    <div>
      <select className="gift-select" style={{display: 'inline-block', boxSizing: 'border-box', alignItems: 'center', whiteSpace: 'pre', cursor: 'default', margin: 0, fontFamily: 'inherit', fontSize: 'inherit', lineHeight: '1.5', textTransform: 'none', minWidth: '8rem', color: 'hsl(0, 0%, 16%)', backgroundColor: 'hsl(0, 0%, 100%)', border: '1px solid hsl(0, 0%, 81%)', borderRadius: '0.25rem', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px', padding: '0.375rem 1.75rem 0.375rem 0.75rem', backgroundImage: 'url(data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Ctitle%3Edown-arrow%3C%2Ftitle%3E%3Cg%20fill%3D%22%23000000%22%3E%3Cpath%20d%3D%22M10.293%2C3.293%2C6%2C7.586%2C1.707%2C3.293A1%2C1%2C0%2C0%2C0%2C.293%2C4.707l5%2C5a1%2C1%2C0%2C0%2C0%2C1.414%2C0l5-5a1%2C1%2C0%2C1%2C0-1.414-1.414Z%22%20fill%3D%22%23000%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E)', backgroundSize: '0.6em', backgroundPosition: 'calc(100% - 0.5em) center', backgroundRepeat: 'no-repeat', WebkitAppearance: 'none', MozAppearance: 'none', appearance: 'none', width: 'auto', verticalAlign: 'baseline'}}>
        <option value disabled selected hidden>Choose...</option>
        <option>Ottawa</option><option>Rome</option><option>Tokyo</option><option>New Delhi</option>
      </select>
    </div>
  </div>
</section>

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

<section style={{flexWrap: 'wrap', position: 'relative', padding: '1rem 1rem', marginBottom: '0.5rem', backgroundColor: 'hsl(194, 60%, 96%)', border: 'solid hsl(180, 35%, 89%) 2px', borderRadius: '6px', boxShadow: '0px 1px 3px hsl(0, 0%, 74%)'}}>
  <div style={{display: 'flex', fontWeight: 'bold'}}>
    <span>
      <span style={{color: 'hsl(180, 24%, 60%)'}}>Optional Title...</span>
    </span>
    <span style={{marginLeft: 'auto', paddingLeft: '0.75rem', flex: 'none'}}>
      <span style={{boxShadow: '0px 1px 3px hsl(0, 0%, 74%)', paddingLeft: '0.7rem', paddingRight: '0.7rem', paddingTop: '0.4rem', paddingBottom: '0.4rem', borderRadius: '4px', backgroundColor: 'hsl(194, 55%, 98%)', color: 'hsl(180, 15%, 41%)'}}>Numerical</span>
    </span>
  </div>
  <p style={{color: 'hsl(0, 0%, 0%)'}}>What's 2 plus 2?</p>
  <div>
    <span style={{color: 'hsl(0, 0%, 0%)'}}>Answer: </span><input className="gift-input" type="text" style={{display: 'inline-block', padding: '0.375rem 0.75rem', lineHeight: 'inherit', color: 'hsl(0, 0%, 16%)', backgroundColor: 'hsl(0, 0%, 100%)', border: '1px solid hsl(0, 0%, 81%)', borderRadius: '0.25rem', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px', margin: 0, fontFamily: 'inherit', fontSize: 'inherit'}} placeholder={4} />
  </div>
</section>


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

<section style={{flexWrap: 'wrap', position: 'relative', padding: '1rem 1rem', marginBottom: '0.5rem', backgroundColor: 'hsl(194, 60%, 96%)', border: 'solid hsl(180, 35%, 89%) 2px', borderRadius: '6px', boxShadow: '0px 1px 3px hsl(0, 0%, 74%)'}}>
  <div style={{display: 'flex', fontWeight: 'bold'}}>
    <span>
      <span style={{color: 'hsl(180, 24%, 60%)'}}>Optional Title...</span>
    </span>
    <span style={{marginLeft: 'auto', paddingLeft: '0.75rem', flex: 'none'}}>
      <span style={{boxShadow: '0px 1px 3px hsl(0, 0%, 74%)', paddingLeft: '0.7rem', paddingRight: '0.7rem', paddingTop: '0.4rem', paddingBottom: '0.4rem', borderRadius: '4px', backgroundColor: 'hsl(194, 55%, 98%)', color: 'hsl(180, 15%, 41%)'}}>Essay</span>
    </span>
  </div>
  <p style={{color: 'hsl(0, 0%, 0%)'}}>Write a short explanation of how ocean tides work.</p><textarea className="gift-textarea" style={{width: '100%', height: '7rem', lineHeight: 'inherit', color: 'hsl(0, 0%, 16%)', backgroundColor: 'hsl(0, 0%, 100%)', border: '1px solid hsl(0, 0%, 81%)', borderRadius: '0.25rem', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px', padding: '0.5rem', margin: 0, fontFamily: 'inherit', fontSize: 'inherit'}} placeholder="Enter your answer here..." defaultValue={""} /></section>

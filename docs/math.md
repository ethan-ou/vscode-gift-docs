---
id: math
title: Math
---

In this section, we'll cover how to use GIFT for math-heavy subjects.

## Using LaTeX

GIFT supports questions with LaTeX to allow the creation of complex formulas and equations. If you use LaTeX with Moodle, it should work the way you expect it to, with a couple of small differences:
* For inline equations use `\\(` and `\\)` for the start and close of a block.
* For equation blocks, use `$$` and `$$` for the start and close of a block.
* Make sure to escape all special characters `~ = # { } :` using a backslash `\` (e.g. `\{`, `\}`). Take special care with curly brackets `{`, `}` since they are also used for GIFT's question syntax.

Escaping all special characters is **very** important for LaTeX to work in GIFT. The following block will illustrate the difference:

```text
# Unescaped LaTeX
$$ x\ =\ \frac{\sqrt{144}}{2}\ \times\ (y\ +\ 12) $$  

# Escaped LaTeX (notice all curly brackets {} and = are escaped)
$$ x\ \=\ \frac\{\sqrt\{144\}\}\{2\}\ \times\ (y\ +\ 12) $$
```

For additional information on LaTeX in Moodle, refer to the Moodle docs on [Using TeX notation](https://docs.moodle.org/23/en/Using_TeX_Notation).

Example:

```text
For the following equation, what is the value of \\(x\\) when the value of \\(y \= 2 \\)?
$$ x\ \=\ \frac\{\sqrt\{144\}\}\{2\}\ \times\ (y\ +\ 12) $$ {
    =\\(84\\)
    ~\\(80\\)
    ~\\(96\\)
    ~\\(102\\)
}
```

<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
    integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
    crossorigin="anonymous"
/>

<section style={{flexWrap: 'wrap', position: 'relative', padding: '1rem 1rem', marginBottom: '0.5rem', backgroundColor: 'hsl(194, 60%, 96%)', border: 'solid hsl(180, 35%, 89%) 2px', borderRadius: '6px', boxShadow: '0px 1px 3px hsl(0, 0%, 74%)'}}>
  <div style={{display: 'flex', fontWeight: 'bold'}}>
    <span>
      <span style={{color: 'hsl(180, 24%, 60%)'}}>Optional Title...</span>
    </span>
    <span style={{marginLeft: 'auto', paddingLeft: '0.75rem', flex: 'none'}}>
      <span style={{boxShadow: '0px 1px 3px hsl(0, 0%, 74%)', paddingLeft: '0.7rem', paddingRight: '0.7rem', paddingTop: '0.4rem', paddingBottom: '0.4rem', borderRadius: '4px', backgroundColor: 'hsl(194, 55%, 98%)', color: 'hsl(180, 15%, 41%)'}}>Multiple Choice</span>
    </span>
  </div>
  <p style={{color: 'hsl(0, 0%, 0%)'}}>For the following equation, what is the value of <span className="katex"><span className="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>x</mi></mrow><annotation encoding="application/x-tex">x</annotation></semantics></math></span><span className="katex-html" aria-hidden="true"><span className="base"><span className="strut" style={{height: '0.43056em', verticalAlign: '0em'}} /><span className="mord mathnormal">x</span></span></span></span> when the value of <span className="katex"><span className="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>y</mi><mo>=</mo><mn>2</mn></mrow><annotation encoding="application/x-tex">y = 2 </annotation></semantics></math></span><span className="katex-html" aria-hidden="true"><span className="base"><span className="strut" style={{height: '0.625em', verticalAlign: '-0.19444em'}} /><span className="mord mathnormal" style={{marginRight: '0.03588em'}}>y</span><span className="mspace" style={{marginRight: '0.2777777777777778em'}} /><span className="mrel">=</span><span className="mspace" style={{marginRight: '0.2777777777777778em'}} /></span><span className="base"><span className="strut" style={{height: '0.64444em', verticalAlign: '0em'}} /><span className="mord">2</span></span></span></span>? <span className="katex-display"><span className="katex"><span className="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>x</mi><mtext>&nbsp;</mtext><mo>=</mo><mtext>&nbsp;</mtext><mfrac><msqrt><mn>144</mn></msqrt><mn>2</mn></mfrac><mtext>&nbsp;</mtext><mo>×</mo><mtext>&nbsp;</mtext><mo stretchy="false">(</mo><mi>y</mi><mtext>&nbsp;</mtext><mo>+</mo><mtext>&nbsp;</mtext><mn>12</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex"> x\ =\ \frac{'{'}\sqrt{'{'}144{'}'}{'}'}{'{'}2{'}'}\ \times\ (y\ +\ 12) </annotation></semantics></math></span><span className="katex-html" aria-hidden="true"><span className="base"><span className="strut" style={{height: '0.43056em', verticalAlign: '0em'}} /><span className="mord mathnormal">x</span><span className="mspace">&nbsp;</span><span className="mspace" style={{marginRight: '0.2777777777777778em'}} /><span className="mrel">=</span><span className="mspace">&nbsp;</span><span className="mspace" style={{marginRight: '0.2777777777777778em'}} /></span><span className="base"><span className="strut" style={{height: '2.27022em', verticalAlign: '-0.686em'}} /><span className="mord"><span className="mopen nulldelimiter" /><span className="mfrac"><span className="vlist-t vlist-t2"><span className="vlist-r"><span className="vlist" style={{height: '1.5842200000000002em'}}><span style={{top: '-2.314em'}}><span className="pstrut" style={{height: '3em'}} /><span className="mord"><span className="mord">2</span></span></span><span style={{top: '-3.23em'}}><span className="pstrut" style={{height: '3em'}} /><span className="frac-line" style={{borderBottomWidth: '0.04em'}} /></span><span style={{top: '-3.677em'}}><span className="pstrut" style={{height: '3em'}} /><span className="mord"><span className="mord sqrt"><span className="vlist-t vlist-t2"><span className="vlist-r"><span className="vlist" style={{height: '0.90722em'}}><span className="svg-align" style={{top: '-3em'}}><span className="pstrut" style={{height: '3em'}} /><span className="mord" style={{paddingLeft: '0.833em'}}><span className="mord">1</span><span className="mord">4</span><span className="mord">4</span></span></span><span style={{top: '-2.86722em'}}><span className="pstrut" style={{height: '3em'}} /><span className="hide-tail" style={{minWidth: '0.853em', height: '1.08em'}}><svg width="400em" height="1.08em" viewBox="0 0 400000 1080" preserveAspectRatio="xMinYMin slice"><path d="M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z" /></svg></span></span></span><span className="vlist-s">​</span></span><span className="vlist-r"><span className="vlist" style={{height: '0.13278em'}}><span /></span></span></span></span></span></span></span><span className="vlist-s">​</span></span><span className="vlist-r"><span className="vlist" style={{height: '0.686em'}}><span /></span></span></span></span><span className="mclose nulldelimiter" /></span><span className="mspace">&nbsp;</span><span className="mspace" style={{marginRight: '0.2222222222222222em'}} /><span className="mbin">×</span><span className="mspace">&nbsp;</span><span className="mspace" style={{marginRight: '0.2222222222222222em'}} /></span><span className="base"><span className="strut" style={{height: '1em', verticalAlign: '-0.25em'}} /><span className="mopen">(</span><span className="mord mathnormal" style={{marginRight: '0.03588em'}}>y</span><span className="mspace">&nbsp;</span><span className="mspace" style={{marginRight: '0.2222222222222222em'}} /><span className="mbin">+</span><span className="mspace">&nbsp;</span><span className="mspace" style={{marginRight: '0.2222222222222222em'}} /></span><span className="base"><span className="strut" style={{height: '1em', verticalAlign: '-0.25em'}} /><span className="mord">1</span><span className="mord">2</span><span className="mclose">)</span></span></span></span></span></p><span style={{color: 'hsl(0, 0%, 0%)'}}>Select one:</span>
  <div>
    <input className="gift-input" type="radio" id="id_4Txkk" name="iddSwT85KL" />
    <label style={{display: 'inline-block', padding: '0.2em 0 0.2em 0', color: 'hsl(0, 0%, 0%)'}} htmlFor="id_4Txkk">
      <span className="katex"><span className="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>84</mn></mrow><annotation encoding="application/x-tex">84</annotation></semantics></math></span><span className="katex-html" aria-hidden="true"><span className="base"><span className="strut" style={{height: '0.64444em', verticalAlign: '0em'}} /><span className="mord">8</span><span className="mord">4</span></span></span></span>
    </label>
    <svg style={{verticalAlign: 'text-bottom', display: 'inline-block', marginLeft: '0.1rem', marginRight: '0.2rem', width: '1em', color: 'hsl(120, 39%, 54%)'}} role="img" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" /></svg>
  </div>
  <div>
    <input className="gift-input" type="radio" id="id4BR0Hf" name="iddSwT85KL" />
    <label style={{display: 'inline-block', padding: '0.2em 0 0.2em 0', color: 'hsl(0, 0%, 0%)'}} htmlFor="id4BR0Hf">
      <span className="katex"><span className="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>80</mn></mrow><annotation encoding="application/x-tex">80</annotation></semantics></math></span><span className="katex-html" aria-hidden="true"><span className="base"><span className="strut" style={{height: '0.64444em', verticalAlign: '0em'}} /><span className="mord">8</span><span className="mord">0</span></span></span></span>
    </label>
    <svg style={{verticalAlign: 'text-bottom', display: 'inline-block', marginLeft: '0.1rem', marginRight: '0.2rem', width: '0.75em', color: 'hsl(2, 64%, 58%)'}} role="img" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
  </div>
  <div>
    <input className="gift-input" type="radio" id="id4iw_e_" name="iddSwT85KL" />
    <label style={{display: 'inline-block', padding: '0.2em 0 0.2em 0', color: 'hsl(0, 0%, 0%)'}} htmlFor="id4iw_e_">
      <span className="katex"><span className="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>96</mn></mrow><annotation encoding="application/x-tex">96</annotation></semantics></math></span><span className="katex-html" aria-hidden="true"><span className="base"><span className="strut" style={{height: '0.64444em', verticalAlign: '0em'}} /><span className="mord">9</span><span className="mord">6</span></span></span></span>
    </label>
    <svg style={{verticalAlign: 'text-bottom', display: 'inline-block', marginLeft: '0.1rem', marginRight: '0.2rem', width: '0.75em', color: 'hsl(2, 64%, 58%)'}} role="img" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
  </div>
  <div>
    <input className="gift-input" type="radio" id="idKZ8aJJ" name="iddSwT85KL" />
    <label style={{display: 'inline-block', padding: '0.2em 0 0.2em 0', color: 'hsl(0, 0%, 0%)'}} htmlFor="idKZ8aJJ">
      <span className="katex"><span className="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>102</mn></mrow><annotation encoding="application/x-tex">102</annotation></semantics></math></span><span className="katex-html" aria-hidden="true"><span className="base"><span className="strut" style={{height: '0.64444em', verticalAlign: '0em'}} /><span className="mord">1</span><span className="mord">0</span><span className="mord">2</span></span></span></span>
    </label>
    <svg style={{verticalAlign: 'text-bottom', display: 'inline-block', marginLeft: '0.1rem', marginRight: '0.2rem', width: '0.75em', color: 'hsl(2, 64%, 58%)'}} role="img" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" /></svg>
  </div>
</section>



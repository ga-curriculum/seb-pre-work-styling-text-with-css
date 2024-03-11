<textarea id="source">

<h1 class="slide-header">Styling Text with CSS</h1>

<span id=time-estimate class="color-grey-500">30 mins</span>

<p id="lesson-description">
  Have you ever squinted over a website because it was too hard to read on your phone? Or because the font color blended into the background? Text styles affect the readability of a website and in turn how viewers engage with your page. In this lesson, we’ll show you how to set specific, user-friendly fonts and font styles.
</p>

<h5 id="topics-header" class="color-grey-500">Topics</h5>

Font Styles in CSS

<hr>

Using Classes and IDs in CSS

<hr>

<a href="https://ga-create-api.s3.amazonaws.com/studyguides/styling-text-with-css-318e6a.pdf" target="_blank" download="styling_text_with_css_study_guide.pdf" class="ant-btn" data-trackable="true" data-track-category="study guide" data-track-section="lesson page" data-track-action="download study guide"><span role="img" class="anticon"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><g class="download_svg__nc-icon-wrapper"><path d="M8 12c.3 0 .5-.1.7-.3L14.4 6 13 4.6l-4 4V0H7v8.6l-4-4L1.6 6l5.7 5.7c.2.2.4.3.7.3z"></path><path data-color="color-2" d="M1 14h14v2H1z"></path></g></svg></span><span> Download Study Guide</span></a>

---

<h1 class="slide-header">Learning Objectives</h1>

<p>By the end of this lesson, you'll be able to:</p>

<ul>
  <li>Change the size and style of your fonts with CSS.</li>
  <li>Import fonts to a webpage.</li>
  <li>Use classes and IDs to style specific parts of your HTML.</li>
</ul>

---

<h1 class="slide-header">Let's Get Back to Work</h1>

In the last lesson, we added some basic styling to Hannah’s website, as you can see below. We also learned a few handy CSS properties in order to style `<h1>`, `<h2>`, and `<p>`:
  * `text-align` justifies the content in the center of the page.
  * `color` changes the color of the text.
  
Let’s review these text-styling properties and learn about a few new ones.

![link text](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/css-unit-assets/hannah-lesson-2.png)

---

<h1 class="slide-header">Text-Styling Properties</h1>

<details>
  <summary>`color`</summary>
  
  <p class="transcript-text">
    The `color` property changes the color of the text.

You can code the `color` property...
* With a regular word, such as `color: red`.
* Using a color’s **Hex code** — a unique six-digit value for any color, such as `color: #f142a3`.
* Using an **RGB value** — another unique identifier, such as `color: rgb(226,28,35)`.

![link text](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/css-unit-assets/color.png)
  </p>
</details>

<details>
  <summary>`font-size`</summary>
  
  <p class="transcript-text">
    The `font-size` rule affects — you guessed it — the size of your font. By default, certain HTML elements are larger than others: `<h1>` is the largest, followed by `<h2>`, and so on. But you can also adjust these sizes how ever you’d like.

      Here’s how you can set `font-size`:
      * Define the pixel size (e.g., `font-size: 12px`).
      * Set the size relative to other elements using `em`. `font-size: 0.5em` makes the font half the size of other elements, while `font-size: 2em` makes it twice as big.
      
      ![link text](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/css-unit-assets/font-size.png)
  </p>
</details>

<details>
  <summary>`font-weight`</summary>
  
  <p class="transcript-text">
    `font-weight` defines how heavy the text should be. 

You can set `font-weight` a couple of ways:
* Using `font-weight: bold`, which is similar to the “bold” setting in a word processor.
* Using a numeric thickness on a scale of 100–900.

![link text](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/css-unit-assets/font-weight.png)  
</p>
</details>

<details>
  <summary>`font-style`</summary>
  
  <p class="transcript-text">
    `font-style` is most often used to make text italic, as you would in a word processor.

It’s written as: `font-style: italic`.

![link text](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/css-unit-assets/font-style.png)
 </p>
</details>

<details>
  <summary>`text-transform`</summary>
  <p class="transcript-text">
    You can use `text-transform`  to...
* Set all letters in a word to upper case: `text-transform: uppercase`.
* Set all letters to lower case: `text-transform: lowercase`.
* Capitalize the first letter in each word: `text-transform: capitalize`.

![link text](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/css-unit-assets/text-transform.png)
 </p>
</details>

<details>
  <summary>`text-decoration`</summary>
<p class="transcript-text">
  `text-decoration` can add lines under or through your text:
  * `text-decoration: underline`
  * `text-decoration: line-through`
  
  Most frequently, it’s used to remove the default underline for hyperlinks (the `<a>` tag in HTML) by setting the value to `none`.
  
  ![link text](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/css-unit-assets/text-decoration.png)
    
 </p>
</details>

<details>
  <summary>`text-align`</summary>
  
  <p class="transcript-text">
    The `text-align` property affects how your content is aligned on the page: centered, right-aligned, or left-aligned (once again, just like in a word processor). It’s written as: `text-align: right`.

![link text](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/css-unit-assets/text-align.png)
 </p>
</details>

---

<h1 class="slide-header">Knowledge Check</h1>

What is the output of the following code?

```css
h2 {
  text-align: center;
  color: #fa8072;
  text-decoration: line-through;
  font-weight: bold;
  font-size: 14px;
}
```
<fieldset>
  <legend>Please select all that apply</legend>
  <input type="checkbox" id="uniqueAnswer" name="unique" correct="true"/><label for="uniqueAnswer">The `h2` is centered</label><br />
  <input type="checkbox" id="uniqueAnswer4" name="unique4" correct="true"/><label for="uniqueAnswer4">The `h4` is 14px</label><br />
  <input type="checkbox" id="uniqueAnswer2" name="unique2" /><label for="uniqueAnswer2">The `h2` is all lowercase</label><br />
  <input type="checkbox" id="uniqueAnswer3" name="unique3" correct="true"/><label for="uniqueAnswer3">The `h2` text has a strikethrough</label><br />
</fieldset>

<button class="ant-btn ant-btn-primary multiple-choice-checkbox-submit">Submit Answer</button>

---

<h1 class="slide-header">Code Practice</h1>

Let’s put some of these font stylings to work. We know that Hannah has some hometown pride for ATL, so let’s highlight it.

For your next act... 
1. Add a `<span>` tag in your HTML around the words `Atlanta, GA` in the `<p>` tag on line 21.
2. In CSS, create a rule for the `<span>` to turn the text color to red (try Hex #b22222). 

---

<h1 class="slide-header">Checking In with Our Client</h1>

Now that we know a bit more about text styling, let’s reach out to Hannah and see if she has any requests.

![link text](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/css-unit-assets/txt-msg-font.png)

Based on this feedback, let’s make these updates:
1. Adjust the `<h1>` to be 36px without changing the `<h2>` styling. (Hint: You’ll need to separate out the existing rule!)
2. Add a rule for the `<a>` tags to make the text purple (try Hex #9932cc) and remove the default underlines.

---

<h1 class="slide-header">A Cool Trick</h1>

Let’s look at the links in Hannah’s nav: the `<a>` tags we just styled. They’re now purple and not underlined. But this might make it hard for a user to know that the links are clickable, right?

  In our CSS, we can add a little trick that makes an underline appear beneath the link text when and only when **someone hovers over the words**. We’ll target the `hover` property of the `<a>` element via a **pseudo-class**. 
  
  Jump in and add the following code:
  
  ```css
  a:hover {
    text-decoration: underline;
  }
  ```

---

<h1 class="slide-header">Checking In Again</h1>

Let’s see what Hannah thinks now!

![link text](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/css-unit-assets/txt-msg-bullets.png)

---

<h1 class="slide-header">List Styling</h1>

When we add a list in HTML, it comes with some default styling:
* The `<ol>` (ordered list) is numbered.
* The `<ul>` (unordered list) comes with solid-disc bullet points. 

We can control this default styling by applying the `list-style` CSS property to an `<ol>` or `<ul>`.

We have several choices for how our bullets can look, such as `square` (a solid square) or `circle` (an open circle). Hannah has asked us to remove the bullet points altogether. We can do this by setting the `list-style` value to `none`. 

Let’s try it out!
1. Create a new CSS declaration for the `<ul>`.
2. Set the `list-style` property to `none`.

---

<h1 class="slide-header">The Fun Stuff: Fonts</h1>

There’s one big text-styling tool we haven’t covered yet: fonts! From Comic Sans, to Helvetica, to Times New Roman, the fonts you use on a site have a big impact on how people experience it.

To add fonts to your webpage, you’ll have to import them from an external source. And, while fonts can get expensive, lots of them are free! You can browse free fonts and import them from <a href="https://fonts.google.com/" target="_blank" rel="noreferrer noopener">Google Fonts</a>. 

Let’s share this link with Hannah:

![link text](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/css-unit-assets/txt-msg-poiret.png)

---

<h1 class="slide-header">Importing Fonts</h1>

Hannah’s wish is our command, so let’s add the font she liked: <a href="https://fonts.google.com/specimen/Poiret+One?selection.family=Poiret+One" target="_blank" rel="noreferrer noopener">Poiret One</a>.

First, we'll have to import the font before we can apply it. To import a font:

1.  After selecting the font, click "Select Style" (located underneath Size). A new column window will pop up on the right hand side of the window. 
2. Under “Embed Font,” click “@Import.”
3. Copy the import URL (you won’t need the `<style>` tags in this case): `@import url('https://fonts.googleapis.com/css?family=Poiret+One');`.
4. Paste the entire URL at the very top of your CSS style sheet, above all of your other rules.

**Note**: You wouldn't see the font on the page just yet– it won't automatically be added to any HTML elements.

You can use this same approach to import as many fonts as you’d like, but keep in mind that importing more than 2–3 may slow down your website’s performance.

---

<h1 class="slide-header">Styling with Fonts</h1>

Once we’ve imported a font, we get it to show up on the page by applying it to HTML elements. To do so, create a CSS rule with the `font-family` property, followed by the name of the font in quotes, like this: `font-family: 'Poiret One'`.

Unfortunately for web designers like you, not all web browsers support all fonts. To be safe, always place a comma after your selected font and enter a generic font family (e.g., `serif`, `sans-serif`) as a fallback. If a web browser doesn’t support the first font you’ve selected, it will automatically choose your fallback.

Here’s what that would look like:
```css
h1 {
  font-family: 'Georgia', sans-serif;
}
```

---

<h1 class="slide-header">Your Turn</h1>

Let’s work some font magic on Hannah’s site!

1. Create a new CSS rule for the `<body>` (to make sure that all of the text on the website uses our font).
2. Add `'Poiret One'` as the `font-family` and, to be safe, we’ll use `sans-serif` as the fallback.

Remember, you’ll first need the `import` statement: `@import url('https://fonts.googleapis.com/css?family=Poiret+One');`.

**Pro tip**: Add the `<body>` rule at the top of your style sheet — below the `@import` URL but before all of the other rules.

---

<h1 class="slide-header">Getting Specific With It</h1>

If you look through Hannah’s HTML, you’ll see that there are two `<ul>`s and two `<p>`s on the page. So far, we’ve been applying our CSS styles to all instances of an element. Both `<p>`s  are centered and gray. But what if we wanted to make the second `<p>` black?

We can get specific with our styling by adding some more information to our code: **classes** and **IDs**. We’ll add a class or ID label to an element’s HTML tag, then refer to that label in the CSS. By doing so, we can target that specific instance with any styling we want.

Here’s what that looks like:
```html
// We can take this element:
<h2>Welcome to my portfolio!</h2>

// And give it a class like this:
<h2 class="first-header">Welcome to my portfolio!</h2>
```

Let’s see how each label works.

---

<h1>Working with IDs</h1>

An **ID** lets us specify a unique label so that we can apply distinct styles to _just one thing_. You can add an ID to any part of your HTML in order to single it out, then target that ID in the CSS using the `#` character.

![link text](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/css-unit-assets/ids.png)

**Remember**: IDs must be _unique_! That is, we can only use the `#very-unique` ID once in the HTML. If we wanted to specify other `<p>` elements, we’d have to give them different IDs. As such, you should avoid using IDs unless you _know for certain_ the element is going to be unique.

---

<h1 class="slide-header">Working with Classes</h1>

On the other hand, a **class** lets us label several elements as belonging to the same group. You can use the same class throughout your HTML in order to apply the same style to many elements, and then target that class in CSS using the `.` character.

![link text](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/css-unit-assets/classes.png)

**Pro tip**: Use a class if you know that you’ll have several similar elements on your webpage — for example, several lists you want to look the same, or several images you want to be the same size. You’ll only need to write _one set of styles_ for that class and it will apply to all tagged elements.

---

<h1 class="slide-header">Overruled!</h1>

When we start using more specific selectors, such as classes and ids, it's possible to have several, conflicting CSS rules that would target the same element. In that case, the **most specific selector** always wins. In the example below, the p tag would be colored purple and sized 16px, because ids are more specific than classes, and classes are more specific than element selectors.

```html
<p class="medium-size" id="purple">I'm so conflicted!</p>
```

```css
p {
	font-size: 12px;
	color: blue;
}
.medium-size {
	font-size: 16px;
	color: green;
}
#purple {
	color: purple;
}
```

---

<h1 class="slide-header">Knowledge Check</h1>

Another client has asked you to style a sidebar on their portfolio website. The sidebar includes a heading, subheading, two bio paragraphs, and a few social media icons. 

Currently, all of the text is the same color. Describe the best approach for making **only the two bio paragraphs** blue.

<details>
  <summary>Reveal Answer</summary>
  As there are two bio paragraphs and possibly other `<p>` elements on the page, you should assign the bio paragraphs a class, like so: 
```html
<p class="bio">Paragraph 1</p>
<p class="bio">Paragraph 2</p>
```

Then, you can add CSS to style the text color of the bio paragraphs:
```css
.bio {
 color: #2e77bb;
}
```
  </details>

---

<h1 class="slide-header">Making Hannah's Website Classy</h1>

Let’s revisit Hannah’s website. Remember our two sets of `<ul>`s? We’ll want to distinguish between them so that we can style them differently in the future.

We’ll apply classes and IDs to the `<li>`s so that we can target those directly:
1. Give the social icons a `class` of “social” and the navigation items a `class` of “nav.” (Hint: Make sure to add the class before the opening `<a>` tag.)
2. See how the Instagram icon is a little different? It has a lot of whitespace around it, and we might need to format it individually. Let’s give it an `id` of “insta.” (Yes, you can give an element a class AND an ID!)

Next, let’s specify the `<p>` elements. There’s one at the top and one in the footer:
1. Give the first `<p>` a `class` of “top” and the second `<p>` a `class` of “footer.”
2. Next, add CSS styling to the “footer” `<p>`: Make the text 14px, black (Hex #000000), and italicized.

One last thing: There’s a bit too much purple text on the site. Let’s set the `<h1>` and `<h2>` back to a font color of black.


---

<h1 class="slide-header">Conclusion</h1>

Have we converted you into a text-styling nerd yet? If not, these sites certainly will:
* <a href="https://1stwebdesigner.com/css3-text-effects-typography/" target="_blank" rel="noreferrer noopener">More ways to style text in CSS</a>.
* A collection of awesome <a href="https://envato.com/blog/css3-typography-code-snippets/" target="_blank" rel="noreferrer noopener">text-styling code snippets</a> you can grab for your own projects.
* <a href="http://hellohappy.org/beautiful-web-type/" target="_blank" rel="noreferrer noopener">Beautiful Web Type</a>.

---

</textarea>
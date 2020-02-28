---
id: advanced
title: Advanced
---

In this section, we'll walkthrough some more advanced features that GIFT has to offer.

## Adding Media (Images, Audio & Video)

**Note:** For most purposes, we recommend adding media using Moodle's File Picker after uploading questions to Moodle. The following method is best used for media uploaded to external sources (e.g. Amazon S3, Flickr, Dropbox).

Using GIFT with multimedia is a little tricky. The following steps will help guide you through how to display multimedia in your questions.

1. Upload your files to a file server. You'll most likely need to use an external service such as Amazon S3, Flickr or otherwise. If your images are already on the web, skip this step.

2. Copy the links of each image into a spreadsheet or text editor.

3. Once you have links to each of your files, go to your editor and add the following code:

```html
<!-- Images -->
<img src\="<url>" />

<!-- Audio & Video -->
<a href="<url>">Filename</a>
```

Replace `<url>` with your link, and the image should now be linked to your question.

Example link:

```html
<img src\="https\://images.unsplash.com/photo-1582738412147-d29ca77b95cc" />
```

**Note:** Make sure to insert a backslash `\` for colons `:` and equals signs `=`, as well as other GIFT special characters `~ # { }`. 

A common source of errors is failing to backslash the colon on a `http:` or a `https:` e.g. `https\://www.google.com`.

### Adding Youtube Videos

To add a Youtube video:

1. Go to the video and click on the `Share` button.
2. Click on the `Embed` option and copy the code.
3. Paste it into your GIFT question.
4. Escape any colons `:`, hashes `#` or equals signs `=`.

Example:

```html
Watch the following video and summarise the events in your own words.
<iframe width\="560" height\="315" src\="https\://www.youtube.com/embed/2fqYgNR6174" frameborder\="0" allow\="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> {}
```

## Adding Styling and Alt Text to Images (Optional)

If you'd like to customise the look of your image, you can do so with basic CSS styling. This can be achieved by adding a `style` tag on your image.

We recommend the following for most images:

```html
<img src\="<url>" style\="vertical-align\: middle; margin\: 10px;" />
```

You can also scale your image to a particular width or height:

```html
<!-- Width Only: -->
<img src\="<url>" style\="width\: 200px" />

<!-- Height Only: -->
<img src\="<url>" style\="height\: 200px" />

<!-- Both: -->
<img src\="<url>" style\="width\: 200px; height\: 150px" />
```

For more style properties, we recommend looking at the [W3Schools guide on styling images](https://www.w3schools.com/css/css3_images.asp).

We also recommend adding alt text to your images using the `alt` tag to help accessibility.

```html
<img src\="<url>" alt\="<text>" />
```

All of these adjustments will look like the following in the final question:

```html
Which of the following is an image of a flower? {
    =<img src\="https\://images.unsplash.com/photo-1582738412147-d29ca77b95cc" style\="vertical-align\: middle; margin\: 10px; height\: 250px" alt\="An image of a flower." />
    ~<img src\="https\://images.unsplash.com/photo-1582833736371-b69dcc852ce2?ixlib" style\="vertical-align\: middle; margin\: 10px; height\: 250px" alt\="A gap in the rocks" />
}
```

## Previewing Media

If you're working with media, you may find your media fails to load in the preview window. 

This is a security feature to stop insecure content from appearing in your preview. More can be found in the [Visual Studio Code documentation](https://code.visualstudio.com/docs/languages/markdown#_markdown-preview-security).

If you accept the risks, the following steps will allow the preview to load media files:

1. Open a GIFT file or a file set to the GIFT language then press `F1`. 

2. In the search bar, type `Security`. Select the option titled `Gift: Change Preview Security Settings`.

3. Select `Allow insecure content`.

You should now see content from external sources appear in your preview.
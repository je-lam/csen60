- CSEN 60 Lab 1
- Firstname Lastname
- 10/01/2024

# Lab 1 Submission

## Part 1

Chosen webpage: https://www.w3schools.com/html/html_blocks.asp

### 1a

5 block elements:
<!--red box-->
```
<p>A block-level element always starts on a new line, and the browsers 
automatically add some space (a margin) before and after the element.</p>
```
<!--"Welcome to the internets!"-->
```
<p class="w3-theme-border" style="border-width:1px;border-style:solid;padding:5px;">
The &lt;p&gt; element is a block-level element.</p>
```
<!--"Interests sections"-->
```
<div class="w3-theme-border" style="border-width:1px;border-style:solid;padding:5px;">
The &lt;div&gt; element is a block-level element.</div>
</div>
```

```
<div id="midcontentadcontainer" style="overflow:auto;text-align:center">
<!-- MidContent -->
<!-- <p class="adtext">Advertisement</p> -->

  <div id="adngin-mid_content-0"></div>
  
</div>
```

```
<table class="ws-table-all notranslate">
<tbody><tr>
<th>Tag</th>
<th>Description</th>
</tr>
<tr>
<td><a href="/tags/tag_div.asp">&lt;div&gt;</a></td>
<td>Defines a section in a document (block-level)</td>
</tr>
<tr>
<td><a href="/tags/tag_span.asp">&lt;span&gt;</a></td>
<td>Defines a section in a document (inline)</td>
</tr>
</tbody></table>
```

### 1b

3 inline elements (if none found, provide 1 example of an inline element that could be added to the page):
```
<a target="_top" href="html_blocks.asp" class="active">HTML Block &amp; Inline</a>
```

```
<img id="upperfeatureshowcase300" src="/images/img_kurs_up_html_300.png" alt="Get Certified" style="width:auto;border-radius: 5px;">
```

```
<script>
(
function setThemeMode() {
  var x = localStorage.getItem("preferredmode");
  var y = localStorage.getItem("preferredpagemode");  
  if (x == "dark") {
    document.body.className += " darktheme";
  }
  if (y == "dark") {
    document.body.className += " darkpagetheme";
  }
})();
</script>
```
### 1c

3 HTML5 semantic tags (if none found, explain where you would add some):

```
<title>HTML Block and Inline Elements</title>
```

```
<form action="exercise.asp?x=xrcise_blocks1" method="post" target="_blank" rel="opener"><div class="quizoption"><input type="radio" name="quizoption" id="quizoption0" value="0"><label for="quizoption0">Block elements</label></div><div class="quizoption"><input type="radio" name="quizoption" id="quizoption1" value="1"><label for="quizoption1">Inline elements</label></div><br><button type="submit" class="ws-btn">Submit Answer »</button></form>
```

```
<button type="submit" class="ws-btn">Submit Answer »</button>
```
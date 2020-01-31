Figma plugin to copy svg as a plain text with unique randomized ids.
## SVG code with unique links ids

### What is it?
Plugin set unique ids for gradients and masks into the svg code. 

### What is a problem it solve?
The problem appears when two or more svg icons with the same type of gradient put on one page. The icons set the latest gradient from the svg files with two or more same ids. 
To solve the problem plugin adds 6 random numbers to ids inside the svg code links. This solution help to escape hand rewriting ids inside when you have the issue.

#### Without plugin:
```svg
<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    ...
    <rect fill="url(#paint0_linear)" ... />
    <rect fill="url(#paint1_radial)" ... />

    <defs>
        <linearGradient id="paint0_linear" ... />
        <radialGradient id="paint1_radial" ... />
        ...
    </defs>
</svg>
```

#### With plugin:
```svg
<svg width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    ...
    <rect fill="url(#paint0_linear-231475)" ... />
    <rect fill="url(#paint1_radial-863795)" ... />

    <defs>
        <linearGradient id="paint0_linear-231475" ... />
        <radialGradient id="paint1_radial-863795" ... />
        ...
    </defs>
</svg>
```


### How to use it?
* Select what you need to export in svg. 
* Run the plugin from the plugins menu. 
* In the opened popup, you may see svg code (already with unique ids inside in case if the code has links to gradients).
* Copy and paste everywhere you need.

### Sad news, guys 🥺
* Unfortunately, Figma didn't allow access to the export dialog for plugin development.
* Also, viewers role can't use plugins 😢

# Micro Focus ias-icons

This project is the icon font for CyberRes Identity and Access products,
which contains an official icon font for web applications built by Micro Focus Identity and 
Access Management Group. The icon font helps provide a consistent icon look and feel 
throughout these applications.

### Helpful Links

- [Documentation Site](https://microfocus.github.io/ias-icons)

### Usage

Install the package using npm:

```
$ npm install @microfocus/ias-icons
```

If you are building a project with Angular, you can add the following to your angular.json file:

```
"styles": [
    "node_modules/@microfocus/ias-icons/dist/ias-icons/ias-icons.css",
    "src/styles.scss"
],
```

If you want to manually integrate the ias-icons, download this tar file that includes all the files you'll need:

```
https://registry.npmjs.org/@microfocus/ias-icons/-/ias-icons-1.1.24.tgz
Note: ...ias-icons-1.1.24 number at the end of this url should match the latest release number.
1. Enter above url to latest release into your browser address field. This will download the distribution files.
2. Unpack the tgz file which will show a package folder containing all files.
3. Open "Dist" folder. It includes a Font folder and ias-icons.css file.
4. Copy all the files inside the Font folder to the Font folder in your project.
5. Copy the ias-icons.css file to the same place it exists in your project. This should overwrite the existing ias-icons.css file.
6. Edit the ias-icons.css file to make sure the font urls point to where your Font folders exists. 
```

The icons can be referenced by class name, as shown in the following example:

```
<i class="ias-icon ias-icon-down_thin"></i>
```
All svg files are copyrighted to Lynn Christensen and Microfocus.

Copyright 2008-2023 Lynn Christensen and Microfocus. All rights reserved.


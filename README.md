# Micro Focus ias-icons

This project is the icon font for Micro Focus Identity and Access products,
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

If you are building a project with Angular, you can add the following  to your angular.json file:

```
"styles": [
    "node_modules/@microfocus/ias-icons/dist/ias-icons/ias-icons.css",
    "src/styles.scss"
],
```

The icons can now be referenced by class name, as shown in the following example:

```
<i class="ias-icon ias-icon-down_thin"></i>
```


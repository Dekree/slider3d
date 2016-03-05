### slider3d(cube) ###
v. 0.1.0

The 3D cube slider jQuery plugin that lets you create six slides which are edges of 3D cube. 

###Features:
* Responsive
* CSS3 3d Transitions
* Changeble colors of which edge
* Turns of bars

> Tested on Chrome, Safari, Firefox, iPhone, Chrome on iPhone.

### 1.Getting Started
Load jQuery(1.7+) and include slider3d plugin files

```html
<!-- Include stylesheet -->
<link rel="stylesheet" href="slider3d/slider3d.min.css">

<!-- Include js plugin -->
<script src="slider3d/slider3d.min.js"></script>
```

### 2.Set up your HTML and Width and Height styles for it
You don't need any special markup. All you need is to create a container element <div class="your_class_name"> or <div id="your_id_name">.


```html
<div class="banner"></div>
```

```html
.banner {
  width: 100%;
  height: 500px;
```
> width and height should be not less then 300px.

### 3.Call the plugin
Now call the slider3d initializer function, set up the params and your slider3d is ready.

```html
$('#banner').slider3d({
		duration: 4000,/*default: 3000*/
		bars: 'on', /*'off' (default: 'on')*/
		edges: {
			first: {
				header: 'Header 1',
				text: 'Your text 1',
				color: '#ddd'/*Not necessary, default: '#d00'*/
			},
			second: {
				header: 'Header 2',
				text: 'Your text 2'
				color: ''/*Not necessary, default: '#dd0'*/
			},
			third: {
				header: 'Header 3',
				text: 'Your text 3',
				// color: ''/*Not necessary, default: '#999'*/
			},
			fourth: {
				header: 'Header 4',
				text: 'Your text 4'
				// color: ''/*Not necessary, default: '#04d'*/
			},
			fifth: {
				header: 'Header 5',
				text: 'Your text 5'
				// color: ''/*Not necessary, default: '#0dd'*/
			},
			sixth: {
				header: 'Header 6',
				text: 'Your text 6'
				// color: ''/*Not necessary, default: '#6a0'*/
			}
		}
	});
```

License
------------
The ISC License (ISC)

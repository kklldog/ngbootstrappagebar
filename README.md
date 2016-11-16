# ngbootstrappagebar
a pagebar directive base on bootstrap  angularjs1
## Usage
add bootstrap,angularjs and ngBootstrapPagebar.js then inject into the module .
```
     <pagebar page-info='pageInfo' on-change='changePage'></pagebar>
 
     <script src="bower_components/bootstrap/dist/js/bootstrap.js"></script>
     <script src="bower_components/angular/angular.js"></script>
     <script src="src/ngBootstrapPagebar.js"></script>
     angular.module('pageBarTest',['agile.bootstrap-pagebar']);
```

## Attributes

### pageInfo
a parent scope variable , it should include 3 porperties:
- **pageIndex**: current select page index ;  if changes 'pageIndex' and pageIndex not in the showing pages the pagebar will be rebuild .
- **showPages**: how many page numbers should be shown ;  if changes 'showPages' the pagebar will be rebuild .
- **totalPages**: how many pages or means the last page index ;  if changes 'totalPages'  the pagebar will be rebuild .

### onChange
a parent scope function , when the page number be clicked pagebar will call the fun and pass the index .

### example
[sample](https://kklldog.github.io/ngbootstrappagebar_sample.html)

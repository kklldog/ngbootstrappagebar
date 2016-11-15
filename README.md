# ngbootstrappagebar
a pagebar directive base on bootstrap  angularjs1
## Usage
add bootstrap,angularjs and ngBootstrapPagebar.js then inject into the module .
```
     <script src="bower_components/bootstrap/dist/js/bootstrap.js"></script>
     <script src="bower_components/angular/angular.js"></script>
     <script src="src/ngBootstrapPagebar.js"></script>
     angular.module('pageBarTest',['bootstrap-pagebar']);
```

## Attributes

### pageInfo
a parent scope variable , it should include 3 porperties:
- pageIndex: current select page index ;  if changes 'pageIndex' and pageIndex not in the showing pages the pagebar will be rebuild .
- showPages: how many pages should be shown ;  if changes 'showPages' the pagebar will be rebuild .
- totalPages: how many pages ;  if changes 'totalPages'  the pagebar will be rebuild .

### onChange
a parent scope function , when the page number be clicked pagebar will call the fun and pass the index .

### example
[sample](https://github.com/kklldog/ngbootstrappagebar/blob/master/sample.html)

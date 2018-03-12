# BowlingGame

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.2.
Run 'npm install -g @angular/cli"

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Remain issue

-- Currently 10th frame total calcuation has angular life-cycle issue.  Some times it works and some times not. This happened because data change detection and data change timing mismatched. Actual total data value chagned after total rendered(sometime). 
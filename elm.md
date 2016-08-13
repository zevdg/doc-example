# Rexources


[blog entry](http://tech.noredink.com/post/129641182738/building-a-live-validated-signup-form-in-elm)



# npm
```

npm list --global --depth 0
npm install -g elm browser-sync gulp




elm make --version

elm make SingnupForm.elm
elm make SingnupForm.elm --output elm.js

```


# gulp

    npm init 
    npm install --save-dev gulp

Dependencies are declared in `gulpfile.js`.

Gulp can watch files and then invoke task on 

`gulp`

# browser sync
    
    browser-sync start --server dist --files "dist/*.js" --index example.html
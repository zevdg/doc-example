# Resources


[blog entry](http://tech.noredink.com/post/129641182738/building-a-live-validated-signup-form-in-elm)



# npm
```

npm list --global --depth 0
npm install -g elm browser-sync gulp



elm make src/counter.elm # creates index.html
elm make src/counter.elm --output dist/elm.js

```


# gulp

    npm init 
    npm install --save-dev gulp

Dependencies are declared in `gulpfile.js`.

Gulp can watch files and then invoke task on 

`gulp`

# browser sync
    
    browser-sync start --server dist --files "dist/*.js" --index example.html
# Coast Beachwear Webstore


## Update 3/27/2018

## Part 1
- webpack-dev-server wasn't installed in devDependencies (you were probably using a global installation)
- webpack-dev-server + webpack 4 requires the webpack-cli dependency (which perhaps you also had globally installed)
- I moved a few of the main deps to devDependencies (FYI, these dependency management systems aren't perfect, and if your local packages use different versions from your global versions, or different versions between each other [even locally] conflicts can occur and confusing bugs as incorrect module state can be used, among other bugs; the best thing to do is achieve a clean slate and insure the deps versions are all compatible and/or their latest versions)


## Part 2
- NOTE: none of the above made it work; i just had to do it to get it to run on my local machine; and you will want to do it too so it can run any machine
- typically all deps related to building (babel + webpack plugins, etc) you want in `devDependencies`
- if you happen to be running this on Heroku (and this is why you had them in `dependencies`), you want to follow these instructions so you can use `devDependencies` on Heroku:
- https://devcenter.heroku.com/articles/nodejs-support#package-installation
- https://devcenter.heroku.com/articles/nodejs-support#skip-pruning


## Part 3 (got it working!)
- and I was able to make it work via a common strategy I noticed about hot loading: move the webpack accept stuff (which the `hot` HOC is doing behind the scenes) lower down your component tree. It's often problematic near the top.
- so I wrapped `UI` instead of `HotRender` and voila (the above initial notes may or may not have mattered)


## Part 4 (CSS)
- keep in mind as you test CSS (which works), if you add or remove classes it will refresh because a hash determining uniqueness of the *whole file* differs between loads and require a refresh. Just change the styles and you will see it works. *Note: this is unrelated to the class name hashes--you can change your className config to `localIdentName: '[name]_[local]' and it will still refresg.*


## Other Notes
- apparently the latest `hot` HOC doesn't hot module replace non-react components
- so if you want things like utility functions to replace, you may wanna try the old `<AppContainer>` + `module.hot.accept` technique.
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

## Part 4 (compare my 2nd commit to my 1st)

- I wanted to figure out exactly what the problem was rather than just stumbling on a random solution
- so basically it had to do with circular dependencies between `BeachHut` and `UI`. You will see these imports are commented out where they are no longer needed in `UI`, `BeachHut` and `HotRender`. I also moved the way products/locale/order are used to props passed down from `BeachHut` to accomplish this.
- Basically that `BeachHut` class is what's causing you problems. Currently it's not reactive. You want to change to use `setState` when it gets the data. And you don't want to export `new BeachHut`. That's ultimately not how things are done in ReactLandia :). It's mixing non-reactive patterns with reactive patterns (everything in HotRender down), which will lead to mixed results like this.
- It may or may not be the problem that was causing reloads--I'm pretty sure it was the circular dependencies between the files, where they were importing essentially the parent of all of them (`BeachHut`), which then essentially triggers `HotRender` to do a full reload.
- Basically the conclusion to draw is that stuff above your parent `hot(module)` hoc should not be imported anywhere else, or its children will reload when it does. As after all the `BeachHut` class doesn't have the `module.hot.accept` stuff wrapped around it like `HotRender` does. So any child components of `HotRender` that also import the non-HMRed grandparent of them all will trigger a full reload for all descendenats -- that was your problem :)
- one last thing about using BeachHut as a standard instantiated object instance: basically what you have now does in fact work (so long as the children don't also import it). But as soon as you want to do async stuff there, it will be a problem as you won't be able to trigger updates to children via `setState`. When you get to that you'll want to move the getting of products, etc, into UI or below, and then render loading spinners until you can set state with the response from your async fetches :)


## Part 5 (CSS)

- keep in mind as you test CSS (which works), if you add or remove classes it will refresh because a hash determining uniqueness of the *whole file* differs between loads and require a refresh. Just change the styles and you will see it works. *Note: this is unrelated to the class name hashes--you can change your className config to `localIdentName: '[name]_[local]' and it will still refresg.*


## Part 6 (Other Notes)

- apparently the latest `hot` HOC doesn't hot module replace non-react components
- so if you want things like utility functions to replace, you may wanna try the old `<AppContainer>` + `module.hot.accept` technique.
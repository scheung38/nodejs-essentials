# README.md

https://www.youtube.com/watch?v=lXRNRDjVdkY&list=PLpc_YvcwbxaRl8WOTamrAD78jnsuNqM1C&index=3

Servita Interview prep

https://github.com/asdf-vm/asdf-nodejs

https://asdf-vm.com/guide/getting-started.html#_4-install-a-plugin

### Install the Plugin

> asdf plugin add nodejs https://github.com/asdf-vm/asdf-nodejs.git


> asdf list all nodejs
0.1.14
0.1.15
:
:
17.8.0
17.9.0
18.0.0
18.1.0
18.2.0

> asdf install nodejs latest

https://nodejs.org/en/download/
Downloads
17th May 2022
Latest LTS Version: 16.15.0 (includes npm 8.5.5)


6. Set a Version
  - Global
> asdf global nodejs latest
$HOME/.tool-versions

  - Local 
Set in $PWD/.tool-versions
> asdf local nodejs latest


Typing node CLI for the first time:

No preset version installed for command node
Please install a version by running one of the following:

asdf install nodejs 16.15.0

or add one of the following versions in your config file at /Users/mincheung/Documents/servita-interview/.tool-versions
nodejs 16.13.1
nodejs 17.2.0
nodejs 18.2.0

> asdf install nodejs 16.15.0

After installation we should get:
node-v16.15.0-darwin-x64.tar.gz: OK

> node 

Now we should get node shell:

Welcome to Node.js v16.15.0.
Type ".help" for more information.



Can also install via nvm - node version manager

➜  servita-interview git:(master) ✗ nvm list   
         v6.9.0
         v6.9.1
         v6.9.5
         v8.3.0
        v9.11.2
        v10.6.0
       v10.15.3
        v11.4.0
        v11.6.0
       v11.11.0
       v14.16.1
       v16.14.2
        v17.7.2
->       system
default -> v10.15.3
node -> stable (-> v17.7.2) (default)
stable -> 17.7 (-> v17.7.2) (default)
iojs -> N/A (default)
unstable -> N/A (default)
lts/* -> lts/gallium (-> v16.14.2)
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.17.0 (-> N/A)
lts/dubnium -> v10.24.1 (-> N/A)
lts/erbium -> v12.22.11 (-> N/A)
lts/fermium -> v14.19.1 (-> N/A)
lts/gallium -> v16.14.2


> nvm use v6.9.0
Now using node v6.9.0 (npm v3.10.8)

> nvm use v16.14.2

> nvm list available



NodeJS Essentials 03: Hello World
# Freenote
#### [https://freenote.up.railway.app](https://freenote.up.railway.app)
#### [VIDEO DEMO HERE](https://youtu.be/t3KDwVimvDw)
_a job board app to help musicians find gigs and contractors find talent._

## Overview
#### Contractor creates job
![freenote-gif-1](https://user-images.githubusercontent.com/63696062/201970861-abb2bcf3-2c51-49bd-b3c3-e91ffd1ed1fd.gif)
#### Musician applies to that job
![freenote-gif-2](https://user-images.githubusercontent.com/63696062/201973366-a5b8f6a3-77e2-4069-83b5-0e6efb3a6e68.gif)
#### Contractor responds to that job application
![freenote-gif-3](https://user-images.githubusercontent.com/63696062/201975998-0c93301a-f1ac-49c5-a042-073c2f2be315.gif)
#### Musician finds application response
![freenote-gif-4](https://user-images.githubusercontent.com/63696062/201977790-311106dd-5839-4a53-b629-6e3d743c9172.gif)

## Set up this project locally

#### Install the Railway CLI
- curl: `curl -fsSL https://railway.app/install.sh | sh`
- npm: `npm i -g @railway/cli`
- brew: `brew install railwayapp/railway/railway`
- scoop: `scoop bucket add railway https://github.com/railwayapp/scoop-railway; scoop install railway/railway`
#### Connect to this project
```
railway link 9eeff253-1791-4887-bba4-e67f66efe8e1
```
#### Run backend
```
railway run rails s
```
#### Run frontend (in separate terminal window)
```
railway run npm run dev
```

## MIT License

Copyright (c) 2022 Sam Stout

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

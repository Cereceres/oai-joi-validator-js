# oai-joi-validator-js

Provides a joi schema to OAI API REST

## Install

```bash
$ npm install oai-joi-validator-js
```
# Config

You need to set the environment var METAPREFIX to list colon separated to every metaprefix available in your OAI API.

Example:

```bash
$ METAPREFIX=some,other,more node server.js
```
# Usage

```js

const Joi = require('joi')
const app = require('express')()
const validator = require('express-joi-validation')({})
 
const querySchema = require('oai-joi-validator-js')
 
app.get('/orders', validator.query(querySchema, {joi: joiOpts}), (req, res, next) => {
  console.log(
    `original query ${JSON.stringify(req.originalQuery)} vs. the sanatised query ${JSON.stringify(req.query)}`
  )
  
  // if we're in here then the query was valid!
  res.end(`you placed an order of type ${req.query.type}`)
})
```
##Contributing
In lieu of a formal style guide, take care  of maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.  For any bugs, please contact to me via e-mail: jesus.edelcereceres@gmail.com.


## License

The MIT License (MIT)

Copyright (c) 2015 Jesús Edel Cereceres Delgado [@Cereceres](https://github.com/Cereceres).

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

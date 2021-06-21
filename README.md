# sharktail

[![NPM Version](https://img.shields.io/npm/v/sharktail.svg)](https://www.npmjs.com/package/sharktail)
![node](https://img.shields.io/node/v/sharktail.svg)
[![Dependency Status](https://david-dm.org/ya332/sharktail.png)](https://david-dm.org/ya332/sharktail)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Sharktail lets you pipe output from command-line programs to the web in real-time

Official Node.js client for [https://sharktail.herokuapp.com](https://sharktail.herokuapp.com).

## Install

Client is available as an npm package.

    $ npm install -g sharktail

## Usage

Show output on both stdout and sharktail:

    $ echo "hello" | sharktail

Dummy loop in ```batch``` and pipe to stdout and sharktail client
```sh
for /L %n in (1,1,10) do (sleep 1 & echo %n) | sharktail
```

Dummy loop in ```bash``` and pipe to stdout and sharktail client
```sh
for i in {1..10}; do echo $i && sleep 1; done | sharktail
```

Dummy loop in ```python``` and pipe to stdout and sharktail client. 
- Please note the usage of `-u`. Without it, all output will be displayed when the program execution is over instead of real-time. Flushing the stdout after every print statement is required to fix this, but it can be burdensome so using `-u` is more convenient.  

```sh
python -u dummy_out.py | sharktail --delay 5
```
where dummy_out.py is 

```python
import time

for i in range(10):
    print("hello {}".format(i))
    time.sleep(1)
```

-Have time to see URL before full-screen command:

    $ echo "hello" | sharktail --delay 5


## Author

Yigit Alparslan ([@ya332](https://github.com/ya332))

## Credits & Inspiration

Inspired by [seashells.io](seashells.io). This client command is modified heavily from [https://github.com/roccomuso/seashells](https://github.com/roccomuso/seashells). Credits go to them.
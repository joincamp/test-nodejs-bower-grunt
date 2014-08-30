# test-nodejs-bower-grunt


## Base Docker Image

* [dockerfile/nodejs-bower-grunt-runtime](http://dockerfile.github.io/#/nodejs-bower-grunt-runtime)


## Build Docker Image

    docker build -t="pilwon/test-nodejs-bower-grunt" github.com/pilwon/test-nodejs-bower-grunt

OR

    docker pull pilwon/test-nodejs-bower-grunt


## Run Docker container

    APP=$(docker run -d -p 3000 pilwon/test-nodejs-bower-grunt)
    PORT=$(docker port $APP 3000 | awk -F: '{ print $2 }')
    echo "Open http://localhost:$PORT/"

OR

    docker run -d --net="host" -e="PORT=80" pilwon/test-nodejs-bower-grunt

* [http://localhost](http://localhost)

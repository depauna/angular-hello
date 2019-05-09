FROM depauna/nvm:latest as preparedbuilder
ADD package.json natand/
ADD package-lock.json natand/
ADD install.sh natand/install.sh
WORKDIR natand
RUN ./install.sh

FROM preparedbuilder as builder
ADD . /natand/
WORKDIR /natand/
ENV APIURL="http://kubernetes-elb-depauna-127443764.eu-west-1.elb.amazonaws.com/depaunabackend"
RUN ./build.sh

FROM depauna/apache:latest
COPY --from=builder /natand/dist/employee-management /var/www/html/
CMD httpd -X

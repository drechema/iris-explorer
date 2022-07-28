# IRIS Explorer

This App demo the InterSystems IRIS REST API discovery and API generation (InterSystems IRIS version 2019.1).
There is a nice article explaining the background at InterSystems Developer Community:
<https://community.intersystems.com/post/iris-api-explorer-application>

## Docker

In order to run this app easier I prepared a Docker container for a quick start
This IRIS API Explorer docker file is using iris-community:2019.4.0.383.0 from docker store

### Docker Compose

The project come ready to run on Docker. From the project directory you have only to execute:

```bash
docker-compose build
docker-compose up -d
```

This command starts two docker compose services:

- iris-explorer_web [the angular app deployed in a NGIX web server]
- iris-exploreer_iris [iris 2019.4]

When you have everything up you need to start session in IRIS <http://localhost:55773/csp/sys/%25CSP.Portal.Home.zen> using superuser/SYS and change the login password to a new one. Once you change the password you can access to the Angular app <http://localhost:8000/home> and start exploring IRIS APIs using the IRIS instance up in localhost:55773 and the user and password you used before to access to the IRIS instance 'superuser'.

When you finish your demo then execute:

```bash
docker-compose down
```

and everything stop smooth

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

The application support i18n translations in order to run with another language run:

```bash
ng serve --aot --i18nFile=src/locale/messages.es.xlf --i18nFormat=xlf --locale=es
```

More help about how to configure i18n here [<https://v5.angular.io/guide/i18n>]

## Code scaffolding
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3
Using Angular 5.2.2

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

Email me :-) or add a Github issue

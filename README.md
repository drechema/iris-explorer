# IRIS Explorer

This App demo the InterSystems IRIS REST API discovery and API generation (IRIS version 2019.1).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

## Docker

### Pre-requisites

- You need a valid license for IRIS. Put it in `./shared` folder

### Docker Compose

The project come ready to run on Docker. You have only to execute:

```bash
docker-compose up -d
```

This command starts two docker compose services:

- iris-explorer_web [the angular app deployed in a NGIX web server]
- iris-exploreer_iris [iris 2019.1]

When you have everything up you need to start session in IRIS <http://localhost:52773/csp/sys/%25CSP.Portal.Home.zen> and change the login password. Once you change the password you can access to the Angular app <http://localhost/home> and start exploring IRIS APIs using the user and password you used before

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

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

Email me :-) or add a Github issue
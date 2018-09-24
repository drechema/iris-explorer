import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IrisApiService } from '../../services/iris-api.service';
import { Api } from '../../objects/api.object';
import { AlertService } from '../../services/alert.service';

@Component({
    selector: 'app-iris',
    templateUrl: './iris.component.html',
    styleUrls: ['./iris.component.css'],
})

export class IrisComponent implements OnInit {
    public apis: Api[];
    public loading = false;
    public authForm: FormGroup;
    public show: string;
    public currentApi: Api;

    public constructor(
        private alertService: AlertService,
        private apiService: IrisApiService
    ) {
        this.authForm = new FormGroup({
            'Username': new FormControl('', [Validators.required]),
            'Password': new FormControl('', [Validators.required])
        });
        this.show = 'auth';
        this.currentApi = null;
    }

    ngOnInit(): void {
    }

    loadAPIs() {
        this.loading = true;
        this.apiService.getAll()
            .then(rsp => {
                this.apis = rsp;
                this.loading = false;
                this.show = 'list';
            })
            .catch(error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }

    authChanges() {
        const username = this.authForm.controls['Username'].value;
        const password = this.authForm.controls['Password'].value;
        this.apiService.setHeaders(username, password);
        this.loadAPIs();
    }

    refresh() {
        this.loadAPIs();
    }

    startCreate() {
        this.show = 'create';
    }

    endCreate(api: Api) {
        this.show = 'list';
        if (api) {
            this.loadAPIs();
        }
    }

    startViewSpecification(api: Api) {
        this.currentApi = api;
        this.show = 'spec';
    }

    endViewSpecification(api: Api) {
        this.show = 'list';
    }

    delete(api: Api) {
        if (confirm('Confirm you want to delete the API')) {
            this.loading = true;
            this.apiService.delete(api.namespace, api.name)
                .then(rsp => {
                    this.apis = this.apis.filter(a => a.name !== api.name);
                    this.loading = false;
                })
                .catch(error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
        }
    }
}

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../../system/base.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';['', Validators.required]


@Component({
  selector: 'plg-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent extends BaseComponent implements OnInit {

  public form = new FormGroup({
    name: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email
    ])),
    message: new FormControl('', Validators.required),
  });

  public formError:any = {
    'email': {
      errors : {
        required: {
          valid: true,
          error: 'email required'
        },
        email: {
          valid: true,
          error: 'invalid email'
        },
      },
      errorRecap: null
    },
    'message': {
      errors : {
        required: {
          valid: true,
          error: 'message required'
        },
      },
      errorRecap: null
    }
  };

  constructor(private _chageRef: ChangeDetectorRef) {
    super();
  }

  ngOnInit() {
  }

  onSubmit() {
    this._validation();
  }

  _initFormError() {
    for (let key in this.formError) {
      for (let keyErr in this.formError[key]['errors']) {
        this.formError[key]['errors'][keyErr].valid = true;
        this.formError[key].errorRecap = null;
        this._chageRef.detectChanges();
      }
    }
  }

  _validation() {

    this._initFormError();

    for (let key in this.formError) {
      let errors = this.form.get(key).errors;
      let errArr:Array<string> = [];
      for (let keyErr in errors) {
        if (this.formError[key]['errors'][keyErr]) {
          this.formError[key]['errors'][keyErr].valid = this.form.get(key).valid;
          errArr.push(this.formError[key]['errors'][keyErr].error);
        }
      }
      this.formError[key]['errorRecap'] = (errArr.length) > 0 ? errArr.join(', ') : null;
    }
  }
}

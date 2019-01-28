import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { documentType } from 'src/models/documentType';
import { documentSubType } from 'src/models/documentSubType';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css']
})
export class NewRequestComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  documentTypes: documentType[] =[
    {documentId:'',documentTypeText:''},
    {documentId: 'ms',documentTypeText:'Marital Status'},
    {documentId: 'as',documentTypeText:'Adress Change'},
  ];
  documentSubTypes: documentSubType[] =[
    {documentSubTypeId : 'msst', documentSubTypeText:'Marital Status SubType'},
    {documentSubTypeId : 'as', documentSubTypeText:'Address Change SubType'}
  ];
  
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}

import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService implements OnInit{


  inputForm: FormGroup;

  constructor(private httpClient: HttpClient) {
    this.inputForm = new FormGroup({
      name: new FormControl(null)
    })
  }
  ngOnInit(): Observable<Dictionary> {
    const name = this.inputForm.value.name;
    console.log(name);
    return this.httpClient.get<Dictionary>('https://owlbot.info/api/v4/dictionary/' + name, {
      headers: new HttpHeaders().append('Authorization', 'Token c9eb4c0c7b494cebfef33ead2535acf8bf301968')
    });
  }

}

  // declare module namespace {
    export interface Definition {
      type: string;
      definition: string;
      example: string;
      image_url: string;
      emoji: string;
    }
    export interface Dictionary{
      definitions: Definition[];
      pronunciation: string;
      word: string;
    }

  //}


import { Component, OnInit } from '@angular/core';
import {Definition, DictionaryService} from '../service/dictionary.service';
@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {

  definition: Definition[];
  pronunciation: string;
  word: string;
  constructor(public disService: DictionaryService) {

  }
  ngOnInit(): void {}

  clicker(): any{
    this.disService.ngOnInit().subscribe(
      value => {
        console.log(value);
        this.definition = value.definitions;
        this.pronunciation = value.pronunciation;
        this.word = value.word;
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { FunnyFactsService } from './services/funny-facts.service';
import { IFunFactItem } from './models/ifun-fact-item.model';

@Component({
  selector: 'app-funny-facts',
  templateUrl: './funny-facts.component.html',
  styleUrls: ['./funny-facts.component.scss']
})
export class FunnyFactsComponent implements OnInit {
  data$: Observable<IFunFactItem[]>;

  constructor(private funnyFactsService: FunnyFactsService) {}

  ngOnInit() {
    this.data$ = this.funnyFactsService.getAll();
  }
}

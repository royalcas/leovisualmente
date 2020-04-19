import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-introduction',
  templateUrl: './personal-introduction.component.html',
  styleUrls: ['./personal-introduction.component.scss']
})
export class PersonalIntroductionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goPreviousCategory() {
    this.router.navigate(['/my-work', 'hearths']);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  checkRoute2(nos:number){
    this.router.navigate(['tree', 'details', 9999991], {queryParams: {
        allowEdit: '1'
      },
      fragment: 'loading'
    })
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, OnDestroy {

  firstSubscription: Subscription;
  constructor(private router: Router) { }

  ngOnInit(): void {
    const customObservable = new Observable((observer) => {
      let count = 0;
      setInterval(()=>{
        if(count>5){
          observer.complete();
        }
        observer.next(count);
        count++;
      },1000);
    });

    this. firstSubscription = customObservable.pipe(map((data:number)=>{
      return (data);
    }), filter(data=> data!==4)).subscribe((data)=>{
      console.log(data);
    },
    ()=>{
      console.log('complete');
    })
  }

  ngOnDestroy(){
    this.firstSubscription.unsubscribe();
  }

  checkRoute2(nos:number){
    this.router.navigate(['tree', 'details', 9999991], {queryParams: {
        allowEdit: '1'
      },
      fragment: 'loading'
    })
  }

}

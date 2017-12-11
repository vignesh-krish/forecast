import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router'

import { Person } from "../person";
import { PeopleService } from 'app/people.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styles: []
})
export class PersonDetailsComponent implements  OnInit , OnDestroy {
  person: Person;
  sub:any;
  constructor(private peopleService:PeopleService, private route: ActivatedRoute, private router:Router) { }
  ngOnInit() { 

    this.sub = this.route.params.subscribe(params =>{
      let id = Number.parseInt(params['id']);
      this.person = this.peopleService.get(id);
    });
  }
  gotoPeoplesList(){
    let link = ['/persons'];
    this.router.navigate(link);
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
  savePersonDetails(){
   // alert(`saved!!! ${JSON.stringify(this.person)}`);
   this.peopleService.save(this.person);  
  }
  

}

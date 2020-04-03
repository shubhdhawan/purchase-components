import { Component, OnInit } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  providers: []
})
export class CardsComponent implements OnInit {
   heading="Real estate data" 
   company="Data Pitcher"
   discount="$52"
   price="$42"
   sales="10.4k Sales"
   views="94"
   url="confidential"
   api="confidential"
   datavisualization="not available"
   description="Lorem ipsum dolor sit amet, ne nostrud corrumpit quo, his sale idque id. Eu meliore accusata p."
   category="DATA ASSETS"
   type="UNVERIFIED"
   banner={ verified:false, unverified:true, trusted:false}
   ratings=3;
  constructor() { 

    
  }

  ngOnInit(): void {
 
   

  }

  //  change()
  //  {
  //    if(this.type=="VERIFIED")
  //    {
  //      this.banner.verified=true;
  //    }
  //    else if(this.type=="UNVERIFIED")
  //    {
  //      this.banner.unverified=true;
  //    }
  //    else if(this.type=="TRUSTED")
  //    {
  //      this.banner.trusted=true;
  //    }
  //  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, ParamMap } from '@angular/router';

@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css']
})
export class OneProductComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: Data) => {
      console.log(data);
    });
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      console.log(paramMap.get('id'));
    });
  }

}

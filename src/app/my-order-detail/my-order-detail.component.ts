import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-order-detail',
  templateUrl: './my-order-detail.component.html',
  styleUrls: ['./my-order-detail.component.scss']
})
export class MyOrderDetailComponent implements OnInit {

  order: any;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private rest: RestApiService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(res => {
      this.rest.get(`http://localhost:3030/api/orders/${res['id']}`)
        .then(data => {
          data['success']
            ? (this.order = data['order'])
            : this.router.navigate(['/']);
        }).catch(error => this.data.error(error['message']));
    })
  }

}
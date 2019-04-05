import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: any;

  myReview = {
    title: '',
    description: '',
    rating: 0
  };

  btnDisabled = false;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private rest: RestApiService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(res => {
      this.rest.get(`http://localhost:3030/api/product/${res['id']}`)
        .then(data => {
          data['success']
            ? (this.product = data['product'])
            : this.router.navigate(['/']);
        }).catch(error => this.data.error(error['message']));
    })
  }

  async postReview() {
    this.btnDisabled = true;
    try {
      const data = await this.rest.post(
        'http://localhost:3030/api/review',
        {
          productId: this.product._id,
          title: this.myReview.title,
          description: this.myReview.description,
          rating: this.myReview.rating
        }
      );
      data['success']
        ? this.data.success(data['message'])
        : this.data.error(data['message']);
    } catch (error) {
      this.data.error(error['message']);
    }
    this.btnDisabled = false;
  }

}
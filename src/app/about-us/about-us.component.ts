import { Component, OnInit } from '@angular/core';
import { FaqItem } from '@angular-material-extensions/faq';
import { FaqService } from './../faq.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  list: FaqItem[] = [];
  constructor(private faqService: FaqService) { }

  ngOnInit(): void {
    this.list = this.faqService.getFaqItems();
  }

}

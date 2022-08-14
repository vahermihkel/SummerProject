import { FaqService } from './../../faq.service';
import { Component, OnInit } from '@angular/core';
import { FaqItem } from '@angular-material-extensions/faq';

@Component({
  selector: 'app-faq-add',
  templateUrl: './faq-add.component.html',
  styleUrls: ['./faq-add.component.css']
})
export class FaqAddComponent implements OnInit {
  list: FaqItem[] = [];

  constructor(private faqService: FaqService) { }

  ngOnInit(): void {
    this.list = this.faqService.getFaqItems();
  }

  onNewFaqItem(faqItem: FaqItem) {
    this.faqService.newFaqItem(faqItem);
    this.list = this.faqService.getFaqItems();
  }
}

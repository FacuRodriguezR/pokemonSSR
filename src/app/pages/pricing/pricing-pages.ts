import { isPlatformServer } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'page-pricing',
  imports: [],
  templateUrl: './pricing-pages.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPages {
private title = inject(Title)
  private meta = inject(Meta)
  private platform = inject(PLATFORM_ID);

  ngOnInit() {

    // if(!isPlatformServer(this.platform)){
    //   document.title = 'Pricing Page';
    // }

    // console.log(isPlatformServer(this.platform))
    this.title.setTitle('Pricing Page');
    this.meta.updateTag({ name: 'description', content: 'Pricing Page Description' });
    this.meta.updateTag({ name: 'og:title', content: 'Pricing Page Description' });
    this.meta.updateTag({ name: 'keywords', content: 'Pricing, Facundo, Pokemon, Pikachu' });
  }

}

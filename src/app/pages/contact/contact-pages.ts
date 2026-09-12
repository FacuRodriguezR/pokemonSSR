import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'page-contact',
  imports: [],
  templateUrl: './contact-pages.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ContactPages {
private title = inject(Title)
  private meta = inject(Meta)

  ngOnInit() {
    this.title.setTitle('Contact Page');
    this.meta.updateTag({ name: 'description', content: 'Contact Page Description' });
    this.meta.updateTag({ name: 'og:title', content: 'Contact Page Description' });
    this.meta.updateTag({ name: 'keywords', content: 'Contact, Facundo, Pokemon, Pikachu' });
  }

}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'page-about',
  imports: [],
  templateUrl: './about-pages.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutPages { }

import { ChangeDetectionStrategy, Component } from '@angular/core';
import AboutPages from '../../../pages/about/about-pages';
import ContactPages from '../../../pages/contact/contact-pages';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Navbar { }

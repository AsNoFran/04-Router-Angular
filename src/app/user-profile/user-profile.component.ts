import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  user: User = new User(
    'John Doe',
    32,
    'taper votre citation',
    'https://images-platform.99static.com/bq5rZgkBLxZTVADKAZdnRFKjLRs=/500x500/top/smart/99designs-contests-attachments/56/56093/attachment_56093576'
  );
}

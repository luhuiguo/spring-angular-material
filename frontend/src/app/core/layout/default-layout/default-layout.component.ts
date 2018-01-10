import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../user/user';
import { AuthService } from '../../auth/auth.service';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);


  principal: User;

  constructor(private router: Router,
    private authService:AuthService ) { }

  ngOnInit() {
    this.authService.getPrincipal().subscribe(
      (principal)=>{
        this.principal = principal;
      }
    )
  }

  logout() {
    this.authService.logout().subscribe();
    this.router.navigate(['login']);
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}

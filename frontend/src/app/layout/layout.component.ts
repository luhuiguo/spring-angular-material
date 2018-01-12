import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../core/user/user';
import { AuthService } from '../core/auth/auth.service';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

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

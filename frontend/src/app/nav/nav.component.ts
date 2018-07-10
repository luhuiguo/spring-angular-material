import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../core/user/user';
import {AuthService} from '../core/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

  principal: User;


  constructor(private breakpointObserver: BreakpointObserver, private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.getPrincipal().subscribe(principal => {
      this.principal = principal;
    });
  }

  logout() {
    this.authService.logout().subscribe();
    this.router.navigate(["login"]);
  }

}

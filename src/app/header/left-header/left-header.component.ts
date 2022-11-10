import { Component, OnInit } from '@angular/core';
import {PortfolioService} from '../../service/portfolio.service';
import {Observable} from 'rxjs';
import {Apollo} from 'apollo-angular';
import {GET_HEADER_DATA} from '../../service/graph.query';
import {map} from 'rxjs/operators';
import {EachHeaderData, HeaderData} from '../../service/portfolio.type';
import {NbSidebarService, NbThemeService} from '@nebular/theme';

@Component({
  selector: 'app-left-header',
  templateUrl: './left-header.component.html',
  styleUrls: ['./left-header.component.scss']
})
export class LeftHeaderComponent implements OnInit {
  headerData: EachHeaderData | undefined;
  loading: boolean | undefined;
  selectedTheme = 'dark';

  constructor(private portfolioService: PortfolioService,
              private apollo: Apollo,
              private themeService: NbThemeService,
              private sidebarService: NbSidebarService) { }

  ngOnInit(): void {
    this.getHeaderData()
  }

  getHeaderData() {
    this.apollo
      .watchQuery({
        query: GET_HEADER_DATA,
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.headerData = this.portfolioService.extractHeaderData(data);
    });
  }

  changeThemeOnClick(theme: string) {
    this.themeService.changeTheme(theme);
  }

  toggleCompact() {
    this.sidebarService.toggle(true, 'right');
  }


}

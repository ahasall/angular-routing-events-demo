import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  teams: string[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.teams = this.route.snapshot.data['teams'];
  }
}

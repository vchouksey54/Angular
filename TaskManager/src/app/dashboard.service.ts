import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

  getTeamMembersSummary() :any[] {
    var teamMembersSummary = [
                              {Region:"East", TeamMembersCount:20, TemporarilyUnavailableMembers:4},
                              {Region:"West", TeamMembersCount:17, TemporarilyUnavailableMembers:1},
                              {Region:"South", TeamMembersCount:15, TemporarilyUnavailableMembers:8},
                              {Region:"North", TeamMembersCount:16, TemporarilyUnavailableMembers:6}
                            ]

    return teamMembersSummary;
  }

}

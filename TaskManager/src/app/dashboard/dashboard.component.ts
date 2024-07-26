import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  designation: string="";
  userName: string="";
  noOfTeamMembers: number=0;
  totalCostOfProjects: number=0;
  pendingTasks: number=0;
  upComingprojects: number=0;
  projectCost: number=0;
  currentExpenditure: number=0;
  availableFunds: number=0;

  clients: string[]=[];
  projects: string[]=[];
  years: number[]=[];
  teamMembersSummary: any=[];
  teamMembersRegionWise:any=[];

  ngOnInit() {
    this.designation = "Team Leader";
    this.userName = "Vikas Chouksey";
    this.noOfTeamMembers = 67;
    this.totalCostOfProjects = 240;
    this.pendingTasks = 7;
    this.upComingprojects = 2;
    this.projectCost = 100;
    this.currentExpenditure = 38;
    this.availableFunds = 62;
    
    this.clients = [
      "ABC Infotech Ltd", "DEF Software Solutions", "GHI Industries"
    ]

    this.projects = [
      "Project A", "Project B", "Project C", "Project D"
    ]

    for(var i=2019; i>=2012; i--) {
      this.years.push(i);
    }

    this.teamMembersSummary = [
      {Region:"East", TeamMembersCount:20, TemporarilyUnavailableMembers:4},
      {Region:"West", TeamMembersCount:17, TemporarilyUnavailableMembers:1},
      {Region:"South", TeamMembersCount:15, TemporarilyUnavailableMembers:8},
      {Region:"North", TeamMembersCount:16, TemporarilyUnavailableMembers:6}
    ]

    this.teamMembersRegionWise = [
      
        { Region:"East", Members : [
                                    { ID:1, Name:"Ford", Status:"Available"},
                                    { ID:2, Name:"Miller", Status:"Available"},
                                    { ID:3, Name:"James", Status:"Busy"},
                                    { ID:4, Name:"Jenny", Status:"Busy"}
                                  ]
        },
        { Region:"West", Members : [
                                    { ID:5, Name:"Virat", Status:"Available"},
                                    { ID:6, Name:"Kohli", Status:"Busy"},
                                    { ID:7, Name:"Rohit", Status:"Available"},
                                    { ID:8, Name:"Sharma", Status:"Busy"},
                                  ]
        },
        { Region:"South", Members : [
                                      { ID:9, Name:"Jaddu", Status:"Available"},
                                      { ID:10, Name:"Surya", Status:"Busy"},
                                      { ID:11, Name:"MSD", Status:"Busy"},
                                      { ID:12, Name:"Smriti", Status:"Busy"},
                                    ]
        },
        { Region:"North", Members : [
                                      { ID:12, Name:"John", Status:"Busy"},
                                      { ID:14, Name:"Kevin", Status:"Available"},
                                      { ID:15, Name:"Owen", Status:"Busy"},
                                      { ID:16, Name:"Austin", Status:"Busy"},
                                    ]
        }
    ]

  }

}

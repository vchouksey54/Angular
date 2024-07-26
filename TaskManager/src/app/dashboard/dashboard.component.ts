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
  teamMembers=[];

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
    
  }

}

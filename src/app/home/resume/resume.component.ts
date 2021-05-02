import { Component, OnInit } from '@angular/core';
import * as data from '../../data.json';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  resume: any = (data as any).default;

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StepService } from '../service/step.service';
import { Step } from '../model/step';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  currentStep$: Observable<Step> = this.stepService.currentStep$;

  constructor(private stepService: StepService) { }
}

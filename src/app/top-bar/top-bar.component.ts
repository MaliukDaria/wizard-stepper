import { Component, OnInit } from '@angular/core';
import { StepService } from '../service/step.service';
import { Observable } from 'rxjs';
import { Step } from '../model/step';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  steps: Step[] = this.stepService.steps;
  currentStep$: Observable<Step> = this.stepService.currentStep$;

  constructor(private stepService: StepService) { }

  onStepClick(currentStep: Step) {
    this.stepService.changeCurrentStep(currentStep);
  }
}

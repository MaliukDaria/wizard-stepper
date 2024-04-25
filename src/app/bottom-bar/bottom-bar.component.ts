import { Component, OnInit } from '@angular/core';
import { StepService } from '../service/step.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css']
})
export class BottomBarComponent {
  constructor(private stepService: StepService) { }

  nextStep() {
    this.stepService.nextStep();
  }

  previousStep() {
    this.stepService.previousStep();
  }

  isLast():Observable<boolean> {
    return this.stepService.isLast();
  }

  isFirst():Observable<boolean> {
    return this.stepService.isFirst();
  }
}

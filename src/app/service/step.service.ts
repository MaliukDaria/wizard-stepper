import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Step } from '../model/step';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StepService {
  steps: Step[] = [
      {id: 0, text: '1'},
      {id: 1, text: '2'},
      {id: 2, text: '3'}
  ]
  private currentStepDataSource = new BehaviorSubject<Step>(this.steps[0]);
  currentStep$ = this.currentStepDataSource.asObservable();
  changeCurrentStep(data: any) {
    this.currentStepDataSource.next(data);
  }

  nextStep() {
    let currentStep = this.currentStepDataSource.getValue();
    if (currentStep.id < (this.steps.length - 1)) {
      this.changeCurrentStep(this.steps[currentStep.id + 1]);
    }
  }

  previousStep() {
    let currentStep = this.currentStepDataSource.getValue();
    if (currentStep.id !== 0) {
      this.changeCurrentStep(this.steps[currentStep.id - 1]);
    }
  }

  isLast():Observable<boolean> {
    return this.currentStep$.pipe(map((step) =>
        step.id == (this.steps.length - 1)));
  }

  isFirst(): Observable<boolean> {
    return this.currentStep$.pipe(map((step) =>
        step.id == 0));
  }
}

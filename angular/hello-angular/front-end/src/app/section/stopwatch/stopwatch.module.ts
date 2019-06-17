import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TimeDisplayComponent } from "./time-display/time-display.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { StopwatchComponent } from "./stopwatch.component";

@NgModule({
  declarations: [TimeDisplayComponent, ButtonsComponent, StopwatchComponent],
  exports: [StopwatchComponent],
  imports: [CommonModule]
})
export class StopwatchModule {}

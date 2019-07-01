import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export class Unsubscriber implements OnDestroy {
  protected subscribeController$$: Subject<boolean> = new Subject();

  public ngOnDestroy(): void {
    this.subscribeController$$.next(true);
    this.subscribeController$$.complete();
  }
}

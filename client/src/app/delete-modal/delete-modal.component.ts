import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css'],
})
export class DeleteModalComponent {
  @Input() hidden!: boolean;
  // @Input() delete!: boolean;
  // @Output() hiddenEvent = new EventEmitter<boolean>();

  // hide(): void {
  //   this.hidden = true;
  // }
}

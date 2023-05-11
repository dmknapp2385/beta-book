import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css'],
})
export class DeleteModalComponent {
  @Input() hidden!: boolean;
  @Output() hiddenChange = new EventEmitter<boolean>();
  @Output() deleteEmitter = new EventEmitter();

  hide() {
    this.hidden =true;
    this.hiddenChange.emit(this.hidden);
  }

  delete() {
    this.deleteEmitter.emit()
  }
}

import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() label = 'Componente Modal'
  @Input() text = 'Texto da modal'

  constructor() { }

  ngOnInit() {
   
    $(document).ready(function($) {
      $("#div").on("click", "a", function(event) {
        event.preventDefault();
        $.noConflict();
        $('#modal').modal('show');
      });
    });
  }

  show(label, text) {
    this.label = label
    this.text = text
    
    $(function() {
      $("#btnModal").click()
    });
  }
  
}

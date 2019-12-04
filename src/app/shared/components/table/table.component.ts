import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, mergeMap } from "rxjs/internal/operators";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() title = 'Lista'
  @Input() data = []
  @Input() displayedColumns = [];
  @Input() headerColumns = [];

  dataBkp = []
  dataList = []
  searchExp = ''
  searchTerm = new Subject<string>()
  subsSearch: Subscription

  page = 0;
  itensPageNumber = 5;
  paginationButtonsList = [1,2,3,4,5]

  loading = false

  selectedRow: any
  @Output() sendSelectedRow = new EventEmitter()

  constructor() {
    this .subsSearch = this.searchTerm.pipe(
      debounceTime(700),
      distinctUntilChanged()
    ).subscribe((res) => {
      if(res === ''){
        this.data = this.dataBkp
        this.buildPaginationButtonsList()
      } else {
        this.filter(res)
      }
    });
   }

  ngOnInit() {
    this.data = []    
    this.dataBkp = []    
  }

  calcSlice(n1, n2, n3) {
    let calc = ((parseInt(n1) * parseInt(n2)) + parseInt(n3))
    return calc;
  }

  parseInt(n1, n2){    
    let intNumber = Math.floor(n1 / n2);
    return intNumber;
  }

  goToPage(page) {
    this.page = page -1
    setTimeout(() => {
      this.buildPaginationButtonsList()
    }, 0);
  }

  buildPaginationButtonsList() {
    this.loading = true
    this.paginationButtonsList = [];
    if(this.page < 3) {
      for (let i = 1; i <= 5; i++) {
        if(this.data.length > i) {
          if(i <= this.parseInt((this.data.length -1), this.itensPageNumber) +1) {
            this.paginationButtonsList.push(i)
          }
        }
      }
    } else if(this.page >= 3 && this.page <= this.parseInt(this.data.length, this.itensPageNumber) -3 ) {
      for (let i = this.page -1; i <= this.page + 3; i++) {
        if(i > 0 && i <= this.parseInt((this.data.length -1), this.itensPageNumber) +1) {
          this.paginationButtonsList.push(i)
        }
      }
    } else if(this.page > this.parseInt(this.data.length , this.itensPageNumber) - 3 ){
      for (let i = this.parseInt(this.data.length, this.itensPageNumber) -3; i <= this.parseInt((this.data.length -1), this.itensPageNumber) +1; i++) {
        if(i > 0) {
          this.paginationButtonsList.push(i)
        }
      }
    }
    this.loading = false
  }

  onSearchChange(query:string){
    this.searchTerm.next(query);
  }

  filter(exp:string) {
    if(this.dataBkp.length === 0) {
      this.dataBkp = this.data
    }
    this.loading = true
    this.dataList = []

    if (exp) {
      this.dataList = this.data.filter(function (line) {      
        return line.nome.toLowerCase().indexOf(exp.toLowerCase()) !== -1 
      });
    } else {
      this.dataList = this.data
    }
    this.data = this.dataList
    this.page = 0
    this.buildPaginationButtonsList()
    this.loading = false
  }

  selectRow(row) {
    this.selectedRow = row
    this.sendSelectedRow.emit(this.selectedRow)
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Line } from '../line';
import { LinesService } from '../../shared/services/lines.service';
import { ItineraryService } from '../../shared/services/itinerary.service';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators'

@Component({
    selector: 'app-micro-bus',
    templateUrl: './micro-bus.component.html',
    styleUrls: ['./micro-bus.component.scss']
})
export class MicroBusComponent implements OnInit {

    data: Line[];
    intinerary

    loading = false

    subLines: Subscription
    subItinerary: Subscription

    @ViewChild('modal', { static: true }) modal

    constructor(private linesService: LinesService, private itineraryService: ItineraryService) { }

    ngOnInit() {
        this.getNormalLines()
    }

    getNormalLines() {
        this.loading = true
        this.subLines = this.linesService.getMicroBus()
            .pipe(
                take(1)
            )
            .subscribe(res => {
                let result: any = res
                if (!result.error) {
                    this.data = result
                    this.modal.show('Linhas de Lotaçao.', 'Aqui são exibidas as linhas de lotaçao do transporte público de porto aleger. <br> Para verificar o itinerário de cada linha basta clicar na linha desejada para carregar o itinerário da mesma. <br> Apos a exibição do itinerário, é posssível abrir o mapa de cada poto da rota clicando na coluna Mapa da lista de itinerários.')
                } else {
                    this.modal.show('Ops.', 'Tivemos problemas para consultar os dados, tente novamente por favor.')
                }

                this.loading = false
            })
    }

    getItinerary(line) {
        this.loading = true
        this.subLines = this.itineraryService.get(line.id)
            .pipe(
                take(1)
            )
            .subscribe(res => {
                let result: any = res
                if (!result.error) {
                    this.intinerary = result
                    this.modal.show('Linhas de Lotação.', 'Aqui são exibidas as linhas de lotação do transporte público de porto aleger. <br> Para verificar o itinerário de cada linha basta clicar na linha desejada para carregar o itinerário da mesma. <br> Apos a exibição do itinerário, é posssível abrir o mapa de cada poto da rota clicando na coluna Mapa da lista de itinerários.')
                } else {
                    this.modal.show('Ops.', 'Tivemos problemas para consultar os dados do itinerário, tente novamente por favor.')
                }

                this.loading = false
            })
    }

}

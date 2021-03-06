import { Injectable } from '@angular/core';
import { Hero } from '../../../hero';
import { HEROES } from '../../../mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

    constructor(private messageService: MessageService) { }

    getHeroes(): Observable<Hero[]> {
      this.messageService.add('HeroService: fetched hero');
      return of(HEROES);
    }
}
